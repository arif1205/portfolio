import Image from 'next/image';

import heroDark from '@/assets/img/hero-dark.png';
import heroLight from '@/assets/img/hero-light.png';

export function HeroVisual() {
  return (
    <div className="pointer-events-none absolute top-1/2 right-13 hidden size-50 -translate-y-1/2 sm:block">
      <Image
        src={heroLight}
        alt=""
        priority
        sizes="200px"
        className="size-full object-contain drop-shadow-xl drop-shadow-black/30 dark:hidden"
      />
      <Image src={heroDark} alt="" priority sizes="200px" className="hidden size-full object-contain dark:block" />
    </div>
  );
}
