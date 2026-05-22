// components/About.jsx

import Image from 'next/image';
import { site } from '@/data/site.config';
import { copy } from '@/data/copy';

export default function About() {
  const t = copy.about;
  return (
    <section id="about" className="bg-yellow border-y-[2.5px] border-ink py-24">
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait area */}
          <div className="relative aspect-[1/1.1] rounded-card border-[2.5px] border-ink bg-bg-soft shadow-hard overflow-hidden flex items-center justify-center">
            <Image
              src={site.logo}
              alt={site.makerName}
              width={400}
              height={400}
              className="w-[65%] h-auto opacity-90"
            />
            <div className="absolute top-5 right-5 w-20 h-20 rounded-full bg-sky border-[2.5px] border-ink
                            flex items-center justify-center font-display font-black text-[11px] tracking-[0.06em]
                            uppercase text-ink -rotate-12">
              since<br />{site.foundedYear}
            </div>
            <div className="absolute bottom-7 left-5 w-24 h-24 rounded-full bg-pink border-[2.5px] border-ink
                            flex items-center justify-center font-display font-black text-[11px] tracking-[0.06em]
                            uppercase text-white rotate-[8deg]">
              by<br />{site.makerName}
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="kicker !bg-bg">{t.kicker}</span>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] font-black leading-[.95] tracking-[-0.03em] m-0 mb-6">
              {t.headline.pre}{' '}
              <em className="italic text-pink">{t.headline.accent}</em>
            </h2>
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-[1.55] text-ink-soft m-0 mb-4">{p}</p>
            ))}
            <div className="flex flex-wrap gap-2 mt-6">
              {t.skills.map((s) => (
                <span key={s} className="px-3.5 py-1.5 rounded-full bg-bg text-ink text-xs font-semibold border-[1.5px] border-ink">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
