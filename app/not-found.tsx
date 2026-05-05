// app/not-found.tsx - Paper Tape edition
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className="flex-grow"
        style={{ backgroundColor: 'var(--paper-100)' }}
      >
        <div className="container-width py-20 md:py-28 text-center max-w-2xl">
          <span className="eyebrow mb-4 inline-block">PAGE NOT FOUND</span>
          <h1 className="font-display italic text-[96px] md:text-[140px] text-brand-500 leading-none tracking-tighter mb-4">
            404
          </h1>
          <p className="font-display text-[22px] md:text-[26px] text-ink-900 mb-4 tracking-tight leading-snug">
            That page <em className="text-brand-500 italic">doesn&apos;t exist.</em>
          </p>
          <p className="font-sans text-[14px] text-ink-700 mb-10 leading-relaxed max-w-md mx-auto">
            The page you are looking for may have moved or been removed. Try one of the links below, or head back to the homepage.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Link href="/" className="btn-primary">Go home</Link>
            <Link href="/services/" className="btn-secondary">Browse services</Link>
          </div>

          <div className="text-left bg-white border border-ink-900/10 rounded-sm p-6">
            <span className="eyebrow mb-4 block">POPULAR PAGES</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              <li><Link href="/services/" className="font-display italic text-[14px] text-brand-500 hover:text-brand-700">All services &rarr;</Link></li>
              <li><Link href="/guides/" className="font-display italic text-[14px] text-brand-500 hover:text-brand-700">Free guides &rarr;</Link></li>
              <li><Link href="/location/" className="font-display italic text-[14px] text-brand-500 hover:text-brand-700">Areas we cover &rarr;</Link></li>
              <li><Link href="/how-we-vet/" className="font-display italic text-[14px] text-brand-500 hover:text-brand-700">How we vet &rarr;</Link></li>
              <li><Link href="/contact/" className="font-display italic text-[14px] text-brand-500 hover:text-brand-700">Contact &rarr;</Link></li>
              <li><Link href="/privacy/" className="font-display italic text-[14px] text-brand-500 hover:text-brand-700">Privacy policy &rarr;</Link></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
