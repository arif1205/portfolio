import { IconBookOpen, IconFolder, IconHouse } from 'nucleo-glass';

export const navItems = [
  { href: '/', label: 'Home', icon: IconHouse },
  { href: '/projects', label: 'Projects', icon: IconFolder },
  { href: '/guestbook', label: 'Guestbook', icon: IconBookOpen },
] as const;

export function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}
