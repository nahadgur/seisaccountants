// lib/breadcrumbs.ts
// Shared BreadcrumbList JSON-LD generator.
// Used by server page.tsx files so breadcrumb schema stays consistent site-wide.

import { siteConfig } from '@/data/site';

export interface BreadcrumbCrumb {
  /** Visible label (e.g. "Services") */
  label: string;
  /** Absolute path relative to siteConfig.url (e.g. "/services/"). Omit for the final current crumb. */
  href?: string;
}

/**
 * Build a BreadcrumbList schema. Home is prepended automatically.
 *
 * Example:
 *   buildBreadcrumbSchema([
 *     { label: 'Services', href: '/services/' },
 *     { label: 'R&D Tax Credits' },
 *   ])
 */
export function buildBreadcrumbSchema(items: BreadcrumbCrumb[]): object {
  const all: BreadcrumbCrumb[] = [{ label: 'Home', href: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };
}
