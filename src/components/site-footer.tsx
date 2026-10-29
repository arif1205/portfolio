import { Divider } from '@/components/divider';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { profile } from '@/lib/data';

export function SiteFooter() {
  return (
    <footer className="container-layout mb-3 rounded-b-[max(0.75rem,calc(0.5rem+env(safe-area-inset-bottom)))] border border-t-0 shadow-xs shadow-black/10 dark:shadow-none">
      <Divider />
      <div className="mx-0.5 flex items-center justify-between sm:mx-0">
        <p className="text-muted-foreground py-4 text-xs leading-4 text-pretty sm:text-sm">
          © {profile.copyrightYear} {profile.name}. All rights reserved.
        </p>
        <ThemeSwitcher className="-mr-1" />
      </div>
    </footer>
  );
}
