# SEIS Accountants — SEO Audit Report

**Date:** 2026-05-06
**Target:** Local production build at `http://localhost:3737` (mirrors `https://www.seisaccountants.uk`)
**Scope:** 26 city landing pages, 7 service pillars, 2 guides, homepage, support pages

> **Important caveat on completeness.** Of the 7 specialist subagents launched in parallel, only the **sitemap** agent ran end-to-end and produced a full report. The technical, content, schema, performance, visual, and GEO agents exited mid-investigation without writing reports. The visual agent in particular reported a phantom Edinburgh 404 — disregard, the page returns 200 OK with rich content.
>
> Findings below were therefore compiled from: (1) the completed sitemap report, (2) inline curl/grep/source-read verification of robots.txt, llms.txt, security headers, redirect behaviour, meta tags, schema types, and prerendered HTML on disk. **Performance (CWV field data), full visual mobile testing, and exhaustive content scoring are NOT in this report.**

---

## Executive summary

**Overall posture: strong.** The site is SEO-tight in most areas — technical hygiene is good, schema is comprehensive, llms.txt exists with structured content, AI crawlers are explicitly allowed, the sitemap is clean and matches the kept set, and prerendered HTML on disk is content-rich on the 14 newly added city pages.

**One critical fix.** The dynamic meta description for every city page still reads *"…Specialists in R&D tax credits, SEIS/EIS, **company formation and growth planning**…"* — leftover wording from before the SEIS-specialist pivot. This applies to all 26 city pages and is the most visible content-pivot inconsistency in the codebase. One-line fix.

**Top 5 critical issues**

1. **(Critical)** City meta description carries pre-pivot wording — applies to all 26 city pages — `app/location/[city]/page.tsx:25`.
2. **(High)** Hub content for 11 of the 14 newly added cities (Birmingham, Liverpool, Leeds, Sheffield, Bristol, Cardiff, Edinburgh, Reading, Brighton, Oxford, Bath) was written before the 2026-05-06 SEIS pivot and is less scheme-tight than the latest Manchester/London tone — minor consistency issue, not a blocker.
3. **(High)** Performance audit not completed — Lighthouse / CWV measurements never ran. Bundle sizes per build output look reasonable (city pages 77.9 kB route + 199 kB First Load JS) but no LCP/INP/CLS verified.
4. **(Medium)** Visual screenshots not captured — the recent z-index fix on the homepage card collage (Hero.tsx + HomeClient.tsx) hasn't been browser-verified.
5. **(Medium)** Retired-slug catch-all redirects from `app/location/[city]/page.tsx` use 308 (the Next.js default for `permanent: true`). Functionally equivalent to 301 for SEO but historically Google docs prefer 301 for permanent redirects — low-impact, leave or normalise.

**Top 5 quick wins**

1. Fix the city meta description (one line, 5 minutes).
2. Replace `data/site.ts` GA placeholder `G-XXXXXXXXXX` with a real GA4 measurement ID before deploy.
3. Add an explicit `Organization` JSON-LD block on the homepage with logo and contact details (homepage currently has BreadcrumbList + FAQPage + WebPage but no top-level Organization).
4. Strip the `priority` and `changeFrequency` fields from `app/sitemap.ts` — Google ignores them, removes noise.
5. After deploy, submit the updated sitemap URL to Google Search Console to accelerate crawling of the 14 new city pages.

---

## 1. Technical SEO

### robots.txt

```
User-Agent: *
Allow: /
Disallow: /api/
Sitemap: https://www.seisaccountants.uk/sitemap.xml
```

- ✅ Sitemap URL declared, points to production hostname.
- ✅ Single wildcard `User-Agent: *` allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, Applebot-Extended (no explicit disallow). This is the right posture for a content site that wants AI search visibility.
- ✅ `Disallow: /api/` correctly prevents crawling of internal API routes (Companies House proxy, etc.).

### Security headers (verified via curl `-I` on `/`)

| Header | Value | Verdict |
|---|---|---|
| Strict-Transport-Security | `max-age=31536000` | ✅ 1-year HSTS. No `includeSubDomains` or `preload` — intentional per `next.config.js` comment, fine. |
| X-Frame-Options | `SAMEORIGIN` | ✅ |
| X-Content-Type-Options | `nosniff` | ✅ |
| Referrer-Policy | `strict-origin-when-cross-origin` | ✅ |
| Permissions-Policy | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | ✅ |
| Content-Security-Policy | comprehensive, with `'unsafe-inline'` and `'unsafe-eval'` on `script-src` | ⚠️ Required for Next.js hydration + GA4 inline init. Removing requires nonce middleware. Acceptable trade-off; flagged in `next.config.js` comment. |
| Cache-Control | `s-maxage=31536000, stale-while-revalidate` | ✅ Aggressive edge caching for SSG content. |

### Canonicals

- ✅ Edinburgh page: `<link rel="canonical" href="https://www.seisaccountants.uk/location/edinburgh/"/>` — production URL not localhost.
- Confirms the canonical-generation logic in `app/location/[city]/page.tsx` and other layouts is using `siteConfig.url` correctly regardless of host.

