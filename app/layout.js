// app/layout.js — root layout, metadata, fonts, JSON-LD

import './globals.css';
import { Archivo_Black, Inter } from 'next/font/google';
import { site, seo } from '@/data/site.config';
import JsonLd from '@/components/JsonLd';

const display = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: site.makerName }],
  creator: site.makerName,
  publisher: site.name,
  applicationName: site.name,
  category: 'shopping',
  formatDetection: { telephone: false, address: false, email: false },

  alternates: {
    canonical: site.url,
  },

  openGraph: {
    type: 'website',
    siteName: site.name,
    title: seo.defaultTitle,
    description: seo.description,
    url: site.url,
    locale: 'en_IN',
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: seo.defaultTitle,
    description: seo.description,
    site: seo.twitterHandle,
    creator: seo.twitterHandle,
    images: [site.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: site.favicon,
    apple: site.logo,
  },

  // Manifest auto-discovered via app/manifest.js
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  themeColor: '#f5efe1',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-bg text-ink font-body antialiased">
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
