import { cn } from '@/lib/utils';

// Full-bleed rule with small crosshair marks where it meets the card edges.
export function Divider({ className, inset }: { className?: string; inset?: boolean }) {
  return (
    <div aria-hidden="true" className={cn('bg-border -mx-4 block h-px', className)}>
      <div className={cn('relative block', inset && 'mx-px')}>
        <div className="*:absolute *:block *:bg-zinc-400 dark:*:bg-zinc-600">
          <span className="-top-1 -left-px h-2 w-px md:-top-2 md:h-4" />
          <span className="left-[-0.28125rem] h-px w-2 md:-left-2.25 md:w-4" />
          <span className="-top-1 -right-px h-2 w-px md:-top-2 md:h-4" />
          <span className="right-[-0.28125rem] h-px w-2 md:-right-2.25 md:w-4" />
        </div>
      </div>
    </div>
  );
}
