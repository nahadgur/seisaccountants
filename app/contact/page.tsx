// app/contact/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with seisaccountants.uk to submit an accountant matching enquiry, ask a question, or make a privacy request.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
