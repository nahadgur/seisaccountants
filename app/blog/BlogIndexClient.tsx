'use client';

// app/blog/BlogIndexClient.tsx - Paper Tape edition
// Blog index for the SEIS/EIS site. Uses the site's Header/Footer, paper
// tokens, font-display headings and container-width, so it reads as native.
// Drafts and future-dated posts are excluded from the listing.

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { blogArticles } from '@/data/blog';

export default function BlogIndexClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Only show articles published today or earlier, excluding drafts.
  // String comparison works because dates are YYYY-MM-DD.
  const publishedArticles = useMemo(() => {
    const now = new Date();
    const todayStr =
      now.getFullYear() +
      '-' +
      String(now.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(now.getDate()).padStart(2, '0');
    return blogArticles
      .filter((a) => a.publishDate <= todayStr && !a.draft)
      .sort((a, b) => (b.publishDate > a.publishDate ? 1 : -1));
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(publishedArticles.map((a) => a.category)));
    return ['All', ...cats];
  }, [publishedArticles]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return publishedArticles;
    return publishedArticles.filter((a) => a.category === activeCategory);
  }, [activeCategory, publishedArticles]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* HERO */}
        <section
          className="border-b border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width py-10 md:py-16">
            <span className="eyebrow mb-5 inline-flex">INSIGHTS</span>
            <div className="max-w-3xl">
              <h1 className="font-display text-[40px] md:text-[52px] lg:text-[60px] text-ink-900 leading-[0.98] tracking-tighter mb-6">
                SEIS and EIS, <em className="text-brand-500 italic">explained</em>
              </h1>
              <p className="font-sans text-[15px] md:text-base text-ink-700 leading-relaxed max-w-[600px]">
                Practical articles for UK founders raising under SEIS and EIS. These pieces sit
                alongside our deeper pillar guides and walk through the points founders ask about most.
              </p>
            </div>
          </div>
        </section>

        <section
          className="py-14 md:py-18"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width">

            {publishedArticles.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-sans text-[15px] text-ink-500 italic">
                  No articles yet. Check back soon for SEIS and EIS guidance.
                </p>
              </div>
            ) : (
              <>
                {/* Category filter */}
                {categories.length > 2 && (
                  <div className="mb-10">
                    <div className="masthead mb-4">
                      <span>FILTER</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-4 py-2 rounded-sm text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors border ${
                            activeCategory === cat
                              ? 'bg-brand-500 text-white border-brand-500'
                              : 'bg-white text-ink-900 border-ink-900/15 hover:border-brand-500'
                          }`}
                          type="button"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}/`}
                      className="group block bg-white border border-ink-900/10 rounded-sm overflow-hidden hover:border-brand-500 transition-colors"
                    >
                      <div
                        className="h-32 w-full"
                        style={{
                          background:
                            'linear-gradient(135deg, var(--paper-300) 0%, var(--paper-200) 50%, var(--brand-50) 100%)',
                        }}
                        aria-hidden="true"
                      />
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-3 text-[10px] font-semibold tracking-[0.18em] uppercase">
                          <span className="text-brand-500">{article.category}</span>
                          <span aria-hidden="true" className="text-ink-300">&middot;</span>
                          <span className="text-ink-500">{article.publishDate}</span>
                        </div>
                        <h2 className="font-display text-[18px] text-ink-900 group-hover:text-brand-500 mb-2 leading-snug tracking-tight transition-colors">
                          {article.title}
                        </h2>
                        <p className="font-sans text-[13px] text-ink-700 leading-relaxed mb-4">
                          {article.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1.5 font-display italic text-[13px] text-brand-500 group-hover:translate-x-1 transition-transform">
                          Read article <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {filtered.length === 0 && (
                  <div className="text-center py-12">
                    <p className="font-sans text-[14px] text-ink-500 italic">
                      No articles in this category yet.
                    </p>
                  </div>
                )}
              </>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
