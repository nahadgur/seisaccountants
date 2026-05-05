// components/Header.tsx - Paper Tape edition
// Preserves all accessibility patterns from previous version:
// click-to-open dropdowns, aria-expanded, aria-haspopup, aria-controls,
// outside-click close, Escape close, mobile menu with aria-expanded.
// Adds Industries dropdown alongside Services and Guides.
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, BookOpen } from 'lucide-react';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';

interface HeaderProps {
  onOpenModal?: () => void;
}

type DropdownKey = 'services' | 'industries' | 'guides' | null;

export function Header({ onOpenModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  useEffect(() => {
    if (!openDropdown) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [openDropdown]);

  const toggleDropdown = useCallback((key: DropdownKey) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(15,15,20,0.12)]' : ''
      }`}
      style={{ backgroundColor: 'var(--paper-100)' }}
    >
      <div className="container-width">
        <div className="flex justify-between items-center h-16 md:h-18">

          {/* LOGO - Georgia wordmark with amber italic on the last word */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              priority
              className="h-8 w-auto md:h-9"
              aria-hidden="true"
            />
            <span className="font-display text-[17px] md:text-[19px] leading-none tracking-tight text-ink-900">
              seis<em className="text-brand-500 not-italic md:italic">accountants</em>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-6">
            <Link href="/" className="nav-link">Home</Link>

            {/* Services */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('services')}
                aria-expanded={openDropdown === 'services'}
                aria-haspopup="menu"
                aria-controls="services-menu"
                className="flex items-center gap-1 nav-link"
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {openDropdown === 'services' && (
                <div
                  id="services-menu"
                  role="menu"
                  className="absolute top-full left-0 w-72 bg-white border border-ink-900/10 shadow-sm p-1 z-50 mt-2 rounded-sm"
                >
                  <Link
                    href="/services/"
                    role="menuitem"
                    className="block px-4 py-2.5 font-display italic text-[15px] text-brand-500 hover:bg-paper-100 border-b border-ink-900/8 mb-1"
                  >
                    All services &rarr;
                  </Link>
                  {services.map(service => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}/`}
                      role="menuitem"
                      className="block px-4 py-2 text-[14px] text-ink-700 hover:bg-paper-100 hover:text-brand-500 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('industries')}
                aria-expanded={openDropdown === 'industries'}
                aria-haspopup="menu"
                aria-controls="industries-menu"
                className="flex items-center gap-1 nav-link"
              >
                Industries
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'industries' ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {openDropdown === 'industries' && (
                <div
                  id="industries-menu"
                  role="menu"
                  className="absolute top-full left-0 w-72 bg-white border border-ink-900/10 shadow-sm p-1 z-50 mt-2 rounded-sm"
                >
                  <Link
                    href="/industries/"
                    role="menuitem"
                    className="block px-4 py-2.5 font-display italic text-[15px] text-brand-500 hover:bg-paper-100 border-b border-ink-900/8 mb-1"
                  >
                    All industries &rarr;
                  </Link>
                  {industries.map(industry => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}/`}
                      role="menuitem"
                      className="block px-4 py-2 text-[14px] text-ink-700 hover:bg-paper-100 hover:text-brand-500 transition-colors"
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Guides */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('guides')}
                aria-expanded={openDropdown === 'guides'}
                aria-haspopup="menu"
                aria-controls="guides-menu"
                className="flex items-center gap-1 nav-link"
              >
                Guides
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'guides' ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {openDropdown === 'guides' && (
                <div
                  id="guides-menu"
                  role="menu"
                  className="absolute top-full left-0 w-80 bg-white border border-ink-900/10 shadow-sm p-1 z-50 mt-2 rounded-sm"
                >
                  <Link
                    href="/guides/"
                    role="menuitem"
                    className="flex items-center gap-2 px-4 py-2.5 font-display italic text-[15px] text-brand-500 hover:bg-paper-100 border-b border-ink-900/8 mb-1"
                  >
                    <BookOpen className="w-4 h-4" aria-hidden="true" /> All guides &rarr;
                  </Link>
                  {guides.map(guide => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}/`}
                      role="menuitem"
                      className="block px-4 py-2 text-[14px] text-ink-700 hover:bg-paper-100 hover:text-brand-500 transition-colors"
                    >
                      {guide.shortTitle}
                      {guide.hasCalculator && (
                        <span className="ml-2 text-[10px] text-brand-500 font-semibold tracking-widest uppercase">+ tool</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/location/" className="nav-link">Areas</Link>
            <Link href="/how-we-vet/" className="nav-link">Vetting</Link>

            {onOpenModal ? (
              <button
                onClick={onOpenModal}
                className="ml-3 bg-brand-500 hover:bg-brand-600 text-white text-[12px] font-medium py-2.5 px-5 rounded-sm uppercase tracking-[0.15em] transition-colors"
                type="button"
              >
                Get matched &nbsp;&rarr;
              </button>
            ) : (
              <Link
                href="/contact/"
                className="ml-3 bg-brand-500 hover:bg-brand-600 text-white text-[12px] font-medium py-2.5 px-5 rounded-sm uppercase tracking-[0.15em] transition-colors"
              >
                Get matched &nbsp;&rarr;
              </Link>
            )}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-ink-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute w-full left-0 shadow-lg z-50 max-h-[82vh] overflow-y-auto border-t border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-50)' }}
        >
          <div className="px-5 pt-3 pb-8">
            <Link href="/" className="block py-3 text-[15px] font-sans text-ink-900 border-b border-ink-900/10">
              Home
            </Link>

            <div className="py-4 border-b border-ink-900/10">
              <div className="text-[10px] font-semibold text-brand-500 uppercase tracking-[0.22em] mb-3">
                Services
              </div>
              <Link href="/services/" className="block py-1.5 font-display italic text-brand-500">
                All services &rarr;
              </Link>
              {services.map(s => (
                <Link key={s.id} href={`/services/${s.slug}/`} className="block py-1.5 text-[14px] text-ink-700 hover:text-brand-500">
                  {s.title}
                </Link>
              ))}
            </div>

            <div className="py-4 border-b border-ink-900/10">
              <div className="text-[10px] font-semibold text-brand-500 uppercase tracking-[0.22em] mb-3">
                Industries
              </div>
              <Link href="/industries/" className="block py-1.5 font-display italic text-brand-500">
                All industries &rarr;
              </Link>
              {industries.map(i => (
                <Link key={i.slug} href={`/industries/${i.slug}/`} className="block py-1.5 text-[14px] text-ink-700 hover:text-brand-500">
                  {i.title}
                </Link>
              ))}
            </div>

            <div className="py-4 border-b border-ink-900/10">
              <div className="text-[10px] font-semibold text-brand-500 uppercase tracking-[0.22em] mb-3">
                Guides
              </div>
              <Link href="/guides/" className="block py-1.5 font-display italic text-brand-500">
                All guides &rarr;
              </Link>
              {guides.map(g => (
                <Link key={g.slug} href={`/guides/${g.slug}/`} className="block py-1.5 text-[14px] text-ink-700 hover:text-brand-500">
                  {g.shortTitle}
                  {g.hasCalculator && <span className="ml-2 text-[10px] text-brand-500 font-semibold tracking-widest uppercase">+ tool</span>}
                </Link>
              ))}
            </div>

            <Link href="/location/" className="block py-3 text-[15px] font-sans text-ink-900 border-b border-ink-900/10">
              Areas we cover
            </Link>
            <Link href="/how-we-vet/" className="block py-3 text-[15px] font-sans text-ink-900 border-b border-ink-900/10">
              How we vet
            </Link>

            <div className="pt-6">
              <button
                onClick={() => { onOpenModal?.(); setMobileOpen(false); }}
                className="block w-full btn-primary"
                type="button"
              >
                Get matched &nbsp;&rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
