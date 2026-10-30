'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
// Inlined at build so the prerendered HTML has a sensible value before the browser takes over.
const BUILD_TIME = Number(process.env.NEXT_PUBLIC_BUILD_TIME);

// Rounded down to the half year, so "3.5+" never overstates experience.
function halfYearsSince(from: string, now: number) {
  const start = new Date(from);
  const end = new Date(now);
  let months = (end.getUTCFullYear() - start.getUTCFullYear()) * 12 + end.getUTCMonth() - start.getUTCMonth();
  if (end.getUTCDate() < start.getUTCDate()) months -= 1;
  return Math.max(0, Math.floor(months / 6) / 2);
}

// Years since `from`, e.g. "3+" or "3.5+", recomputed in the browser so it never goes stale between deploys.
export function YearsSince({ from }: { from: string }) {
  const years = useSyncExternalStore(
    subscribe,
    () => halfYearsSince(from, Date.now()),
    () => halfYearsSince(from, BUILD_TIME)
  );
  return <>{years}+</>;
}
