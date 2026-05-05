# SEO Action Plan — startupaccountants.uk

**Companion to `FULL-AUDIT-REPORT.md`** (2026-04-22)
Ordered by impact × effort. File paths and line numbers are clickable in most editors.

---

## Progress as of 2026-04-22 (end of session)

| Item | Priority | Status |
|---|---|---|
| C1 — Split five `'use client'` pages to expose metadata | Critical | ✅ Done |
| C2 — Generate OG image (`app/opengraph-image.tsx` + `app/twitter-image.tsx`) | Critical | ✅ Done |
| C3 — Stop guide pages emitting R&D schema on non-R&D guides | Critical | ✅ Done (minimum); full per-guide HowTo/FAQ data still open |
| C4 — Replace Bing verification placeholder | Critical | ⏳ Waiting on real code from owner |
| C5 — Factual contradictions (VAT £85k → £90k; R&D 33.35% → 20–27%) | Critical | ✅ Done across `data/homepage.ts`, `data/services.ts`, `data/serviceContent.ts` |
| C6 — Verify "James Whitfield ACA" is real | Critical | 🚨 Needs owner conversation |
| H1 — Tier-2 thin-content matrix (168 pages) | High | ⚠️ Partially addressed — [ServiceLocationPageClient](components/ServiceLocationPageClient.tsx) now renders real named entities per city. Strategic collapse-to-hub or demotion still pending. |
| M2 — Wire `article.metaTitle` / `metaDescription` into `<head>` | Medium | ✅ Done as part of C1 |

**Not yet started:** C3 full, H2 (service→guide links), H3 (`@id` collision), H4 (next/image migration), H5 (mirror blog images), H6 (llms.txt coverage numbers), H7 (HSTS), M1–M7, L1–L5.

---

## Critical (do this week)

### C1. Convert 5 `'use client'` pages to server-rendered metadata hosts
**Impact:** High — every blog post, blog index, services index, areas-we-cover, and how-we-vet page currently inherits the homepage's `<title>` and `<meta description>`. Duplicate metadata across dozens of URLs.
**Effort:** ~1 hour per page. Pattern already exists at [`app/contact/page.tsx`](app/contact/page.tsx) + `ContactPageClient.tsx`.

Files to split:

| Current file | New server shell | New client child |
|---|---|---|
| [`app/blog/page.tsx`](app/blog/page.tsx) | `app/blog/page.tsx` (exports `metadata`) | `app/blog/BlogIndexClient.tsx` |
| [`app/blog/[slug]/page.tsx`](app/blog/%5Bslug%5D/page.tsx) | `app/blog/[slug]/page.tsx` (exports `generateMetadata` + `generateStaticParams`; emits `BlogPosting` JSON-LD) | `app/blog/[slug]/BlogArticleClient.tsx` |
| [`app/services/page.tsx`](app/services/page.tsx) | `app/services/page.tsx` (exports `metadata`) | `app/services/ServicesIndexClient.tsx` |
| [`app/areas-we-cover/page.tsx`](app/areas-we-cover/page.tsx) | `app/areas-we-cover/page.tsx` (exports `metadata` + renders `CollectionPage` JSON-LD server-side) | `app/areas-we-cover/AreasWeCoverClient.tsx` |
| [`app/how-we-vet/page.tsx`](app/how-we-vet/page.tsx) | `app/how-we-vet/page.tsx` (exports `metadata` + renders WebPage JSON-LD server-side) | `app/how-we-vet/HowWeVetClient.tsx` |

