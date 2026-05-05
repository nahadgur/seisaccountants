'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { blogArticles } from '@/data/blog';

export default function BlogIndexClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Drip feed: only show articles published today or earlier.
  // String comparison works because dates are YYYY-MM-DD format.
  const publishedArticles = useMemo(() => {
    const now = new Date();
    const todayStr = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0');
    return blogArticles.filter(a => a.publishDate <= todayStr);
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(publishedArticles.map(a => a.category)));
    return ['All', ...cats];
  }, [publishedArticles]);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return publishedArticles;
    return publishedArticles.filter(a => a.category === activeCategory);
  }, [activeCategory, publishedArticles]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        {/* HERO - cream newspaper masthead */}
        <section
          className="border-b border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width pt-6 md:pt-10">
            <div className="flex items-center justify-between pb-3 border-b border-ink-900/40 text-[10px] md:text-[11px] font-semibold tracking-[0.22em] uppercase text-ink-900">
              <span>THE JOURNAL</span>
              <span className="text-brand-500">&#9733; STARTUP FINANCE</span>
              <span className="hidden md:inline">VOL. I</span>
            </div>
          </div>

          <div className="container-width py-12 md:py-16">
            <div className="max-w-3xl">
              <span className="eyebrow mb-4 inline-block">&sect; BLOG</span>
              <h1 className="font-display text-[44px] md:text-[56px] lg:text-[64px] text-ink-900 leading-[0.98] tracking-tighter mb-5">
                Startup finance, <em className="text-brand-500 italic">explained.</em>
              </h1>
              <p className="font-sans text-[15px] md:text-base text-ink-700 leading-relaxed max-w-[560px]">
                Practical finance, tax, and accounting guides to help UK startups get off to the right start.
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
                  No articles yet. Check back soon for helpful guides and advice.
                </p>
              </div>
            ) : (
              <>
                {/* Category filter */}
                {categories.length > 2 && (
                  <div className="mb-10">
                    <div className="masthead mb-4">
                      <span>&sect; FILTER</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-4 py-2 rounded-sm text-[12px] font-medium tracking-[0.12em] uppercase transition-colors border ${
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
                  {filtered.map(article => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}/`}
                      className="group block bg-white border border-ink-900/10 rounded-sm overflow-hidden hover:border-brand-500 transition-colors"
                    >
                      <div
                        className="h-44 overflow-hidden"
                        style={{ backgroundColor: 'var(--paper-300)' }}
                      >
                        {article.featuredImage ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div
                            className="w-full h-full"
                            style={{
                              background: 'linear-gradient(135deg, var(--paper-300) 0%, var(--paper-200) 50%, var(--brand-50) 100%)',
                            }}
                          />
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-3 text-[10px] font-semibold tracking-[0.18em] uppercase">
                          <span className="text-brand-500">{article.category}</span>
                          <span aria-hidden="true" className="text-ink-300">&middot;</span>
                          <span className="text-ink-500">{article.publishDate}</span>
                        </div>
                        <h2 className="font-display text-[17px] text-ink-900 group-hover:text-brand-500 mb-2 leading-snug tracking-tight line-clamp-2 transition-colors">
                          {article.title}
                        </h2>
                        <p className="font-sans text-[13px] text-ink-700 leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
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
