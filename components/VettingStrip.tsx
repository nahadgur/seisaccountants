// components/VettingStrip.tsx - Paper Tape edition
import Link from 'next/link';
import { ShieldCheck, BadgeCheck, FileCheck, Award } from 'lucide-react';

const checks = [
 { icon: BadgeCheck, label: 'Qualifications verified' },
 { icon: FileCheck, label: 'PI insurance confirmed' },
 { icon: Award, label: 'References contacted' },
];

export function VettingStrip() {
 return (
 <section
 className="py-5 border-y border-ink-900/10"
 style={{ backgroundColor: 'var(--paper-50)' }}
 >
 <div className="container-width">
 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

 <div className="flex items-center gap-4">
 <div
 className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 text-brand-600"
 style={{ backgroundColor: 'var(--brand-50)' }}
 >
 <ShieldCheck className="w-5 h-5" />
 </div>
 <div>
 <p className="font-display text-[15px] text-ink-900 tracking-tight leading-snug">
 Every accountant in our network is <em className="text-brand-500 italic">vetted.</em>
 </p>
 <p className="font-sans text-[11.5px] text-ink-700 mt-0.5 leading-relaxed">
 ACA, ACCA, or CIMA qualified &middot; &pound;1M+ PI insurance &middot; Startup experience confirmed
 </p>
 </div>
 </div>

 <div className="flex items-center gap-5 flex-wrap">
 <div className="hidden sm:flex items-center gap-4">
 {checks.map(({ icon: Icon, label }) => (
 <span key={label} className="flex items-center gap-1.5 text-[11px] font-medium text-ink-700">
 <Icon className="w-3.5 h-3.5 text-brand-500" />
 {label}
 </span>
 ))}
 </div>
 <Link
 href="/how-we-vet/"
 className="font-display italic text-[13.5px] text-brand-500 hover:text-brand-700 transition-colors whitespace-nowrap"
 >
 Our vetting process &rarr;
 </Link>
 </div>
 </div>
 </div>
 </section>
 );
}
