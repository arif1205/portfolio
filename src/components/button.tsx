import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const base =
  'group/button inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md font-medium whitespace-nowrap lowercase transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg]:shrink-0';

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/80 dark:hover:bg-primary/90 h-9 px-4 py-2 text-sm shadow-md shadow-black/25 dark:shadow-none',
  secondary:
    'text-muted-foreground/90 bg-secondary/75 hover:bg-secondary border-foreground/5 h-7 border px-3 text-xs',
};

type BeamButtonProps = {
  href: string;
  variant: keyof typeof variants;
  // Saves the file under this name instead of navigating to it.
  download?: string;
  beamStrength: number;
  className?: string;
  children: ReactNode;
};

export function BeamButton({ href, variant, beamStrength, download, className, children }: BeamButtonProps) {
  const external = !href.startsWith('/') || download !== undefined;
  const classes = cn(base, variants[variant]);
  return (
    <div className={cn('beam', className)} style={{ '--beam-strength': beamStrength } as CSSProperties}>
      {external ? (
        <a href={href} download={download} className={classes}>
          {children}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )}
    </div>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <span className={cn('transition-transform duration-200 group-hover/button:translate-x-0.5', className)}>
      →
    </span>
  );
}
