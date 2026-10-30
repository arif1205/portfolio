import type { ReactNode } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import type { TimelineEntry } from '@/lib/data';
import { cn } from '@/lib/utils';

export function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ul className="divide-muted-foreground/25 -mx-4 divide-y divide-dashed">
      {entries.map((entry) => (
        <li
          key={`${entry.organization}-${entry.period}`}
          className="flex w-full flex-col gap-0.75 p-4 first:pt-2 last:pb-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2.5">
            <a
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${entry.organization} website`}
              className="h-fit shrink-0 transition-opacity hover:opacity-75"
            >
              <Image
                src={entry.logo}
                alt={entry.organization}
                width={32}
                height={32}
                className={cn(
                  'size-8 object-contain drop-shadow-sm drop-shadow-black/25 dark:drop-shadow-none',
                  entry.rounded && 'rounded',
                  entry.invertInLight && 'light:invert'
                )}
              />
            </a>
            <div className="flex flex-col gap-1 text-sm/4">
              <p className="font-medium tracking-tight text-pretty">{entry.title}</p>
              <p className="text-muted-foreground tracking-narrow sm:leading-none">
                {entry.organization}
                {entry.location && <span className="sm:hidden"> · {entry.location}</span>}
              </p>
            </div>
          </div>
          <div className="text-muted-foreground tracking-narrow ml-10 flex flex-col gap-1 text-sm/4 sm:items-end sm:text-right">
            <div className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className={cn(
                  'block size-1.5 shrink-0 rounded-full',
                  entry.current ? 'ml-0.75 animate-pulse bg-emerald-500' : '-ml-2.5'
                )}
              />
              <p className="opacity-80 sm:opacity-100">{entry.period}</p>
              {entry.credentialUrl && (
                <CredentialLink href={entry.credentialUrl} className="flex sm:hidden">
                  <span aria-hidden="true">·</span>
                </CredentialLink>
              )}
            </div>
            {entry.location && <p className="hidden leading-none opacity-80 sm:block">{entry.location}</p>}
            {entry.credentialUrl && <CredentialLink href={entry.credentialUrl} className="hidden sm:flex" />}
          </div>
        </li>
      ))}
    </ul>
  );
}

function CredentialLink({ href, className, children }: { href: string; className?: string; children?: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'hover:text-foreground/75 items-center gap-1 leading-none opacity-80 transition-colors hover:opacity-100',
        className
      )}
    >
      {children}
      Show credential
      <ExternalLink className="size-3" />
    </a>
  );
}
