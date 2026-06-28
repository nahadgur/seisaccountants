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
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SpokeHero } from '@/components/SpokeHero';
import type { BlogArticle, ContentBlock } from '@/data/blog';
import type { Guide } from '@/data/guides';

interface Props {
  article: BlogArticle;
  hubGuide?: Guide;
  siblingSpokes?: BlogArticle[];
}

// Reusable lead-capture banner, reusing the site's existing match CTA copy and
// the same lead-form modal the removed sidebar button opened.
function LeadCtaBanner({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="my-10 bg-ink-900 text-paper-100 rounded-sm px-6 py-6 md:px-10 md:py-7 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
      <h2 className="font-display text-[18px] lg:text-[21px] text-white leading-snug tracking-tight mb-1.5">
        Raising SEIS or EIS?
      </h2>
      <p className="font-sans text-[14.5px] text-paper-300 leading-snug mb-4 max-w-2xl">
        Get matched with a vetted, scheme-experienced accountant who handles advance
        assurance through to investor certificates. Free, no obligation.
      </p>
      <button onClick={onOpen} className="btn-primary py-2.5" type="button">
        Get matched &nbsp;&rarr;
      </button>
    </div>
  );
}

// Split paragraph text into nodes, converting:
//  - bare internal paths (/blog/... or /guides/...) into Next <Link>
//  - markdown [label](https://...) into external <a>
function renderInlineNodes(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Combined matcher: markdown links [label](url) where url is external OR
  // internal, OR a bare internal path. The markdown alternative is listed
  // first so an internal-href markdown link is consumed whole rather than
  // the engine matching only the bare path inside the parens.
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|(\/(?:blog|guides)\/[a-z0-9-]+\/)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let n = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] && match[2]) {
      const label = match[1];
      const url = match[2];
      if (/^https?:\/\//.test(url)) {
        // markdown external link
        nodes.push(
          <a
            key={`${keyPrefix}-a-${n}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 hover:text-brand-700 underline underline-offset-[3px] decoration-[1.5px]"
          >
            {label}
          </a>
        );
      } else {
        // markdown internal link -> client-side navigation
        nodes.push(
          <Link
            key={`${keyPrefix}-il-${n}`}
            href={url}
            className="text-brand-500 hover:text-brand-700 underline underline-offset-[3px] decoration-[1.5px]"
          >
            {label}
          </Link>
        );
      }
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

export default function BlogArticleClient({ article, hubGuide }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Inject a mid-article lead CTA immediately before the 2nd h2 in the body.
  const secondH2Index = (() => {
    let count = 0;
    for (let i = 0; i < article.content.length; i += 1) {
      if (article.content[i].type === 'h2') {
        count += 1;
        if (count === 2) return i;
      }
    }
    return -1;
  })();

  const breadcrumbItems = hubGuide
    ? [
        { label: 'Guides', href: '/guides/' },
        { label: hubGuide.shortTitle, href: `/guides/${hubGuide.slug}/` },
        { label: article.title },
      ]
    : [{ label: 'Blog', href: '/blog/' }, { label: article.title }];

  // Read time: prefer the data field, else estimate from body word count.
  const readMins =
    article.readingMins ||
    Math.max(
      3,
      Math.round(
        article.content.reduce((sum, b) => {
          const t = b.text || (b.items ? b.items.join(' ') : '');
          return sum + t.trim().split(/\s+/).filter(Boolean).length;
        }, 0) / 200
      )
    );

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
            <div className="mt-5">
              <SpokeHero
                title={article.title}
                hubName={hubGuide ? hubGuide.shortTitle : null}
                hubSlug={hubGuide ? hubGuide.slug : article.slug}
                readMins={readMins}
              />
            </div>
            <h1 className="sr-only">{article.title}</h1>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-500">
                <span className="inline-flex items-center gap-1.5 text-brand-500">
                  <Tag className="w-3.5 h-3.5" aria-hidden="true" /> {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" /> {article.publishDate}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {readMins} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        <div
          className="container-width py-12 md:py-16"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <article className="max-w-none">
            {article.content.flatMap((block, i) => {
              const rendered = renderBlock(block, i);
              if (i === secondH2Index) {
                return [
                  <LeadCtaBanner key={`cta-mid-${i}`} onOpen={() => setIsModalOpen(true)} />,
                  rendered,
                ];
              }
              return [rendered];
            })}

            {/* End-of-article lead CTA */}
            <LeadCtaBanner onOpen={() => setIsModalOpen(true)} />

            <div className="mt-10 pt-6 border-t border-ink-900/10">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 font-display italic text-[14px] text-brand-500 hover:text-brand-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to all articles
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
