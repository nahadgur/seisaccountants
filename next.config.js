/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // Stops Next.js advertising itself in the `X-Powered-By` response header.
  // No functional effect; reduces surface-area information leakage.
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async headers() {
    // Content-Security-Policy allowlist. Each directive lists every origin
    // (or scheme) that modern pages actually load. Update when adding new
    // third-party scripts, analytics, image hosts, or form targets.
    //
    // `'unsafe-inline'` on script-src is required for:
    //   - Next.js hydration scripts (emitted inline by the framework)
    //   - The inline gtag initialiser in app/layout.tsx
    //   - JSON-LD <script type="application/ld+json"> blocks
    // `'unsafe-eval'` is required for Next.js dev HMR and some prod paths.
    // Removing either requires a nonce-based middleware setup (out of scope).
    //
    // `files.autoblogging.ai` remains on the img-src allowlist: blog
    // featured images and inline images on the 9 surviving articles are
    // still served from that CDN. Migrating to local hosting is future
    // work; leaving the external reference in place means no broken
    // images in the meantime.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://files.autoblogging.ai https://www.google-analytics.com https://www.googletagmanager.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://script.google.com https://script.googleusercontent.com",
      "frame-ancestors 'self'",
      "form-action 'self' https://script.google.com",
      "base-uri 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          // HSTS: tell browsers to only connect over HTTPS for 1 year.
          // Deliberately omits `includeSubDomains` (unknown subdomain HTTPS
          // coverage) and `preload` (permanent opt-in to browser HSTS list;
          // only add after months of successful HSTS without issues).
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ];
  },
  async redirects() {
    // Post 2026-05-02 cull. Service-location combo route deleted entirely
    // (576 URLs at peak), 84 thin city pages dropped, /areas-we-cover/ thin
    // hub dropped. Wildcard 301s below + page-level 308 catch-alls in the
    // dynamic routes catch any URL the explicit list misses.

    // Helper: every retired city slug 301s to /location/. Source list is
    // every slug that ever shipped (the original 96-city list minus the 12
    // we kept) plus a few combo-only slugs (edgware, cambridge are NEW
    // kept slugs whose old combo URLs need to redirect to the new pillar).
    const RETIRED_CITY_SLUGS = [
      // London & South East dropped
      'croydon','bromley','ilford','romford','slough','reading','oxford','brighton','worthing','woking','crawley','luton','milton-keynes','watford',
      // Midlands dropped
      'birmingham','coventry','leicester','derby','wolverhampton','stoke-on-trent','walsall','west-bromwich','solihull','worcester','shrewsbury','telford','lincoln','peterborough',
      // North West dropped
      'liverpool','bolton','oldham','rochdale','stockport','wigan','preston','blackpool','blackburn','chester','warrington','st-helens','birkenhead','southport',
      // North East & Yorkshire dropped
      'leeds','sheffield','bradford','huddersfield','hull','york','sunderland','gateshead','middlesbrough','hartlepool','stockton-on-tees','darlington','durham','doncaster',
      // South West & Wales dropped
      'bristol','cardiff','plymouth','exeter','bath','newport','swindon','gloucester','bournemouth','poole','southampton','portsmouth','torquay','bridgend',
      // Scotland & Northern Ireland dropped (entire region)
      'glasgow','edinburgh','aberdeen','dundee','inverness','perth','stirling','paisley','east-kilbride','belfast','derry','lisburn','newry','armagh','bangor','antrim',
      // Other slugs that earned GSC impressions but were never in the kept list
      'queensbury','harrow-town-centre','northolt','kenton','canons-park','sarratt','blackburn','bournemouth','salisbury','aylesbury','kettering','rugby','redditch','tamworth','grimsby','scunthorpe','dewsbury','barnsley','rotherham','southend','chelmsford','colchester','ipswich','norwich','cambridge-old',
    ];
    const KEPT_SERVICE_SLUGS = [
      'seis-advance-assurance','eis-advance-assurance','share-issuance-cap-table',
      'seis1-eis1-compliance','investor-tax-certificates','qualifying-period-monitoring',
      'rd-tax-credits',
    ];

    // Old startup-fleet slugs that ever shipped under this domain still
    // 301 to the closest SEIS-pillar equivalent. Keeps any legacy backlinks
    // and AI-cached references resolving cleanly rather than 404ing.
    const RETIRED_SERVICE_REDIRECTS = [
      { from: 'business-registration',  to: 'share-issuance-cap-table' },
      { from: 'startup-tax-relief',     to: 'seis-advance-assurance' },
      { from: 'seis-eis-advice',        to: 'seis-advance-assurance' },
      { from: 'cash-flow-forecasting',  to: 'rd-tax-credits' },
      { from: 'growth-planning',        to: 'qualifying-period-monitoring' },
    ];

    const cullRedirects = [];

    // 1. Service x location combo URLs all 301 to the service pillar.
    //    Use :loc+ (one-or-more) so we don't intercept the bare pillar URL.
    for (const svc of KEPT_SERVICE_SLUGS) {
      cullRedirects.push({
        source: `/services/${svc}/:loc+`,
        destination: `/services/${svc}/`,
        permanent: true,
      });
    }

    // 2. Catch-all for any retired-service-slug + location combo (e.g. if
    //    somebody linked to a service slug that no longer exists). Falls
    //    through to /services/ since we can't infer the right pillar.
    cullRedirects.push({
      source: '/services/:svc/:loc+',
      destination: '/services/:svc/',
      permanent: true,
    });

    // 3. Retired city pages -> /location/ (kept-list landing).
    for (const slug of RETIRED_CITY_SLUGS) {
      cullRedirects.push({
        source: `/location/${slug}/`,
        destination: '/location/',
        permanent: true,
      });
      // Catch any deeper paths under retired cities too
      cullRedirects.push({
        source: `/location/${slug}/:rest+`,
        destination: '/location/',
        permanent: true,
      });
    }

    // 4. Old /areas-we-cover/ thin hub (140 imp, 0 clicks) -> /location/
    cullRedirects.push({
      source: '/areas-we-cover/',
      destination: '/location/',
      permanent: true,
    });
    cullRedirects.push({
      source: '/areas-we-cover/:rest*',
      destination: '/location/',
      permanent: true,
    });

    // 5. Retired startup-fleet service slugs -> closest SEIS pillar.
    for (const { from, to } of RETIRED_SERVICE_REDIRECTS) {
      cullRedirects.push({
        source: `/services/${from}/`,
        destination: `/services/${to}/`,
        permanent: true,
      });
      cullRedirects.push({
        source: `/services/${from}/:rest+`,
        destination: `/services/${to}/`,
        permanent: true,
      });
    }

    return [
      // Host canonicalisation: non-www -> www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'seisaccountants.uk' }],
        destination: 'https://www.seisaccountants.uk/:path*',
        permanent: true,
      },
      // Orphan route from earlier build
      {
        source: '/vetting-process/:path*',
        destination: '/how-we-vet/',
        permanent: true,
      },

      ...cullRedirects,

      // -----------------------------------------------------------------
      // Blog removed entirely on the SEIS pivot. The startup-fleet blog
      // covered general business-formation, payroll, and US-flavoured
      // tax topics that do not fit a SEIS-specialist site. Catch-all
      // redirects every blog URL to the SEIS and EIS guide, which is
      // the single most relevant surviving surface.
      // -----------------------------------------------------------------
      {
        source: '/blog/',
        destination: '/guides/seis-eis-guide-uk-startups/',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/guides/seis-eis-guide-uk-startups/',
        permanent: true,
      },

      // -----------------------------------------------------------------
      // Industries section removed (1:1 carryover from startup-fleet,
      // didn't earn distinct SEIS value). Catch-all redirect to the
      // services hub since SEIS specialism is horizontal not vertical.
      // -----------------------------------------------------------------
      {
        source: '/industries/',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/industries/:path*',
        destination: '/services/',
        permanent: true,
      },

      // -----------------------------------------------------------------
      // Retired guides on the SEIS pivot: business-registration,
      // startup-tax-relief, cash-flow-forecasting, and growth-planning.
      // Each redirected to the closest surviving SEIS-aligned guide.
      // -----------------------------------------------------------------
      {
        source: '/guides/startup-tax-relief-uk/',
        destination: '/guides/seis-eis-guide-uk-startups/',
        permanent: true,
      },
      {
        source: '/guides/startup-business-registration-uk/',
        destination: '/guides/seis-eis-guide-uk-startups/',
        permanent: true,
      },
      {
        source: '/guides/cash-flow-forecasting-startups/',
        destination: '/guides/rd-tax-credits-uk-startups/',
        permanent: true,
      },
      {
        source: '/guides/growth-planning-uk-startups/',
        destination: '/guides/seis-eis-guide-uk-startups/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
