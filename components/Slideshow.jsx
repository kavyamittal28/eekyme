'use client';
// components/Slideshow.jsx — Embla carousel with autoplay

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';

export default function Slideshow() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="embla rounded-card overflow-hidden border-[2.5px] border-ink shadow-hard bg-bg-soft aspect-[4/5]">
        <div className="embla__viewport h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {products.map((p, i) => (
              <div className="embla__slide relative h-full" key={p.id}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                  priority={i === 0}
                />
                {/* caption */}
                <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3 pointer-events-none">
                  <span className="bg-bg text-ink px-3.5 py-2 text-xs font-bold tracking-[0.06em] uppercase
                                   rounded-full border-2 border-ink shadow-[0_4px_0_rgba(0,0,0,.1)]">
                    {p.cat}
                  </span>
                  <span className="bg-ink text-bg px-3 py-2 rounded-full text-xs font-bold tabular-nums
                                   border-2 border-ink">
                    {String(i + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-5 -right-5 flex justify-between pointer-events-none">
        <button
          aria-label="Previous"
          onClick={() => emblaApi?.scrollPrev()}
          className="pointer-events-auto w-12 h-12 rounded-full bg-bg border-[2.5px] border-ink
                     flex items-center justify-center shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5
                     hover:shadow-hard-sm-hover transition text-ink"
        >
          <ChevronLeft size={20} strokeWidth={3} />
        </button>
        <button
          aria-label="Next"
          onClick={() => emblaApi?.scrollNext()}
          className="pointer-events-auto w-12 h-12 rounded-full bg-bg border-[2.5px] border-ink
                     flex items-center justify-center shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5
                     hover:shadow-hard-sm-hover transition text-ink"
        >
          <ChevronRight size={20} strokeWidth={3} />
        </button>
      </div>

      {/* dots */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-7 flex gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 rounded-full transition-all duration-200 ${
              i === selected ? 'w-7 bg-pink' : 'w-2.5 bg-ink-faint'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
