# Full SEO Audit — startupaccountants.uk

**Audit date:** 2026-04-22
**Method:** Static source audit of the Next.js 14 App Router repo (no live crawl — `scripts/fetch_page.py` not shipped with this skill version). Auditing the source is more accurate than crawling a deployed build for issues like `generateMetadata` coverage, schema generators, and dynamic-route config.
**Scope:** `app/`, `components/`, `data/`, `public/`, `next.config.js`.
**Site name configured:** Startup Accountants UK (`siteConfig.name`)
**Production host:** `https://www.startupaccountants.uk`
**Note:** Repo folder is `startupaccountantharrow` (legacy name). All product text and `siteConfig` target `startupaccountants.uk`.

---

## Executive Summary

**Initial score (2026-04-22 audit):** 66 / 100
**Revised score (2026-04-22 end-of-session):** 76 / 100

| Category | Weight | Initial | Revised | Drivers of change |
|---|---:|---:|---:|---|
| Technical SEO | 22% | 72 | 85 | C1 + C2 shipped (five pages now emit unique metadata; OG image live) |
| Content Quality | 23% | 60 | 72 | C5 factual fixes + H1 partial (tier-2 pages now render per-city named entities) |
| On-Page SEO | 20% | 65 | 85 | C1 — every indexable URL now has its own `<title>` and `<meta description>` |
| Schema / Structured Data | 10% | 70 | 78 | C3-minimum — non-R&D guides no longer emit misleading R&D schema |
| Performance (CWV, lab-proxy) | 10% | 58 | 58 | Unchanged — `next/image` migration still pending (H4) |
| AI Search Readiness | 10% | 78 | 80 | Slight lift from per-page metadata + cleaner schema graph |
| Images | 5% | 48 | 55 | OG image shipped; raw `<img>` tags still everywhere |
| **Overall SEO Health Score** | — | **66** | **76** | |

See `ACTION-PLAN.md` → Progress table for the item-by-item completion status.

**Business type detected:** National referral / matching service (UK-wide). Not a local-service (SAB) business — the site is disciplined about not presenting as an accountancy firm, and has deliberately avoided `LocalBusiness` / `AggregateRating` schema, which is the correct call. `seo-local` and `seo-maps` sub-audits are therefore out of scope.

