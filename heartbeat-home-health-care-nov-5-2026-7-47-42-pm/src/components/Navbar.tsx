import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Clock, Globe, Menu, X, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/insurance', label: t('nav.insurance') },
    { to: '/coverage-areas', label: t('nav.coverage') },
    { to: '/careers', label: t('nav.careers') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top Utility Announcement & Contact Bar - Hidden on mobile to remove the blue horizontal line */}
      <div className="hidden lg:block bg-[#126B72] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Bilingual & Hours notice */}
          <div className="flex items-center gap-4 text-xs font-medium tracking-wide">
            <span className="inline-flex items-center gap-1.5 bg-[#0D4E53] px-2.5 py-0.5 rounded text-white font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F7D2E4]"></span>
              {t('banner.bilingual')}
            </span>
            <span className="inline-flex items-center gap-1.5 text-teal-100">
              <Clock className="w-3.5 h-3.5 text-[#4D9BBC]" />
              {t('banner.hours')}
            </span>
          </div>

          {/* Right: Phone & Language Switcher */}
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:8133586688"
              className="inline-flex items-center gap-1.5 font-bold hover:text-teal-200 transition-colors"
              title="Call HeartBeat Home Health Care"
            >
              <Phone className="w-3.5 h-3.5 text-[#F7D2E4]" />
              <span className="tabular-nums">(813) 358-6688</span>
            </a>

            <div className="h-3 w-px bg-teal-400/40"></div>

            {/* Language Switcher Button */}
            <div className="inline-flex items-center gap-1 bg-white/10 rounded-md p-0.5 border border-white/20">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white text-[#126B72] shadow-xs font-bold'
                    : 'text-teal-100 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded text-xs font-medium transition-all ${
                  language === 'es'
                    ? 'bg-[#D90C72] text-white shadow-xs font-bold'
                    : 'text-teal-100 hover:text-white'
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-2 sm:gap-4">
          {/* Logo Brand Link */}
          <Link
            to="/"
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90C72] rounded-lg py-1"
            aria-label="HeartBeat Home Health Care Home"
          >
            <img
              src="/logo.png"
              alt="HeartBeat Home Health Care"
              className="h-10 sm:h-12 lg:h-14 w-auto max-w-[130px] sm:max-w-none object-contain"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-semibold transition-colors relative py-1.5 whitespace-nowrap ${
                    active
                      ? 'text-[#D90C72]'
                      : 'text-[#243A47] hover:text-[#126B72]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D90C72] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Mobile Controls (Phone, Language Toggle, Menu) & Desktop Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile / Tablet Phone Link: High-touch call button with icon & direct dial */}
            <a
              href="tel:8133586688"
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D90C72] text-white hover:bg-[#B5085C] shadow-xs transition-all active:scale-95 text-xs font-bold font-heading shrink-0"
              title="Call (813) 358-6688"
              aria-label="Call (813) 358-6688"
            >
              <Phone className="w-3.5 h-3.5 fill-white shrink-0" />
              <span className="hidden min-[390px]:inline tabular-nums font-semibold tracking-tight">(813) 358-6688</span>
              <span className="min-[390px]:hidden font-bold">Call</span>
            </a>

            {/* Mobile / Tablet Language Selector: Clean segmented iOS-style pill */}
            <div className="lg:hidden inline-flex items-center rounded-full border border-slate-200 bg-slate-100 p-0.5 shrink-0 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full text-xs transition-all ${
                  language === 'en'
                    ? 'bg-white text-[#126B72] shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-2 py-0.5 rounded-full text-xs transition-all ${
                  language === 'es'
                    ? 'bg-[#126B72] text-white shadow-2xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Cambiar a Español"
              >
                ES
              </button>
            </div>

            {/* Desktop CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-sm transition-all duration-150 active:scale-95 whitespace-nowrap"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t('nav.contact')}</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#243A47] hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D90C72] shrink-0 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D90C72]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Clean, Executive-grade layout */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Quick Agency Header info */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D90C72]" />
              <span className="text-xs font-bold text-[#126B72] font-heading">
                HeartBeat Home Health Care
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#5C707C]">
              Tampa, FL · ACHC
            </span>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-all ${
                    active
                      ? 'bg-[#FDF4F8] text-[#D90C72] font-bold border border-[#F7D2E4]'
                      : 'text-[#243A47] hover:bg-slate-50 hover:text-[#126B72]'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#D90C72]" />}
                </Link>
              );
            })}
          </div>

          {/* Direct Actions in Mobile Menu */}
          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            <a
              href="tel:8133586688"
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-[#E7F2F3] text-[#126B72] font-bold text-sm hover:bg-[#d8eaec] transition-colors shadow-2xs"
            >
              <Phone className="w-4 h-4 text-[#D90C72]" />
              <span className="tabular-nums">Call (813) 358-6688 (24/7)</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#D90C72] text-white font-bold text-sm hover:bg-[#B5085C] transition-colors shadow-xs"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t('nav.contact')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
