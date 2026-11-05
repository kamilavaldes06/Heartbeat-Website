import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle,
  Phone,
  HelpCircle,
  FileCheck,
  AlertCircle,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { insuranceCategories } from '../data/insuranceData';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';

export const InsurancePage: React.FC = () => {
  const { language, t } = useLanguage();

  const ltcCategory = insuranceCategories.find((c) => c.id === 'ltc');
  const skilledCategory = insuranceCategories.find((c) => c.id === 'skilled');
  const pediatricCategory = insuranceCategories.find((c) => c.id === 'pediatric');

  return (
    <div>
      <PageHeader
        title={language === 'en' ? 'Accepted Insurance Plans' : 'Seguros Médicos Aceptados'}
        subtitle={
          language === 'en'
            ? 'HeartBeat Home Health Care partners with Medicare and leading Florida healthcare plans to ensure accessible, dignified home health and long-term care support.'
            : 'HeartBeat Home Health Care colabora con Medicare y las principales aseguradoras de salud en Florida para facilitar una atención domiciliaria accesible y de alta calidad.'
        }
        breadcrumb={t('nav.insurance')}
        categoryTag={language === 'en' ? 'Coverage & Plans' : 'Coberturas y Planes'}
      />

      {/* Verification Notice Banner */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E7F2F3] border border-[#126B72]/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl text-[#126B72] shadow-xs shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#126B72] font-heading">
                  {language === 'en'
                    ? 'Navigating Insurance & Medicaid Long-Term Care'
                    : 'Orientación en Seguros y Medicaid para Cuidado a Largo Plazo'}
                </h3>
                <p className="text-xs sm:text-sm text-[#243A47]/80 leading-relaxed max-w-2xl font-body">
                  {language === 'en'
                    ? 'Understanding insurance requirements is an essential part of arranging home healthcare. Our experienced team helps families navigate next steps, answer questions about the Florida Medicaid Long-Term Care application, and clarify applicable service authorizations. Coverage and benefit limits depend on each individual plan and physician order.'
                    : 'Comprender los requisitos de seguro es fundamental al coordinar servicios en el hogar. Nuestro equipo orienta a las familias en los pasos a seguir, resuelve dudas sobre solicitudes de Medicaid Long-Term Care y explica las autorizaciones requeridas. La cobertura depende de cada póliza y de la prescripción médica.'}
                </p>
              </div>
            </div>

            <a
              href="tel:8133586688"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>{language === 'en' ? 'Verify Coverage: (813) 358-6688' : 'Verificar: (813) 358-6688'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 1. LONG-TERM CARE INSURANCE CATEGORY */}
      {ltcCategory && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D90C72] uppercase tracking-wider font-heading">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'en' ? 'Category 01' : 'Categoría 01'}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                {ltcCategory.title[language]}
              </h2>
              <p className="text-sm text-[#5C707C] leading-relaxed">
                {ltcCategory.description[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ltcCategory.providers.map((provider) => (
                <div
                  key={provider.name}
                  className="rounded-2xl border border-slate-200 p-6 bg-[#FDF4F8] hover:border-[#D90C72]/50 transition-all card-soft-shadow flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#F7D2E4] flex items-center justify-center text-[#D90C72] shrink-0 font-bold">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#126B72] font-heading">
                      {provider.name}
                    </h3>
                    {provider.planType && (
                      <p className="text-xs text-[#5C707C] mt-1 font-medium">
                        {provider.planType[language]}
                      </p>
                    )}
                    <span className="inline-block mt-2 text-[11px] font-semibold text-[#D90C72] bg-white px-2 py-0.5 rounded border border-[#F7D2E4]">
                      {language === 'en' ? 'LTC Accepted' : 'LTC Aceptado'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. SKILLED HOME HEALTH INSURANCE CATEGORY */}
      {skilledCategory && (
        <section className="py-16 sm:py-20 bg-[#FDF4F8] border-t border-[#F7D2E4]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#126B72] uppercase tracking-wider font-heading">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'en' ? 'Category 02' : 'Categoría 02'}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                {skilledCategory.title[language]}
              </h2>
              <p className="text-sm text-[#5C707C] leading-relaxed">
                {skilledCategory.description[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skilledCategory.providers.map((provider) => (
                <div
                  key={provider.name}
                  className="rounded-2xl border border-slate-200/90 p-6 bg-white hover:border-[#126B72]/40 transition-all card-soft-shadow flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E7F2F3] border border-[#126B72]/20 flex items-center justify-center text-[#126B72] shrink-0 font-bold">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#126B72] font-heading">
                      {provider.name}
                    </h3>
                    {provider.planType && (
                      <p className="text-xs text-[#5C707C] mt-1 font-medium">
                        {provider.planType[language]}
                      </p>
                    )}
                    <span className="inline-block mt-2 text-[11px] font-semibold text-[#126B72] bg-[#E7F2F3] px-2 py-0.5 rounded border border-[#126B72]/15">
                      {language === 'en' ? 'Skilled Care Covered' : 'Servicios Clínicos Cubiertos'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. PEDIATRIC SERVICES INSURANCE */}
      {pediatricCategory && (
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4D9BBC] uppercase tracking-wider font-heading">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'en' ? 'Pediatric Coverage' : 'Cobertura Pediátrica'}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                {pediatricCategory.title[language]}
              </h2>
              <p className="text-sm text-[#5C707C] leading-relaxed">
                {pediatricCategory.description[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {pediatricCategory.providers.map((provider) => (
                <div
                  key={provider.name}
                  className="rounded-2xl border border-[#4D9BBC]/30 p-6 bg-[#EBF5F9] card-soft-shadow flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#4D9BBC]/20 flex items-center justify-center text-[#4D9BBC] shrink-0 font-bold">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#126B72] font-heading">
                      {provider.name}
                    </h3>
                    <p className="text-xs text-[#5C707C] mt-1 font-medium">
                      {provider.planType?.[language]}
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-[#4D9BBC] bg-white px-2 py-0.5 rounded border border-[#4D9BBC]/30">
                      Pediatric HHA
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Important Transparency Notice */}
      <section className="py-12 bg-[#FDF4F8] border-t border-[#F7D2E4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 card-soft-shadow space-y-4">
            <div className="flex items-center gap-2 text-[#D90C72] text-sm font-bold font-heading">
              <AlertCircle className="w-5 h-5" />
              <span>
                {language === 'en'
                  ? 'Important Information Regarding Coverage & Authorization'
                  : 'Información Importante Sobre Coberturas y Autorizaciones'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5C707C] leading-relaxed font-body">
              {language === 'en'
                ? 'Insurance acceptance does not guarantee that every specific plan variant or individual service is 100% covered without pre-authorization, copayments, or eligibility guidelines. Coverage depends on the patient’s individual policy terms, physician care orders, and active plan authorization. HeartBeat Home Health Care does not guarantee coverage acceptance for every plan variation. We encourage you or your physician’s office to contact our team to confirm current benefits.'
                : 'La aceptación de una compañía de seguros no garantiza que todas las variantes de planes o servicios estén cubiertas al 100% sin previa autorización, copagos o requisitos de elegibilidad. La cobertura está sujeta a los términos de la póliza del paciente, las órdenes médicas y las autorizaciones vigentes. HeartBeat Home Health Care no garantiza la aceptación de todas las modalidades. Le invitamos a contactar a nuestro equipo para verificar sus beneficios.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={
          language === 'en'
            ? 'Have Questions About Your Health Insurance?'
            : '¿Preguntas Sobre su Seguro de Salud?'
        }
        description={
          language === 'en'
            ? 'Call our Tampa office at (813) 358-6688. Our billing and intake specialists speak English and Spanish and are ready to assist.'
            : 'Comuníquese con nuestra oficina en Tampa al (813) 358-6688. Nuestros especialistas bilingües están listos para orientarle.'}
      />
    </div>
  );
};
