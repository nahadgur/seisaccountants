// lib/companiesHouse.ts
// Server-only Companies House Public Data API client.
//
// API auth quirk: HTTP Basic Auth with the API key as the USERNAME and
// an empty password. Yes, really. Documented at
// https://developer.company-information.service.gov.uk/guide/authentication
//
// The key lives in CH_API_KEY (.env.local). NEVER import this module from
// a client component — it would leak the key into the browser bundle.

const API_BASE = 'https://api.company-information.service.gov.uk';

function authHeader(): string {
  const key = process.env.CH_API_KEY;
  if (!key || key === 'PASTE_YOUR_KEY_HERE') {
    throw new Error('CH_API_KEY missing. Set it in .env.local (see .env.example).');
  }
  // base64 encode "<key>:" — empty password
  const token = Buffer.from(`${key}:`).toString('base64');
  return `Basic ${token}`;
}

export interface CompanySearchResult {
  company_name: string;
  company_number: string;
  company_status: string;
  company_type: string;
  date_of_creation?: string;
  address_snippet?: string;
}

export interface CompanyProfile {
  company_name: string;
  company_number: string;
  company_status: string;        // active | dissolved | liquidation | ...
  type: string;                  // ltd | llp | plc | private-limited-shares | ...
  date_of_creation: string;      // ISO yyyy-mm-dd
  jurisdiction: string;          // england-wales | scotland | northern-ireland | ...
  sic_codes?: string[];
  registered_office_address?: {
    address_line_1?: string;
    address_line_2?: string;
    locality?: string;
    region?: string;
    postal_code?: string;
    country?: string;
  };
  accounts?: {
    next_due?: string;
    last_accounts?: { period_end_on?: string };
  };
}

/** Search for companies by name. Returns up to 10 matches. */
export async function searchCompanies(query: string): Promise<CompanySearchResult[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const url = `${API_BASE}/search/companies?q=${encodeURIComponent(trimmed)}&items_per_page=10`;
  const res = await fetch(url, {
    headers: { Authorization: authHeader() },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Companies House search failed: ${res.status}`);
  }
  const data = await res.json();
  return (data.items || []) as CompanySearchResult[];
}

/** Fetch a single company by its registration number. */
export async function getCompanyProfile(number: string): Promise<CompanyProfile | null> {
  const trimmed = number.trim().toUpperCase();
  if (!trimmed) return null;

  const url = `${API_BASE}/company/${encodeURIComponent(trimmed)}`;
  const res = await fetch(url, {
    headers: { Authorization: authHeader() },
    cache: 'no-store',
  });
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Companies House lookup failed: ${res.status}`);
  }
  return (await res.json()) as CompanyProfile;
}

/** Best-effort detection of "is this a Companies House registration number?" */
export function looksLikeCompanyNumber(input: string): boolean {
  // 8 chars, mix of letters and digits. Real format examples: "12345678",
  // "SC123456" (Scotland), "NI123456" (NI), "OC123456" (LLP), etc.
  return /^[A-Z]{0,2}\d{6,8}$/i.test(input.trim());
}
