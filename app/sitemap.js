// app/sitemap.js — SEO sitemap (Next.js auto-generates /sitemap.xml)

import { site } from '@/data/site.config';

export default function sitemap() {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Add additional pages here as the site grows, e.g.:
    // { url: `${site.url}/shop`, changeFrequency: 'weekly', priority: 0.9 },
  ];
}
