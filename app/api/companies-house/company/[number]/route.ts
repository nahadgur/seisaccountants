// app/api/companies-house/company/[number]/route.ts
// Server-side proxy for a single Companies House company lookup +
// the SEIS diagnostic. Returns the full diagnostic payload so the
// client component just renders.

import { NextResponse } from 'next/server';
import { getCompanyProfile } from '@/lib/companiesHouse';
import { runDiagnostic } from '@/lib/seisDiagnostic';

export const runtime = 'nodejs';

interface RouteContext {
 params: { number: string };
}

export async function GET(_request: Request, { params }: RouteContext) {
 const number = (params.number || '').trim();
 if (!number) {
 return NextResponse.json({ error: 'Missing company number.' }, { status: 400 });
 }

 try {
 const profile = await getCompanyProfile(number);
 if (!profile) {
 return NextResponse.json({ error: 'Company not found.' }, { status: 404 });
 }
 const diagnostic = runDiagnostic(profile);
 return NextResponse.json({ diagnostic });
 } catch (err) {
 const msg = err instanceof Error ? err.message : 'Unknown error';
 const status = msg.includes('CH_API_KEY missing') ? 503 : 500;
 return NextResponse.json({ error: msg }, { status });
 }
}
