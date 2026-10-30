import type { CSSProperties } from 'react';
import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';

import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';

export function ProjectCard({ project, headingLevel: Heading = 'h3' }: { project: Project; headingLevel?: 'h2' | 'h3' }) {
  const domain = new URL(project.href).hostname.replace(/^www\./, '');

  return (
    <div className="group/project-card relative aspect-61/32 w-full overflow-hidden rounded-xl drop-shadow drop-shadow-black/25 focus-within:has-focus-visible:outline-2 focus-within:has-focus-visible:outline-offset-2 focus-within:has-focus-visible:outline-blue-500 dark:drop-shadow-none">
      <Image
        src={project.cover}
        alt={`Project cover for ${project.name}`}
        placeholder="blur"
        sizes="(min-width: 640px) 352px, 100vw"
        className="absolute inset-0 size-full scale-(--inactive-scale) object-cover saturate-[1.1] transition-[filter,scale] duration-300 [--inactive-scale:1] group-focus-within/project-card:scale-(--active-scale) group-hover/project-card:scale-(--active-scale)"
        style={{ '--active-scale': project.hoverScale ?? 1.05 } as CSSProperties}
      />
      <div
        className={cn(
          'pointer-events-none absolute size-full bg-linear-to-b from-transparent',
          project.strongScrim ? 'via-black/45 via-45% to-black/85' : 'via-black/20 to-black/60'
        )}
      />
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
      {project.featured && (
        <Star className="absolute top-3 right-3 size-4 fill-current text-amber-500 opacity-90 drop-shadow drop-shadow-black/50" />
      )}
    </div>
  );
}
