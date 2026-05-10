// app/api/companies-house/search/route.ts
// Server-side proxy for Companies House company-name search.
// Keeps the CH_API_KEY off the wire. Returns a trimmed payload to the
// browser — only the fields the diagnostic UI actually needs.

import { NextResponse } from 'next/server';
import { searchCompanies } from '@/lib/companiesHouse';

export const runtime = 'nodejs';

export async function GET(request: Request) {
 const { searchParams } = new URL(request.url);
 const q = (searchParams.get('q') || '').trim();
 if (!q) {
 return NextResponse.json({ items: [] });
 }
 if (q.length < 2) {
 return NextResponse.json({ items: [] });
 }

 try {
 const items = await searchCompanies(q);
 return NextResponse.json({
 items: items.map(i => ({
 company_name: i.company_name,
 company_number: i.company_number,
 company_status: i.company_status,
 company_type: i.company_type,
 date_of_creation: i.date_of_creation,
 address_snippet: i.address_snippet,
 })),
 });
 } catch (err) {
 const msg = err instanceof Error ? err.message : 'Unknown error';
 const status = msg.includes('CH_API_KEY missing') ? 503 : 500;
 return NextResponse.json({ error: msg }, { status });
 }
}