### Redirects

- Tested `/location/aberdeen/` (a retired slug): returns `308 Permanent Redirect` → `/location/`.
- Status 308 vs 301: 308 preserves request method and is functionally permanent. Google treats 308 the same as 301 for SEO since 2016. Historic SEO docs prefer 301 but there's no measurable impact. Acceptable.
- Catch-all redirects in `next.config.js` use `permanent: true` (which produces 308 in App Router). Page-level `notFound()` shouldn't be hit for retired slugs because the wildcard 301 fires first.

### Build artefacts

- All 26 city pages prerendered to disk: `.next/server/app/location/<slug>.html`
- All 7 service pillars prerendered: `.next/server/app/services/<slug>.html`
- Both guides prerendered: `.next/server/app/guides/<slug>.html`
- During audit, the live `next start` server hit a webpack chunk error on `/services/seis-advance-assurance/` (`Cannot find module './chunks/vendor-chunks/next.js'`). This was a local dev-cache artefact triggered by editing `app/sitemap.ts` while the server was running. Disk HTML is intact; not a production issue.

---

## 2. Content quality

### Pivot-consistency issue (the one critical fix)

`app/location/[city]/page.tsx:25` defines the dynamic meta description as:

```
const description = `Find vetted startup accountants in ${cityName}. Specialists in R&D tax credits, SEIS/EIS, company formation and growth planning. Free quotes, no obligation.`;
```

The phrase "company formation and growth planning" is leftover from the pre-pivot startup-fleet wording (those were retired services per `next.config.js` redirect map). It contradicts the SEIS-specialist positioning that the rest of the site has been rewritten around. Affects all 26 city pages on every SERP snippet.

**Suggested replacement:**
> *"Find vetted SEIS and EIS specialist accountants in {city}. Network practices handle advance assurance, share issuance, SEIS1 and EIS1 compliance, investor tax certificates, and the full three-year qualifying period. Free matching, no obligation."*

### Content depth (sample-checked)

- Homepage: full-pivot content. Title and meta on-tone.
- Edinburgh page (sampled): 98 KB HTML, deep narrative present (Bayes Centre, BioQuarter, CodeBase, Roslin all cited). Good.
- Service pillar `/services/seis-advance-assurance/` prerendered HTML: title and meta on-pivot. Schema rich (Service, Offer, AdministrativeArea, Country, BreadcrumbList, FAQPage). Multiple H2s.
- The 14 newly added city pages all have bespoke deep content (4-5 paragraphs of local SEIS market context, why-matters-here, 2-3 worked examples, 3-4 city-specific FAQs).

### Hub-content tone consistency

The 11 cities reusing pre-cull hub content (Birmingham, Liverpool, Leeds, Sheffield, Bristol, Cardiff, Edinburgh, Reading, Brighton, Oxford, Bath) carry the older hub-content tone — already SEIS-flavoured but not as scheme-tight as the latest 2026-05-06 deep-content rewrites. The deep content (`cityDeepContent.ts`) is consistent because it was rewritten today. The hub content (`cityHubContent.ts`) has a tone gap. Aligning is a backlog item, not urgent.

### Trust signals

`data/site.ts` deliberately has zero testimonials with the comment *"we do not publish fabricated reviews"*. This is correct ethically and avoids any FTC-equivalent disclosure issues, but the trust strip on city pages and the homepage carries the load alone. As real testimonials come in with documented consent, add them.

---

## 3. Schema / structured data

### Coverage by page type (verified by inspecting prerendered HTML)

**Homepage** — 3 JSON-LD types: `BreadcrumbList`, `FAQPage` (with `Question` / `Answer` items), `WebPage`.

**City pages** (Edinburgh sample) — 13 types in 2 JSON-LD blocks: `BreadcrumbList`, `City`, `CollectionPage`, `Country`, `FAQPage`, `Offer`, `OfferCatalog`, `Organization`, `Service`, `SpeakableSpecification`, `WebPage`, `Question`, `Answer`. **No `LocalBusiness`** — correct for a UK-wide matching service.

**Service pillars** — 9 types: `AdministrativeArea`, `BreadcrumbList`, `Country`, `FAQPage`, `Offer`, `Service`, `Question`, `Answer`, `ListItem`. Appropriate.

### Gaps

1. Homepage is missing top-level `Organization` schema (logo, sameAs social profiles if any, contact details). Worth adding — drives the knowledge panel signals.
2. `SpeakableSpecification` on city pages is good for Google Assistant audio results — confirm the marked-up CSS selectors actually exist in DOM.
3. Guides pages — couldn't sample. Suggest verifying `Article` schema with `author`, `datePublished`, `dateModified`, `publisher`.

---

## 4. Sitemap

Full report: [`seo-sitemap.md`](./seo-sitemap.md). Summary:

