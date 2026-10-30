import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { IconFile } from 'nucleo-glass';

import { BeamButton } from '@/components/button';
import { Divider } from '@/components/divider';
import { PageHeading } from '@/components/page-heading';
import { profile } from '@/lib/data';

export const metadata: Metadata = { title: 'Resume' };

export default function ResumePage() {
  const { resume } = profile;

  return (
    <>
      <PageHeading icon={IconFile} title="Resume" description={`Updated ${resume.updated}`} />
      <Divider />
      <div className="enter-animation grid gap-4 py-4" style={{ '--enter-delay': '200ms' } as CSSProperties}>
        <div className="flex flex-wrap items-center gap-3">
          <BeamButton href={resume.href} download={resume.fileName} variant="primary" beamStrength={1}>
            Download PDF
            <span aria-hidden="true">↓</span>
          </BeamButton>
          <a
            href={resume.href}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground/75 flex items-center gap-1 text-sm lowercase transition-colors"
          >
            Open in new tab
            <ExternalLink className="size-3.5" />
          </a>
        </div>
        {/* Inline PDFs are unreliable on phones, so small screens get just the buttons above. */}
        <iframe
          src={`${resume.href}#view=FitH&toolbar=0&navpanes=0`}
          title={`${profile.name} resume`}
          className="bg-muted hidden h-[min(80vh,64rem)] w-full rounded-xl border sm:block"
        />
      </div>
    </>
  );
}
