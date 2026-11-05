import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ArrowRight,
  ShieldCheck,
  Award,
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  Activity,
  Baby,
  Home as HomeIcon,
  Sparkles,
  Image as ImageIcon,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { coverageCounties } from '../data/coverageData';
import { insuranceCategories } from '../data/insuranceData';
import { CTASection } from '../components/CTASection';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  // Featured 4 services for homepage showcase
  const featuredServices = servicesData.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION - Distinct Editorial Split Composition */}
      <section className="relative bg-gradient-to-b from-[#FDF4F8] via-white to-white overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Regional Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E7F2F3] text-[#126B72] text-xs font-bold uppercase tracking-wider font-heading">
                <span className="w-2 h-2 rounded-full bg-[#D90C72]"></span>
                <span>{t('hero.badge')}</span>
                <span className="text-teal-400">·</span>
                <span className="text-[#D90C72]">{t('banner.bilingual')}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#126B72] tracking-tight leading-[1.12] font-heading text-balance">
                {t('hero.headline')}
              </h1>

              {/* Supporting Description */}
              <p className="text-lg sm:text-xl text-[#243A47]/85 leading-relaxed font-body max-w-2xl">
                {t('hero.description')}
              </p>

              {/* Tagline note */}
              <p className="text-sm italic font-medium text-[#D90C72] flex items-center gap-2">
                <Heart className="w-4 h-4 fill-[#D90C72]" />
                <span>{t('tagline')}</span>
              </p>

              {/* CTA Button Group */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-sm transition-all duration-150 active:scale-95 whitespace-nowrap"
                >
                  <span>{t('hero.primaryCta')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base text-[#126B72] bg-[#E7F2F3] hover:bg-[#d8eaec] transition-all duration-150 active:scale-95 whitespace-nowrap border border-[#126B72]/20"
                >
                  <span>{t('hero.secondaryCta')}</span>
                </Link>
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#243A47]/80">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#4D9BBC] shrink-0" />
                  <span className="font-semibold">{t('hero.trust1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D90C72] shrink-0" />
                  <span className="font-semibold">{t('hero.trust2')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#126B72] shrink-0" />
                  <span className="font-semibold">{t('hero.trust3')}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column: Elegantly Framed Editorial Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background soft blush card */}
                <div className="relative rounded-3xl bg-[#FDF4F8] border border-[#F7D2E4] p-6 sm:p-8 card-soft-shadow overflow-hidden">
                  {/* Decorative badge top right */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#F7D2E4]/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center border border-slate-100">
                        <Heart className="w-5 h-5 fill-[#D90C72] text-[#D90C72]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#126B72] font-heading leading-tight">
                          HeartBeat Home Health
                        </h4>
                        <p className="text-xs text-[#5C707C]">Tampa, FL · Licensed Agency</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#126B72] bg-[#E7F2F3] px-2.5 py-1 rounded-md">
                      24/7 Client Care
                    </span>
                  </div>

                  {/* Clearly Labeled Image Placeholder */}
                  <div className="my-6 rounded-2xl bg-white border border-dashed border-[#126B72]/30 p-6 sm:p-8 text-center relative overflow-hidden group hover:border-[#D90C72]/50 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FDF4F8] via-white to-[#E7F2F3] opacity-60 pointer-events-none" />
                    <div className="relative z-10 space-y-3 py-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#E7F2F3] text-[#126B72] border border-[#126B72]/20 flex items-center justify-center mx-auto shadow-2xs group-hover:scale-105 transition-transform">
                        <ImageIcon className="w-7 h-7 text-[#126B72]" />
                      </div>

                      <div className="space-y-1">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#D90C72] bg-[#FDF4F8] px-2.5 py-0.5 rounded-full border border-[#F7D2E4]">
                          {language === 'en' ? 'Photography Placement' : 'Espacio para Fotografía'}
                        </span>
                        <h4 className="text-base font-bold text-[#126B72] font-heading">
                          {language === 'en'
                            ? 'Home Healthcare Caregiver Photo'
                            : 'Fotografía de Atención en el Hogar'}
                        </h4>
                        <p className="text-xs text-[#5C707C] max-w-xs mx-auto leading-relaxed">
                          {language === 'en'
                            ? 'Friendly caregiver supporting a senior client in a bright, comfortable Florida home environment.'
                            : 'Cuidador empático asistiendo a un paciente en un entorno residencial luminoso y acogedor.'}
                        </p>
                      </div>

                      <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono">
                        <span>Ratio: 4:3 / 16:9</span>
                        <span>·</span>
                        <span>High-Res JPG/PNG</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom quick contact card */}
                  <div className="pt-2 flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <p className="font-bold text-[#243A47]">
                        {language === 'en' ? 'Have questions about coverage?' : '¿Preguntas sobre cobertura?'}
                      </p>
                      <p className="text-[#5C707C]">
                        {language === 'en' ? 'Speak with our Tampa intake coordinator' : 'Hable con nuestro equipo en Tampa'}
                      </p>
                    </div>
                    <a
                      href="tel:8133586688"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#D90C72] text-white font-bold hover:bg-[#B5085C] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span className="tabular-nums">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOME TO HEARTBEAT SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D90C72] font-heading">
              {t('home.welcome.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#126B72] font-heading tracking-tight text-balance">
              {t('home.welcome.title')}
            </h2>
            <div className="h-0.5 w-16 bg-[#D90C72] mx-auto rounded-full my-3"></div>
            <p className="text-base sm:text-lg text-[#243A47]/80 leading-relaxed font-body">
              {t('home.welcome.p1')}
            </p>
            <p className="text-base text-[#243A47]/80 leading-relaxed font-body">
              {t('home.welcome.p2')}
            </p>
            <p className="text-base text-[#243A47]/80 leading-relaxed font-body">
              {language === 'en'
                ? 'Our clinicians, care coordinators, and dedicated home health aides work collaboratively to ensure every individual receives attentive, respectful support. We take the time to listen, understand your daily routines and physician directives, and help families navigate available care options with total confidence.'
                : 'Nuestros médicos, coordinadores y asistentes de salud trabajan en equipo para brindar atención atenta y respetuosa. Nos tomamos el tiempo para escuchar, comprender sus rutinas diarias e indicaciones médicas, y ayudar a las familias a navegar las opciones de cuidado con total tranquilidad.'}
            </p>
          </div>
        </div>
      </section>

      {/* GUIDANCE BEYOND HOME CARE SECTION */}
      <section className="py-14 sm:py-16 bg-[#FDF4F8] border-t border-[#F7D2E4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 card-soft-shadow flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D90C72] font-heading">
                {language === 'en' ? 'Navigating Care Options' : 'Orientación en Opciones de Cuidado'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                {language === 'en' ? 'Guidance Beyond Home Care' : 'Orientación Más Allá del Cuidado'}
              </h2>
              <p className="text-base text-[#243A47]/85 leading-relaxed font-body">
                {language === 'en'
                  ? "Understanding your care options is an important first step. Whether you're exploring Long-Term Care services or navigating the Medicaid application process, our team is here to help you understand what comes next."
                  : 'Comprender sus alternativas de cuidado es un primer paso fundamental. Ya sea que esté explorando servicios de Cuidado a Largo Plazo o navegando el proceso de solicitud de Medicaid, nuestro equipo está aquí para orientarle en lo que viene.'}
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link
                to="/services#ltc-guidance"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-xs transition-all active:scale-95 whitespace-nowrap"
              >
                <span>{language === 'en' ? 'Learn About Long-Term Care' : 'Conozca Más Sobre Cuidado a Largo Plazo'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CARE DESIGNED AROUND YOUR NEEDS (3 PILLARS) */}
      <section className="py-16 sm:py-20 bg-[#FDF4F8] border-y border-[#F7D2E4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#126B72] font-heading">
              {t('home.pillars.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#126B72] font-heading tracking-tight text-balance">
              {t('home.pillars.title')}
            </h2>
            <p className="text-base text-[#5C707C] leading-relaxed">
              {t('home.pillars.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Long-Term Care */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 card-hover-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FDF4F8] border border-[#F7D2E4] flex items-center justify-center text-[#D90C72]">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#126B72] font-heading">
                  {t('home.pillars.ltc.title')}
                </h3>
                <p className="text-sm text-[#5C707C] leading-relaxed">
                  {t('home.pillars.ltc.desc')}
                </p>
                <ul className="space-y-2 text-xs text-[#243A47] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D90C72] shrink-0" />
                    <span>Personal Care (PC) & Hygiene</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D90C72] shrink-0" />
                    <span>Homemaker Services (HMK)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D90C72] shrink-0" />
                    <span>Companion & Respite Care</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D90C72] hover:text-[#B5085C] transition-colors"
                >
                  <span>{t('common.learnMore')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Skilled Home Health */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 card-hover-shadow flex flex-col justify-between ring-1 ring-[#126B72]/20">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E7F2F3] border border-[#126B72]/30 flex items-center justify-center text-[#126B72]">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#126B72] font-heading">
                  {t('home.pillars.skilled.title')}
                </h3>
                <p className="text-sm text-[#5C707C] leading-relaxed">
                  {t('home.pillars.skilled.desc')}
                </p>
                <ul className="space-y-2 text-xs text-[#243A47] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#126B72] shrink-0" />
                    <span>Registered Nurse (RN) Care</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#126B72] shrink-0" />
                    <span>Physical & Occupational Therapy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#126B72] shrink-0" />
                    <span>Speech Therapy & Medical Social Work</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#126B72] hover:text-[#0D4E53] transition-colors"
                >
                  <span>{t('common.learnMore')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Pediatric Services */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 card-hover-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F9] border border-[#4D9BBC]/30 flex items-center justify-center text-[#4D9BBC]">
                  <Baby className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#126B72] font-heading">
                  {t('home.pillars.pediatric.title')}
                </h3>
                <p className="text-sm text-[#5C707C] leading-relaxed">
                  {t('home.pillars.pediatric.desc')}
                </p>
                <ul className="space-y-2 text-xs text-[#243A47] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4D9BBC] shrink-0" />
                    <span>Pediatric Home Health Aide (HHA)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4D9BBC] shrink-0" />
                    <span>Daily Hygiene & Routine Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4D9BBC] shrink-0" />
                    <span>Molina & Simply Healthcare Plans</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4D9BBC] hover:text-[#3A7C99] transition-colors"
                >
                  <span>{t('common.learnMore')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE OUR SERVICES (GRID) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D90C72] font-heading">
                {t('home.services.tag')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#126B72] font-heading tracking-tight text-balance">
                {t('home.services.title')}
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#126B72] hover:text-[#D90C72] transition-colors"
            >
              <span>{t('home.services.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-[#D90C72]/40 transition-all card-hover-shadow bg-white"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-[#FDF4F8] text-[#D90C72]">
                      {service.category === 'ltc' ? 'Long-Term Care' : 'Skilled Care'}
                    </span>
                    {service.abbreviation && (
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {service.abbreviation}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#126B72] font-heading pt-1">
                    {service.name[language]}
                  </h3>
                  <p className="text-xs text-[#5C707C] leading-relaxed line-clamp-3">
                    {service.description[language]}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-[#D90C72] hover:text-[#B5085C] inline-flex items-center gap-1"
                  >
                    <span>{t('common.viewDetails')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUPPORTING PATIENTS & FAMILIES */}
      <section className="py-16 sm:py-20 bg-[#FDF4F8] border-t border-[#F7D2E4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#126B72] font-heading">
              {t('home.families.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#126B72] font-heading tracking-tight text-balance">
              {t('home.families.title')}
            </h2>
            <p className="text-base text-[#5C707C] leading-relaxed">
              {language === 'en'
                ? 'We support individuals in remaining in the comfort and dignity of their own homes while giving families enduring confidence.'
                : 'Apoyamos a cada individuo para que permanezca en la comodidad de su hogar con total dignidad, brindando tranquilidad a sus familiares.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 card-soft-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E7F2F3] text-[#126B72] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-[#126B72] font-heading">
                {t('home.families.card1.title')}
              </h3>
              <p className="text-xs text-[#5C707C] leading-relaxed">
                {t('home.families.card1.desc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 card-soft-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDF4F8] text-[#D90C72] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-[#126B72] font-heading">
                {t('home.families.card2.title')}
              </h3>
              <p className="text-xs text-[#5C707C] leading-relaxed">
                {t('home.families.card2.desc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 card-soft-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF5F9] text-[#4D9BBC] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-[#126B72] font-heading">
                {t('home.families.card3.title')}
              </h3>
              <p className="text-xs text-[#5C707C] leading-relaxed">
                {t('home.families.card3.desc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 card-soft-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E7F2F3] text-[#126B72] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-base font-bold text-[#126B72] font-heading">
                {t('home.families.card4.title')}
              </h3>
              <p className="text-xs text-[#5C707C] leading-relaxed">
                {t('home.families.card4.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITIES WE SERVE (4 COUNTIES) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D90C72] font-heading">
                {t('home.coverage.tag')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#126B72] font-heading tracking-tight text-balance">
                {t('home.coverage.title')}
              </h2>
              <p className="text-base text-[#5C707C] leading-relaxed">
                {t('home.coverage.desc')}
              </p>
              <div className="pt-2">
                <Link
                  to="/coverage-areas"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#126B72] hover:bg-[#0D4E53] transition-colors"
                >
                  <span>{t('home.coverage.btn')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coverageCounties.map((county) => (
                <div
                  key={county.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-[#FDF4F8] hover:border-[#D90C72]/50 transition-all card-soft-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base text-[#126B72] font-heading">
                      {county.name[language]}
                    </h3>
                    <MapPin className="w-4 h-4 text-[#D90C72]" />
                  </div>
                  <p className="text-xs text-[#5C707C] mb-3 leading-snug">
                    {county.subtitle[language]}
                  </p>
                  <p className="text-[11px] text-[#243A47] font-medium leading-relaxed">
                    <span className="text-slate-400">
                      {language === 'en' ? 'Communities include:' : 'Comunidades incluyen:'}{' '}
                    </span>
                    {county.keyCommunities.slice(0, 5).join(', ')}...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. ACCEPTED INSURANCE OVERVIEW */}
      <section className="py-16 sm:py-20 bg-[#FDF4F8] border-t border-[#F7D2E4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#126B72] font-heading">
              {t('home.insurance.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#126B72] font-heading tracking-tight text-balance">
              {t('home.insurance.title')}
            </h2>
            <p className="text-sm sm:text-base text-[#5C707C] leading-relaxed">
              {t('home.insurance.desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto mb-8 px-2">
            {[
              'Original Medicare',
              'Sunshine Health',
              'Aetna',
              'Simply Healthcare',
              'Molina Healthcare',
              'Florida Blue',
              'Ambetter',
              'CarePlus',
              'Florida Community Care',
              'Humana',
            ].map((provider) => (
              <div
                key={provider}
                className="bg-white rounded-xl py-3 px-2 sm:px-3 text-center border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-bold text-[#126B72] whitespace-nowrap flex items-center justify-center tracking-tight min-h-[46px]"
              >
                {provider}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/insurance"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#D90C72] hover:text-[#B5085C] transition-colors"
            >
              <span>{t('home.insurance.btn')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. READY TO LEARN MORE? - CTA SECTION */}
      <CTASection
        title={t('home.cta.title')}
        description={t('home.cta.desc')}
        primaryBtnText={t('home.cta.btn')}
      />
    </div>
  );
};
