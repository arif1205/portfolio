import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import { Background } from '@/components/background';
import { Oneko } from '@/components/oneko';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';

import './globals.css';

const openRunde = localFont({
  src: [
    { path: './fonts/OpenRunde-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/OpenRunde-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/OpenRunde-Semibold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/OpenRunde-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-open-runde',
});

export const metadata: Metadata = {
  title: { default: profile.name, template: `%s | ${profile.name}` },
  description: `${profile.name}: ${profile.tagline.toLowerCase()}.`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(openRunde.variable, 'relative flex flex-col font-sans')}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main className="container-layout to-foreground/2 relative flex-1 border-x bg-linear-to-r from-transparent via-transparent via-40%">
            {children}
          </main>
          <SiteFooter />
          <Background />
          <Oneko anchorId="nav-anchor" />
        </ThemeProvider>
      </body>
    </html>
  );
}
