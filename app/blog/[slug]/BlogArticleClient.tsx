'use client';

// app/blog/[slug]/BlogArticleClient.tsx - Paper Tape edition
// Renders a blog article using the SEIS/EIS site's design system: paper
// tokens, font-display headings, container-width, masthead/eyebrow markers,
// and the shared Header/Footer/LeadFormModal/Breadcrumbs.
//
// Content blocks supported: h2, h3, p, table (structured headers/rows), list.
// Inline links: bare internal paths (/blog/... and /guides/...) inside p text
// are auto-linked to Next <Link>; markdown [label](https://...) becomes an
// external anchor. No images are rendered.

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Layers, Clock, Tag, Calendar } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import type { BlogArticle, ContentBlock } from '@/data/blog';
import type { Guide } from '@/data/guides';

interface Props {
  article: BlogArticle;
  hubGuide?: Guide;
  siblingSpokes?: BlogArticle[];
}

// Split paragraph text into nodes, converting:
//  - bare internal paths (/blog/... or /guides/...) into Next <Link>
//  - markdown [label](https://...) into external <a>
function renderInlineNodes(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Combined matcher: markdown external links OR bare internal paths.
  const re = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(\/(?:blog|guides)\/[a-z0-9-]+\/)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let n = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] && match[2]) {
      // markdown external link
      nodes.push(
        <a
          key={`${keyPrefix}-a-${n}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 hover:text-brand-700 underline underline-offset-[3px] decoration-[1.5px]"
        >
          {match[1]}
        </a>
      );
    } else if (match[3]) {
      // bare internal path
      nodes.push(
        <Link
          key={`${keyPrefix}-l-${n}`}
          href={match[3]}
          className="text-brand-500 hover:text-brand-700 underline underline-offset-[3px] decoration-[1.5px]"
        >
          {match[3]}
        </Link>
      );
    }
    lastIndex = match.index + match[0].length;
    n += 1;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'p':
      return (
        <p key={index} className="font-sans text-[15px] text-ink-700 leading-[1.75] mb-5">
          {renderInlineNodes(block.text || '', `p${index}`)}
        </p>
      );

    case 'h2':
      return (
        <div key={index} className="scroll-mt-24 mt-12 mb-5">
          <div className="masthead mb-4">
            <span>{(block.text || '').toUpperCase().slice(0, 30)}</span>
          </div>
          <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 leading-[1.1] tracking-tight">
            {block.text || ''}
          </h2>
        </div>
      );

    case 'h3':
      return (
        <h3
          key={index}
          className="font-display text-[19px] md:text-[21px] text-ink-900 leading-snug tracking-tight mt-8 mb-3"
        >
          {block.text || ''}
        </h3>
      );

    case 'list':
      return (
        <ul key={index} className="space-y-3 mb-6">
          {(block.items || []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-sans text-[15px] text-ink-700 leading-[1.7]">
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0 mt-2.5" aria-hidden="true" />
              <span>{renderInlineNodes(item, `li${index}-${i}`)}</span>
            </li>
          ))}
        </ul>
      );

    case 'table': {
      // Prefer structured headers/rows; fall back to pipe-delimited text.
      let headers = block.headers || [];
      let rows = block.rows || [];
      if (headers.length === 0 && block.text) {
        const lines = block.text.split('\n').filter((r) => r.trim());
        headers = (lines[0] || '').split('|').map((c) => c.trim());
        rows = lines.slice(1).map((r) => r.split('|').map((c) => c.trim()));
      }
      return (
        <div key={index} className="my-8 overflow-x-auto">
          <table className="w-full border border-ink-900/15 bg-white rounded-sm overflow-hidden">
            <thead>
              <tr className="bg-ink-900 text-paper-100">
                {headers.map((h, i) => (
                  <th key={i} className="text-left px-4 py-3 font-display text-[13px] tracking-tight">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-paper-50' : ''}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-4 py-3 font-sans text-[13.5px] text-ink-700 border-t border-ink-900/10 leading-snug align-top"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    default:
      return null;
  }
}

export default function BlogArticleClient({ article, hubGuide, siblingSpokes = [] }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbItems = hubGuide
    ? [
        { label: 'Guides', href: '/guides/' },
        { label: hubGuide.shortTitle, href: `/guides/${hubGuide.slug}/` },
        { label: article.title },
      ]
    : [{ label: 'Insights', href: '/blog/' }, { label: article.title }];

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
          <div className="container-width py-10 md:py-14">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5 text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-500">
                {hubGuide ? (
                  <span className="inline-flex items-center gap-1.5 text-brand-500">
                    <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                    Part {article.hubSeriesNumber || ''} of the {hubGuide.shortTitle} series
                  </span>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-1.5 text-brand-500">
                      <Tag className="w-3.5 h-3.5" aria-hidden="true" /> {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" /> {article.publishDate}
                    </span>
                  </>
                )}
                {article.readingMins && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {article.readingMins} min read
                  </span>
                )}
              </div>
              <h1 className="font-display text-[34px] md:text-[44px] lg:text-[52px] text-ink-900 leading-[1.0] tracking-tighter">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        <div
          className="container-width py-12 md:py-16"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <article className="lg:col-span-2 max-w-none">
              {article.content.map((block, i) => renderBlock(block, i))}

              {/* Hub upward link at end of article */}
              {hubGuide && (
                <div className="mt-12 bg-white border border-ink-900/10 rounded-sm p-6 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                  <p className="eyebrow mb-3">CONTINUE THE SERIES</p>
                  <Link
                    href={`/guides/${hubGuide.slug}/`}
                    className="group block font-display text-[20px] md:text-[22px] text-ink-900 hover:text-brand-500 leading-snug tracking-tight transition-colors"
                  >
                    {hubGuide.title}
                    <ArrowRight className="inline w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                  <p className="font-sans text-[14px] text-ink-700 mt-2 leading-relaxed">
                    Read the complete pillar guide and the rest of the series.
                  </p>
                </div>
              )}

              <div className="mt-10 pt-6 border-t border-ink-900/10">
                <Link
                  href="/blog/"
                  className="inline-flex items-center gap-2 font-display italic text-[14px] text-brand-500 hover:text-brand-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to all articles
                </Link>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">

                {/* Match CTA */}
                <div className="bg-white border border-ink-900/10 rounded-sm p-6">
                  <h2 className="font-display text-[19px] text-ink-900 leading-snug tracking-tight mb-3">
                    Raising SEIS or EIS?
                  </h2>
                  <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed mb-5">
                    Get matched with a vetted, scheme-experienced accountant who handles advance
                    assurance through to investor certificates. Free, no obligation.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full btn-primary"
                    type="button"
                  >
                    Get matched &nbsp;&rarr;
                  </button>
                </div>

                {/* Sibling spokes */}
                {hubGuide && siblingSpokes.length > 0 && (
                  <div className="bg-paper-200 border border-ink-900/8 rounded-sm p-5">
                    <div className="masthead mb-4">
                      <span>MORE IN THIS SERIES</span>
                    </div>
                    <div className="space-y-3">
                      {siblingSpokes.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/blog/${rel.slug}/`}
                          className="block font-display text-[14.5px] text-ink-900 hover:text-brand-500 leading-snug tracking-tight transition-colors"
                        >
                          {rel.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hub link card */}
                {hubGuide && (
                  <Link
                    href={`/guides/${hubGuide.slug}/`}
                    className="group block bg-ink-900 text-white rounded-sm p-5 hover:bg-brand-700 transition-colors"
                  >
                    <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase text-brand-300 font-semibold mb-2">
                      Pillar guide
                    </span>
                    <p className="font-display text-[16px] text-white leading-snug tracking-tight">
                      {hubGuide.shortTitle}: the complete guide
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-display italic text-[13px] text-brand-300 mt-3 group-hover:translate-x-1 transition-transform">
                      Read the guide <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                )}

              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
