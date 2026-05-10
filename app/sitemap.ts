// app/sitemap.ts
// Post 2026-05-02 cull. No service-location combos (route deleted),
// no /areas-we-cover/ (301'd). 12 location pages, 6 service pillars.

import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { guides } from '@/data/guides';

// Static date constants - update manually when content genuinely changes.
// Never use `new Date()` here - it inflates freshness signals Google discounts.
const SITE_MODIFIED = '2026-05-02';

export default function sitemap(): MetadataRoute.Sitemap {
 const base = siteConfig.url;
 const allCities = Object.values(LOCATIONS).flat();

 const staticPages: MetadataRoute.Sitemap = [
 { url: `${base}/`, lastModified: SITE_MODIFIED, changeFrequency: 'monthly', priority: 1.0 },
 { url: `${base}/services/`, lastModified: SITE_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
 { url: `${base}/location/`, lastModified: SITE_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
 { url: `${base}/guides/`, lastModified: SITE_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
 { url: `${base}/how-we-vet/`, lastModified: SITE_MODIFIED, changeFrequency: 'yearly', priority: 0.6 },
 { url: `${base}/tools/seis-diagnostic/`, lastModified: SITE_MODIFIED, changeFrequency: 'monthly', priority: 0.75 },
 { url: `${base}/contact/`, lastModified: SITE_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
 { url: `${base}/privacy/`, lastModified: SITE_MODIFIED, changeFrequency: 'yearly', priority: 0.3 },
 { url: `${base}/terms/`, lastModified: SITE_MODIFIED, changeFrequency: 'yearly', priority: 0.3 },
 ];

 const guidePages: MetadataRoute.Sitemap = guides.map(g => ({
 url: `${base}/guides/${g.slug}/`,
 lastModified: g.lastUpdated,
 changeFrequency: 'yearly' as const,
 priority: 0.7,
 }));

 // 6 deep service pillars
 const servicePages: MetadataRoute.Sitemap = services.map(s => ({
 url: `${base}/services/${s.slug}/`,
 lastModified: SITE_MODIFIED,
 changeFrequency: 'monthly' as const,
 priority: 0.85,
 }));

 // location pages
 const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
 url: `${base}/location/${toSlug(city)}/`,
 lastModified: SITE_MODIFIED,
 changeFrequency: 'monthly' as const,
 priority: 0.7,
 }));

 return [
 ...staticPages,
 ...guidePages,
 ...servicePages,
 ...locationPages,
 ];
}
