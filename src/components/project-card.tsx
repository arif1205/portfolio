import type { CSSProperties } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import type { Project } from '@/lib/data';

export function ProjectCard({ project, headingLevel: Heading = 'h3' }: { project: Project; headingLevel?: 'h2' | 'h3' }) {
  const domain = new URL(project.href).hostname.replace(/^www\./, '');

  return (
    <div className="group/project-card bg-background relative aspect-61/32 w-full overflow-hidden focus-within:has-focus-visible:outline-2 focus-within:has-focus-visible:-outline-offset-2 focus-within:has-focus-visible:outline-blue-500">
      <Image
        src={project.cover}
        alt={`Project cover for ${project.name}`}
        placeholder="blur"
        sizes="(min-width: 640px) 352px, 100vw"
        className="absolute inset-0 size-full scale-(--inactive-scale) object-cover saturate-[1.1] transition-[filter,scale] duration-300 [--inactive-scale:1] group-focus-within/project-card:scale-(--active-scale) group-hover/project-card:scale-(--active-scale)"
        style={{ '--active-scale': project.hoverScale ?? 1.05, objectPosition: project.coverPosition } as CSSProperties}
      />
      {/* Posters often carry their own headlines; a heavy bottom scrim keeps the card's title legible. */}
      <div className="pointer-events-none absolute size-full bg-linear-to-b from-black/25 via-black/70 via-40% to-black/95" />
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex w-full flex-col items-start gap-px px-4 py-3 text-zinc-100 drop-shadow drop-shadow-black/25">
          <div className="flex w-full justify-between">
            <Heading className="mr-2 leading-5 font-semibold tracking-tight text-pretty normal-case">{project.name}</Heading>
            <div className="flex items-center gap-1.5 opacity-60">
              {project.stack.map((Icon, i) => (
                <Icon key={i} className="size-3.5" />
              ))}
            </div>
          </div>
          <div className="flex w-full justify-between text-xs opacity-65 dark:opacity-55">
            <p className="mr-1 truncate">{project.description}</p>
            <p className="flex items-center gap-1">
              {domain}
              <ExternalLink className="-mr-px size-3" />
            </p>
          </div>
        </div>
      </div>
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name}`}
        className="after:absolute after:inset-0"
      />
    </div>
  );
}
