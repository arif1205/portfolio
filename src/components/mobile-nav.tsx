'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Drawer } from 'vaul';

import { Avatar } from '@/components/avatar';
import { isActive, navItems } from '@/components/nav-items';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { profile } from '@/lib/data';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger aria-label="Open navigation menu" className="focus-visible:outline-none sm:hidden">
        <Menu className="size-6" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/60" />
        <Drawer.Content className="bg-background fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-xl border border-b-0 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] outline-none">
          <div aria-hidden="true" className="bg-foreground/20 mx-auto mt-3.5 h-1.5 w-25 shrink-0 rounded-full" />
          <Drawer.Title className="sr-only">Navigation</Drawer.Title>
          <Drawer.Description className="sr-only">Site pages and theme settings</Drawer.Description>
          <div className="flex items-center justify-between pt-3 pb-4">
            <div className="flex items-center gap-2.25">
              <Avatar />
              <p className="text-lg font-medium tracking-tighter">{profile.handle}</p>
            </div>
            <ThemeSwitcher className="-mr-1" />
          </div>
          <nav className="divide-border/60 bg-secondary/20 divide-y overflow-hidden rounded-lg border text-[0.9375rem] font-medium tracking-tight lowercase">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                data-active={isActive(pathname, href)}
                className="text-foreground/80 data-[active=true]:text-foreground flex items-center justify-between px-4 py-2.5 leading-5.5 transition-colors"
              >
                {label}
                <Icon uniqueId={`drawer-${label}`} className="size-5 drop-shadow-sm" />
              </Link>
            ))}
          </nav>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