### Top 5 critical issues
1. **OG image file is missing** (`/public/og-image.png` doesn't exist — only `OG_IMAGE_README.txt`). `app/layout.tsx:60` and `app/page.tsx:26` both reference it. Every social share and LinkedIn preview falls back to plain text.
2. **Five pages are `'use client'` and therefore cannot export `metadata`** — Next.js 14 silently falls back to the root layout default, giving these pages identical `<title>` and `<meta description>`: [`app/blog/page.tsx`](app/blog/page.tsx), [`app/blog/[slug]/page.tsx`](app/blog/%5Bslug%5D/page.tsx), [`app/services/page.tsx`](app/services/page.tsx), [`app/areas-we-cover/page.tsx`](app/areas-we-cover/page.tsx), [`app/how-we-vet/page.tsx`](app/how-we-vet/page.tsx). That's **every blog post** and **every key static hub** sharing a title.
3. **Guide pages render hardcoded R&D-specific `HowTo` and `FAQPage` schema regardless of the guide's topic** ([`app/guides/[slug]/page.tsx:82-128`](app/guides/%5Bslug%5D/page.tsx#L82-L128)). The SEIS/EIS, cash-flow, and growth-planning guides all emit FAQ answers about R&D tax credits and "how to identify qualifying R&D projects." Structured-data policy violation and misleading rich results.
4. **Bing Webmaster verification is a literal placeholder**: `'msvalidate.01': 'REPLACE_WITH_BING_VERIFICATION_CODE'` at [`app/layout.tsx:42`](app/layout.tsx#L42). Currently shipping as a visible `<meta>` tag in production HTML.
5. **Factual contradictions in first-party content**: [`data/homepage.ts:46`](data/homepage.ts#L46) states the VAT threshold is £85,000; [`data/site.ts:32`](data/site.ts#L32) says £90,000. The correct figure is **£90,000** (from 1 April 2024). Homepage FAQ is wrong on a topic where E-E-A-T is the whole value prop.

### Top 5 quick wins
1. Drop a 1200×630 PNG into `public/og-image.png` — 10 minutes, unlocks every social preview.
2. Replace the Bing placeholder with the real verification code (or delete the line entirely until Bing is verified).
3. Fix the VAT £85k → £90k error in [`data/homepage.ts:46`](data/homepage.ts#L46).
4. Update [`public/llms.txt`](public/llms.txt) to reflect actual coverage (48 *indexed* cities out of 96 total; remove the "Cambridge" reference — Cambridge is not in `data/locations.ts`).
5. Replace the hardcoded `HowTo` + `FAQ` schemas in [`app/guides/[slug]/page.tsx`](app/guides/%5Bslug%5D/page.tsx) with per-guide data pulled from `data/guideContent/` (the directory already exists).

---

## Technical SEO — 72/100

### Strong

- **`robots.ts`** is correct and minimal: `allow: '/'`, `disallow: ['/api/']`, sitemap declared. No accidental global blocks.
- **`sitemap.ts`** is cleanly structured by page type, filters Tier-3 cities out of the sitemap ([`app/sitemap.ts:67`](app/sitemap.ts#L67)), and uses **static** `lastModified` constants rather than `new Date()` — the right call; Google discounts inflated freshness signals.
- **Tier system** ([`lib/tiers.ts`](lib/tiers.ts) + [`data/rewriteTiers.json`](data/rewriteTiers.json)) is well-designed: 48 cities with GSC signal stay indexed, 48 cold cities are `noindex, follow` to preserve link equity without dragging index quality. This is textbook pSEO hygiene.
- **Canonical + trailing slash**: `next.config.js` sets `trailingSlash: true` and every `generateMetadata` emits a canonical ending in `/`. Consistent.
- **Host canonicalisation**: non-www → www 301 redirect is in `next.config.js:27-33`. Good.
- **Security headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy all set. Good baseline.
- **Legacy redirect preserved**: `/vetting-process/*` → `/how-we-vet/` (`next.config.js:35-39`).

### Weak

- **Strict-Transport-Security (HSTS) header missing**. Vercel may add one automatically at the edge, but don't rely on that. Add `{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }` to the header rule in `next.config.js`. (Only after confirming your apex and all subdomains serve HTTPS — HSTS preload is a one-way door.)
- **No Content-Security-Policy**. Lead form posts to `script.google.com`; a sensible CSP should be added before it becomes an audit finding elsewhere. Nice-to-have, not urgent.
- **`/location/` redirects to `/areas-we-cover/`** ([`app/location/page.tsx:5`](app/location/page.tsx#L5)), but the city-page breadcrumb in [`components/GeoSchema.tsx:202`](components/GeoSchema.tsx#L202) links "Locations" → `/location/`. Schema breadcrumb points at a 301. Change the breadcrumb label to `Areas We Cover` → `/areas-we-cover/` to match the canonical IA.
- **Sitemap shares a single `2026-04-21` `lastModified` across all pages**. Harmless but wastes signal. Move location-level dates into the `locationProfiles` records so genuine content changes get real dates.

### Critical

- **Five pages cannot emit `generateMetadata` because they are `'use client'`**:
  - [`app/blog/page.tsx`](app/blog/page.tsx) — blog index
  - [`app/blog/[slug]/page.tsx`](app/blog/%5Bslug%5D/page.tsx) — every blog post
  - [`app/services/page.tsx`](app/services/page.tsx) — services index
  - [`app/areas-we-cover/page.tsx`](app/areas-we-cover/page.tsx) — the master location hub
  - [`app/how-we-vet/page.tsx`](app/how-we-vet/page.tsx)

  In Next.js 14 App Router, `metadata`/`generateMetadata` can only be exported from **server** components. These five all fall through to the `RootLayout` default (`"Startup Accountants UK | Free Matching Service for UK Startup Accountants"`), so **every blog post shares a title with the homepage**, and so does the services index and the areas hub. This is one of the highest-impact cheap fixes on the site. Split each into a server-component `page.tsx` that exports metadata + renders a `<*Client>` child (the pattern is already in place at [`app/contact/page.tsx`](app/contact/page.tsx) and [`app/page.tsx`](app/page.tsx)).

- **OG image missing**. [`public/OG_IMAGE_README.txt`](public/OG_IMAGE_README.txt) documents the requirement; the file has never been created. Every page currently references `/og-image.png` in `openGraph.images` and `twitter.images`. Social shares silently fail.

- **Bing verification placeholder published in HTML** ([`app/layout.tsx:42`](app/layout.tsx#L42)). Either ship the real code or remove the `other: { 'msvalidate.01': ... }` object entirely.

---

## Content Quality — 60/100

### Strong

- **Priority-city rewrites are genuinely rich.** The 20 Tier-1 cities × 6 services (120 pages) + 20 hub pages have ~1,400-word, entity-dense, sector-specific content with named accelerators, universities, and clusters ([`data/cityHubContent.ts`](data/cityHubContent.ts); [`REWRITE_REPORT.md`](REWRITE_REPORT.md)). This is what Google's Helpful Content System rewards — it reads like a person wrote it.
- **`how-we-vet` page is a genuine E-E-A-T asset** ([`app/how-we-vet/page.tsx`](app/how-we-vet/page.tsx)): five concrete verification steps, named professional bodies, explicit numbers (£1M PI cover minimum, ~35% applicant rejection). This is the kind of page an AI assistant will quote directly.
- **Explicit honesty discipline**: [`data/site.ts:11`](data/site.ts#L11) — "Testimonials deliberately removed, we do not publish fabricated reviews." No `AggregateRating`, no fake reviews, no `LocalBusiness` schema pretending to be a shopfront. This is correctly priced into the business model.
- **Guide content quality** is strong — long-form, topical, with interactive calculators for R&D and SEIS/EIS.

### Weak

- **Tier-2 cities (28 of them) are still indexed with templated thin content.** Each city has exactly 4 sentences of near-identical text swapped for city name and sector. Example: compare the `intro` for `business-registration-london` vs `business-registration-croydon` in [`data/serviceLocationContent.ts:28,55`](data/serviceLocationContent.ts#L28) — they are word-for-word identical except for "London" → "Croydon" and industry phrasing. That's **28 × 6 = 168 near-duplicate pages in the index**. This is the largest remaining content-quality risk on the site.

  Options (decreasing intervention):
  - **Promote the tier-2 cities to either noindex or the rewrite pipeline**: add 14 more to `tier1_priority`, drop the other 14 to `tier3_noindex`. The 6-month GSC data has already told you who earns indexation — act on it.
  - Or, treat `/services/[slug]/[city]/` for tier-2 cities as a redirect to `/location/[city]/` + `/services/[slug]/`, eliminating the thin matrix pages entirely.

- **Factual inconsistencies on high-E-A-T topics**:
  - VAT threshold: `data/homepage.ts:46` says £85,000; `data/site.ts:32` says £90,000. **£90,000 is correct (from 1 April 2024).**
  - SEIS figures: `data/homepage.ts:49` says *company* cap was "£200,000" — that number is the *per-investor annual relief cap*; the *company lifetime SEIS cap* is £250,000 (post-April 2023). Correct in `data/services.ts:11` but referenced loosely in homepage/guides.
  - `data/services.ts:17` still says "R&D tax credits... up to 33.35%" — that was the pre-April-2023 SME rate. The merged scheme (April 2024) returns 20–27%. The R&D **guide** ([`data/guides.ts:31`](data/guides.ts#L31)) has the correct 20–27% figure. The **homepage** ([`data/homepage.ts:10`](data/homepage.ts#L10)) still says "up to 33.35%". Internal contradiction on the flagship relief.

- **Blog content looks AI-generated and lives on a site whose value prop is expert vetting.** [`data/blog.ts:32`](data/blog.ts#L32) hotlinks featured images from `files.autoblogging.ai`, and the article body relies on generic SEMrush-table examples ("Gymshark", "Local Fitness Brand A"). The blog is byline-less but carries a "Reviewed by James Whitfield ACA" badge with specific ICAEW credentials ([`app/blog/[slug]/page.tsx:169-178`](app/blog/%5Bslug%5D/page.tsx#L169-L178)) — if Mr Whitfield is not a real, consenting reviewer of this content, you have a fabricated-author problem that will embarrass the matching-service brand the rest of the site carefully builds. **This needs to be verified with the owner before doing anything else on the blog.**

- **`data/site.ts` `FAQS_LOCATION` is defined but never rendered**. Dead content data.

### Readability

Priority-city intros are ~150-word sentences with embedded clauses ("the choice of structure, limited company, LLP, or sole trader, has downstream consequences..."). Reads well to a professional audience but Flesch Reading Ease will be low (~40). Appropriate for the audience but consider one scannable pull-quote/bullet list per page.

---

## On-Page SEO — 65/100

### Strong

- **Server-rendered dynamic routes have unique, well-formed titles and descriptions**: `/services/[serviceSlug]/` produces `"{Service Title} for UK Startups | Free Accountant Matching Service"` (~55–65 chars); `/services/[slug]/[city]/` produces `"{Service} Accountants in {City} | Vetted Startup Specialists"` (~55–75 chars). All within Google's display budget.
- **H1s are unique per page** (checked against Hero and CityPageClient/ServiceLocationPageClient). No duplicate-H1 issues.
- **Breadcrumbs rendered server-side** via shared helper [`lib/breadcrumbs.ts`](lib/breadcrumbs.ts) (inferred from usage) with matching BreadcrumbList schema.
- **Internal linking hubs are solid**: `/areas-we-cover/` fans out to 96 city pages × 6 services each; footer links every service + every guide. Navigation graph is dense.

### Weak

- **Five `'use client'` pages inherit the root layout default metadata**. This is a title/description duplicate-content pattern across:
  - The blog listing page
  - Every single blog article URL (`/blog/[slug]/`)
  - The services overview page
  - The master "Areas We Cover" hub
  - The "How We Vet" page — arguably your strongest E-E-A-T asset, and it has no unique title

  Fix by splitting each into a server `page.tsx` exporting `metadata` + a child client component. Pattern exists already: [`app/contact/page.tsx`](app/contact/page.tsx) does it for the contact page, delegating to `ContactPageClient`.

- **Blog posts have no `<h1>` element** in the rendered DOM — the title lives in `<h1>` inside the hero section, but the blog MDX-style `content` blocks use `h2`/`h3` only. This is actually correct (the page `<h1>` is `article.title`), so flagging only to note it read correctly.

- **`/services/[serviceSlug]/` OG image is `service.image`** (e.g. `/images/rd-tax-credits.png`) — these are 270–500KB PNGs serving as social previews. They're not 1200×630 and not optimised. Generate proper OG variants per service.

### Heading hierarchy (by page type, spot-check)

| Route | H1 | Sub-headings |
|---|---|---|
| `/` | Hero title | Proper h2s |
| `/services/[slug]/` | Service title (SlashHero) | h2s |
| `/services/[slug]/[city]/` | Service + City | h2s |
| `/location/[city]/` | City | h2s |
| `/guides/[slug]/` | guide.heroHeading | h2s |
| `/blog/[slug]/` | article.title (rendered in hero) | article body uses h2/h3 via renderBlock |
| `/areas-we-cover/` | "Areas we cover." | h2 per region |

Hierarchy is clean. Issue is metadata, not markup.

### Internal-link audit

- Services in footer link to `/services/[slug]/`
- `/areas-we-cover/` links to every `/location/[city]/` and every `/services/[slug]/[city]/`
- Guide pages link to `cityLinks` (all location profiles) via `GuidePageClient`
- **Gap**: guides are not linked from `/services/[slug]/` pages. Each service page should explicitly link to the corresponding guide. This is high-value internal-link equity flow.

---

## Schema / Structured Data — 70/100

### Strong

- **Linked-graph `@id` structure**: `#organization`, `#website`, `#referral-service`, `#webpage` IDs are used consistently ([`app/layout.tsx:77`](app/layout.tsx#L77), [`app/page.tsx:82`](app/page.tsx#L82)). Referenced from `GeoSchema`, `CollectionPage`, and `Service` nodes. Reads as one graph.
- **Honest type selection** (documented in [`components/GeoSchema.tsx:2-6`](components/GeoSchema.tsx#L2-L6)): `Service`/`CollectionPage`/`FAQPage`/`BreadcrumbList`/`WebPage` — no `LocalBusiness`, no `AggregateRating`, no `priceRange`. Exactly right for a referral service.
- **`Speakable` markup** on location, service-location, and guide pages targets the right CSS selectors (`h1`, `.direct-answer-text`, `.faq-answer`).
- **BlogPosting** has proper `reviewedBy` / `memberOf` nesting ([`app/blog/[slug]/page.tsx:169-178`](app/blog/%5Bslug%5D/page.tsx#L169-L178)) — assuming the reviewer is real.

### Critical

- **Guide pages emit the same hardcoded `HowTo` and `FAQPage` schema regardless of which guide is rendered.** At [`app/guides/[slug]/page.tsx:82-128`](app/guides/%5Bslug%5D/page.tsx#L82-L128), the 5 `HowToStep`s are R&D-claim-specific ("Identify qualifying projects", "Submit with Corporation Tax return", "Receive credit or cash payment") and the 5 FAQPage questions all refer to "R&D tax credits". These render on the SEIS/EIS guide, the cash-flow guide, the growth-planning guide, etc. Google will either ignore as inconsistent with page content or issue a structured-data mismatch warning. Either way, this is misleading structured data.

  Fix: move `howToSteps` and `faqs` onto each entry in [`data/guides.ts`](data/guides.ts) (or into `data/guideContent/`), and make the `HowTo` block conditional on `guide.howToSteps?.length > 0`.

### Weak

- **`@id` value collision on `#referral-service`**:
  - [`app/layout.tsx:112`](app/layout.tsx#L112) declares a site-wide `Service` with `@id: '${url}/#referral-service'` and `provider: { '@id': '#organization' }`.
  - [`app/page.tsx:47`](app/page.tsx#L47) emits a *different* `Service` node with the **same `@id`** but different `areaServed`, `offers.description`, and a `hasOfferCatalog`.

  Two JSON-LD blocks with the same `@id` but different shapes is a schema contradiction. Either change the homepage to use a distinct `@id` (e.g. `#homepage-service`) or merge the additional fields into the layout-level node and drop the homepage duplicate.

- **Blog posts have no `datePublished`/`dateModified` split** — only `datePublished` ([`app/blog/[slug]/page.tsx:162`](app/blog/%5Bslug%5D/page.tsx#L162)). Add `dateModified` so HMRC-rule updates show as refreshed content.

- **Guide `Article` schema** has `dateModified` but no `datePublished`. Add both.

- **No `Person` schema as a standalone for James Whitfield**. He exists only inside `reviewedBy`. If he's a real reviewer, expose him via a `/about` or `/editorial-team/` page with a full `Person` node including `url`, `sameAs` (LinkedIn, ICAEW directory), and credentials.

- **`FAQPage` schema** is emitted on many pages that already have another `FAQPage` from `GeoSchema`. Example: on `/services/[slug]/[city]/`, [`app/services/.../page.tsx:83`](app/services/%5BserviceSlug%5D/%5BlocationSlug%5D/page.tsx) produces one FAQ set via `GeoSchema`, but there's no second FAQ schema on that page so this is actually fine. Where multiple FAQ schemas do occur (e.g. homepage's `faqSchema` from `homepageFaqs`), ensure every visible FAQ is in exactly one schema block.

---

## Performance (CWV) — 58/100

No field data available (CrUX/PSI not queried — `seo-google` requires credentials). Assessment is lab-proxy based on source analysis.

### Strong

- **Fonts**: `next/font/google` for both Inter and PT Serif with `display: 'swap'` ([`app/layout.tsx:12-25`](app/layout.tsx#L12-L25)). Eliminates font flash and runtime requests.
- **JSON-LD schema scripts** use `strategy="beforeInteractive"` for org/service/website and default for page-level — correct trade-off.
- **GA** is `strategy="afterInteractive"`, not blocking.
- `next.config.js` declares AVIF + WebP as preferred formats for `next/image`.

### Weak — likely LCP impact

- **The site uses raw `<img>` tags, not `next/image`, almost everywhere.** 11 `eslint-disable-next-line @next/next/no-img-element` across 7 files including `HomeClient.tsx`, `Header.tsx`, `Footer.tsx`, `SlashHero.tsx`, both blog pages, and `app/services/page.tsx`. The two files that do import `next/image` (`Hero.tsx`, `Polaroid.tsx`) are isolated. Consequences:
  - No automatic AVIF/WebP conversion despite `next.config.js` supporting it.
  - No responsive `srcset` — mobile users download desktop-sized images.
  - No automatic width/height attribute enforcement → CLS risk.
  - No blur placeholder → LCP perceived as worse.

  Hero images specifically:

  | File | Size | Role |
  |---|---:|---|
  | `public/images/hero-main.png` | 503 KB | Homepage hero / default hero |
  | `public/images/hero-services.png` | 394 KB | Services index hero |
  | `public/images/problem-1.png` | 458 KB | Homepage problem section |
  | `public/images/growth-planning.png` | 374 KB | Service OG |
  | `public/images/startup-tax-relief.png` | 380 KB | Service OG |
  | `public/images/rd-tax-credits.png` | 384 KB | Service OG |

  For an LCP target of <2.5s on 4G, hero PNGs should be <80KB WebP/AVIF. Convert these and serve through `next/image`.

- **Blog featured images are hotlinked from `files.autoblogging.ai`**. That third-party could go away, throttle, or be slow — every blog LCP depends on a server you don't control and don't have `remotePatterns` configured for in `next.config.js` (so `next/image` can't even optimise them). Mirror these locally before publishing.

- **No `fetchpriority="high"` on hero image** — raw `<img>` tags don't support the Next.js priority flag. After moving to `next/image`, set `priority={true}` on the LCP hero image.

---

## AI Search Readiness — 78/100

### Strong

- **`public/llms.txt` is one of the better-written ones I've seen.** Clear positioning ("A free referral/matching service", explicit list of what the site is *not*), concrete instructions to AI assistants on how to describe the brand, disclosure of no fabricated testimonials. This is exactly the right register.
- **Speakable schema** on location, service-location, and guide pages — AI-assistant read-aloud-ready.
- **Guide "direct answer" pattern**: every guide has a `directQuestion` / `directAnswer` pair that renders as `<div class="direct-answer-text">` and is included verbatim in the FAQ schema. This is a strong passage-level citability pattern — it gives AI-search engines a clean, quotable block per topic.
- **robots.txt doesn't block any AI crawlers** (GPTBot, PerplexityBot, ClaudeBot, CCBot, etc.) — appropriate if the brand wants AI citations.

### Weak

- **`llms.txt` is factually out of sync with the site state**:
  - Claims "Coverage spans 48 cities with detailed localisation in 20 priority hubs". Actual state per `data/locations.ts`: **96 cities** in total, of which **48 are indexed** (tier 1 + tier 2) and **48 are `noindex`** (tier 3). The "48" number is coincidentally the indexed count but the wording implies that's the whole footprint.
  - Names "Cambridge" as a priority hub. **Cambridge is not in `data/locations.ts`.** If the owner wants Cambridge to be a city (and given the startup-accountant audience it arguably should be), add it; otherwise remove it from `llms.txt`.

- **No author-level authority signal for guides or blog**. Guides have no named reviewer, and the single blog reviewer (James Whitfield ACA) has no landing page of his own. AI assistants that ask "who wrote this" get "an Organization" — which is weaker than a named Person with verifiable credentials. A simple `/about/editorial-team/` page with a `Person` schema for each named advisor would materially raise citability.

- **No FAQ-quotable pattern on homepage** — the home FAQ is good, but each answer is multi-sentence and sometimes factually inconsistent with the guide pages (see Content Quality). AI assistants prefer shorter, self-contained atomic facts; tighten each FAQ answer to one canonical paragraph that matches the guide-page version.

---

## Images — 48/100

- **OG image missing** (`public/og-image.png`). See Critical. Every page's `openGraph.images` points at a 404.
- **Service OG images are not 1200×630.** They're ~500KB PNG product illustrations repurposed as social previews.
- **11 raw `<img>` tags** (see Performance). Move to `next/image`.
- **Alt text**:
  - Data-driven images have proper alt (e.g. `alt={article.title}` on blog list). Good.
  - Logo in [`components/Footer.tsx:35`](components/Footer.tsx#L35) is `alt=""` `aria-hidden="true"` — correct for decorative.
  - Hero problem-section images use generic alt like "Professional startup accountants", "Quality results" ([`data/homepage.ts:8`](data/homepage.ts#L8)). Replace with something descriptive of the actual image content.
- **Blog images hotlinked from `autoblogging.ai`**: third-party dependency, no `remotePatterns` entry, can't be optimised. Mirror and move.
- **Favicon set is complete** (16, 32, 180, 512, .ico). Good.

---

## Local / Maps / Backlinks — out of scope

- **Local SEO**: not applicable. This is a UK-wide referral service, explicitly not a local shopfront, and the codebase correctly refuses to emit `LocalBusiness`, `GeoCoordinates`, or `AggregateRating` schema. `how-we-vet/` correctly documents that the firm is a matcher, not an accountancy practice.
- **Maps**: not applicable for the same reason.
- **Backlinks** (DataForSEO / Moz / Bing): no credentials in environment — skipped. Re-run `seo-backlinks` once credentials exist.
- **Google field data** (CrUX / GSC / GA4): no credentials — skipped. Re-run `seo-google` with credentials configured for real LCP/INP/CLS and query data.

---

## Priority definitions

- **Critical**: blocks indexing, emits misleading structured data, or breaks social sharing — fix immediately.
- **High**: material ranking or trust impact — fix within 1 week.
- **Medium**: optimisation — fix within 1 month.
- **Low**: backlog.

See `ACTION-PLAN.md` for the prioritised fix list with file paths and line numbers.
