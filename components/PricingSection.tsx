'use client';

// components/PricingSection.tsx - Paper Tape edition
import { PoundSterling, CheckCircle, CreditCard } from 'lucide-react';
import { pricingTiers, treatmentIncludes, financeInfo, getPricingForService } from '@/data/pricing';

interface PricingSectionProps {
 cityName?: string;
 serviceId?: string;
 serviceName?: string;
}

export function PricingSection({ cityName, serviceId, serviceName }: PricingSectionProps) {
 const tiers = serviceId ? getPricingForService(serviceId) : pricingTiers;

 const heading = cityName && serviceName
 ? `${serviceName} fees in ${cityName}`
 : cityName
 ? `Startup accountant fees in ${cityName}`
 : serviceName
 ? `${serviceName} pricing guide`
 : 'Pricing guide';

 const intro = cityName
 ? `Fees in ${cityName} vary depending on the service and startup complexity. Below are typical costs from vetted accountants in the ${cityName} area. All prices are in GBP.`
 : 'Fees vary depending on the service and startup complexity. Below are typical costs from accountants in our network. All prices are in GBP.';

 return (
 <section>
 <div className="masthead mb-4">
 <span>TYPICAL FEES</span>
 <span className="text-ink-500">GBP</span>
 </div>
 <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 leading-[1.05] tracking-tight mb-3">
 {heading}
 </h2>
 <p className="font-sans text-[14px] text-ink-700 mb-8 leading-relaxed max-w-3xl">
 {intro}
 </p>

 {/* Pricing Table - desktop */}
 <div className="overflow-x-auto mb-8 hidden md:block">
 <table className="w-full border border-ink-900/15 bg-white rounded-sm overflow-hidden">
 <thead>
 <tr
 className="text-left border-b border-ink-900/20"
 style={{ backgroundColor: 'var(--paper-50)' }}
 >
 <th className="px-5 py-3.5 font-semibold text-[11px] uppercase tracking-[0.18em] text-ink-900">Service Type</th>
 <th className="px-5 py-3.5 font-semibold text-[11px] uppercase tracking-[0.18em] text-ink-900">Price Range</th>
 <th className="px-5 py-3.5 font-semibold text-[11px] uppercase tracking-[0.18em] text-ink-900 hidden md:table-cell">Frequency</th>
 <th className="px-5 py-3.5 font-semibold text-[11px] uppercase tracking-[0.18em] text-ink-900 hidden lg:table-cell">What&apos;s included</th>
 </tr>
 </thead>
 <tbody>
 {tiers.map((tier, i) => (
 <tr
 key={tier.slug}
 className={i < tiers.length - 1 ? 'border-b border-ink-900/8' : ''}
 >
 <td className="px-5 py-4 align-top">
 <div className="font-display text-[15px] text-ink-900 tracking-tight leading-snug">{tier.treatment}</div>
 <p className="font-sans text-ink-700 text-[12px] mt-1 hidden sm:block leading-relaxed">{tier.description}</p>
 </td>
 <td className="px-5 py-4 align-top">
 <span className="font-display italic text-brand-500 text-[18px] whitespace-nowrap">
 &pound;{tier.priceFrom.toLocaleString()}<span className="text-ink-500 not-italic text-[14px]"> - &pound;{tier.priceTo.toLocaleString()}</span>
 </span>
 </td>
 <td className="px-5 py-4 align-top font-sans text-[13px] text-ink-700 hidden md:table-cell">{tier.typicalDuration}</td>
 <td className="px-5 py-4 align-top font-sans text-[13px] text-ink-700 hidden lg:table-cell">{tier.serviceIncludes}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>

 {/* Mobile cards */}
 <div className="md:hidden space-y-3 mb-8">
 {tiers.map(tier => (
 <div key={tier.slug} className="bg-white border border-ink-900/10 rounded-sm p-4">
 <div className="flex justify-between items-start mb-2 gap-3">
 <span className="font-display text-[15px] text-ink-900 tracking-tight leading-snug">{tier.treatment}</span>
 <span className="font-display italic text-brand-500 text-[15px] whitespace-nowrap flex-shrink-0">
 &pound;{tier.priceFrom.toLocaleString()}+
 </span>
 </div>
 <div className="flex gap-3 text-[11px] font-medium text-ink-500 tracking-wide uppercase">
 <span>{tier.typicalDuration}</span>
 <span aria-hidden="true">&middot;</span>
 <span>{tier.serviceIncludes}</span>
 </div>
 </div>
 ))}
 </div>

 {/* Included + Finance */}
 <div className="grid md:grid-cols-2 gap-3">
 <div
 className="rounded-sm p-6 border border-ink-900/10"
 style={{ backgroundColor: 'var(--paper-50)' }}
 >
 <div className="flex items-center gap-2 mb-4">
 <PoundSterling className="w-4 h-4 text-brand-500" aria-hidden="true" />
 <span className="eyebrow">WHAT&apos;S INCLUDED</span>
 </div>
 <h3 className="font-display text-[17px] text-ink-900 mb-4 tracking-tight">Included in the fee</h3>
 <ul className="space-y-2.5">
 {treatmentIncludes.map((item, i) => (
 <li key={i} className="flex items-start gap-2 font-sans text-[13px] text-ink-700 leading-relaxed">
 <CheckCircle className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-1" aria-hidden="true" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>

 <div
 className="rounded-sm p-6"
 style={{ backgroundColor: 'var(--ink-900)' }}
 >
 <div className="flex items-center gap-2 mb-4">
 <CreditCard className="w-4 h-4" style={{ color: '#AFA9EC' }} aria-hidden="true" />
 <span
 className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase"
 style={{ color: '#AFA9EC' }}
 >
 FLEXIBLE PAYMENTS
 </span>
 </div>
 <h3
 className="font-display text-[17px] mb-4 tracking-tight"
 style={{ color: 'var(--paper-100)' }}
 >
 Monthly <em className="italic" style={{ color: '#AFA9EC' }}>payment plans</em>
 </h3>
 <p
 className="font-sans text-[13px] leading-relaxed mb-4"
 style={{ color: 'rgba(245, 242, 234, 0.82)' }}
 >
 {financeInfo.description}
 </p>
 <div
 className="rounded-sm p-4 border"
 style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', borderColor: 'rgba(255, 255, 255, 0.12)' }}
 >
 <div
 className="font-display italic text-[22px] leading-none"
 style={{ color: 'var(--paper-100)' }}
 >
 From &pound;{financeInfo.monthlyFrom}<span className="text-[14px] opacity-70">/month</span>
 </div>
 <span
 className="text-[11px] tracking-wide mt-1 block"
 style={{ color: 'rgba(245, 242, 234, 0.65)' }}
 >
 Fixed fees available with most accountants
 </span>
 </div>
 </div>
 </div>

 {/* SEO paragraph */}
 {cityName && (
 <div className="mt-8 max-w-3xl">
 <p className="font-sans text-[13px] text-ink-500 leading-relaxed">
 Startup accountant fees in {cityName} depend on the services required and the complexity of your business. Accountants in our {cityName} network offer transparent, competitive pricing. Most provide a clear proposal following a free initial consultation.
 </p>
 </div>
 )}
 </section>
 );
}
