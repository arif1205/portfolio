import type { ComponentType, CSSProperties, ReactNode, SVGProps } from 'react';

type SectionProps = {
  id: string;
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement> & { uniqueId?: string }>;
  delay: number;
  action?: ReactNode;
  children: ReactNode;
};

export function Section({ id, title, icon: Icon, delay, action, children }: SectionProps) {
  return (
    <section
      id={id}
      className="enter-animation grid scroll-mt-17 gap-4 py-4"
      style={{ '--enter-delay': `${delay}ms` } as CSSProperties}
    >
      <div className="flex items-center justify-between">
        <a href={`#${id}`} className="transition-opacity hover:opacity-75">
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Icon uniqueId={`section-${id}`} className="size-5 drop-shadow drop-shadow-black/15 dark:drop-shadow-none" />
            {title}
          </h2>
        </a>
        {action}
      </div>
      {children}
    </section>
  );
}
