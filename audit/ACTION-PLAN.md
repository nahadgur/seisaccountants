# Action Plan — SEO Audit 2026-05-06

Prioritised fixes derived from the audit. Each item lists the file, the change, and the effort estimate.

---

## Critical (fix immediately, before deploy)

### 1. City meta description still mentions retired services

**File:** [`app/location/[city]/page.tsx:25`](../app/location/[city]/page.tsx#L25)

**Current:**
```ts
const description = `Find vetted startup accountants in ${cityName}. Specialists in R&D tax credits, SEIS/EIS, company formation and growth planning. Free quotes, no obligation.`;
```

**Replace with:**
```ts
const description = `Find vetted SEIS and EIS specialist accountants in ${cityName}. Network practices handle advance assurance, share issuance, SEIS1 and EIS1 compliance, investor tax certificates, and the full three-year qualifying period. Free matching, no obligation.`;
```

**Why:** "company formation and growth planning" are retired services from the pre-pivot startup-fleet wording. They contradict every other piece of pivoted copy and ship on every SERP snippet for all 26 city pages.

**Effort:** 1 minute.

---

## High (this week)

### 2. Replace placeholder Google Analytics ID

**File:** [`data/site.ts:8`](../data/site.ts#L8) — `gaId: "G-XXXXXXXXXX"`

**Action:** Replace with the real GA4 Measurement ID. Without this, no analytics flow even after deploy.

**Effort:** 1 minute (assuming the real ID is to hand).

### 3. Run Lighthouse against production after deploy

**Action:** After deploy, run Lighthouse (mobile + desktop) on:
- `https://www.seisaccountants.uk/`
- `https://www.seisaccountants.uk/location/edinburgh/` (heaviest content type)
- `https://www.seisaccountants.uk/services/seis-advance-assurance/`
- `https://www.seisaccountants.uk/guides/seis-eis-guide-uk-startups/`

Capture LCP / INP / CLS / FCP / TTFB / overall score per page. Compare against the build-time bundle sizes (city pages 199 kB First Load JS — the highest).

**Effort:** 30 minutes.

### 4. Submit updated sitemap to Google Search Console

**Action:** After deploy, in Search Console resubmit `https://www.seisaccountants.uk/sitemap.xml` to accelerate crawling of the 14 new city pages.

**Effort:** 5 minutes.

### 5. Manually verify the homepage z-index fix

**Files:** [`components/Hero.tsx:133`](../components/Hero.tsx#L133) and [`app/HomeClient.tsx:136`](../app/HomeClient.tsx#L136)

**Action:** Open the homepage in a browser at desktop and mobile widths. Confirm the bottom-right cards in the hero collage and in the problem-framing section sit *above* the photo card where they overlap (z-30 > z-20 fix verified in source but not in browser).

**Effort:** 5 minutes.

---

## Medium (this month)

### 6. Add explicit Organization schema to homepage

**File:** likely `app/page.tsx` or whichever component renders the home `<head>` JSON-LD.

**Action:** Add an Organization JSON-LD block with `name`, `url`, `logo`, `description`, and `contactPoint`. Currently the homepage has BreadcrumbList + FAQPage + WebPage but no top-level Organization. This is a knowledge-panel signal for branded queries.

**Effort:** 30 minutes (write the JSON-LD, slot it into the head, validate with Google's Rich Results Test).

### 7. Align hub content tone for the 11 reused-content cities

**File:** [`data/cityHubContent.ts`](../data/cityHubContent.ts) — entries for birmingham, liverpool, leeds, sheffield, bristol, cardiff, edinburgh, reading, brighton, oxford, bath.

**Action:** The hub content for these cities was written before the 2026-05-06 SEIS pivot and is less scheme-tight than the latest Manchester/London hub content. Rewrite each to match the current tone: lead with SEIS/EIS deal-flow specifics, drop generic "startup accountancy" framing.

**Effort:** 4 hours (~20 minutes per city).

### 8. Verify guides have Article schema with author/dates

**Files:** `app/guides/[slug]/page.tsx` and `data/guideContent/`.

**Action:** Sample the rendered HTML on `/guides/seis-eis-guide-uk-startups/` and `/guides/rd-tax-credits-uk-startups/`. Confirm each has Article schema with `author`, `datePublished`, `dateModified`, `publisher`. If missing, add.

**Effort:** 30 minutes.

### 9. Re-run failed audit subagents (technical, content, schema, performance, visual, GEO)

**Action:** Six of seven subagents in this audit exited mid-investigation without writing reports. They should be re-runnable individually once the meta-description fix is in place. The audit gaps are mostly: detailed content scoring, full schema validation, Lighthouse metrics, mobile screenshots, and citability passage scoring.

**Effort:** as needed; per-agent ~10-15 minutes wall time.

---

## Low (backlog)

### 10. Strip ignored sitemap fields

**File:** [`app/sitemap.ts`](../app/sitemap.ts)

**Action:** `priority` and `changeFrequency` fields are present and ignored by Google. Remove on a future cleanup pass to slim the sitemap.

**Effort:** 5 minutes.

### 11. Normalise 308 → 301 on retired-slug redirects

**Files:** [`next.config.js`](../next.config.js) (uses `permanent: true` which produces 308 in App Router), and any page-level `redirect()` calls.

**Action:** Functionally equivalent for SEO since 2016. Some auditing tools and historical Google docs prefer 301. Low priority unless an auditor flags it.

**Effort:** 30 minutes investigation; may not be possible without ejecting from `next.config.js` `permanent` semantics.

### 12. Audit image alt-text completeness across all 26 city pages + 7 service pillars

**Action:** This audit didn't reach images. Spot check `/location/edinburgh/`, `/services/seis-advance-assurance/`, `/guides/seis-eis-guide-uk-startups/` for `<img>` and `<Image>` elements with empty / missing `alt`. Background images don't need alt; content images do.

**Effort:** 1 hour.

### 13. Internal-linking graph audit

**Action:** Confirm each new city page links to the relevant service pillars (it should — the hub content has serviceBlurbs that link to `/services/<slug>/`), each service pillar links to relevant city pages, and the guides cross-link to services. Not verified in this audit.

**Effort:** 1 hour.

---

## Done in this audit (no action needed)

- ✅ `app/sitemap.ts` updated: `SITE_MODIFIED` 2026-05-02 → 2026-05-06; comments corrected to "26 location pages, 7 service pillars".
- ✅ Sitemap report saved at [`audit/seo-sitemap.md`](./seo-sitemap.md).

---

## Summary of effort

| Priority | Items | Est. total |
|---|---|---|
| Critical | 1 | 1 minute |
| High | 4 | ~45 minutes |
| Medium | 4 | ~5 hours |
| Low | 4 | ~3 hours |

**The single biggest win is the meta-description fix** — one line, immediate impact across all 26 city pages.
