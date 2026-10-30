import type { CSSProperties } from 'react';

import { ProjectCard } from '@/components/project-card';
import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';

type ProjectGridProps = {
  projects: Project[];
  headingLevel?: 'h2' | 'h3';
  className?: string;
  style?: CSSProperties;
};

// Edge-to-edge tiles: the 1px gap shows the border colour behind, drawing the same lines as the rest of the page.
export function ProjectGrid({ projects, headingLevel, className, style }: ProjectGridProps) {
  const rows = Math.ceil(projects.length / 2);

  return (
    <div className={cn('bg-border relative -mx-4 grid grid-cols-1 gap-px sm:grid-cols-2', className)} style={style}>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} headingLevel={headingLevel} />
      ))}
      {/* Fills the empty cell of an odd last row so it doesn't render as a solid border-coloured block. */}
      {projects.length % 2 === 1 && <div aria-hidden="true" className="bg-background hidden sm:block" />}
      {Array.from({ length: rows - 1 }, (_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 z-10 hidden sm:block"
          // Row boundary i sits at i * (rowHeight + 1px gap), centred on the 1px line.
          style={{ top: `calc(${i + 1} * (100% + 1px) / ${rows} - 0.5px)` }}
        >
          <span className="absolute -top-2 -left-px block h-4 w-px bg-zinc-400 dark:bg-zinc-600" />
          <span className="absolute top-0 -left-2 block h-px w-4 bg-zinc-400 dark:bg-zinc-600" />
        </span>
      ))}
    </div>
  );
}
