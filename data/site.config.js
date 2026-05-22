// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONFIG — single source of truth.
//  Edit this file to rebrand. Everything that's "the brand" lives here:
//  meta, identity, colors, fonts, navigation, social, contact, SEO defaults.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // Identity
  name: 'eekyme',
  tagline: 'Handmade by Mahima',
  makerName: 'Mahima',
  shortDescription:
    'Handmade keychains, nameplates, wall hangings and mini collages — custom-made one piece at a time.',
  longDescription:
    'eekyme is a one-person handmade craft studio run by Mahima. Specializing in polymer clay keychains, hand-painted nameplates, mirror-work wall hangings and custom mini canvases — every piece is sculpted, painted and packed by hand. Shipped across India.',
  foundedYear: 2022,
  location: 'India',

  // Canonical URL (no trailing slash). Update to your real domain.
  url: 'https://eekyme.com',

  // Logo + open-graph image (paths relative to /public)
  logo: '/logo.png',
  ogImage: '/og.png', // 1200x630 recommended; falls back to logo if missing
  favicon: '/favicon.ico',
};

// ─────────────────────────────────────────────────────────────────────────────
//  THEME — design tokens consumed by tailwind.config.js
//  Swap colors / fonts here and the whole site updates.
// ─────────────────────────────────────────────────────────────────────────────

export const theme = {
  colors: {
    // Surfaces
    bg:        '#f5efe1',
    'bg-soft': '#fffaf0',
    ink:       '#0e0e0e',
    'ink-soft':'#5a5a55',
    'ink-faint':'#c9c3b3',

    // Brand accents
    pink:   '#ff3d7f',
    yellow: '#ffd23f',
    sky:    '#7dd3fc',

    // Aliases (semantic — use these in components when possible)
    primary: '#ff3d7f',
    accent:  '#ffd23f',
    cool:    '#7dd3fc',
  },
  fonts: {
    // Loaded in app/layout.js via next/font
    display: ['var(--font-display)', 'Arial Black', 'sans-serif'],
    body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────

export const nav = [
  { href: '#shop',   label: 'Shop' },
  { href: '#custom', label: 'Custom' },
  { href: '#about',  label: 'About' },
  { href: '#insta',  label: 'Instagram' },
];

// ─────────────────────────────────────────────────────────────────────────────
//  SOCIAL + CONTACT
// ─────────────────────────────────────────────────────────────────────────────

export const social = {
  instagram:    { handle: '@eekyme', url: 'https://www.instagram.com/eekyme/' },
  email:        'hello@eekyme.com',
  whatsapp:     null, // e.g. 'https://wa.me/919999999999'
};

// ─────────────────────────────────────────────────────────────────────────────
//  STATS (hero strip)
// ─────────────────────────────────────────────────────────────────────────────

export const stats = [
  { n: '300+',  l: 'Pieces made' },
  { n: '100%',  l: 'Handcrafted' },
  { n: '5–10',  l: 'Day turnaround' },
];

// ─────────────────────────────────────────────────────────────────────────────
//  SEO DEFAULTS (used by app/layout.js)
// ─────────────────────────────────────────────────────────────────────────────

export const seo = {
  defaultTitle: 'eekyme — handmade crafts by Mahima',
  titleTemplate: '%s · eekyme',
  description: site.shortDescription,
  keywords: [
    'handmade crafts',
    'custom keychains',
    'polymer clay',
    'handmade nameplates',
    'custom wedding nameplate',
    'wall hangings',
    'eekyme',
    'mahima crafts',
    'india handmade',
    'instagram crafts',
  ],
  twitterHandle: '@eekyme',
};
