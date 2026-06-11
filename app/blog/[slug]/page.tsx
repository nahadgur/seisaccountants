// app/blog/[slug]/page.tsx
// Server component. Owns metadata, static params, and BlogPosting JSON-LD.
// Interactivity (lead-form modal) lives in BlogArticleClient.tsx.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogArticles, getArticleBySlug } from '@/data/blog';
import { getGuideBySlug } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import BlogArticleClient from './BlogArticleClient';

interface Props {
  params: { slug: string };
}

// Drafts are excluded from static generation: a draft slug returns notFound.
export function generateStaticParams() {
  return blogArticles.filter((a) => !a.draft).map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = `${siteConfig.url}/blog/${article.slug}/`;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    robots: article.draft
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title: article.metaTitle,
      description: article.metaDescription,
      locale: 'en_GB',
      publishedTime: article.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  // Drafts are not statically generated and should not render: treat as missing.
  if (!article || article.draft) notFound();

  const url = `${siteConfig.url}/blog/${article.slug}/`;

  // Hub-and-spoke wiring: surface the parent guide and the sibling spokes.
  const hubGuide = article.hub ? getGuideBySlug(article.hub) : undefined;
  const siblingSpokes = article.hub
    ? blogArticles
        .filter((a) => a.hub === article.hub && a.slug !== article.slug && !a.draft)
        .sort((a, b) => (a.hubSeriesNumber || 99) - (b.hubSeriesNumber || 99))
    : [];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.metaTitle,
    description: article.metaDescription,
    datePublished: article.publishDate,
    dateModified: article.dateModified ?? article.publishDate,
    author: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const breadcrumbSchema = buildBreadcrumbSchema(
    hubGuide
      ? [
          { label: 'Guides', href: '/guides/' },
          { label: hubGuide.shortTitle, href: `/guides/${hubGuide.slug}/` },
          { label: article.title },
        ]
      : [
          { label: 'Blog', href: '/blog/' },
          { label: article.title },
        ]
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogArticleClient
        article={article}
        hubGuide={hubGuide}
        siblingSpokes={siblingSpokes}
      />
    </>
  );
}
