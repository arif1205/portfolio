import type { ComponentType, SVGProps } from 'react';

import { PageMarker } from '@/components/page-marker';

type PageHeadingProps = {
  icon: ComponentType<SVGProps<SVGSVGElement> & { uniqueId?: string }>;
  title: string;
  description: string;
};

export function PageHeading({ icon: Icon, title, description }: PageHeadingProps) {
  return (
    <section className="py-8">
      <div className="relative">
        <PageMarker />
        <hgroup className="enter-animation">
          <h1 className="flex gap-1.75 text-[1.375rem]/5 font-semibold tracking-tighter">
            <Icon uniqueId={`heading-${title}`} className="drop-shadow drop-shadow-black/15 dark:drop-shadow-none" />
            {title}
          </h1>
          <p className="text-muted-foreground/70 tracking-tight">{description}</p>
        </hgroup>
      </div>
    </section>
  );
}
