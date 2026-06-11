// lib/renderInlineLinks.tsx
// Tiny inline-link renderer. Lets long-form content (guide paragraphs)
// embed authoritative outbound links using markdown-style [text](url)
// syntax, rendered as <a target="_blank" rel="noopener noreferrer">
// with a subtle brand-coloured underline.
//
// Usage:
//   {paragraphs.map((p, i) => (
//     <p key={i}>{renderInlineLinks(p)}</p>
//   ))}
//
// In the content string:
//   "...most founders apply via [HMRC's advance assurance portal](https://www.gov.uk/...)..."

import React from 'react';
import Link from 'next/link';

// Match markdown-style [label](url) for both external (http/https) and
// internal (/path) URLs. 'g' flag is intentional — the same regex object is
// reused via exec inside the function-scoped let, so we reset its lastIndex
// on each call.
const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function renderInlineLinks(text: string): React.ReactNode[] {
  if (!text.includes('[')) {
    // Fast-path: no link syntax present, return raw string in an array.
    return [text];
  }

  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  LINK_RE.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, url] = match;
    if (/^https?:\/\//.test(url)) {
      nodes.push(
        <a
          key={`${match.index}-${url}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 hover:text-brand-700 underline underline-offset-[3px] decoration-[1.5px]"
        >
          {label}
        </a>,
      );
    } else {
      nodes.push(
        <Link
          key={`${match.index}-${url}`}
          href={url}
          className="text-brand-500 hover:text-brand-700 underline underline-offset-[3px] decoration-[1.5px]"
        >
          {label}
        </Link>,
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
