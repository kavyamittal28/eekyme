'use client';
// components/ProductModal.jsx

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { social } from '@/data/site.config';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', h);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-6 animate-fadein"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-bg-soft rounded-card border-[2.5px] border-ink max-w-[800px] w-full
                   grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.4)]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg border-[2.5px] border-ink
                     flex items-center justify-center text-ink z-10"
        >
          <X size={16} strokeWidth={3} />
        </button>

        <div className="relative aspect-square md:aspect-auto bg-yellow">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
          />
        </div>

        <div className="p-10 flex flex-col">
          <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-soft">{product.cat}</div>
          <h3 className="font-display text-4xl font-black mt-2 mb-3 tracking-[-0.02em]">{product.name}</h3>
          <p className="text-ink-soft leading-[1.5] mb-auto">{product.desc}</p>

          <div className="flex gap-2.5 mt-6 flex-wrap">
            <a className="btn btn-pink" href={social.instagram.url} target="_blank" rel="noreferrer">
              DM {social.instagram.handle} →
            </a>
            <button className="btn btn-ghost" onClick={onClose}>Keep browsing</button>
          </div>

          <div className="mt-6 pt-5 border-t border-dashed border-ink-faint text-[13px] text-ink-soft leading-[1.5]">
            <strong className="text-ink">Made to order</strong> · 5–10 day turnaround · ships across India · custom colors & sizes welcome
          </div>
        </div>
      </div>
    </div>
  );
}
