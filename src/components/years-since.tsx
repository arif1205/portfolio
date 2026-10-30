'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
// Inlined at build so the prerendered HTML has a sensible value before the browser takes over.
const BUILD_TIME = Number(process.env.NEXT_PUBLIC_BUILD_TIME);

function wholeYearsSince(from: string, now: number) {
  return Math.max(0, Math.floor((now - Date.parse(from)) / MS_PER_YEAR));
}

// Whole years since `from`, e.g. "3+", recomputed in the browser so it never goes stale between deploys.
export function YearsSince({ from }: { from: string }) {
  const years = useSyncExternalStore(
    subscribe,
    () => wholeYearsSince(from, Date.now()),
    () => wholeYearsSince(from, BUILD_TIME)
  );
  return <>{years}+</>;
}
