// app/manifest.js — PWA manifest (also helps PWA-aware SEO crawlers)

import { site } from '@/data/site.config';

export default function manifest() {
  return {
    name: site.name,
    short_name: site.name,
    description: site.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#f5efe1',
    theme_color: '#f5efe1',
    icons: [
      { src: site.logo, sizes: '192x192', type: 'image/png' },
      { src: site.logo, sizes: '512x512', type: 'image/png' },
    ],
  };
}
