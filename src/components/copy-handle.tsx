'use client';

import { useEffect, useState, type ReactNode } from 'react';

// For networks with no public profile URL by username (e.g. Discord): click copies the handle.
export function CopyHandle({ handle, label, children }: { handle: string; label: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      aria-label={`Copy ${label} username ${handle}`}
      onClick={() => navigator.clipboard?.writeText(handle).then(() => setCopied(true))}
      className="group relative transition-opacity after:absolute after:-inset-x-2 after:inset-y-0 after:content-[''] hover:opacity-80"
    >
      {children}
      <span
        role="status"
        className="bg-popover text-popover-foreground pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md border px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 data-[copied=true]:opacity-100"
        data-copied={copied}
      >
        {copied ? 'copied!' : handle}
      </span>
    </button>
  );
}
