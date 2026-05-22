// ─────────────────────────────────────────────────────────────────────────────
//  PRODUCTS — the catalog. Add/remove pieces here.
//  `image` is resolved against /public/products/.
//  `type` must match one of the `id`s in CATEGORIES.
// ─────────────────────────────────────────────────────────────────────────────

export const products = [
  {
    id: 'durga-boutique',
    name: 'Durga Boutique Nameplate',
    cat: 'Nameplate',
    type: 'nameplate',
    badge: 'BESTSELLER',
    image: '/products/durga-boutique.png',
    desc: 'Custom embroidered nameplate on jewel-tone velvet — perfect for boutiques, shops, and home doors. Personalize the colors, lettering, and trim.',
  },
  {
    id: 'bear-collage',
    name: 'Honey Bear Mini Canvas',
    cat: 'Collage',
    type: 'collage',
    badge: null,
    image: '/products/bear-collage.png',
    desc: 'A hand-painted mini canvas with a custom illustrated scene. Pick your characters — pets, partners, favorite cartoons — Mahima paints to order.',
  },
  {
    id: 'elephant-key',
    name: 'Baby Elephant Keychain',
    cat: 'Keychain',
    type: 'keychain',
    badge: 'NEW',
    image: '/products/elephant-key.png',
    desc: 'Adorable polymer clay elephant keychain in your choice of color. Roughly 2 inches; each one is hand-sculpted and unique.',
  },
  {
    id: 'gaurisha-couple',
    name: 'Wedding Couple Plate',
    cat: 'Nameplate',
    type: 'nameplate',
    badge: 'CUSTOM',
    image: '/products/gaurisha-couple.png',
    desc: 'Hand-painted couple nameplate with names + wedding date. A favorite wedding gift — pick attire, skin tones, and accent colors.',
  },
  {
    id: 'hoodas-hanging',
    name: "Hooda's Wall Hanging",
    cat: 'Wall art',
    type: 'wallart',
    badge: null,
    image: '/products/hoodas-hanging.png',
    desc: 'Round mirror centerpiece framed with mirror work and beaded tassels. Customize the name, base color, and tassel mix.',
  },
  {
    id: 'stranger-things',
    name: 'Stranger Things Demogorgon Charm',
    cat: 'Keychain',
    type: 'keychain',
    badge: 'POP CULTURE',
    image: '/products/stranger-things.png',
    desc: 'Fandom keychain — Demogorgon flower from Stranger Things. Any movie, show, or character on request.',
  },
  {
    id: 'panda-key',
    name: 'Lil Panda Keychain',
    cat: 'Keychain',
    type: 'keychain',
    badge: null,
    image: '/products/panda-key.png',
    desc: 'A handmade clay panda with a flower clip. Tiny, sturdy, and impossibly cute. Add a name tag for an extra vibe upgrade.',
  },
  {
    id: 'food-keychains',
    name: 'Foodie Charms Set',
    cat: 'Keychain',
    type: 'keychain',
    badge: 'SET OF 5',
    image: '/products/food-keychains.png',
    desc: 'A miniature feast on your keys — strawberry, watermelon, donut, taco, and chocolate. Mix-and-match available.',
  },
  {
    id: 'arun-anjali',
    name: 'Arun & Anjali Pink Plate',
    cat: 'Nameplate',
    type: 'nameplate',
    badge: null,
    image: '/products/arun-anjali.png',
    desc: 'Pastel pink couple nameplate with pressed-flower trim. Resin-coated for durability. Names, font, and flowers chosen by you.',
  },
];

export const categories = [
  { id: 'all',       label: 'All work' },
  { id: 'keychain',  label: 'Keychains' },
  { id: 'nameplate', label: 'Nameplates' },
  { id: 'wallart',   label: 'Wall art' },
  { id: 'collage',   label: 'Mini collages' },
];
