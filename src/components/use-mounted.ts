import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

// True only after hydration, so theme-dependent UI doesn't mismatch the server render.
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
