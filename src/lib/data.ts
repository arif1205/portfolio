import type { StaticImageData } from 'next/image';
import type { ComponentType, SVGProps } from 'react';
import {
  SiBun,
  SiDiscord,
  SiDocker,
  SiDrizzle,
  SiElectron,
  SiGo,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRaycast,
  SiReact,
  SiSqlite,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons';

import company1 from '@/assets/img/logos/company-1.png';
import company2 from '@/assets/img/logos/company-2.png';
import company3 from '@/assets/img/logos/company-3.png';
import company4 from '@/assets/img/logos/company-4.png';
import org1 from '@/assets/img/logos/org-1.png';
import org2 from '@/assets/img/logos/org-2.png';
import org3 from '@/assets/img/logos/org-3.png';
import universityLogo from '@/assets/img/logos/university.png';
import atlas from '@/assets/img/projects/atlas.png';
import beacon from '@/assets/img/projects/beacon.png';
import courier from '@/assets/img/projects/courier.png';
import ledger from '@/assets/img/projects/ledger.png';
import lexicon from '@/assets/img/projects/lexicon.png';
import nebula from '@/assets/img/projects/nebula.png';
import orbit from '@/assets/img/projects/orbit.png';
import prism from '@/assets/img/projects/prism.png';
import relay from '@/assets/img/projects/relay.png';
import splice from '@/assets/img/projects/splice.png';

type Icon = ComponentType<SVGProps<SVGSVGElement> & { title?: string }>;

// Placeholder content: replace with your own details, logos and project covers.
export const profile = {
  handle: 'arif',
  name: 'Md. Ariful Islam',
  tagline: 'Developer, tinkerer, software engineer',
  role: 'Computer Science',
  organization: { name: 'Your University', href: 'https://example.com', logo: universityLogo },
  email: 'imdariful71@gmail.com',
  copyrightYear: 2026,
  socials: {
    discord: 'https://discord.com',
    github: 'https://github.com/arif1205',
    linkedin: 'https://www.linkedin.com',
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
    title: 'Software Engineer Intern',
    organization: 'Acme Corporation',
    href: 'https://example.com',
    logo: company1,
    period: 'Jun 2026 – Sep 2026',
    location: 'Dhaka, BD',
    rounded: true,
  },
  {
    title: 'Software Engineer Intern',
    organization: 'Globex',
    href: 'https://example.com',
    logo: company2,
    period: 'May 2025 – Aug 2025',
    location: 'Sylhet, BD',
    rounded: true,
    invertInLight: true,
  },
  {
    title: 'Student Developer, Enterprise Application Services',
    organization: 'Initech',
    href: 'https://example.com',
    logo: company3,
    period: 'Aug 2024 – May 2025',
    location: 'Remote',
  },
  {
    title: 'Software Engineer Intern',
    organization: 'Umbrella Labs',
    href: 'https://example.com',
    logo: company4,
    period: 'Feb 2024 – Apr 2024',
    location: 'Remote',
    rounded: true,
  },
];

export const involvements: TimelineEntry[] = [
  {
    title: 'Social Media Chair',
    organization: 'Computer Club at Your University',
    href: 'https://example.com',
    logo: org1,
    period: 'May 2026 – Present',
    location: 'Sylhet, BD',
    current: true,
    rounded: true,
  },
  {
    title: 'Mentor, Hack School/Projects',
    organization: 'Developers Society',
    href: 'https://example.com',
    logo: org2,
    period: 'Sep 2025 – Apr 2026',
    location: 'Sylhet, BD',
    rounded: true,
  },
  {
    title: 'Event Organizer, Engineering/Logistics',
    organization: 'Hackathon Club',
    href: 'https://example.com',
    logo: org3,
    period: 'Jul 2024 – May 2025',
    location: 'Dhaka, BD',
    rounded: true,
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
};

export const projects: Project[] = [
  {
    name: 'Nebula',
    description: 'Plan group meetups smarter',
    href: 'https://example.com',
    cover: nebula,
    stack: [SiDrizzle, SiSvelte, SiBun, SiSqlite, SiTypescript],
    featured: true,
    hoverScale: 1.02,
  },
  {
    name: 'Ledger',
    description: 'TX confirmation monitor',
    href: 'https://github.com/arif1205',
    cover: ledger,
    stack: [SiDiscord, SiPython, SiPostgresql, SiDocker, SiTypescript],
    featured: true,
    hoverScale: 1.03,
  },
  {
    name: 'Lexicon',
    description: 'Curated developer dictionary',
    href: 'https://example.com',
    cover: lexicon,
    stack: [SiDrizzle, SiPrisma, SiTailwindcss, SiReact, SiNextdotjs, SiTypescript],
    featured: true,
  },
  {
    name: 'Relay for Raycast',
    description: 'Media downloader extension',
    href: 'https://example.com',
    cover: relay,
    stack: [SiReact, SiRaycast, SiTypescript],
    featured: true,
  },
  {
    name: 'Courier',
    description: 'Modern desktop email client',
    href: 'https://example.com',
    cover: courier,
    stack: [SiReact, SiElectron, SiNodedotjs, SiDocker, SiNextdotjs, SiTypescript],
  },
  {
    name: 'Beacon',
    description: 'Job listing monitoring bot',
    href: 'https://github.com/arif1205',
    cover: beacon,
    stack: [SiDiscord, SiDocker, SiGo, SiTypescript],
  },
  {
    name: 'Atlas',
    description: 'Domain, IP, & email OSINT tool',
    href: 'https://example.com',
    cover: atlas,
    stack: [SiTailwindcss, SiReact, SiGo, SiDocker, SiPython, SiTypescript],
  },
  {
    name: 'Orbit Calendar Tool',
    description: 'Generates .ics course calendars',
    href: 'https://example.com',
    cover: orbit,
    stack: [SiTailwindcss, SiReact, SiNextdotjs, SiTypescript],
  },
  {
    name: 'Prism',
    description: 'AI app icon generator & API',
    href: 'https://example.com',
    cover: prism,
    stack: [SiDrizzle, SiTailwindcss, SiReact, SiDocker, SiNextdotjs, SiTypescript],
  },
  {
    name: 'Splice',
    description: 'Automatic clip splitter & merger',
    href: 'https://github.com/arif1205',
    cover: splice,
    stack: [SiPython, SiDocker],
  },
];

// Giscus (GitHub Discussions) settings for the guestbook; these IDs are public, not secrets.
export const giscus = {
  repo: 'arif1205/portfolio' as `${string}/${string}` | '',
  repoId: 'R_kgDOVcQ0Wg',
  category: 'Announcements',
  categoryId: 'DIC_kwDOVcQ0Ws4DJ8om',
};
