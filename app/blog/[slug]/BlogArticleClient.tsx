'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, BadgeCheck, Shield } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { BlogArticle, ContentBlock } from '@/data/blog';

interface Props {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'p':
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-5 text-base md:text-lg">
          {block.text || ''}
        </p>
      );

    case 'h2':
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-display font-bold text-gray-900 mt-12 mb-4 pb-3 border-b-2 border-brand-100">
          {block.text || ''}
        </h2>
      );

    case 'h3':
      return (
        <h3 key={index} className="text-xl md:text-2xl font-display font-semibold text-gray-800 mt-8 mb-3 pl-3 border-l-4 border-brand-400">
          {block.text || ''}
        </h3>
      );

    case 'list':
      return (
        <ul key={index} className="space-y-3 mb-6 pl-1">
          {(block.items || []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
              <span className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'img':
      return (
        <figure key={index} className="my-8 rounded-xl overflow-hidden shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src || ''}
            alt={block.alt || ''}
            className="w-full object-cover"
            loading="lazy"
          />
          {block.alt && (
            <figcaption className="text-xs text-gray-400 mt-2 px-3 pb-3 text-center bg-gray-50">
              {block.alt}
            </figcaption>
          )}
        </figure>
      );

    case 'table': {
      const rows = (block.text || '').split('\n').filter(r => r.trim());
      const headerCells = rows[0]?.split(' | ') || [];
      const bodyRows = rows.slice(1);
      return (
        <div key={index} className="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-md">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                {headerCells.map((cell, j) => (
                  <th key={j} className="px-5 py-4 font-semibold text-xs uppercase tracking-widest whitespace-nowrap border-r border-gray-700 last:border-r-0">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, i) => {
                const cells = row.split(' | ');
                return (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-white hover:bg-brand-50' : 'bg-gray-50 hover:bg-brand-50'}
                    style={{ transition: 'background 0.15s' }}
                  >
                    {cells.map((cell, j) => (
                      <td key={j} className="px-5 py-3.5 text-gray-700 border-t border-gray-100 border-r border-gray-100 last:border-r-0 align-top">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }

    case 'cta':
      return (
        <div key={index} className="bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 rounded-2xl p-8 my-10 text-center shadow-sm">
          <p className="font-display font-bold text-gray-900 text-xl mb-2">{block.text || 'Get Help With Your Startup Finances'}</p>
          <p className="text-sm text-gray-600 mb-5">Speak to a vetted accountant who specialises in startups and new businesses. Free, no obligation.</p>
        </div>
      );

    case 'related-articles':
      return (
        <div key={index} className="my-8">
          <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Related Reading</h3>
          <div className="grid gap-3">
            {(block.articles || []).map((rel, i) => (
              <Link
                key={i}
                href={`/blog/${rel.slug}/`}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all"
              >
                {rel.image && (
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <span className="font-medium text-gray-700 text-sm">{rel.title}</span>
              </Link>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogArticleClient({ article, relatedArticles }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <section className="bg-gray-900 text-white relative overflow-hidden">
          {article.featuredImage ? (
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.featuredImage} alt="" className="w-full h-full object-cover opacity-30" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-gray-900/0 to-transparent pointer-events-none" />
          )}
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: article.title }]} />
            <div className="max-w-3xl mt-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-brand-300">
                  <Tag className="w-3.5 h-3.5" /> {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
                  <Calendar className="w-3.5 h-3.5" /> {article.publishDate}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-brand-300">
                  <BadgeCheck className="w-3.5 h-3.5" /> Reviewed by James Whitfield ACA
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        <div className="container-width py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2 max-w-none">
              {article.content.map((block, i) => renderBlock(block, i))}

              {/* Reviewer Profile */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center">
                    <Shield className="w-7 h-7 text-brand-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">Reviewed by James Whitfield ACA</h4>
                      <BadgeCheck className="w-4 h-4 text-brand-500" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Chartered Accountant &amp; Startup Finance Advisor</p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      James is an ACA-qualified chartered accountant and member of the Institute of Chartered Accountants in England and Wales (ICAEW) with over 12 years of experience advising UK startups on tax planning, SEIS/EIS structuring, R&amp;D tax credits, and growth strategy. All articles on this site are reviewed for technical accuracy before publication.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-3">Get Startup Accounting Help</h3>
                  <p className="text-gray-600 text-sm mb-5">
                    We'll match you with a vetted accountant who specialises in UK startups. Free, no obligation.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full btn-primary text-center"
                  >
                    Find an Accountant
                  </button>
                </div>

                {relatedArticles.length > 0 && (
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 text-sm mb-3">More Articles</h3>
                    <div className="space-y-3">
                      {relatedArticles.map(rel => (
                        <Link
                          key={rel.slug}
                          href={`/blog/${rel.slug}/`}
                          className="block text-sm text-gray-600 hover:text-brand-600 transition-colors font-medium leading-snug"
                        >
                          {rel.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tip box */}
                <div className="bg-brand-600 text-white p-5 rounded-2xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-200 mb-2">Founder tip</p>
                  <p className="text-sm leading-relaxed">
                    UK startups can claim R&D tax credits worth up to 33p for every £1 spent on qualifying innovation, one of the most underused reliefs for early-stage businesses.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/blog/" className="inline-flex items-center gap-2 text-brand-600 font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
