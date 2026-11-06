import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  CheckCircle2,
  ArrowRight,
  Home,
  Activity,
  Baby,
  Users,
  ShieldCheck,
  FileText,
  Phone,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';
import { LtcGuidanceProcess } from '../components/LtcGuidanceProcess';

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'ltc' | 'skilled' | 'pediatric'>('all');

  const ltcServices = servicesData.filter((s) => s.category === 'ltc');
  const skilledServices = servicesData.filter((s) => s.category === 'skilled');
  const pediatricServices = servicesData.filter((s) => s.category === 'pediatric');

  const filteredServices =
    activeCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <div>
      <PageHeader
        title={language === 'en' ? 'Our Home Healthcare Services' : 'Nuestros Servicios de Salud en el Hogar'}
        subtitle={
          language === 'en'
            ? 'HeartBeat Home Health Care provides comprehensive Long-Term Care, Skilled Home Health, and Pediatric supportive services tailored to individual needs in Tampa and surrounding communities.'
            : 'HeartBeat Home Health Care ofrece servicios integrales de Cuidado a Largo Plazo, Servicios Clínicos Especializados y Atención Pediátrica en Tampa y comunidades vecinas.'
        }
        breadcrumb={t('nav.services')}
        categoryTag={language === 'en' ? 'Comprehensive Care' : 'Atención Integral'}
      />

      {/* Main Services Introduction & Category Selector */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introductory Paragraph directly beneath heading */}
          <div className="max-w-3xl space-y-4 mb-8">
            <p className="text-base sm:text-lg text-[#243A47]/85 leading-relaxed font-body">
              {language === 'en'
                ? 'Whether you are seeking compassionate daily living assistance to help an aging parent remain safely at home, or specialized clinical rehabilitation following a surgery or medical event, HeartBeat Home Health Care offers a structured continuum of care. All skilled services are coordinated under physician orders and tailored to each client’s unique clinical and personal requirements.'
                : 'Ya sea que busque asistencia diaria compasiva para que un ser querido permanezca seguro en casa, o rehabilitación clínica especializada tras una cirugía o evento médico, HeartBeat Home Health Care ofrece un continuo de atención integral. Todos los servicios clínicos se coordinan bajo órdenes médicas y se adaptan a las necesidades individuales.'}
            </p>
            <p className="text-xs text-[#5C707C] italic">
              {language === 'en'
                ? '* Note: Service descriptions reflect general agency offerings and are subject to physician orders, care plan authorization, and clinical evaluation.'
                : '* Nota: Las descripciones de servicios reflejan la oferta general de la agencia y están sujetas a órdenes médicas, autorización de plan de cuidados y evaluación clínica.'}
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#FDF4F8] rounded-xl border border-[#F7D2E4] w-fit">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-[#126B72] shadow-xs'
                  : 'text-[#5C707C] hover:text-[#243A47]'
              }`}
            >
              {language === 'en' ? 'All Services' : 'Todos los Servicios'}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('ltc')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeCategory === 'ltc'
                  ? 'bg-white text-[#D90C72] shadow-xs'
                  : 'text-[#5C707C] hover:text-[#243A47]'
              }`}
            >
              {language === 'en' ? 'Long-Term Care (LTC)' : 'Cuidado a Largo Plazo'}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('skilled')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeCategory === 'skilled'
                  ? 'bg-white text-[#126B72] shadow-xs'
                  : 'text-[#5C707C] hover:text-[#243A47]'
              }`}
            >
              {language === 'en' ? 'Skilled Home Health' : 'Salud Especializada'}
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('pediatric')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeCategory === 'pediatric'
                  ? 'bg-white text-[#4D9BBC] shadow-xs'
                  : 'text-[#5C707C] hover:text-[#243A47]'
              }`}
            >
              {language === 'en' ? 'Pediatric Services' : 'Servicios Pediátricos'}
            </button>
          </div>
        </div>
      </section>

      {/* 1. LONG-TERM CARE SERVICES SECTION */}
      {(activeCategory === 'all' || activeCategory === 'ltc') && (
        <section id="ltc" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-slate-200 pb-6 mb-12">
              <div className="flex items-center gap-2 text-[#D90C72] text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                <Home className="w-4 h-4" />
                <span>Category 01</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                {language === 'en' ? 'Long-Term Care Services' : 'Servicios de Cuidado a Largo Plazo'}
              </h2>
              <p className="mt-2 text-sm text-[#5C707C] max-w-3xl">
                {language === 'en'
                  ? 'Non-clinical daily living support assisting individuals with personal routines, hygiene, meals, light housekeeping, and meaningful companionship in the comfort of home.'
                  : 'Apoyo no clínico en actividades de la vida diaria, asistiendo en rutinas personales, higiene, alimentos, labores domésticas ligeras y compañía cálida en el hogar.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ltcServices.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-2xl border border-slate-200/90 p-8 bg-[#FDF4F8] hover:border-[#D90C72]/40 transition-all card-soft-shadow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#D90C72] bg-white px-3 py-1 rounded-md border border-[#F7D2E4]">
                        Long-Term Care
                      </span>
                      {service.abbreviation && (
                        <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-100">
                          {service.abbreviation}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-[#126B72] font-heading">
                      {service.name[language]}
                    </h3>

                    <p className="text-sm text-[#243A47]/85 leading-relaxed">
                      {service.description[language]}
                    </p>

                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#126B72] mb-3">
                        {language === 'en' ? 'Key Support Activities:' : 'Actividades Principales:'}
                      </p>
                      <ul className="space-y-2.5">
                        {service.details[language].map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#243A47]">
                            <CheckCircle2 className="w-4 h-4 text-[#D90C72] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#F7D2E4]">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D90C72] hover:text-[#B5085C]"
                    >
                      <span>
                        {language === 'en' ? 'Inquire About This Service' : 'Consultar Sobre Este Servicio'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complete 5-Step Getting Started with Long-Term Care Process */}
          <div className="mt-12">
            <LtcGuidanceProcess showContactButton={true} />
          </div>
        </section>
      )}

      {/* 2. SKILLED HOME HEALTH SERVICES SECTION */}
      {(activeCategory === 'all' || activeCategory === 'skilled') && (
        <section id="skilled" className="py-16 sm:py-20 bg-[#FDF4F8] border-t border-[#F7D2E4]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-[#F7D2E4] pb-6 mb-12">
              <div className="flex items-center gap-2 text-[#126B72] text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                <Activity className="w-4 h-4" />
                <span>Category 02</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                {language === 'en' ? 'Skilled Home Health Services' : 'Servicios Clínicos Especializados'}
              </h2>
              <p className="mt-2 text-sm text-[#5C707C] max-w-3xl">
                {language === 'en'
                  ? 'Clinical nursing and specialized rehabilitation therapies ordered by a physician to treat medical conditions, regain strength, and foster functional independence.'
                  : 'Atención de enfermería clínica y terapias especializadas de rehabilitación prescritas por un médico para tratar afecciones, recuperar fuerza e independencia funcional.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skilledServices.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-2xl border border-slate-200/90 p-7 bg-white hover:border-[#126B72]/40 transition-all card-soft-shadow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#126B72] bg-[#E7F2F3] px-3 py-1 rounded-md">
                        Skilled Care
                      </span>
                      {service.abbreviation && (
                        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                          {service.abbreviation}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#126B72] font-heading">
                      {service.name[language]}
                    </h3>

                    <p className="text-xs text-[#5C707C] leading-relaxed">
                      {service.description[language]}
                    </p>

                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#126B72] mb-2.5">
                        {language === 'en' ? 'Clinical Focus:' : 'Enfoque Clínico:'}
                      </p>
                      <ul className="space-y-2">
                        {service.details[language].map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#243A47]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#126B72] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#126B72] hover:text-[#0D4E53]"
                    >
                      <span>
                        {language === 'en' ? 'Request Referral Details' : 'Solicitar Información de Referencia'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. PEDIATRIC SERVICES SECTION */}
      {(activeCategory === 'all' || activeCategory === 'pediatric') && (
        <section id="pediatric" className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-slate-200 pb-6 mb-12">
              <div className="flex items-center gap-2 text-[#4D9BBC] text-xs font-bold uppercase tracking-wider mb-2 font-heading">
                <Baby className="w-4 h-4" />
                <span>Category 03</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                {language === 'en' ? 'Pediatric Services' : 'Servicios Pediátricos'}
              </h2>
              <p className="mt-2 text-sm text-[#5C707C] max-w-3xl">
                {language === 'en'
                  ? 'Supportive, nurturing home healthcare aide assistance designed specifically for children requiring personal care support in their home environment.'
                  : 'Atención de asistentes de salud en el hogar diseñada especialmente para niños que requieren apoyo en su cuidado personal dentro de su hogar.'}
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {pediatricServices.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-3xl border border-[#4D9BBC]/30 p-8 sm:p-10 bg-[#EBF5F9] card-soft-shadow space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#4D9BBC] bg-white px-3 py-1 rounded-md border border-[#4D9BBC]/20">
                      Pediatric Support
                    </span>
                    <span className="text-xs font-mono font-bold text-[#126B72] bg-white px-2.5 py-1 rounded-md">
                      HHA Pediátrico
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#126B72] font-heading">
                    {service.name[language]}
                  </h3>

                  <p className="text-sm text-[#243A47]/85 leading-relaxed font-body">
                    {service.description[language]}
                  </p>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#126B72]">
                      {language === 'en' ? 'Core Areas of Support:' : 'Áreas Principales de Apoyo:'}
                    </p>
                    <ul className="space-y-2.5">
                      {service.details[language].map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#243A47]">
                          <CheckCircle2 className="w-4 h-4 text-[#4D9BBC] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/80 border border-[#4D9BBC]/20 text-xs text-[#5C707C]">
                    <p className="font-semibold text-[#126B72] mb-1">
                      {language === 'en' ? 'Participating Insurance Coverage:' : 'Cobertura de Seguro Participante:'}
                    </p>
                    <p>
                      {language === 'en'
                        ? 'We provide Pediatric Home Health Aide (HHA) services for children covered through Molina Healthcare and Simply Healthcare plans. Please contact our Tampa office to confirm plan eligibility.'
                        : 'Ofrecemos servicios de Home Health Aide (HHA) en niños con los seguros de Molina Healthcare y Simply Healthcare. Comuníquese con nuestra oficina de Tampa para confirmar elegibilidad.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title={
          language === 'en'
            ? 'Need Help Determining the Right Care Services?'
            : '¿Necesita Ayuda para Identificar los Servicios Adecuados?'
        }
        description={
          language === 'en'
            ? 'Our bilingual intake team will guide you through care options, physician coordination, and plan authorizations.'
            : 'Nuestro equipo de atención bilingüe le orientará sobre opciones de cuidado, coordinación médica y autorizaciones.'}
      />
    </div>
  );
};
