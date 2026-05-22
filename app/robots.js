// app/robots.js — SEO robots.txt (Next.js serves it at /robots.txt)

import { site } from '@/data/site.config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
