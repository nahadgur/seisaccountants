// app/blog/[slug]/page.tsx
// Server component. Owns metadata, static params, and BlogPosting JSON-LD.
// All interactivity (lead-form modal) lives in BlogArticleClient.tsx.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogArticles, getArticleBySlug } from '@/data/blog';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import BlogArticleClient from './BlogArticleClient';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const url = `${siteConfig.url}/blog/${article.slug}/`;
  const ogImages = article.featuredImage ? [{ url: article.featuredImage }] : undefined;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title: article.metaTitle,
      description: article.metaDescription,
      locale: 'en_GB',
      publishedTime: article.publishDate,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: article.featuredImage ? [article.featuredImage] : undefined,
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const url = `${siteConfig.url}/blog/${article.slug}/`;

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.metaTitle,
    description: article.metaDescription,
    image: article.featuredImage || undefined,
    datePublished: article.publishDate,
    dateModified: article.dateModified ?? article.publishDate,
    author: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    reviewedBy: {
      '@type': 'Person',
      name: 'James Whitfield ACA',
      jobTitle: 'Chartered Accountant and Startup Finance Advisor',
      description:
        'ACA-qualified chartered accountant with over 12 years of experience advising UK startups on tax, compliance, and growth strategy.',
      memberOf: {
        '@type': 'Organization',
        name: 'Institute of Chartered Accountants in England and Wales',
        alternateName: 'ICAEW',
      },
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: 'Blog', href: '/blog/' },
    { label: article.title },
  ]);

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
      <BlogArticleClient article={article} relatedArticles={relatedArticles} />
    </>
  );
}
