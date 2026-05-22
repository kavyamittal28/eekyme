// components/Nav.jsx — sticky top navigation

import Image from 'next/image';
import { site, nav, social } from '@/data/site.config';
import { copy } from '@/data/copy';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg border-b-2 border-ink">
      <div className="wrap flex items-center justify-between h-[72px]">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[28px] tracking-[-0.02em] text-ink">
          <Image src={site.logo} alt={site.name} width={40} height={40} className="rounded-full" priority />
          <span>{site.name}</span>
        </a>

        <div className="flex gap-7 items-center">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hidden md:inline-block text-sm font-semibold tracking-wide relative py-1.5
                         after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5
                         after:h-0.5 after:bg-pink after:scale-x-0 hover:after:scale-x-100
                         after:origin-left after:transition-transform after:duration-200"
            >
              {n.label}
            </a>
          ))}
          <a
            href={social.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="bg-ink text-bg px-[18px] py-2.5 rounded-full font-bold text-[13px] tracking-[0.04em] uppercase
                       border-[2.5px] border-ink shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5
                       hover:shadow-hard-sm-hover transition-[transform,box-shadow] duration-150"
          >
            {copy.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
