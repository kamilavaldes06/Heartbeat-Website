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
      {/* Top Utility Announcement & Contact Bar */}
      <div className="bg-[#126B72] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Bilingual & Hours notice */}
          <div className="flex items-center gap-4 text-xs font-medium tracking-wide">
            <span className="inline-flex items-center gap-1.5 bg-[#0D4E53] px-2.5 py-0.5 rounded text-white font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F7D2E4]"></span>
              {t('banner.bilingual')}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-teal-100">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo Brand Link */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D90C72] rounded-lg"
          >
            <img
              src="/logo.png"
              alt="HeartBeat Home Health Care"
              className="h-14 sm:h-16 w-auto object-contain"
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

          {/* Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-sm transition-all duration-150 active:scale-95 whitespace-nowrap"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t('nav.contact')}</span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#243A47] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#D90C72]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {/* Language selector in mobile menu */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 px-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#126B72]" />
              {language === 'en' ? 'Language / Idioma' : 'Idioma / Language'}
            </span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  language === 'en' ? 'bg-white text-[#126B72] shadow-xs' : 'text-slate-600'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  language === 'es' ? 'bg-[#D90C72] text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                Español
              </button>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    active
                      ? 'bg-[#FDF4F8] text-[#D90C72] font-bold'
                      : 'text-[#243A47] hover:bg-slate-50 hover:text-[#126B72]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 mt-2 border-t border-slate-100 space-y-3">
            <a
              href="tel:8133586688"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#E7F2F3] text-[#126B72] font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>(813) 358-6688</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#D90C72] text-white font-bold text-sm shadow-xs"
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
