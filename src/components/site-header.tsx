'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

import { Avatar } from '@/components/avatar';
import { Divider } from '@/components/divider';
import { MobileNav } from '@/components/mobile-nav';
import { isActive, navItems } from '@/components/nav-items';
import { SiteName } from '@/components/site-name';
import { profile } from '@/lib/data';

// Eased black fade under the header; plain linear gradients band visibly.
const fadeStops =
  'hsla(0,0%,0%,0.75) 0%, hsla(0,0%,0%,0.74) 8.1%, hsla(0,0%,0%,0.714) 15.5%, hsla(0,0%,0%,0.672) 22.5%, hsla(0,0%,0%,0.618) 29%, hsla(0,0%,0%,0.556) 35.3%, hsla(0,0%,0%,0.486) 41.2%, hsla(0,0%,0%,0.412) 47.1%, hsla(0,0%,0%,0.338) 52.9%, hsla(0,0%,0%,0.264) 58.8%, hsla(0,0%,0%,0.194) 64.7%, hsla(0,0%,0%,0.132) 71%, hsla(0,0%,0%,0.078) 77.5%, hsla(0,0%,0%,0.036) 84.5%, hsla(0,0%,0%,0.01) 91.9%, hsla(0,0%,0%,0) 100%';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-background supports-backdrop-filter:bg-background/85 dark:supports-backdrop-filter:bg-background/75 before:bg-background supports-backdrop-filter:before:bg-background/85 dark:supports-backdrop-filter:before:bg-background/75 container-layout sticky top-0 isolate z-50 px-0! before:pointer-events-none before:absolute before:-inset-x-1 before:inset-y-0 before:-z-10 before:content-[''] after:pointer-events-none after:absolute after:-inset-x-1 after:top-full after:-z-10 after:h-4 after:bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_100%)] after:content-[''] supports-backdrop-filter:transform-gpu supports-backdrop-filter:backdrop-blur-sm supports-backdrop-filter:before:backdrop-blur-sm md:before:-inset-x-2 md:after:-inset-x-2 dark:after:hidden">
      <div className="bg-background h-3" />
      <div className="container-layout flex h-14 items-center justify-between rounded-t-xl border border-b-0">
        <Link href="/" className="flex w-fit items-center gap-2.25 transition-opacity hover:opacity-75">
          <Avatar />
          <SiteName name={profile.handle} />
        </Link>
        <div id="nav-anchor" className="flex items-center">
          <nav className="text-muted-foreground -mr-1 hidden transform-gpu text-sm font-medium tracking-tight sm:flex">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  data-active={active}
                  className="data-[active=true]:text-foreground/75 data-[active=false]:hover:text-foreground/75 relative flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-[color]"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                      className="bg-secondary/75 border-foreground/7.5 pointer-events-none absolute inset-0 -z-10 rounded-md border drop-shadow-xs"
                    />
                  )}
                  <Icon uniqueId={`nav-${label}`} className="drop-shadow-foreground/30 size-4 drop-shadow-sm" />
                  {label}
                </Link>
              );
            })}
          </nav>
          <MobileNav />
        </div>
      </div>
      <div className="container-layout relative">
        <Divider inset />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-1 z-[-5] h-10 w-[calc(100%+0.5rem)] opacity-4 md:-left-2 md:w-[calc(100%+1rem)] dark:opacity-75"
          style={{ background: `linear-gradient(to bottom, ${fadeStops})` }}
        />
      </div>
    </header>
  );
}