For the blog article page specifically, `generateMetadata` should also pull `article.metaTitle` / `article.metaDescription` from `data/blog.ts` (they already exist on the interface at [`data/blog.ts:16-17`](data/blog.ts#L16-L17) but are never used for `<head>`).

### C2. Ship `public/og-image.png`
**Impact:** High — every social share (Twitter card, LinkedIn preview, Facebook, WhatsApp) currently 404s the preview image.
**Effort:** 30 minutes.
1. Create a 1200×630 PNG per the spec in [`public/OG_IMAGE_README.txt`](public/OG_IMAGE_README.txt).
2. Place at `public/og-image.png`.
3. Delete `OG_IMAGE_README.txt`.
4. Optional: generate per-service OG variants (1200×630 versions of the six service illustrations) and point `service.image` → the OG version in the metadata at [`app/services/[serviceSlug]/page.tsx:41`](app/services/%5BserviceSlug%5D/page.tsx#L41).

### C3. Fix hardcoded R&D schema leaking into every guide
**Impact:** High — SEIS, cash-flow, growth-planning, and startup-tax-relief guides currently emit R&D-specific `HowTo` and `FAQPage` JSON-LD. This is misleading structured data.
**Effort:** 2 hours.

At [`app/guides/[slug]/page.tsx:82-128`](app/guides/%5Bslug%5D/page.tsx#L82-L128):
1. Move `howToSteps: HowToStep[]` and `faqs: { question; answer }[]` onto the `Guide` interface in [`data/guides.ts:3-17`](data/guides.ts#L3-L17).
2. Populate per-guide data (use `data/guideContent/` — it already exists).
3. In the page, only emit the `HowTo` schema if `guide.howToSteps.length > 0`, and only emit the `FAQPage` from `guide.faqs`.
4. Remove the R&D FAQ list from `faqSchema.mainEntity` and the R&D steps from `howToSchema.step`.

### C4. Replace the Bing verification placeholder
**Impact:** Medium for SEO directly, but a placeholder meta tag in production HTML reads as sloppy to anyone who inspects the page.
**Effort:** 5 minutes.

At [`app/layout.tsx:42`](app/layout.tsx#L42): either paste the real code from Bing Webmaster Tools or delete the whole `other` object until Bing is verified. Do not ship the placeholder.

### C5. Fix factual inconsistencies in first-party content
**Impact:** High — these are the exact facts AI assistants and featured-snippet seekers will cite.
**Effort:** 20 minutes.

| File:line | Fact today | Correct fact |
|---|---|---|
| [`data/homepage.ts:46`](data/homepage.ts#L46) | VAT registration at £85,000 | **£90,000** (from 1 April 2024) |
| [`data/homepage.ts:10`](data/homepage.ts#L10) | R&D "up to 33.35%" cash refund | Under the merged scheme (from April 2024), 20% credit, or 27% for R&D-intensive SMEs |
| [`data/services.ts:17`](data/services.ts#L17) | R&D "up to 33.35% of qualifying costs as cash" | Same correction — 20–27% |
| [`data/homepage.ts:49`](data/homepage.ts#L49) | SEIS "very early-stage companies with gross assets under £350,000" (fine) but the phrasing around "most startups use SEIS initially then transition to EIS" implies £200k is the SEIS company cap | Clarify: company lifetime SEIS cap is £250,000 (post-April 2023); the £200,000 figure is the per-investor *annual* relief cap. |

### C6. Verify "James Whitfield ACA" is a real, consenting reviewer
**Impact:** Existential trust risk if fabricated — specific credentials (ICAEW membership, "12 years of experience") emit a `Person` schema with a job title.
**Effort:** Direct conversation with the owner.

Before shipping any more blog posts:
- Confirm he is a real person who has actually reviewed the content.
- Get written consent to use his name and credentials.
- If yes, add a `/about/editorial-team/` page with a full `Person` schema including `url`, `sameAs` (his LinkedIn + ICAEW directory profile).
- If no, **remove the reviewer badge and `reviewedBy` JSON-LD** from [`app/blog/[slug]/page.tsx:169-178`](app/blog/%5Bslug%5D/page.tsx#L169-L178) and [`app/blog/[slug]/page.tsx:240-251`](app/blog/%5Bslug%5D/page.tsx#L240-L251) immediately.

---

## High (do within 1–2 weeks)

### H1. Resolve the Tier-2 thin-content matrix (168 near-duplicate pages)
**Impact:** This is the biggest remaining HCU risk on the site. 28 tier-2 cities × 6 services = 168 URLs in the index with ~4 sentences of templated content each.
**Effort:** One-time content decision + data update.

Options:
- **Noindex the thin matrix until rewritten**: move all 28 tier-2 city *service-location* pages to `robots: { index: false }` (keep the city hub indexed). Update [`lib/tiers.ts`](lib/tiers.ts) to distinguish "city hub indexed, service-location noindex" as a separate tier.
- **Or reduce to 14 top performers and rewrite them, drop the rest to tier 3** — use the same 6-month GSC data that generated the original tier split.

### H2. Promote the guide pages to actual authority assets
**Impact:** High for AI search and featured snippets — guides are already the best content, but they under-emit structured data.
**Effort:** 2–3 hours.

- Add `datePublished` to `Article` schema at [`app/guides/[slug]/page.tsx:52`](app/guides/%5Bslug%5D/page.tsx#L52).
- Add `author.Person` (a named reviewer with ICAEW/ACCA credentials) once C6 resolves.
- Link every `/services/[slug]/` page to its corresponding guide. Currently guides link *to* services, not *from* them.

### H3. Fix the `@id` collision on `#referral-service`
**Impact:** Schema graph contradicts itself.
**Effort:** 15 minutes.

Either:
- Change the homepage `Service` `@id` at [`app/page.tsx:47`](app/page.tsx#L47) to `${siteConfig.url}/#homepage-service`, **or**
- Move the `hasOfferCatalog` and `areaServed.AdministrativeArea` enrichment onto the layout-level `referralServiceSchema` at [`app/layout.tsx:109`](app/layout.tsx#L109) and drop the homepage's duplicate node.

### H4. Migrate images to `next/image`
**Impact:** LCP improvement on every page, especially mobile. AVIF/WebP conversion already configured.
**Effort:** 2–3 hours across 7 files.

Files with `<img>`:
- [`components/Header.tsx:35`](components/Header.tsx#L35) (logo)
- [`components/Footer.tsx:35`](components/Footer.tsx#L35) (logo)
- [`components/SlashHero.tsx`](components/SlashHero.tsx)
- [`app/HomeClient.tsx`](app/HomeClient.tsx) (3 instances — hero + problem section)
- [`app/services/page.tsx:36`](app/services/page.tsx#L36)
- [`app/blog/page.tsx:121`](app/blog/page.tsx#L121)
- [`app/blog/[slug]/page.tsx`](app/blog/%5Bslug%5D/page.tsx) (3 instances)

For each:
- Swap `<img>` for `<Image>` from `next/image` with explicit `width`/`height`.
- Mark the LCP hero `priority` and `fetchPriority="high"`.
- Compress the 500KB hero PNGs to WebP <80KB *before* adding `<Image>` (Next.js serves optimised variants but starts from the source file — a 500KB PNG still means 500KB lives in the build).

### H5. Mirror blog featured images locally
**Impact:** LCP + resilience — blog is currently dependent on `files.autoblogging.ai`.
**Effort:** 1 hour.

1. Download each `autoblogging.ai` image to `public/blog/<slug>/featured.jpg` (or WebP).
2. Update `featuredImage` paths in [`data/blog.ts`](data/blog.ts).
3. Delete the autoblogging references entirely so no rogue prod dependency remains.

### H6. Fix `llms.txt` to reflect real coverage
**Impact:** Medium for AI assistants — stale coverage claim and a phantom city.
**Effort:** 10 minutes.

Edit [`public/llms.txt`](public/llms.txt):
- Change "Coverage spans 48 cities with detailed localisation in 20 priority hubs" → "Coverage spans 96 UK cities, 48 of which are currently indexed with public pages, and 20 of which have detailed city-specific content."
- Remove "Cambridge" from the priority-hubs list, or add Cambridge to [`data/locations.ts`](data/locations.ts) and promote it to tier 1 if the claim is genuine.

### H7. Add HSTS header
**Impact:** Security hardening; a requirement for many enterprise lead-form audits.
**Effort:** 2 minutes, but plan the rollout.

In `next.config.js` `headers()`, add:
```js
{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }
```
Start with 1-year, only add `preload` after verifying every subdomain (including any future ones) will always serve HTTPS. The preload list is a one-way door.

---

## Medium (do within 1 month)

### M1. Point `/location/` breadcrumb at its real target
In [`components/GeoSchema.tsx:202`](components/GeoSchema.tsx#L202): change `{ label: 'Locations', href: '/location/' }` → `{ label: 'Areas We Cover', href: '/areas-we-cover/' }`. Currently schema breadcrumb points at a 301 redirect.

### M2. Move blog `article.metaTitle` / `article.metaDescription` into real metadata
These fields already exist on the `BlogArticle` interface ([`data/blog.ts:16-17`](data/blog.ts#L16-L17)) but are never read into `<head>`. Once C1 splits the blog page, wire them up in `generateMetadata`.

### M3. Add `dateModified` to blog + guide schema
- Blog: add `dateModified` field to `BlogArticle` interface, use in `articleSchema` at [`app/blog/[slug]/page.tsx:156`](app/blog/%5Bslug%5D/page.tsx#L156).
- Guides: add `datePublished` field to `Guide` interface and use both in guide `articleSchema`.

### M4. Add per-service FAQs specific to the service
Currently `/services/[slug]/` concatenates `service.faqs` + the generic `FAQS_SERVICES`. The generic set is the same four questions across all six services (incl. VAT registration, startup structure). Replace with a per-service `faqsGeneric` tailored to each service.

### M5. Delete unused data
- `data/site.ts` → `FAQS_LOCATION` is defined but never rendered anywhere. Either wire into location pages or delete.
- `data/rewriteTargets.json` — verify whether it's referenced. If not, delete.

### M6. Update `sitemap.ts` lastModified per-location
Currently every location / service-location page shares `2026-04-21`. When a city hub or service-location is actually rewritten, update just that date. Store `lastUpdated` on the `LocationProfile` interface.

### M7. Convert hero images to WebP at source
Before switching to `next/image`, convert the six service PNGs + hero-main + hero-services + problem-{1,2,3} from PNG to WebP (target: <120KB each). Next.js image pipeline optimises further from there. PNG at 500KB sets a bad floor.

---

## Low (backlog)

### L1. Publish an editorial team page
Once C6 resolves (real named reviewer), publish `/about/editorial-team/` with:
- `Person` schema for each reviewer: `jobTitle`, `memberOf` professional body, `url`, `sameAs` (LinkedIn, professional directory).
- Link every guide and blog post's `reviewedBy.url` at that page.

### L2. Add a search page (or remove the `SearchAction` from schema)
The `WebSite` schema at [`app/layout.tsx:144`](app/layout.tsx#L144) declares `potentialAction.SearchAction` with `urlTemplate: '${url}/search?q={search_term_string}'` — but no `/search` page exists. Either build one or drop the `potentialAction`.

### L3. Content-Security-Policy header
After the HSTS rollout and once Google Analytics + Google Scripts are fully enumerated, add a CSP that explicitly allows them. Start in Report-Only for a week.

### L4. Add sector-specific landing pages
A matching service could materially benefit from `/fintech-accountants/`, `/saas-accountants/`, `/biotech-accountants/` landing pages targeting sector queries. This would fill a non-duplicative content gap the current service × city matrix doesn't serve.

### L5. Harden Next.js config
- Add `poweredByHeader: false` to stop emitting `X-Powered-By: Next.js`.
- Consider `compress: true` (usually Vercel handles this, but doesn't hurt on self-host).

---

## Verification checklist (post-fixes)

After implementing the Critical and High items, verify:

1. **Every indexed URL has a unique `<title>`.**
   - Ship the build, then `curl -s https://www.startupaccountants.uk/blog/<slug>/ | grep -i '<title>'` for three different blog posts. Titles should differ.
2. **`/og-image.png` returns 200** with `Content-Type: image/png` at 1200×630.
3. **Structured Data Testing** (https://validator.schema.org/) on:
   - Homepage — one `Service` node for `#referral-service`, no duplicate `@id`s.
   - A guide page — only the relevant `HowTo`/`FAQ`, not R&D's.
   - A blog article — `BlogPosting` with valid `reviewedBy`.
4. **No `REPLACE_WITH_BING_VERIFICATION_CODE` in page source** across any URL.
5. **Every FAQ on the homepage matches the corresponding figure in the `/guides/` pages.** VAT threshold, R&D rates, SEIS caps all consistent.
6. **`llms.txt`** reports accurate city counts.
7. **Lighthouse mobile LCP < 2.5s** on homepage after `next/image` migration.

---

## What I did not audit

- Live DataForSEO / Moz / Bing / Common Crawl backlink data (no credentials in env).
- Google field data (CrUX / GSC / GA4) — no credentials.
- Live Playwright screenshots and mobile rendering — skill didn't ship the tooling.
- Real Lighthouse measurements — source-analysis proxy only.

Re-run `/claude-seo:seo-google` and `/claude-seo:seo-backlinks` once credentials are configured, and `/claude-seo:seo-performance` after the `next/image` migration for real CWV numbers.
