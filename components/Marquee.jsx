// components/Marquee.jsx — scrolling craft-type strip

import { copy } from '@/data/copy';

export default function Marquee() {
  // Render the items twice so the -50% animation loops seamlessly.
  const items = [...copy.marquee, ...copy.marquee];
  return (
    <div className="bg-ink text-bg border-y-[2.5px] border-ink overflow-hidden py-[18px]">
      <div className="marquee-track font-display text-[clamp(20px,3vw,36px)] font-black tracking-[-0.01em] uppercase">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-10 pr-10">
            {item}
            <i className="inline-block w-3.5 h-3.5 bg-pink rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}
