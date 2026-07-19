// app/location/faqs.ts
// Shared FAQ data for the /location/ index page. Lives in a separate
// non-client module so both the server-side page.tsx (for FAQPage JSON-LD)
// and the client-side LocationIndexClient.tsx (for rendered FAQ markup)
// can import from the same source of truth.

export const LOCATION_FAQS = [
 {
 question: 'Do you only cover these 12 cities?',
 answer:
 'No. We work across the whole of the UK by cloud accounting and remote engagement. These 12 cities have dedicated landing pages because they have the strongest search demand and the most live engagements. If your business is outside this list we can still act for you, as most accountancy work runs paperless via Xero, QuickBooks, or FreeAgent regardless of where you are based.',
 },
 {
 question: 'How were these 12 cities selected?',
 answer:
 'Selection was driven by GSC search query data and click-conversion signals. Cities had to demonstrate either multi-signal aggregate (combo URL impressions plus query mentions across multiple services) or page-1 ranking signals worth defending. Tier-A cities are London, Manchester, Cambridge, Guildford, Edgware, Northampton, Nottingham, Newcastle, Wakefield, Cheltenham, and Swansea. Tier-B is Salford, which holds position 1 on "accountants in salford" and "accountants salford".',
 },
 {
 question: 'Will you add more cities later?',
 answer:
 'Yes, when GSC data justifies it. We re-pull search performance data approximately every six weeks and add new cities to the kept list when consistent query demand develops. Cities currently watched but not yet added include Hull, Bath, Leeds, Crawley, and Birmingham. If your city earns its own search demand over the next signal cycle, expect a dedicated page within 6-12 weeks.',
 },
 {
 question: 'Does my accountant have to be physically in my city?',
 answer:
 'No. UK accountancy is overwhelmingly cloud-based and paperless: Xero, QuickBooks, FreeAgent, and similar platforms make geographic boundaries effectively irrelevant for the vast majority of startup work. We prioritise sector specialism and engagement fit over physical proximity. For rare situations where in-person presence matters (an FCA capital-adequacy audit, a regulator on-site visit), we work to your actual catchment rather than vanity geography.',
 },
 {
 question: 'How long does it take to get a quote?',
 answer:
 'Most enquiries get a fixed written quote within 48 hours. Cities with deeper specialist demand (London, Manchester, Cambridge) typically move fastest; more complex briefs may take a little longer to scope precisely. The quote itself is free, and there is no obligation to engage at any point.',
 },
];
