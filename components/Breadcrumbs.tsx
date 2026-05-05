// components/Breadcrumbs.tsx - Paper Tape edition
import Link from 'next/link';
import { siteConfig } from '@/data/site';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': allItems.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.label,
      ...(item.href ? { 'item': `${siteConfig.url}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-500">
        {allItems.map((item, i) => (
          <li key={i} className="flex items-center gap-x-2">
            {i > 0 && <span className="text-ink-300" aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-500 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
