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
import awsLogo from '@/assets/img/logos/aws.png';
import infancyLogo from '@/assets/img/logos/infancy-it.png';
import kodekloudLogo from '@/assets/img/logos/kodekloud.png';
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
  handle: 'Arif',
  name: 'Md. Ariful Islam',
  // Shown as "role | pitch" on one line; phones stack the two parts instead.
  tagline: ['Software engineer', 'turning ideas into products'] as const,
  // First professional role (Infancy IT); the hero shows years since then, in half-year steps.
  careerStart: '2023-05-01',
  intro: 'years shipping SaaS, Shopify apps and plugins.',
  summary:
    'Software engineer shipping SaaS, Shopify apps and WordPress plugins with TypeScript, React, Node.js and PostgreSQL.',
  degree: 'Computer Science',
  university: { name: 'SUST', href: 'https://www.sust.edu', logo: sustLogo },
  email: 'imdariful71@gmail.com',
  copyrightYear: 2026,
  socials: {
    discord: 'https://discord.com/users/849591438576713728',
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
  location?: string;
  credentialUrl?: string;
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

export const certifications: TimelineEntry[] = [
  {
    title: 'AWS Academy Cloud Web Application Builder',
    organization: 'Amazon Web Services (AWS)',
    href: 'https://aws.amazon.com/training/awsacademy/',
    logo: awsLogo,
    period: 'Issued Sep 2024',
    credentialUrl: 'https://www.credly.com/badges/ef65a22a-51ff-4e79-bba2-664728072271/linked_in_profile',
    rounded: true,
  },
  {
    title: 'AWS Academy Cloud Foundations',
    organization: 'Amazon Web Services (AWS)',
    href: 'https://aws.amazon.com/training/awsacademy/',
    logo: awsLogo,
    period: 'Issued Mar 2024',
    credentialUrl: 'https://www.credly.com/badges/7ae4b8ce-c5e4-4c2f-842e-0703c59f6be0/linked_in_profile',
    rounded: true,
  },
  {
    title: 'Docker Training Course for the Absolute Beginner',
    organization: 'KodeKloud',
    href: 'https://kodekloud.com',
    logo: kodekloudLogo,
    period: 'Issued Feb 2024',
    credentialUrl: 'https://kodekloud.com/certificate-verification/2DECCBCA2878-2DECC5D35D76-2DECC597182A/',
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
  // CSS object-position for covers whose aspect ratio differs from the card's.
  coverPosition?: string;
};

export const projects: Project[] = [
  {
    name: 'WishSupport',
    description: 'One inbox for Shopify apps',
    href: 'https://wishsupport.app',
    cover: wishsupport,
    stack: [SiNestjs, SiNextdotjs, SiReact, SiPostgresql, SiDrizzle, SiTurborepo],
    strongScrim: true,
    coverPosition: '50% 30%',
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
