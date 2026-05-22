'use client';
// components/Products.jsx — filterable grid + detail modal

import { useState } from 'react';
import clsx from 'clsx';
import { products, categories } from '@/data/products';
import { copy } from '@/data/copy';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function Products() {
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(null);

  const filtered = filter === 'all' ? products : products.filter((p) => p.type === filter);
  const t = copy.products;

  return (
    <section id="shop" className="py-24">
      <div className="wrap">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="kicker">{t.kicker}</span>
            <h2 className="section-title">
              {t.title.pre}{' '}
              <em className="italic text-pink">{t.title.accent}</em>
            </h2>
            <p className="section-sub mb-0">{t.sub}</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-semibold border-2 border-ink transition-colors',
                  filter === c.id ? 'bg-ink text-bg' : 'bg-transparent text-ink hover:bg-yellow'
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              idx={i}
              onClick={() => setActive(p)}
            />
          ))}
        </div>
      </div>

      {active && <ProductModal product={active} onClose={() => setActive(null)} />}
    </section>
  );
}
