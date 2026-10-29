import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { IconFolder } from 'nucleo-glass';

import { Divider } from '@/components/divider';
import { PageHeading } from '@/components/page-heading';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <>
      <PageHeading icon={IconFolder} title="Projects" description="A collection of my public work" />
      <Divider />
      <div
        className="enter-animation grid grid-cols-1 gap-4 py-4 sm:grid-cols-2"
        style={{ '--enter-delay': '200ms' } as CSSProperties}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} headingLevel="h2" />
        ))}
      </div>
    </>
  );
}
