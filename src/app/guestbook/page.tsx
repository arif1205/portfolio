import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { IconBookOpen } from 'nucleo-glass';

import { Divider } from '@/components/divider';
import { Guestbook } from '@/components/guestbook';
import { PageHeading } from '@/components/page-heading';

export const metadata: Metadata = { title: 'Guestbook' };

export default function GuestbookPage() {
  return (
    <>
      <PageHeading icon={IconBookOpen} title="Guestbook" description="Leave a message!" />
      <Divider />
      <div className="enter-animation" style={{ '--enter-delay': '200ms' } as CSSProperties}>
        <Guestbook />
      </div>
    </>
  );
}
