import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  ClipboardList,
  FileQuestion,
  Compass,
  Home,
  AlertCircle,
  ArrowRight,
  Heart,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LtcGuidanceProcess: React.FC<{ showContactButton?: boolean }> = ({
  showContactButton = true,
}) => {
  const { language } = useLanguage();

  const steps = [
    {
      step: '01',
      title: {
        en: 'Step 1 — Contact Our Team',
        es: 'Paso 1 — Comuníquese con Nuestro Equipo',
      },
      description: {
        en: 'Reach out to our team to discuss your situation and tell us about the assistance you or your loved one may need.',
        es: 'Comuníquese con nosotros para conversar sobre su situación y explicarnos el apoyo que usted o su ser querido necesita.',
      },
      icon: PhoneCall,
    },
    {
      step: '02',
      title: {
        en: 'Step 2 — Discuss Your Care Needs',
        es: 'Paso 2 — Conversemos Sobre sus Necesidades de Cuidado',
      },
      description: {
        en: "We'll take time to understand your circumstances, discuss available options, and help identify an appropriate approach based on your needs.",
        es: 'Nos tomaremos el tiempo necesario para comprender sus circunstancias, evaluar alternativas disponibles y definir un plan adecuado según sus requerimientos.',
      },
      icon: ClipboardList,
    },
    {
      step: '03',
      title: {
        en: 'Step 3 — Understand the Medicaid Long-Term Care Process',
        es: 'Paso 3 — Comprenda el Proceso de Medicaid para Cuidado a Largo Plazo',
      },
      description: {
        en: 'Our team can explain the Florida Medicaid Long-Term Care application and screening process, help you understand where to begin, and guide you in preparing the information that may be required.',
        es: 'Nuestro equipo puede orientarle sobre el proceso de solicitud y evaluación de Florida Medicaid Long-Term Care, dónde iniciar y qué documentación suele requerirse.',
      },
      icon: FileQuestion,
    },
    {
      step: '04',
      title: {
        en: 'Step 4 — Receive Guidance Throughout the Process',
        es: 'Paso 4 — Reciba Orientación Continua en Cada Etapa',
      },
      description: {
        en: 'We can help you navigate questions, understand requests for additional information, and stay informed about the next steps as you work through the application and enrollment process.',
        es: 'Podemos ayudarle a resolver dudas, entender solicitudes de información adicional y mantenerse informado de los pasos siguientes durante el trámite de inscripción.',
      },
      icon: Compass,
    },
    {
      step: '05',
      title: {
        en: 'Step 5 — Explore Your Home Care Options',
        es: 'Paso 5 — Explore sus Opciones de Cuidado en el Hogar',
      },
      description: {
        en: "Once eligibility, enrollment, any required service authorizations, and service availability have been established, we'll discuss how we may be able to support your care needs.",
        es: 'Una vez confirmada la elegibilidad, la inscripción, las autorizaciones requeridas y la disponibilidad de personal, coordinaremos cómo podemos apoyar sus necesidades de cuidado.',
      },
      icon: Home,
    },
  ];

  return (
    <section id="ltc-guidance" className="py-14 sm:py-18 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF4F8] text-[#D90C72] text-xs font-bold uppercase tracking-wider font-heading">
            <Heart className="w-3.5 h-3.5 fill-[#D90C72]" />
            <span>{language === 'en' ? 'Family Guidance' : 'Orientación Familiar'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#126B72] font-heading tracking-tight text-balance">
            {language === 'en'
              ? 'Getting Started with Long-Term Care'
              : 'Cómo Iniciar con el Cuidado a Largo Plazo'}
          </h2>

          <p className="text-base text-[#243A47]/85 leading-relaxed font-body">
            {language === 'en'
              ? 'Finding the right care for yourself or a loved one can feel overwhelming. We help families explore their options, understand the Long-Term Care application process, and navigate the steps toward receiving care at home.'
              : 'Encontrar el cuidado adecuado para usted o un ser querido puede ser abrumador. Ayudamos a las familias a explorar alternativas, comprender el proceso de solicitud de Cuidado a Largo Plazo y avanzar con seguridad hacia la atención en el hogar.'}
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 p-6 bg-[#FDF4F8] hover:border-[#126B72]/40 transition-all card-soft-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#D90C72] bg-white px-2.5 py-1 rounded-md border border-[#F7D2E4]">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#F7D2E4] flex items-center justify-center text-[#126B72]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#126B72] font-heading leading-snug">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C707C] leading-relaxed">
                    {item.description[language]}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Quick Highlight Box as 6th card */}
          <div className="rounded-2xl border border-[#126B72]/30 p-6 bg-[#E7F2F3] flex flex-col justify-between card-soft-shadow">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#126B72]/20 flex items-center justify-center text-[#126B72]">
                <ShieldCheck className="w-5 h-5 text-[#126B72]" />
              </div>
              <h3 className="text-lg font-bold text-[#126B72] font-heading leading-snug">
                {language === 'en' ? 'Bilingual Intake Support' : 'Orientación Bilingüe'}
              </h3>
              <p className="text-xs sm:text-sm text-[#243A47]/80 leading-relaxed">
                {language === 'en'
                  ? 'Our care coordinators speak fluent English and Spanish, ensuring clear answers for patients, adult children, and family caregivers.'
                  : 'Nuestros coordinadores hablan español e inglés con total fluidez para brindar respuestas claras y transparentes a cada familia.'}
              </p>
            </div>

            {showContactButton && (
              <div className="pt-4 mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-xs transition-all active:scale-95"
                >
                  <span>{language === 'en' ? 'Contact Us About LTC' : 'Contáctenos Sobre LTC'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Important Official Disclaimer Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-amber-200/90 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold font-heading uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              {language === 'en'
                ? 'Important Information Regarding Medicaid Eligibility'
                : 'Información Importante Sobre la Elegibilidad de Medicaid'}
            </span>
          </div>
          <p className="text-xs text-[#5C707C] leading-relaxed font-body">
            {language === 'en'
              ? 'Medicaid eligibility, enrollment, and service authorization are determined by the appropriate state agencies and health plans. Assistance from our agency does not guarantee approval, enrollment, coverage, or authorization of services.'
              : 'La elegibilidad, inscripción y autorización de servicios de Medicaid son determinadas exclusivamente por las agencias estatales y planes de salud pertinentes. La orientación de nuestra agencia no garantiza la aprobación, inscripción, cobertura ni autorización de servicios.'}
          </p>
        </div>

        {/* Clear Contact Us Button Beneath Process */}
        {showContactButton && (
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#126B72] hover:bg-[#0D4E53] shadow-xs transition-all active:scale-95"
            >
              <span>
                {language === 'en'
                  ? 'Speak With a Care Coordinator Today'
                  : 'Hable Hoy con un Coordinador de Atención'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
