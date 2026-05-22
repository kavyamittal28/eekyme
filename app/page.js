// app/page.js — the single marketing page

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Products from '@/components/Products';
import About from '@/components/About';
import Commission from '@/components/Commission';
import Instagram from '@/components/Instagram';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Products />
      <About />
      <Commission />
      <Instagram />
      <Footer />
    </main>
  );
}
