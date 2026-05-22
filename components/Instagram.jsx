// components/Instagram.jsx — grid of recent posts (visual; links to IG)

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { products } from '@/data/products';
import { social } from '@/data/site.config';
import { copy } from '@/data/copy';

export default function Instagram() {
  const t = copy.instagram;
  // Pad to 12 tiles so the 6-col grid looks balanced even with a 9-item catalog
  const tiles = [...products, ...products.slice(0, 3)];

  return (
    <section id="insta" className="py-24">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="kicker">{t.kicker}</span>
          <h2 className="section-title">
            {t.title.pre}{' '}
            <em className="italic text-pink">{t.title.accent}</em>
          </h2>
          <p className="section-sub mx-auto">{t.sub}</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {tiles.map((p, i) => (
            <a
              key={i}
              href={social.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square rounded-[14px] overflow-hidden border-[1.5px] border-ink bg-bg-soft"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity
                              flex items-center justify-center text-white">
                <Heart size={28} fill="white" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a className="btn btn-pink" href={social.instagram.url} target="_blank" rel="noreferrer">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
