# eekyme

Marketing site for **eekyme** — handmade crafts by Mahima. Built with Next.js 14 (App Router, JavaScript, no TypeScript).

## ✨ Features

- **Next.js 14 App Router** with React Server Components by default — client components only where needed
- **Tailwind CSS** for styling
- **Centralized data layer** — edit `data/` to rebrand everything
- **Full SEO** — metadata API, OpenGraph, Twitter cards, sitemap, robots.txt, JSON-LD structured data (LocalBusiness + Product schemas), PWA manifest
- **Image optimization** via `next/image` (AVIF/WebP, lazy loading, responsive sizes)
- **Embla Carousel** for the auto-advancing hero slideshow
- **React Hook Form** for the commission form
- **Lucide icons**
- Accessible, responsive, keyboard-navigable

---

## 🚀 Getting started

```bash
# install
npm install

# dev (http://localhost:3000)
npm run dev

# production build
npm run build
npm start
```

Node 18.17+ recommended.

---

## 📁 Project structure

```
eekyme-nextjs/
├── app/
│   ├── layout.js         # Root layout, fonts, metadata, JSON-LD mount
│   ├── page.js           # Single-page marketing site composition
│   ├── globals.css       # Tailwind directives + base styles
│   ├── sitemap.js        # → /sitemap.xml
│   ├── robots.js         # → /robots.txt
│   ├── manifest.js       # → /manifest.webmanifest
│   └── not-found.js      # 404 page
│
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── Slideshow.jsx          (client)
│   ├── Marquee.jsx
│   ├── Products.jsx           (client — filter state)
│   ├── ProductCard.jsx        (client)
│   ├── ProductModal.jsx       (client)
│   ├── About.jsx
│   ├── Commission.jsx
│   ├── CommissionForm.jsx     (client — react-hook-form)
│   ├── Instagram.jsx
│   ├── Footer.jsx
│   └── JsonLd.jsx             # LocalBusiness + ItemList structured data
│
├── data/
│   ├── site.config.js    # Brand, theme tokens, nav, social, SEO defaults
│   ├── products.js       # Product catalog + categories
│   └── copy.js           # All on-page text
│
├── public/
│   ├── logo.png
│   └── products/*.png
│
├── tailwind.config.js    # Reads colors/fonts from data/site.config.js
├── next.config.mjs
└── jsconfig.json         # `@/*` path alias
```

---

## 🎨 Customizing

Everything brand-specific lives under `data/`. **You do not need to touch component code to rebrand the site.**

### Change brand, name, contact, SEO

Edit `data/site.config.js`:

```js
export const site = {
  name: 'eekyme',
  url: 'https://eekyme.com',
  // …
};

export const social = {
  instagram: { handle: '@eekyme', url: 'https://...' },
  email: 'hello@eekyme.com',
};
```

### Change colors / fonts

Edit the `theme` export in `data/site.config.js`. `tailwind.config.js` pulls from it, so every component updates automatically.

```js
export const theme = {
  colors: {
    bg: '#f5efe1',
    pink: '#ff3d7f',
    yellow: '#ffd23f',
    // …
  },
  fonts: { /* … */ },
};
```

If you change fonts, also update the `next/font` imports in `app/layout.js`.

### Add / edit products

Edit `data/products.js`. Drop new images into `public/products/` and reference them by path. The grid, slideshow, Instagram strip, and JSON-LD all read from this one array.

### Change on-page copy

Edit `data/copy.js`. Headlines, sub-copy, form labels, footer columns — all there.

### Add new pages

Drop a folder under `app/` (e.g. `app/about/page.js`). Add the URL to `app/sitemap.js`.

---

## 🔍 SEO checklist (already wired)

- ✅ Title + description templated through Next.js metadata API
- ✅ Canonical URL
- ✅ OpenGraph + Twitter card tags
- ✅ JSON-LD: `LocalBusiness` + `ItemList` (with each product as a `Product` w/ `MadeToOrder` offer)
- ✅ `/sitemap.xml` auto-generated
- ✅ `/robots.txt` auto-generated
- ✅ PWA manifest
- ✅ Image alt text and lazy loading
- ✅ Semantic landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Color contrast meets WCAG AA for primary text
- ✅ Mobile responsive

**Before going live**, update in `data/site.config.js`:
- `site.url` → your real domain
- `site.ogImage` → a 1200×630 PNG at `/public/og.png` (currently falls back to logo)
- `social` → real Instagram URL + email

---

## 📧 Wiring the commission form

Right now the form acknowledges submissions in-page only (no backend). To send real emails:

1. Sign up for an email service (Resend, Formspree, EmailJS, etc.)
2. Add an API route at `app/api/commission/route.js`
3. POST to it from `CommissionForm.jsx`'s `onSubmit`

Example with [Resend](https://resend.com):

```js
// app/api/commission/route.js
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const data = await req.json();
  await resend.emails.send({
    from: 'commissions@eekyme.com',
    to: 'mahima@eekyme.com',
    subject: `New commission from ${data.name}`,
    text: JSON.stringify(data, null, 2),
  });
  return Response.json({ ok: true });
}
```

Then in `CommissionForm.jsx`:

```js
const onSubmit = async (data) => {
  await fetch('/api/commission', { method: 'POST', body: JSON.stringify(data) });
  setSubmitted(data);
};
```

---

## 🚢 Deploying

The fastest path is **Vercel** (made by the Next.js team — zero-config):

```bash
npx vercel
```

Also works on Netlify, Cloudflare Pages, Railway, or anywhere that runs Node 18+.

---

## License

Personal site — all rights reserved by Mahima.
