// components/Footer.jsx

import Image from 'next/image';
import { Instagram, Mail } from 'lucide-react';
import { site, social } from '@/data/site.config';
import { copy } from '@/data/copy';

export default function Footer() {
  const t = copy.footer;
  return (
    <footer className="bg-ink text-bg pt-20 pb-8">
      <div className="wrap">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <h3 className="font-display text-[clamp(48px,7vw,96px)] font-black leading-[.9] tracking-[-0.03em] m-0 mb-4">
              {t.bigTitle.pre}{' '}
              <em className="not-italic text-pink">{t.bigTitle.accent}</em>
            </h3>
            <p className="text-bg/70 max-w-[380px] leading-[1.5]">{t.blurb}</p>
          </div>

          {t.cols.map((col) => (
            <div key={col.label}>
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-bg/50 mb-4">
                {col.label}
              </div>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className="block text-[15px] font-medium mb-2.5 text-bg hover:text-pink transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          ))}

          <div>
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-bg/50 mb-4">
              Get in touch
            </div>
            <a
              href={social.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[15px] font-medium mb-2.5 hover:text-pink transition-colors"
            >
              <Instagram size={16} /> {social.instagram.handle}
            </a>
            <a
              href={`mailto:${social.email}`}
              className="flex items-center gap-2 text-[15px] font-medium mb-2.5 hover:text-pink transition-colors"
            >
              <Mail size={16} /> {social.email}
            </a>
            <div className="text-[15px] text-bg/50">Ships across India 🇮🇳</div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-bg/15 pt-6 text-xs text-bg/50 flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-bg text-[20px] font-display tracking-[-0.02em]">
            <Image src={site.logo} alt={site.name} width={32} height={32} className="rounded-full bg-bg" />
            <span>{site.name} by {site.makerName}</span>
          </div>
          <div>{t.rights}</div>
        </div>
      </div>
    </footer>
  );
}