- ✅ 46 URLs total. All 26 city pages, 7 service pillars, location index, services hub, 2 guides, guides hub, homepage, contact, how-we-vet, privacy, terms, diagnostic tool.
- ✅ Canonical hostname `https://www.seisaccountants.uk` throughout.
- ✅ No retired slugs leaked through (no `/blog/`, no `/industries/`, no `/areas-we-cover/`, no retired city slugs, no retired service slugs).
- ✅ Single sitemap file, appropriate at this scale (well under 50,000 URL limit).
- 🔧 The audit applied a fix directly: `SITE_MODIFIED` updated 2026-05-02 → 2026-05-06 (so the 14 new city pages carry today's date), and stale comments saying "12 location pages, 6 service pillars" updated to "26 location pages, 7 service pillars".
- ⚪ `priority` and `changeFrequency` fields are present and ignored by Google. Strip on a future cleanup pass.
- ⚪ `data/site.ts` has placeholder GA ID `G-XXXXXXXXXX` — replace before deploy.

---

## 5. Performance (incomplete)

The performance subagent never returned a report. From the build output (`next build`):

| Page | Route JS | First Load JS |
|---|---|---|
| `/` | 10.1 kB | 135 kB |
| `/location/[city]` | 77.9 kB | 199 kB |
| `/services/[serviceSlug]` | 33.3 kB | 158 kB |
| `/guides/[slug]` | 29.3 kB | 150 kB |
| `/tools/seis-diagnostic` | 6.89 kB | 128 kB |
| Shared chunks | — | 87.3 kB |

City pages at 77.9 kB route + 199 kB First Load JS are the heaviest. Worth a Lighthouse run post-deploy.

Configuration confirmed:
- ✅ `next.config.js` `images.formats: ['image/avif', 'image/webp']`
- ✅ Aggressive `Cache-Control: s-maxage=31536000` on prerendered pages
- ✅ Local `_fonts/` directory (font self-hosting)

**Action: run Lighthouse against production after deploy, on the homepage and a city page (Edinburgh recommended — heaviest content).**

---

## 6. Visual / mobile (incomplete)

The visual subagent never captured screenshots and reported a false positive (claimed Edinburgh 404s — verified to return 200 OK with full content).

**Manual verification still needed** for:
1. The homepage card-collage z-index fix (`Hero.tsx` line 133 and `HomeClient.tsx` line 136 — both bumped from `z-10` to `z-30` so the bottom-right cards sit above the photo).
2. Mobile responsive layout on a typical city page — the new content is dense with 3-FAQ + 3-example sections.
3. Above-the-fold composition on the homepage.

Suggest opening the local dev server and walking these manually, or running Playwright headless after deploy.

---

## 7. AI search readiness (GEO)

### Crawler access

- ✅ `robots.txt` allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, Applebot-Extended (all via wildcard).

### llms.txt

- ✅ Exists at `/llms.txt`, returns 200 OK with structured content matching the recommended Anthropic-supported format. First line `# SEIS Accountants` followed by `>` summary block, then `## What this site is`. No action needed.

### Citability

- City page deep content uses declarative-answer form (e.g. *"London is by some distance the densest SEIS and EIS deal-flow market in the UK..."*). FAQ answers begin with *"Yes — ..."* / *"Yes, in most cases —..."* / declarative restatements. Both are good citation forms.
- Service pillars use question-format H2s per `data/geoHeadings.ts` patterns. Confirm rendering looks intact in all 7.

### Outbound authority signals

Recent commits added "outbound authoritative-source references" across content surfaces. Production links to gov.uk / HMRC / Companies House / FCA references support both GEO and traditional SEO authority signals. Not exhaustively verified in this audit.

---

## 8. Findings the audit did NOT cover

For honesty, the following were in scope but not completed:

- Lighthouse measurement of LCP / INP / CLS on any page.
- Screenshot capture (mobile or desktop) of any page.
- Detailed paragraph-by-paragraph readability scoring (Flesch, sentence length distribution).
- Validation of every JSON-LD block against schema.org spec (only types enumerated).
- Internal-linking graph analysis (whether new city pages link enough into service pillars).
- Image alt-text completeness across all images.

**Recommended:** after the meta-description fix and deploy, run a Lighthouse audit against production and a focused content review on the 11 cities reusing pre-pivot hub content.

---

## SEO Health Score

Given audit incompleteness on performance + visual, a confident overall score is not appropriate. Provisional category scores from what was verified:

| Category | Weight | Score | Notes |
|---|---|---|---|
| Technical SEO | 22% | 92/100 | Robust; 308 vs 301 a minor gripe. |
| Content quality | 23% | 78/100 | Strong on the 14 new pages and homepage; meta-description bug pulls this down. |
| On-page SEO | 20% | 85/100 | Title tags strong; meta description bug applies here too. |
| Schema | 10% | 88/100 | Comprehensive on city + service pages; homepage missing Organization. |
| Performance | 10% | not measured | — |
| AI search | 10% | 90/100 | llms.txt + crawler access + citability all in good shape. |
| Images | 5% | not measured | AVIF/WebP configured; alt-text not audited. |

**Provisional Health Score (categories measured only): 85/100.**

Fix the meta-description bug and the score lifts to ~90. Run Lighthouse and the picture is complete.
