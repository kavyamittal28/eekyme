'use client';
// components/ProductCard.jsx

import Image from 'next/image';
import clsx from 'clsx';
import { copy } from '@/data/copy';

const TILTS = ['-rotate-1', 'rotate-[1.2deg]', '-rotate-[0.6deg]', 'rotate-[0.8deg]'];

export default function ProductCard({ product, idx, onClick }) {
  const tilt = TILTS[idx % TILTS.length];
  return (
    <button
      onClick={onClick}
      className={clsx(
        'group relative bg-bg-soft rounded-card border-[2.5px] border-ink overflow-hidden text-left p-0 cursor-pointer',
        'shadow-hard transition-[transform,box-shadow] duration-200',
        tilt,
        'hover:rotate-0 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-hover',
        'flex flex-col'
      )}
    >
      <div className="relative aspect-[1/1.05] bg-yellow overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-pink text-white px-2.5 py-1 rounded-full
                           text-[10px] font-extrabold tracking-[0.08em] uppercase border-[1.5px] border-ink">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="px-5 pt-4 pb-5">
        <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-soft mb-1.5">
          {product.cat}
        </div>
        <h3 className="font-display text-[22px] font-extrabold leading-tight tracking-[-0.01em] text-ink m-0 mb-2.5">
          {product.name}
        </h3>
        <span className="text-[13px] font-bold text-ink-soft inline-flex items-center gap-1.5
                         group-hover:text-pink transition-colors">
          {copy.products.dmLabel}
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </button>
  );
}
