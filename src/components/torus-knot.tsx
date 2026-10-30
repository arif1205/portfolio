'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import heroDark from '@/assets/img/hero-dark.png';
import heroLight from '@/assets/img/hero-light.png';
import { cn } from '@/lib/utils';

const VERTEX_SHADER = `
attribute vec3 position;
attribute vec3 normal;
uniform mat4 modelView;
uniform mat4 projection;
varying vec3 vNormal;
varying vec3 vView;
void main() {
  vec4 viewPos = modelView * vec4(position, 1.0);
  vNormal = (modelView * vec4(normal, 0.0)).xyz;
  vView = viewPos.xyz;
  gl_Position = projection * viewPos;
}`;

// Procedural black-chrome look: dark body, sharp white reflection bands, and a bright rim at the silhouette.
const FRAGMENT_SHADER = `
precision highp float;
varying vec3 vNormal;
varying vec3 vView;
void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(-vView);
  vec3 r = reflect(-v, n);
  float h = r.y + 0.2 * r.x;
  float softbox = smoothstep(-0.02, 0.18, h) * (1.0 - smoothstep(0.42, 0.7, h));
  float overhead = smoothstep(0.72, 0.9, h);
  float floorBand = smoothstep(0.08, 0.0, abs(h + 0.35));
  float rim = smoothstep(0.62, 0.92, pow(1.0 - max(dot(n, v), 0.0), 1.6));
  vec3 col = vec3(mix(0.015, 0.2, smoothstep(-0.3, 0.9, h))) + 0.85 * softbox + 0.5 * overhead + 0.4 * floorBand;
  col = mix(col, vec3(0.92), rim);
  gl_FragColor = vec4(min(col, vec3(1.0)), 1.0);
}`;

const P = 2;
const Q = 3;
const TUBULAR = 320;
const RADIAL = 40;

type Vec3 = [number, number, number];

const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const normalize = (a: Vec3): Vec3 => {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};

function knotPoint(u: number, radius: number): Vec3 {
  const qu = (Q / P) * u;
  const cs = Math.cos(qu);
  return [radius * (2 + cs) * 0.5 * Math.cos(u), radius * (2 + cs) * 0.5 * Math.sin(u), radius * Math.sin(qu) * 0.5];
}

// Tube swept along a (p, q) torus knot, using the curve's own frame to orient each ring.
function buildKnot(radius: number, tube: number) {
  const positions: number[] = [];
  const normals: number[] = [];
  for (let i = 0; i <= TUBULAR; i++) {
    const u = (i / TUBULAR) * P * Math.PI * 2;
    const p1 = knotPoint(u, radius);
    const p2 = knotPoint(u + 0.01, radius);
    const t = sub(p2, p1);
    let n = add(p2, p1);
    const b = normalize(cross(t, n));
    n = normalize(cross(b, t));
    for (let j = 0; j <= RADIAL; j++) {
      const v = (j / RADIAL) * Math.PI * 2;
      const cx = -tube * Math.cos(v);
      const cy = tube * Math.sin(v);
      const vertex: Vec3 = [
        p1[0] + cx * n[0] + cy * b[0],
        p1[1] + cx * n[1] + cy * b[1],
        p1[2] + cx * n[2] + cy * b[2],
      ];
      positions.push(...vertex);
      normals.push(...normalize(sub(vertex, p1)));
    }
  }
  const indices: number[] = [];
  for (let i = 1; i <= TUBULAR; i++) {
    for (let j = 1; j <= RADIAL; j++) {
      const a = (RADIAL + 1) * (i - 1) + (j - 1);
      const b = (RADIAL + 1) * i + (j - 1);
      const c = (RADIAL + 1) * i + j;
      const d = (RADIAL + 1) * (i - 1) + j;
      indices.push(a, b, d, b, c, d);
    }
  }
  return { positions: new Float32Array(positions), normals: new Float32Array(normals), indices: new Uint16Array(indices) };
}

// Column-major 4x4 helpers; just enough for a rotating model and a perspective camera.
function perspective(fovY: number, aspect: number, near: number, far: number) {
  const f = 1 / Math.tan(fovY / 2);
  const nf = 1 / (near - far);
  return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
}

function modelView(rotX: number, rotY: number, distance: number) {
  const cx = Math.cos(rotX), sx = Math.sin(rotX), cy = Math.cos(rotY), sy = Math.sin(rotY);
  // Rotation = Rx * Ry, then pushed back along -z.
  return new Float32Array([cy, sx * sy, -cx * sy, 0, 0, cx, sx, 0, sy, -sx * cy, cx * cy, 0, 0, 0, -distance, 1]);
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader) ?? 'shader');
  return shader;
}

