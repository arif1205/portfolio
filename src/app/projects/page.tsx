import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { IconFolder } from 'nucleo-glass';

import { Divider } from '@/components/divider';
import { PageHeading } from '@/components/page-heading';
import { ProjectGrid } from '@/components/project-grid';
import { projects } from '@/lib/data';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <>
      <PageHeading icon={IconFolder} title="Projects" description="A collection of my public work" />
      <Divider />
      <ProjectGrid
        projects={projects}
        headingLevel="h2"
        className="enter-animation"
        style={{ '--enter-delay': '200ms' } as CSSProperties}
      />
    </>
  );
}
