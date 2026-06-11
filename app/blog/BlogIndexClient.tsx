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

// Mini-hero line art for blog cards. All articles share one category, so the
// motif is chosen deterministically from the slug to keep the grid visually
// varied. Teal is the brand stroke; amber is the accent. Drawn on the same
// paper-to-brand gradient the cards already used.
const CARD_TEAL = '#0E5E62';
const CARD_AMBER = '#C9821B';

function CardArt({ slug }: { slug: string }) {
  const hash = slug.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const motif = hash % 6;

  return (
    <div
      className="h-32 w-full"
      style={{
        background:
          'linear-gradient(135deg, var(--paper-300) 0%, var(--paper-200) 50%, var(--brand-50) 100%)',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 160"
        className="h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {motif === 0 && (
          /* Growth bars + arrow: raising a round */
          <g>
            <rect x="150" y="96" width="20" height="34" rx="3" fill={CARD_TEAL} opacity="0.25" />
            <rect x="180" y="78" width="20" height="52" rx="3" fill={CARD_TEAL} opacity="0.45" />
            <rect x="210" y="58" width="20" height="72" rx="3" fill={CARD_TEAL} opacity="0.7" />
            <path d="M150 70 L185 56 L215 64 L250 38" stroke={CARD_AMBER} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M236 36 L252 36 L252 52" stroke={CARD_AMBER} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {motif === 1 && (
          /* Shield + check: advance assurance */
          <g>
            <path d="M200 40 L236 52 L236 88 C236 108 220 120 200 128 C180 120 164 108 164 88 L164 52 Z" stroke={CARD_TEAL} strokeWidth="3.5" strokeLinejoin="round" fill={CARD_TEAL} fillOpacity="0.08" />
            <path d="M185 86 L196 98 L218 72" stroke={CARD_AMBER} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {motif === 2 && (
          /* Certificate: SEIS3 / compliance statement */
          <g>
            <rect x="158" y="42" width="84" height="76" rx="4" stroke={CARD_TEAL} strokeWidth="3.5" fill={CARD_TEAL} fillOpacity="0.06" />
            <line x1="172" y1="62" x2="228" y2="62" stroke={CARD_TEAL} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <line x1="172" y1="76" x2="228" y2="76" stroke={CARD_TEAL} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <line x1="172" y1="90" x2="208" y2="90" stroke={CARD_TEAL} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <circle cx="218" cy="104" r="13" fill={CARD_AMBER} fillOpacity="0.85" />
            <path d="M218 98 L218 116 M212 110 L218 116 L224 110" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {motif === 3 && (
          /* Percent badge: relief rate */
          <g>
            <circle cx="200" cy="84" r="42" stroke={CARD_TEAL} strokeWidth="3.5" fill={CARD_TEAL} fillOpacity="0.06" />
            <circle cx="186" cy="70" r="9" stroke={CARD_AMBER} strokeWidth="4" />
            <circle cx="214" cy="98" r="9" stroke={CARD_AMBER} strokeWidth="4" />
            <line x1="216" y1="64" x2="184" y2="104" stroke={CARD_TEAL} strokeWidth="4" strokeLinecap="round" />
          </g>
        )}
        {motif === 4 && (
          /* Connected nodes: the connected-person rule */
          <g>
            <line x1="200" y1="58" x2="164" y2="104" stroke={CARD_TEAL} strokeWidth="3" opacity="0.5" />
            <line x1="200" y1="58" x2="236" y2="104" stroke={CARD_TEAL} strokeWidth="3" opacity="0.5" />
            <line x1="164" y1="104" x2="236" y2="104" stroke={CARD_TEAL} strokeWidth="3" opacity="0.5" />
            <circle cx="200" cy="58" r="13" fill={CARD_AMBER} />
            <circle cx="164" cy="104" r="11" fill={CARD_TEAL} fillOpacity="0.7" />
            <circle cx="236" cy="104" r="11" fill={CARD_TEAL} fillOpacity="0.7" />
          </g>
        )}
        {motif === 5 && (
          /* Coin stack: investment limits */
          <g>
            <ellipse cx="200" cy="58" rx="34" ry="11" stroke={CARD_TEAL} strokeWidth="3.5" fill={CARD_TEAL} fillOpacity="0.1" />
            <path d="M166 58 L166 80 C166 86 181 91 200 91 C219 91 234 86 234 80 L234 58" stroke={CARD_TEAL} strokeWidth="3.5" />
            <path d="M166 80 L166 102 C166 108 181 113 200 113 C219 113 234 108 234 102 L234 80" stroke={CARD_AMBER} strokeWidth="3.5" />
            <line x1="200" y1="100" x2="200" y2="110" stroke={CARD_AMBER} strokeWidth="3" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
}

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
                      <CardArt slug={article.slug} />
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
