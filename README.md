# seisaccountants.uk

Free matching service connecting UK founders raising SEIS and EIS with
vetted, scheme-specialist accountancy practices. Built on Next.js 14
(App Router), Tailwind CSS, and TypeScript.

## What this is

A static-rendered Next.js site at `seisaccountants.uk` that:

- Routes founders through a single matching enquiry form
- Indexes 7 service pillars covering the full SEIS and EIS lifecycle
- Indexes 6 industry pages (SaaS, tech, fintech, ecommerce, life sciences, creative & media)
- Indexes 12 GSC-validated UK location hubs
- Hosts long-form guides (R&D tax credits, SEIS and EIS, startup tax relief, business registration, cash flow forecasting, growth planning) with interactive calculators

## Service pillars

1. **SEIS Advance Assurance** — HMRC pre-approval that unlocks angel investor commitments
2. **EIS Advance Assurance** — for raises beyond the SEIS lifetime cap, including knowledge-intensive company status
3. **Share Issuance & Cap Table** — SEIS-compliant share class, board minutes, SH01 filings, ongoing maintenance
4. **SEIS1 & EIS1 Compliance Statements** — the post-share-issue HMRC paperwork that produces investor certificates
5. **Investor Tax Certificates (SEIS3 / EIS3)** — distribution to investors so they can claim 50%/30% income tax relief
6. **Three-Year Qualifying Period Monitoring** — annual review and transaction clearance to prevent investor clawback
7. **R&D Tax Credits** — merged-scheme claims for SEIS and EIS-backed companies, with Advance Notification handling

## Stack

- Next.js 14 App Router, TypeScript, Tailwind CSS
- File-based OG image generation via `app/opengraph-image.tsx`
- JSON-LD organisation, referral-service, website, and per-page schemas
- No client-side state libraries; all data is static TypeScript modules under `data/`
- No CMS; content is edited in code and committed to git

## Design system

- **Brand (deep teal)** — `#0E5E62` primary, used for buttons, links, headings
- **Paper (bone)** — `#F2EFE5` warm off-white background tone
- **Accent (amber)** — `#C9821B` for CTAs, italic emphasis, tape strips
- **Body** — Inter
- **Display** — PT Serif

Tokens defined in `tailwind.config.js` and exposed as CSS variables in
`app/globals.css`.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve production build
npm run lint
```

## Deployment

Deployed via static export or Node runtime to Vercel, Cloudflare Pages,
or any standard Next.js host. The `next.config.js` defines:

- Host canonicalisation (apex → www)
- Service-location combo redirects (the combo route is deliberately not
  built; any URL inherits a 301 to the parent service pillar)
- Retired-service-slug redirects (legacy slugs from the startup-fleet
  parent project still 301 to the closest SEIS pillar)
- Content security policy and standard security headers

## Content guidelines

- British English throughout
- No em dashes (use comma, full stop, or " - " instead)
- No fabricated testimonials
- All HMRC rates and thresholds dated to the current tax year (2025/26)
- Service pages, guides, and city hubs each carry a `lastModified` field
  used by the sitemap; update manually when content materially changes,
  not on every commit

## Repository structure

```
app/                  # Next.js App Router
  layout.tsx          # root layout, metadata, JSON-LD
  page.tsx            # homepage (server) + HomeClient.tsx (client)
  services/[serviceSlug]/    # service pillar pages
  industries/[industrySlug]/ # industry vertical pages
  location/[city]/    # city hub pages
  guides/[slug]/      # long-form guide pages with calculators
  blog/[slug]/        # blog articles
  contact/, privacy/, terms/, how-we-vet/

components/           # shared UI (Header, Footer, Hero, FAQ, etc.)
data/                 # all content as TypeScript modules
  services.ts         # 7 service pillars
  serviceContent.ts   # deep pillar content
  industries.ts       # 6 industry verticals
  industryContent/    # per-industry deep content
  locations.ts        # 12 GSC-validated cities
  cityHubContent.ts   # per-city deep hub content
  guides.ts           # long-form guides metadata
  guideContent/       # per-guide content (R&D, SEIS/EIS)
  blog.ts             # blog articles
  homepage.ts         # homepage copy
  pricing.ts          # indicative market pricing per service
  site.ts             # site config (name, URL, GA, etc.)

public/
  llms.txt            # AI-assistant positioning guidance
  images/             # service and industry hero images
  logo.png, favicons
```

## Licence

All rights reserved. Content is original to this project except where
explicitly cited.
