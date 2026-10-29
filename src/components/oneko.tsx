'use client';

// Adapted from oneko.js by adryd (MIT): https://github.com/adryd325/oneko.js
import { useEffect, useRef } from 'react';

type Frame = [number, number];

const sprites: Record<string, Frame[]> = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
  scratchWallN: [[0, 0], [0, -1]],
  scratchWallS: [[-7, -1], [-6, -2]],
  scratchWallE: [[-2, -2], [-2, -3]],
  scratchWallW: [[-4, 0], [-4, -1]],
  tired: [[-3, -2]],
  sleeping: [[-2, 0], [-2, -1]],
  N: [[-1, -2], [-1, -3]],
  NE: [[0, -2], [0, -3]],
  E: [[-3, 0], [-3, -1]],
  SE: [[-5, -1], [-5, -2]],
  S: [[-6, -3], [-7, -2]],
  SW: [[-5, -3], [-6, -1]],
  W: [[-4, -2], [-4, -3]],
  NW: [[-1, 0], [-1, -1]],
};

const SPEED = 10;
const FRAME_MS = 100;

// Pixel cat that waits beside the anchor element and chases the pointer.
export function Oneko({ anchorId }: { anchorId: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const anchor = document.getElementById(anchorId)?.getBoundingClientRect();
    let x = anchor ? anchor.left - 20 : 32;
    let y = anchor ? anchor.top + anchor.height / 2 : 32;
    // Start "at" the cat so it naps until the pointer actually moves.
    let pointerX = x;
    let pointerY = y;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleFrame = 0;
    let last = 0;
    let raf = 0;

    const place = () => {
      el.style.left = `${x - 16}px`;
      el.style.top = `${y - 16}px`;
    };
    const setSprite = (name: string, frame: number) => {
      const set = sprites[name];
      const [sx, sy] = set[frame % set.length];
      el.style.backgroundPosition = `${sx * 32}px ${sy * 32}px`;
    };

    const idle = () => {
      idleTime += 1;
      if (idleTime > 10 && idleAnimation === null && Math.floor(Math.random() * 200) === 0) {
        const options = ['sleeping', 'scratchSelf'];
        if (x < 32) options.push('scratchWallW');
        if (y < 32) options.push('scratchWallN');
        if (x > window.innerWidth - 32) options.push('scratchWallE');
        if (y > window.innerHeight - 32) options.push('scratchWallS');
        idleAnimation = options[Math.floor(Math.random() * options.length)];
      }
      switch (idleAnimation) {
        case 'sleeping':
          if (idleFrame < 8) setSprite('tired', 0);
          else setSprite('sleeping', Math.floor(idleFrame / 4));
          if (idleFrame > 192) [idleAnimation, idleFrame] = [null, 0];
          break;
        case 'scratchWallN':
        case 'scratchWallS':
        case 'scratchWallE':
        case 'scratchWallW':
        case 'scratchSelf':
          setSprite(idleAnimation, idleFrame);
          if (idleFrame > 9) [idleAnimation, idleFrame] = [null, 0];
          break;
        default:
          setSprite('idle', 0);
          return;
      }
      idleFrame += 1;
    };

    const step = () => {
      frameCount += 1;
      const dx = x - pointerX;
      const dy = y - pointerY;
      const distance = Math.hypot(dx, dy);
      if (distance < 48) return idle();

      idleAnimation = null;
      idleFrame = 0;
      if (idleTime > 1) {
        setSprite('alert', 0);
        idleTime = Math.min(idleTime, 7) - 1;
        return;
      }

      let direction = dy / distance > 0.5 ? 'N' : dy / distance < -0.5 ? 'S' : '';
      direction += dx / distance > 0.5 ? 'W' : dx / distance < -0.5 ? 'E' : '';
      setSprite(direction, frameCount);
      x = Math.min(Math.max(16, x - (dx / distance) * SPEED), window.innerWidth - 16);
      y = Math.min(Math.max(16, y - (dy / distance) * SPEED), window.innerHeight - 16);
      place();
    };

    const tick = (time: number) => {
      if (time - last > FRAME_MS) {
        last = time;
        step();
      }
      raf = requestAnimationFrame(tick);
    };

    const onPointer = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    place();
    setSprite('idle', 0);
    el.style.display = 'block';
    document.addEventListener('pointermove', onPointer);
    document.addEventListener('pointerdown', onPointer);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('pointermove', onPointer);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [anchorId]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed z-[2147483647] hidden size-8 bg-[url(/static/img/oneko.gif)] [image-rendering:pixelated]"
    />
  );
}
