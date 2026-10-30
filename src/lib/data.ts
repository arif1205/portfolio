import type { StaticImageData } from 'next/image';
import type { ComponentType, SVGProps } from 'react';
import {
  SiDrizzle,
  SiExpress,
  SiFastify,
  SiGooglemaps,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedis,
  SiRedux,
  SiRemix,
  SiShopify,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
} from '@icons-pack/react-simple-icons';

import authlabLogo from '@/assets/img/logos/authlab.png';
import infancyLogo from '@/assets/img/logos/infancy-it.png';
import pressplyLogo from '@/assets/img/logos/pressply.png';
import sustLogo from '@/assets/img/logos/sust.png';
import brokenLinksFinder from '@/assets/img/projects/broken-links-finder.png';
import customerInsights from '@/assets/img/projects/customer-insights.png';
import duplicateFinder from '@/assets/img/projects/duplicate-finder.png';
import easyCourierBd from '@/assets/img/projects/easy-courier-bd.png';
import elora from '@/assets/img/projects/elora.png';
import mysust from '@/assets/img/projects/mysust.png';
import pocketcarer from '@/assets/img/projects/pocketcarer.png';
import wishsupport from '@/assets/img/projects/wishsupport.png';

type Icon = ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;

export const profile = {
  handle: 'arif',
  name: 'Md. Ariful Islam',
  tagline: 'Software engineer, full-stack developer, SaaS builder',
  intro: 'Building SaaS, e-commerce and WordPress products.',
  summary:
    'Software engineer with 3.5+ years of experience building SaaS, e-commerce and WordPress products with TypeScript, React, Node.js and PostgreSQL.',
  degree: 'Computer Science',
  university: { name: 'SUST', href: 'https://www.sust.edu', logo: sustLogo },
  email: 'imdariful71@gmail.com',
  copyrightYear: 2026,
  socials: {
    github: 'https://github.com/arif1205',
    linkedin: 'https://www.linkedin.com/in/arif1205/',
  },
};

export type TimelineEntry = {
  title: string;
  organization: string;
  href: string;
  logo: StaticImageData;
  period: string;
  location: string;
  current?: boolean;
  // Rounded corners suit square logos; leave off for logos that already have their own shape.
  rounded?: boolean;
  invertInLight?: boolean;
};

export const experience: TimelineEntry[] = [
  {
    title: 'Software Engineer (L-2)',
    organization: 'AuthLab',
    href: 'https://authlab.io',
    logo: authlabLogo,
    period: 'Feb 2026 – Present',
    location: 'Sylhet, Bangladesh',
    rounded: true,
    invertInLight: true,
  },
  {
    title: 'Jr. Software Engineer',
    organization: 'Infancy IT',
    href: 'https://apps.shopify.com/partners/infancyit',
    logo: infancyLogo,
    period: 'May 2023 – Feb 2026',
    location: 'Sylhet, Bangladesh',
    rounded: true,
  },
  {
    title: 'Frontend Developer',
    organization: 'Pressply LLC',
    href: 'https://pressply.com',
    logo: pressplyLogo,
    period: 'Sep 2023 – Apr 2026',
    location: 'Remote',
    rounded: true,
    invertInLight: true,
  },
];

export const education: TimelineEntry[] = [
  {
    title: 'B.Sc. (Engg.) in Computer Science and Engineering',
    organization: 'Shahjalal University of Science and Technology',
    href: 'https://www.sust.edu',
    logo: sustLogo,
    period: 'Feb 2020 – Jul 2025',
    location: 'Sylhet, Bangladesh',
  },
];

export type Project = {
  name: string;
  description: string;
  href: string;
  cover: StaticImageData;
  stack: Icon[];
  featured?: boolean;
  // How far the cover zooms on hover; busier covers look better with less.
  hoverScale?: number;
  // Darker scrim keeps the title readable over light or text-heavy covers.
  strongScrim?: boolean;
};

export const projects: Project[] = [
  {
    name: 'WishSupport',
    description: 'One inbox for Shopify apps',
    href: 'https://wishsupport.app',
    cover: wishsupport,
    stack: [SiNestjs, SiNextdotjs, SiReact, SiPostgresql, SiDrizzle, SiTurborepo],
    strongScrim: true,
    featured: true,
    hoverScale: 1.03,
  },
  {
    name: 'Easy Courier BD',
    description: 'One-click courier booking',
    href: 'https://apps.shopify.com/wd-easy-courier-bd',
    cover: easyCourierBd,
    stack: [SiRemix, SiShopify, SiPrisma, SiPostgresql, SiRedis],
    strongScrim: true,
    featured: true,
    hoverScale: 1.03,
  },
  {
    name: 'Customer Insights & Growth',
    description: 'Shopify shopper analytics',
    href: 'https://apps.shopify.com/wd-customer-insights-growth',
    cover: customerInsights,
    stack: [SiReactrouter, SiFastify, SiPrisma, SiPostgresql, SiRedis],
    strongScrim: true,
    featured: true,
  },
  {
    name: 'ELORA Perfumes',
    description: 'E-commerce store & admin',
    href: 'https://eloraperfumes.com',
    cover: elora,
    stack: [SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiPrisma, SiRedis],
    featured: true,
    hoverScale: 1.02,
  },
  {
    name: 'MySUST & eSign',
    description: 'Portal for 17,000+ students',
    href: 'https://services.student.sust.edu',
    cover: mysust,
    stack: [SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma],
  },
  {
    name: 'PocketCarer v2',
    description: 'Care business platform',
    href: 'https://app.pocketcarer.com',
    cover: pocketcarer,
    stack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiGooglemaps],
    strongScrim: true,
  },
  {
    name: 'Broken Links Finder',
    description: 'Catch & fix broken links',
    href: 'https://apps.shopify.com/wd-broken-links-finder',
    cover: brokenLinksFinder,
    stack: [SiReactrouter, SiPrisma, SiPostgresql, SiReactquery, SiTailwindcss],
    strongScrim: true,
  },
  {
    name: 'Duplicate Finder & Delete',
    description: 'Removed 5,00,000+ duplicates',
    href: 'https://apps.shopify.com/rp-delete-duplicate-products',
    cover: duplicateFinder,
    stack: [SiRemix, SiShopify, SiPrisma, SiPostgresql],
    strongScrim: true,
  },
];

// Giscus (GitHub Discussions) settings for the guestbook; these IDs are public, not secrets.
export const giscus = {
  repo: 'arif1205/portfolio' as `${string}/${string}` | '',
  repoId: 'R_kgDOVcQ0Wg',
  category: 'Announcements',
  categoryId: 'DIC_kwDOVcQ0Ws4DJ8om',
};
