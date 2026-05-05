// File-based OG image. Replaces the missing static /og-image.png.
// Next.js 14 auto-populates openGraph.images from this file at request time
// and appends a content hash, so social scrapers always get a fresh preview.
//
// Font strategy: PT Serif (display) is loaded from disk so the brand accent
// italic stays on-brand. Body text uses the bundled Satori default (a clean
// sans-serif) because @vercel/og's Satori build rejects woff2 and we avoid
// any network dependency at image-render time.

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { siteConfig } from '@/data/site';

export const alt = `${siteConfig.name} — Free matching service for SEIS and EIS accountants`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const fontDir = join(process.cwd(), 'app/_fonts');
  const [ptSerifBold, ptSerifBoldItalic] = await Promise.all([
    readFile(join(fontDir, 'PTSerif-Bold.ttf')),
    readFile(join(fontDir, 'PTSerif-BoldItalic.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F2EFE5',
          padding: '56px 72px',
          color: '#0F1314',
        }}
      >
        {/* Top brand bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingBottom: '14px',
            borderBottom: '1px solid rgba(15, 19, 20, 0.40)',
            fontSize: '16px',
            letterSpacing: '3.5px',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: '#0E5E62' }}>SEIS Accountants</span>
        </div>

        {/* Main masthead headline, bottom-anchored */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
          }}
        >
          <span
            style={{
              fontSize: '18px',
              letterSpacing: '4.5px',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: '#0E5E62',
              marginBottom: '24px',
            }}
          >
            § The Matching Service
          </span>

          <div
            style={{
              fontFamily: 'PT Serif',
              fontWeight: 700,
              fontSize: '112px',
              lineHeight: 1.0,
              letterSpacing: '-3.5px',
              display: 'flex',
              flexWrap: 'wrap',
              columnGap: '26px',
              rowGap: '6px',
            }}
          >
            <span>SEIS Accountants</span>
            <span style={{ fontStyle: 'italic', color: '#C9821B' }}>UK.</span>
          </div>

          <div
            style={{
              marginTop: '28px',
              fontSize: '26px',
              lineHeight: 1.4,
              color: '#3A372D',
              maxWidth: '860px',
            }}
          >
            Free matching service connecting UK founders raising SEIS and EIS
            with vetted, ACA/ACCA-qualified accountancy practices.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '40px',
            paddingTop: '14px',
            borderTop: '1px solid rgba(15, 19, 20, 0.15)',
            fontSize: '15px',
            letterSpacing: '2.5px',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: '#6B6759',
          }}
        >
          <span>seisaccountants.uk</span>
          <div style={{ display: 'flex', gap: '18px' }}>
            <span>Advance Assurance</span>
            <span>·</span>
            <span>SEIS / EIS</span>
            <span>·</span>
            <span>UK-Wide</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'PT Serif', data: ptSerifBold, weight: 700, style: 'normal' },
        { name: 'PT Serif', data: ptSerifBoldItalic, weight: 700, style: 'italic' },
      ],
    },
  );
}
