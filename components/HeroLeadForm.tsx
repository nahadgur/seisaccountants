'use client';

// components/HeroLeadForm.tsx - Paper Tape edition
// Same fields, same logic, same Google Script endpoint. Restyled as a
// white card on cream paper with editorial header and serif accents.

import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface HeroLeadFormProps {
  city?: string;
  service?: string;
  ctaHeading?: React.ReactNode;
  ctaButton?: string;
}

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwp1XIRQyZTzEH-wSVEJbHNLKMqSObg0n7z2CG9Va13II60x8ATztkjz_MgA1-r_yNy/exec';

export function HeroLeadForm({ city, service, ctaHeading, ctaButton }: HeroLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: city || '',
    treatment: service || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location || city || '',
        treatment: formData.treatment || service || '',
        page: window.location.href,
        source: siteConfig.name,
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: { ok?: boolean; error?: string } = {};
      try { data = JSON.parse(text); } catch {}

      if (data && data.ok === false) throw new Error(data.error || 'Submission failed');

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-sm border border-ink-900/15 bg-white text-ink-900 placeholder:text-ink-500 text-[14px] focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors';

  if (isSuccess) {
    return (
      <div className="bg-white text-ink-900 rounded-sm p-8 border border-ink-900/10 flex flex-col items-center justify-center text-center gap-4 min-h-[340px]">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-brand-600"
          style={{ backgroundColor: 'var(--brand-50)' }}
        >
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="font-display text-[26px] leading-tight tracking-tight">
          Request <em className="text-brand-500 italic">received</em>
        </h3>
        <p className="font-sans text-[14px] text-ink-700 leading-relaxed max-w-sm">
          We have matched you with a vetted accountant{city ? ` in ${city}` : ''}. Check your email for next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white text-ink-900 rounded-sm p-6 md:p-7 border border-ink-900/10">
      <div className="mb-5 pb-4 border-b border-ink-900/10">
        <div className="flex items-center mb-3">
          <span className="eyebrow">FREE MATCHING</span>
        </div>
        <h3 className="font-display text-[26px] md:text-[28px] leading-[1.0] tracking-tight">
          {ctaHeading || (city ? <>Get matched<br /><em className="text-brand-500 italic">in {city}</em></> : <>Get <em className="text-brand-500 italic">matched</em></>)}
        </h3>
        <p className="font-sans text-ink-700 text-[13px] mt-2 leading-relaxed">
          Up to 3 vetted accountants will contact you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input required name="fullName" type="text" value={formData.fullName} onChange={handleChange} placeholder="Full name *" className={inputClass} />

        <div className="grid grid-cols-2 gap-3">
          <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone *" className={inputClass} />
          <input required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email *" className={inputClass} />
        </div>

        <select required name="treatment" value={formData.treatment} onChange={handleChange} className={inputClass + ' appearance-none cursor-pointer'}>
          <option value="" disabled>What service? *</option>
          {services.map(s => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
        </select>

        {!city && (
          <input required name="location" type="text" value={formData.location} onChange={handleChange} placeholder="Town or postcode *" className={inputClass} />
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-medium py-3.5 px-6 rounded-sm transition-colors text-[13px] tracking-[0.15em] uppercase mt-2"
        >
          {isSubmitting ? 'Sending ...' : (ctaButton || 'Get matched \u2009\u2192')}
        </button>

        <div className="flex items-center justify-center gap-3 pt-1">
          {['100% free', 'No spam', '24hr response'].map(item => (
            <span key={item} className="flex items-center gap-1 text-[10.5px] font-medium text-ink-500 tracking-[0.1em] uppercase">
              <span className="w-1 h-1 bg-brand-500 rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </form>
    </div>
  );
}
