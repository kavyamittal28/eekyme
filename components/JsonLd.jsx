// components/JsonLd.jsx — structured data for SEO (LocalBusiness + ItemList)

import { site, social } from '@/data/site.config';
import { products } from '@/data/products';

export default function JsonLd() {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': site.url,
    name: site.name,
    alternateName: `${site.name} by ${site.makerName}`,
    description: site.longDescription,
    url: site.url,
    image: `${site.url}${site.logo}`,
    logo: `${site.url}${site.logo}`,
    foundingDate: String(site.foundedYear),
    founder: { '@type': 'Person', name: site.makerName },
    address: { '@type': 'PostalAddress', addressCountry: 'IN' },
    sameAs: [social.instagram.url].filter(Boolean),
    priceRange: '$$',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
  };

  const catalog = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${site.name} catalog`,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        category: p.cat,
        image: `${site.url}${p.image}`,
        description: p.desc,
        brand: { '@type': 'Brand', name: site.name },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/MadeToOrder',
          priceCurrency: 'INR',
          url: social.instagram.url,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalog) }}
      />
    </>
  );
}
