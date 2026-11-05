import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnTo?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryBtnText,
  primaryBtnTo = '/contact',
}) => {
  const { language, t } = useLanguage();

  const defaultTitle =
    title ||
    (language === 'en'
      ? 'Ready to Discuss Care for Yourself or a Loved One?'
      : '¿Listo para Conversar Sobre el Cuidado para Usted o un Ser Querido?');

  const defaultDesc =
    description ||
    (language === 'en'
      ? 'Our compassionate Tampa care coordinators are available to answer your questions, assist with physician referrals, and verify insurance benefits.'
      : 'Nuestros coordinadores de atención en Tampa están disponibles para resolver sus preguntas, coordinar referencias médicas y verificar su seguro.');

  return (
    <section className="bg-gradient-to-br from-[#126B72] to-[#0D4E53] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#D90C72]/15 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-100 text-xs font-semibold backdrop-blur-xs">
            <Heart className="w-3.5 h-3.5 fill-[#F7D2E4] text-[#F7D2E4]" />
            <span>
              {language === 'en'
                ? 'Tampa Bay & Central Florida Home Health'
                : 'Salud en el Hogar para Tampa Bay y Florida Central'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading text-balance">
            {defaultTitle}
          </h2>

          <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed font-body">
            {defaultDesc}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryBtnTo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-md transition-all active:scale-95"
            >
              <span>{primaryBtnText || t('nav.contact')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:8133586688"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-xs"
            >
              <Phone className="w-4 h-4 text-[#F7D2E4]" />
              <span className="tabular-nums">(813) 358-6688</span>
            </a>
          </div>

          <p className="text-xs text-teal-200/90 pt-2">
            {language === 'en'
              ? 'Hillsborough · Polk · Hardee · Manatee Counties · Hablamos Español'
              : 'Condados de Hillsborough · Polk · Hardee · Manatee · Servicio Bilingüe'}
          </p>
        </div>
      </div>
    </section>
  );
};
