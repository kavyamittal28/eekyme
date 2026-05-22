// components/Hero.jsx — hero with copy + slideshow

import { copy } from '@/data/copy';
import { stats } from '@/data/site.config';
import Slideshow from './Slideshow';

export default function Hero() {
  const h = copy.hero;
  return (
    <section id="top" className="pt-8 pb-16 relative">
      <div className="wrap">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-14 items-center">
          {/* Copy */}
          <div>
            <span className="kicker">{h.kicker}</span>
            <h1 className="font-display text-[clamp(56px,8vw,112px)] leading-[.9] font-black tracking-[-0.04em] m-0 mb-6">
              {h.headline.pre}{' '}
              <em className="italic text-pink">{h.headline.accent}</em>{' '}
              {h.headline.mid}
              <br />
              <span className="underline decoration-pink decoration-[4px] underline-offset-[6px]">
                {h.headline.underline}
              </span>{' '}
              {h.headline.post}
            </h1>
            <p className="text-xl leading-[1.5] text-ink-soft m-0 mb-8 max-w-[480px]">{h.lede}</p>

            <div className="flex gap-3.5 flex-wrap">
              <a href={h.primaryCta.href} className="btn btn-primary">{h.primaryCta.label}</a>
              <a href={h.secondaryCta.href} className="btn btn-ghost">{h.secondaryCta.label}</a>
            </div>

            <div className="flex gap-8 mt-12 pt-7 border-t border-dashed border-ink-faint flex-wrap">
              {stats.map((s) => (
                <div key={s.l}>
                  <span className="block font-display text-4xl font-black leading-none text-ink">{s.n}</span>
                  <span className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-soft mt-1 block">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Slideshow + sticker */}
          <div className="relative">
            <Slideshow />
            <div className="absolute top-[12%] -right-7 w-[132px] h-[132px] rounded-full bg-yellow text-ink
                            flex items-center justify-center text-center font-display font-black text-sm
                            leading-tight tracking-[0.04em] uppercase border-[2.5px] border-ink shadow-hard
                            rotate-[-12deg] z-[3] animate-wobble">
              {h.stickerLine1}<br />{h.stickerLine2}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
