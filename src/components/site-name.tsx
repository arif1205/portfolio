'use client';

import { motion } from 'motion/react';

// Letters drop in one by one on first load.
export function SiteName({ name }: { name: string }) {
  return (
    <p className="transform-gpu text-lg font-medium tracking-tighter whitespace-nowrap normal-case" aria-label={name}>
      {name.split('').map((letter, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          style={{ transformOrigin: '50% top' }}
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ delay: 0.05 * i, duration: 0.4, ease: 'easeOut' }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  );
}
