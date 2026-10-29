'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

import { useMounted } from '@/components/use-mounted';
import { giscus } from '@/lib/data';

export function Guestbook() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!giscus.repo || !giscus.repoId || !giscus.categoryId) {
    return (
      <p className="text-muted-foreground py-8 text-center text-sm">
        Guestbook is not configured yet. Add your giscus settings in <code>src/lib/data.ts</code>.
      </p>
    );
  }

  if (!mounted) return <div className="min-h-64" />;

  return (
    <Giscus
      repo={giscus.repo}
      repoId={giscus.repoId}
      category={giscus.category}
      categoryId={giscus.categoryId}
      mapping="specific"
      term="Guestbook"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={resolvedTheme === 'light' ? 'light' : 'dark'}
      lang="en"
      loading="lazy"
    />
  );
}
