'use client';

// components/LeadFormModal.tsx - Paper Tape edition
// ALL behaviour preserved: focus trap, Escape, body scroll lock,
// GDPR consent requirement, error role=alert, animation states,
// Google Script endpoint. Only visual treatment changed.
import { siteConfig } from '@/data/site';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { CheckCircle, X, Phone, AlertCircle } from 'lucide-react';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwp1XIRQyZTzEH-wSVEJbHNLKMqSObg0n7z2CG9Va13II60x8ATztkjz_MgA1-r_yNy/exec';

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationState, setAnimationState] = useState<'idle' | 'entering' | 'exiting'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    consent: false,
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimationState('entering');
    } else if (shouldRender) {
      setAnimationState('exiting');
      const timer = setTimeout(() => {
        setShouldRender(false);
        setAnimationState('idle');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalOverflow; };
  }, [shouldRender]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => {
        firstInputRef.current?.focus();
      });
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key === 'Tab' && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!shouldRender) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMsg('Please tick the consent box before submitting.');
      return;
    }
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        page: window.location.href,
        source: siteConfig.name,
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: { ok?: boolean; error?: string } = {};
      try { data = JSON.parse(text); } catch { /* non-JSON response tolerated */ }

      if (data && data.ok === false) {
        throw new Error(data.error || 'Submission failed');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => { setIsSuccess(false); onClose(); }, 3000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMsg('Something went wrong. Please try again, or email hello@seisaccountants.uk.');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Paper Tape form input style - white on paper background, ink border,
  // brand focus ring. ink-900 placeholder at 40% (readable on all).
  const inputClass =
    'w-full px-4 py-3.5 rounded-sm border border-ink-900/15 bg-white text-ink-900 placeholder:text-ink-500 text-[14px] focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4
        ${animationState === 'entering' ? 'animate-backdrop-in' : animationState === 'exiting' ? 'animate-backdrop-out' : 'opacity-100'}`}
      onClick={handleBackdropClick}
      role="presentation"
      style={{ backgroundColor: 'rgba(15, 15, 20, 0.65)' }}
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-lg overflow-hidden rounded-sm
          ${animationState === 'entering' ? 'animate-modal-in' : 'animate-modal-out'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-form-title"
        aria-describedby="lead-form-desc"
        style={{ backgroundColor: 'var(--paper-50)', boxShadow: '0 20px 50px -10px rgba(15, 15, 20, 0.45)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 text-ink-700 hover:text-ink-900 hover:bg-paper-200 rounded-sm flex items-center justify-center transition-colors z-10"
          aria-label="Close enquiry form"
          type="button"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7 md:p-8 max-h-[90vh] overflow-y-auto">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-6 space-y-5">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-brand-600"
                style={{ backgroundColor: 'var(--brand-50)' }}
              >
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="font-display text-[28px] text-ink-900 leading-tight tracking-tight">
                Request <em className="text-brand-500 italic">received</em>
              </h2>
              <p className="font-sans text-[14px] text-ink-700 leading-relaxed max-w-sm">
                We will match you with a vetted accountant. Check your email, and expect a call within 24 hours.
              </p>
            </div>
          ) : (
            <>
              {/* Masthead */}
              <div className="mb-6 pb-4 border-b border-ink-900/15">
                <div className="flex items-center mb-4">
                  <span className="eyebrow">&sect; FREE MATCHING</span>
                </div>
                <h2
                  id="lead-form-title"
                  className="font-display text-[30px] md:text-[34px] text-ink-900 leading-[1.0] tracking-tight"
                >
                  Find your <em className="text-brand-500 italic">accountant.</em>
                </h2>
                <p id="lead-form-desc" className="font-sans text-ink-700 text-[13.5px] mt-3 leading-relaxed">
                  Tell us the basics. We will match you with screened accountants in your area within a week.
                </p>
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="flex items-start gap-3 mb-4 px-4 py-3 bg-white border border-red-300 rounded-sm text-red-800"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 text-[13px] leading-relaxed">{errorMsg}</div>
                  <button
                    type="button"
                    onClick={() => setErrorMsg(null)}
                    aria-label="Dismiss error"
                    className="text-red-500 hover:text-red-700 flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
                <div>
                  <label htmlFor="lead-fullname" className="sr-only">Full name</label>
                  <input
                    ref={firstInputRef}
                    id="lead-fullname"
                    required
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full name *"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="lead-phone" className="sr-only">Phone number</label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-500 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      id="lead-phone"
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number *"
                      className={inputClass + ' pl-10'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-email" className="sr-only">Email address</label>
                  <input
                    id="lead-email"
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address *"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="lead-location" className="sr-only">Town or postcode</label>
                  <input
                    id="lead-location"
                    required
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Town or postcode *"
                    className={inputClass}
                  />
                </div>

                {/* GDPR consent */}
                <label
                  htmlFor="lead-consent"
                  className="flex items-start gap-3 mt-3 cursor-pointer select-none"
                >
                  <input
                    id="lead-consent"
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded-sm border-ink-900/30 text-brand-500 focus:ring-brand-500 focus:ring-offset-0 flex-shrink-0 cursor-pointer"
                  />
                  <span className="text-[12px] text-ink-700 leading-[1.65]">
                    I agree that my details will be shared with a carefully selected UK accountancy practice in our network who will contact me directly. See the{' '}
                    <Link href="/privacy/" className="text-brand-500 hover:text-brand-700 underline underline-offset-2">
                      Privacy Policy
                    </Link>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-sm transition-colors text-[13px] tracking-[0.15em] uppercase mt-3"
                >
                  {isSubmitting ? 'Sending ...' : 'Get matched \u2009\u2192'}
                </button>

                <p className="text-center text-[10.5px] font-medium text-ink-500 mt-2 tracking-[0.18em] uppercase">
                  Free &middot; No obligation &middot; No spam
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
