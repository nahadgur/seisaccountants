// app/api/companies-house/health/route.ts
// Diagnostic endpoint for the SEIS tool. Reports whether CH_API_KEY is
// loaded and whether Companies House is reachable. Does NOT leak the key
// itself (only its length).
//
// Open /api/companies-house/health in the browser when the diagnostic
// tool isn't working. The JSON response tells you exactly what's wrong.

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const key = process.env.CH_API_KEY;

  if (!key) {
    return NextResponse.json({
      ok: false,
      step: 'env',
      hint: '.env.local missing or CH_API_KEY unset. Did you restart `npm run dev` after adding the key?',
    }, { status: 503 });
  }
  if (key === 'PASTE_YOUR_KEY_HERE') {
    return NextResponse.json({
      ok: false,
      step: 'env',
      hint: 'CH_API_KEY is still the placeholder. Replace it with the real key from Companies House.',
    }, { status: 503 });
  }

  // Try a no-op API call: fetch a known company (GOV.UK Limited, 11209560).
  // If we get back 200 with JSON, the key + auth + network are all good.
  const auth = `Basic ${Buffer.from(`${key}:`).toString('base64')}`;
  try {
    const res = await fetch('https://api.company-information.service.gov.uk/company/11209560', {
      headers: { Authorization: auth },
      cache: 'no-store',
    });
    const text = await res.text();
    let parsed: unknown = null;
    try { parsed = JSON.parse(text); } catch { /* not JSON */ }

    if (res.status === 401) {
      return NextResponse.json({
        ok: false,
        step: 'auth',
        upstreamStatus: 401,
        hint: 'Companies House rejected the key. Check you copied the API key (not the Client ID), and that the application is enabled.',
        keyLength: key.length,
      }, { status: 503 });
    }
    if (!res.ok) {
      return NextResponse.json({
        ok: false,
        step: 'upstream',
        upstreamStatus: res.status,
        upstreamBody: text.slice(0, 500),
        hint: `Companies House returned HTTP ${res.status}.`,
        keyLength: key.length,
      }, { status: 502 });
    }
    return NextResponse.json({
      ok: true,
      step: 'all-good',
      keyLength: key.length,
      sampleCompany: parsed && typeof parsed === 'object' ? (parsed as { company_name?: string }).company_name : 'unknown',
      hint: 'Key works, Companies House reachable, JSON parsing OK. The diagnostic should work.',
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({
      ok: false,
      step: 'fetch',
      error: msg,
      hint: 'Could not reach Companies House. Check your internet connection.',
      keyLength: key.length,
    }, { status: 502 });
  }
}
