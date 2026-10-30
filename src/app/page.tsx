import type { CSSProperties } from 'react';
import Image from 'next/image';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { IconAwardCertificate, IconBadgeSparkle, IconFolder, IconMsgs, IconPaperPlane, IconSuitcase } from 'nucleo-glass';

import { Arrow, BeamButton } from '@/components/button';
import { Divider } from '@/components/divider';
import { TorusKnot } from '@/components/torus-knot';
import { LinkedInIcon, MailIcon } from '@/components/icons/brand';
import { PageMarker } from '@/components/page-marker';
import { ProjectCard } from '@/components/project-card';
import { Section } from '@/components/section';
import { TimelineList } from '@/components/timeline-list';
import { certifications, education, experience, profile, projects } from '@/lib/data';

const socialLinks = [
  { href: profile.socials.github, label: 'GitHub', icon: SiGithub },
  { href: profile.socials.linkedin, label: 'LinkedIn', icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: 'Email', icon: MailIcon },
];

export default function Home() {
  return (
    <>
      <section className="relative flex justify-between py-18">
        <div className="relative">
          <PageMarker />
          <div className="enter-animation max-w-100">
            <hgroup>
              <h1 className="text-[1.375rem]/5 font-semibold tracking-tighter normal-case">{profile.name}</h1>
              <p className="text-muted-foreground/70 mt-1.5 mb-3.5 leading-4 font-medium tracking-tight text-balance">
                {profile.tagline[0]}
                <span aria-hidden="true" className="max-sm:hidden">
                  {' | '}
                </span>
                <br className="sm:hidden" />
                {profile.tagline[1]}
              </p>
            </hgroup>
            <p className="text-muted-foreground mb-4 text-sm/5 text-pretty">
              {profile.intro} Graduated in{' '}
              <strong className="text-foreground/60 tracking-narrow font-medium">{profile.degree}</strong>{' '}
              <span className="mr-0.5">@</span>{' '}
              <a href={profile.university.href} target="_blank" rel="noreferrer" className="inline-flex items-baseline gap-1.25 whitespace-nowrap">
                <Image
                  src={profile.university.logo}
                  alt=""
                  width={16}
                  height={16}
                  priority
                  className="mt-px size-4 self-center object-contain"
                />
                <strong className="text-foreground/60 tracking-narrow font-medium">{profile.university.name}</strong>
              </a>
              .
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noreferrer"
                  className="relative transition-opacity after:absolute after:-inset-x-2 after:inset-y-0 after:content-[''] hover:opacity-80"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <TorusKnot />
      </section>
      <Divider />
      <Section id="experience" title="Experience" icon={IconSuitcase} delay={200}>
        <TimelineList entries={experience} />
      </Section>
      <Divider />
      <Section id="education" title="Education" icon={IconAwardCertificate} delay={400}>
        <TimelineList entries={education} />
      </Section>
      <Divider />
      <Section id="certifications" title="Certifications" icon={IconBadgeSparkle} delay={600}>
        <TimelineList entries={certifications} />
      </Section>
      <Divider />
      <Section
        id="projects"
        title="Projects"
        icon={IconFolder}
        delay={800}
        action={
          <BeamButton href="/projects" variant="secondary" beamStrength={0.5}>
            View more
            <Arrow className="opacity-80" />
          </BeamButton>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
        </div>
      </Section>
      <Divider />
      <section
        className="enter-animation grid gap-4 py-14 text-center"
        style={{ '--enter-delay': '1000ms' } as CSSProperties}
      >
        <h2 className="mx-auto flex flex-col text-[1.375rem]/5 font-semibold tracking-tighter [&>span>svg]:drop-shadow [&>span>svg]:drop-shadow-black/15 dark:[&>span>svg]:drop-shadow-none">
          <span className="mx-auto flex items-center gap-2.5 pr-3.5">
            <IconMsgs uniqueId="cta-msgs" />
            Want to chat?
          </span>
          <span className="flex items-center gap-2.5">
            Shoot me an email!
            <IconPaperPlane uniqueId="cta-plane" />
          </span>
        </h2>
        <BeamButton href={`mailto:${profile.email}`} variant="primary" beamStrength={1} className="mx-auto">
          Get in touch
          <Arrow className="-mr-0.5" />
        </BeamButton>
      </section>
    </>
  );
}
