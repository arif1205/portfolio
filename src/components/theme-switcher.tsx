'use client';

import { useId } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

import { useMounted } from '@/components/use-mounted';
import { cn } from '@/lib/utils';

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
] as const;

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const pillId = useId();

  return (
    <div className={cn('flex gap-0.5 whitespace-nowrap', className)}>
      {themes.map(({ value, label, icon: Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={`Switch to ${label} theme`}
            data-active={active}
            onClick={() => setTheme(value)}
            className="text-muted-foreground/75 data-[active=true]:text-foreground/75 relative inline-flex size-7 items-center justify-center rounded-md transition-colors focus-visible:outline-offset-0"
          >
            {active && (
              <motion.span
                layoutId={pillId}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                className="bg-secondary/75 border-foreground/7.5 pointer-events-none absolute inset-0 -z-10 rounded-md border drop-shadow-xs"
              />
            )}
            <Icon className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
