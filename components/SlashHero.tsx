// components/SlashHero.tsx - Paper Tape edition
// Formerly a dark-themed diagonal-slash hero. Rebuilt as a cream Paper
// Tape hero. Same props preserved so existing callers work unchanged:
// breadcrumbs, eyebrow, title, subtitle, image, right, bullets,
// mobileBadges.

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface BreadcrumbItem { label: string; href?: string; }

interface SlashHeroProps {
 breadcrumbs?: BreadcrumbItem[];
 eyebrow?: React.ReactNode;
 title: React.ReactNode;
 subtitle?: string;
 image: string;
 right: React.ReactNode;
 bullets?: string[];
 mobileBadges?: string[];
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
 const all = [{ label: 'Home', href: '/' }, ...items];
 const schema = {
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: all.map((item, i) => ({
 '@type': 'ListItem',
 position: i + 1,
 name: item.label,
 ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
 })),
 };
 return (
 <nav aria-label="Breadcrumb" className="mb-6">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
 <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-500">
 {all.map((item, i) => (
 <li key={i} className="flex items-center gap-x-2">
 {i > 0 && <span className="text-ink-300" aria-hidden="true">/</span>}
 {item.href
 ? <Link href={item.href} className="hover:text-brand-500 transition-colors">{item.label}</Link>
 : <span className="text-ink-900">{item.label}</span>}
 </li>
 ))}
 </ol>
 </nav>
 );
}

export function SlashHero({
 breadcrumbs,
 eyebrow,
 title,
 subtitle,
 image,
 right,
 bullets = [],
 mobileBadges = [],
}: SlashHeroProps) {
 return (
 <section
 className="relative border-b border-ink-900/10"
 style={{ backgroundColor: 'var(--paper-100)' }}
 >
 <div className="container-width relative z-10 pt-10 md:pt-14 pb-10 md:pb-14">
 {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

 {/* LEFT COLUMN - text + optional polaroid image */}
 <div className="lg:col-span-7">
 {eyebrow && (
 <div className="mb-5">{eyebrow}</div>
 )}

 <h1 className="font-display text-[44px] md:text-[56px] lg:text-[64px] text-ink-900 leading-[0.98] tracking-tighter mb-6">
 {title}
 </h1>

 {subtitle && (
 <p className="hidden md:block font-sans text-[15px] md:text-base text-ink-700 leading-relaxed mb-6 max-w-[520px]">
 {subtitle}
 </p>
 )}

 {/* Polaroid showing service image - visible on desktop under the text */}
 {image && (
 <div
 className="hidden md:block relative mt-6 mb-4 max-w-[360px]"
 style={{ transform: 'rotate(-1.5deg)' }}
 >
 <span
 className="tape tape-sm"
 style={{ top: '-9px', left: '22%', transform: 'rotate(-4deg)' }}
 aria-hidden="true"
 />
 <div className="bg-white p-2 pb-6 border border-ink-900/8">
 <div className="relative aspect-[16/10] overflow-hidden bg-paper-300">
 <Image
 src={image}
 alt=""
 fill
 sizes="(min-width: 1024px) 360px, 0px"
 className="object-cover"
 priority
 aria-hidden="true"
 />
 </div>
 <span className="polaroid-caption">IN PRACTICE</span>
 </div>
 </div>
 )}

 {/* Mobile trust chips */}
 {mobileBadges.length > 0 && (
 <div className="flex flex-wrap gap-x-3 gap-y-2 mb-6 md:hidden text-[10px] font-semibold tracking-[0.18em] uppercase text-ink-500">
 {mobileBadges.map((badge, i) => (
 <span key={badge} className="flex items-center gap-3">
 {i > 0 && <span aria-hidden="true" className="text-ink-300">&middot;</span>}
 <span>{badge}</span>
 </span>
 ))}
 </div>
 )}

 {/* Desktop bullets */}
 {bullets.length > 0 && (
 <ul className="hidden md:flex flex-col gap-2.5 mt-2">
 {bullets.map((b, i) => (
 <li key={i} className="flex items-center gap-3 font-sans text-[14px] text-ink-700">
 <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" aria-hidden="true" />
 {b}
 </li>
 ))}
 </ul>
 )}
 </div>

 {/* RIGHT COLUMN - lead form or custom content */}
 <div className="lg:col-span-5 w-full">
 {right}
 </div>
 </div>
 </div>
 </section>
 );
}
