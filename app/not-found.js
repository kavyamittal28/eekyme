// app/not-found.js — friendly 404

import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <p className="kicker">404</p>
        <h1 className="section-title">This page<br/>is hiding.</h1>
        <p className="section-sub mx-auto">It might still be on the work-table. Head back to the shop while we look.</p>
        <Link href="/" className="btn btn-primary">Take me home →</Link>
      </div>
    </main>
  );
}