const AUTO_SPEED = 0.45;
const DRAG_SENSITIVITY = 0.008;

export function TorusKnot() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: true });
    if (!gl) {
      setUnsupported(true);
      return;
    }

    let program: WebGLProgram;
    try {
      program = gl.createProgram()!;
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('link');
    } catch {
      setUnsupported(true);
      return;
    }
    gl.useProgram(program);

    const mesh = buildKnot(1, 0.32);
    const buffers: (WebGLBuffer | null)[] = [];
    const bind = (name: string, data: Float32Array) => {
      const buffer = gl.createBuffer();
      buffers.push(buffer);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(program, name);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, 0, 0);
    };
    bind('position', mesh.positions);
    bind('normal', mesh.normals);
    const indexBuffer = gl.createBuffer();
    buffers.push(indexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, mesh.indices, gl.STATIC_DRAW);
    const uModelView = gl.getUniformLocation(program, 'modelView');
    const uProjection = gl.getUniformLocation(program, 'projection');
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0, 0, 0, 0);

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 1.5);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniformMatrix4fv(uProjection, false, perspective((32 * Math.PI) / 180, width / height, 0.1, 50));
    };
    resize();

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let rotX = 0.25;
    let rotY = 0.4;
    let velX = 0;
    let velY = 0;
    let dragging = false;
    let pointerId: number | null = null;
    let last = { x: 0, y: 0 };
    let visible = true;
    let raf = 0;
    let prev = performance.now();
    let firstFrame = true;

    const draw = () => {
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniformMatrix4fv(uModelView, false, modelView(rotX, rotY, 9.3));
      gl.drawElements(gl.TRIANGLES, mesh.indices.length, gl.UNSIGNED_SHORT, 0);
      if (firstFrame) {
        firstFrame = false;
        setReady(true);
      }
    };

    const tick = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      if (!dragging) {
        // Fling momentum decays, then the idle spin takes over again.
        velX *= 0.94;
        velY *= 0.94;
        const spin = reducedMotion.matches ? 0 : AUTO_SPEED * dt;
        rotX += velX + spin * 0.3;
        rotY += velY + spin;
      }
      draw();
      raf = visible ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (!raf && visible) {
        prev = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const onDown = (event: PointerEvent) => {
      if (event.button !== 0 || pointerId !== null) return;
      canvas.setPointerCapture(event.pointerId);
      pointerId = event.pointerId;
      dragging = true;
      velX = velY = 0;
      last = { x: event.clientX, y: event.clientY };
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      const dx = event.clientX - last.x;
      const dy = event.clientY - last.y;
      last = { x: event.clientX, y: event.clientY };
      velY = dx * DRAG_SENSITIVITY;
      velX = dy * DRAG_SENSITIVITY;
      rotY += velY;
      rotX += velX;
      draw();
    };
    const onUp = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      pointerId = null;
      dragging = false;
    };
    const preventMenu = (event: Event) => event.preventDefault();

    const observer = new IntersectionObserver(([entry]) => {
      visible = (entry?.isIntersecting ?? false) && document.visibilityState === 'visible';
      if (visible) start();
    });
    observer.observe(canvas);
    const onVisibility = () => {
      visible = document.visibilityState === 'visible';
      if (visible) start();
    };
    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    resizeObserver.observe(canvas);

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);
    canvas.addEventListener('lostpointercapture', onUp);
    canvas.addEventListener('contextmenu', preventMenu);
    document.addEventListener('visibilitychange', onVisibility);
    start();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointercancel', onUp);
      canvas.removeEventListener('lostpointercapture', onUp);
      canvas.removeEventListener('contextmenu', preventMenu);
      // Free resources but keep the context: Strict Mode re-runs this effect on the same canvas.
      buffers.forEach((buffer) => gl.deleteBuffer(buffer));
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="relative -my-18 hidden sm:block">
      {unsupported ? (
        <div className="flex h-69 w-75 items-center justify-center">
          <Image src={heroLight} alt="" sizes="200px" className="size-50 object-contain dark:hidden" />
          <Image src={heroDark} alt="" sizes="200px" className="hidden size-50 object-contain dark:block" />
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          width={300}
          height={276}
          className="block h-69 w-75 cursor-grab touch-none filter-[drop-shadow(0_2px_2px_rgb(39_39_42/16%))_drop-shadow(0_12px_14px_rgb(39_39_42/16%))] active:cursor-grabbing dark:filter-none"
        />
      )}
      <div
        aria-hidden="true"
        className={cn(
          'bg-background pointer-events-none absolute inset-0 rounded-full transition-opacity duration-1000 ease-linear',
          ready || unsupported ? 'opacity-0' : 'opacity-100'
        )}
      />
    </div>
  );
}
