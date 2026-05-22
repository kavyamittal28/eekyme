// ─────────────────────────────────────────────────────────────────────────────
//  COPY — all on-page text. Edit here to change wording without touching JSX.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  nav: {
    cta: 'DM to order',
  },

  hero: {
    kicker: '✿ Handmade by Mahima',
    headline: {
      // Rendered as: "Tiny <em>cute</em> things, <u>big</u> personalities."
      pre: 'Tiny',
      accent: 'cute',
      mid: 'things,',
      underline: 'big',
      post: 'personalities.',
    },
    lede: 'Polymer clay keychains, hand-painted nameplates, mirror-work wall hangings, and custom collages — each one made one-by-one in Mahima\u2019s studio.',
    primaryCta: { label: 'See the shop', href: '#shop' },
    secondaryCta: { label: 'Request custom →', href: '#custom' },
    stickerLine1: 'Made to',
    stickerLine2: 'order ✿',
  },

  marquee: ['Keychains', 'Nameplates', 'Wall hangings', 'Mini canvas', 'Hair clips', 'Custom orders'],

  products: {
    kicker: 'The shop',
    title: { pre: 'Featured', accent: 'work' },
    sub: 'A peek at recent pieces. Everything is custom-made — colors, names, sizes are all yours to pick.',
    dmLabel: 'DM to order',
  },

  about: {
    kicker: 'The maker',
    headline: { pre: 'Hi, I\u2019m', accent: 'Mahima.' },
    paragraphs: [
      'I started eekyme because making little things made me happy — and turns out, it made other people happy too. Every keychain, nameplate, and canvas is sculpted, painted, and packed by hand from my tiny home studio.',
      'If you can picture it, I can probably make it. Send me your wildest idea.',
    ],
    skills: ['Polymer clay', 'Hand painting', 'Resin', 'Mirror work', 'Embroidery', 'Custom orders'],
  },

  commission: {
    kicker: 'Custom requests',
    title: { pre: 'Made just for', accent: 'you.' },
    sub: 'Tell Mahima what you\u2019re picturing. She\u2019ll DM you back with rough sketches and a quote within a day. Most pieces ship in 5–10 days.',
    steps: [
      ['1', 'Fill out the form', 'Tell us what you want and when you need it'],
      ['2', 'Mahima DMs you',   'You get sketches, options, and a final quote'],
      ['3', 'It gets made',     'Hand-crafted in 5–10 days, shipped to your door'],
    ],
    form: {
      name: 'Your name',
      contact: 'Instagram / Email',
      types: 'What do you want made?',
      occasion: 'Occasion',
      deadline: 'Need it by',
      description: 'Tell Mahima what you\u2019re picturing',
      descriptionPlaceholder: 'Colors, theme, names to include, references… the more details, the better!',
      submit: 'Send request →',
      disclaimer: 'No charge to inquire. Mahima reviews each request personally and will DM you with sketches + quote within 24 hours.',
      typeOptions:    ['Keychain', 'Nameplate', 'Wall hanging', 'Mini canvas', 'Hair accessory', 'Surprise me'],
      occasionOptions:['Gift', 'Wedding', 'Birthday', 'Just because', 'Home decor', 'Bulk order'],
    },
    success: {
      big: 'YAY!',
      body: (name) => `Got your request, ${name || 'friend'}. Mahima will DM you on Instagram within 24 hours with sketches and a quote.`,
      followCta: 'Follow @eekyme',
      againCta: 'Send another',
    },
  },

  instagram: {
    kicker: '@eekyme',
    title: { pre: 'Fresh from the', accent: '\u2018gram.' },
    sub: 'Follow along for new drops, work-in-progress, and behind-the-scenes from Mahima\u2019s studio.',
    cta: 'Follow @eekyme on Instagram →',
  },

  footer: {
    bigTitle: { pre: 'Let\u2019s make something', accent: 'cute.' },
    blurb: 'eekyme is a one-person studio run by Mahima. Custom handmade crafts, shipped across India.',
    cols: [
      {
        label: 'Shop',
        links: [
          { label: 'Keychains',     href: '#shop' },
          { label: 'Nameplates',    href: '#shop' },
          { label: 'Wall art',      href: '#shop' },
          { label: 'Mini collages', href: '#shop' },
        ],
      },
      {
        label: 'Studio',
        links: [
          { label: 'About Mahima',  href: '#about' },
          { label: 'Custom orders', href: '#custom' },
          { label: 'Instagram',     href: '#insta' },
          { label: 'Contact',       href: '#custom' },
        ],
      },
    ],
    rights: '© 2026 · Made with love · One piece at a time',
  },
};
