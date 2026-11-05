import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Printer, Heart, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { socialLinksConfig } from '../config/socialLinks';

// Clean SVG icon components for Facebook, Instagram, and TikTok
const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298 0 .59.043.87.126V9.37a6.34 6.34 0 00-.87-.06 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.28 8.28 0 005.02 1.69v-3.48a4.84 4.84 0 01-1.25-1z" />
  </svg>
);

const getSocialIcon = (id: string) => {
  switch (id) {
    case 'facebook':
      return FacebookIcon;
    case 'instagram':
      return InstagramIcon;
    case 'tiktok':
      return TikTokIcon;
    default:
      return FacebookIcon;
  }
};

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2D37] text-white border-t border-slate-700/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          {/* Col 1: Brand & Tagline & Social Media */}
          <div className="lg:col-span-4 space-y-4">
            {/* Transparent Logo without solid white box */}
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_wy45jtwy45jtwy45-removebg-preview_7db1e833.png"
                alt="HeartBeat Home Health Care"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-[#F7D2E4] italic font-semibold text-base tracking-wide">
              {language === 'en' ? '...caring is our passion' : '...cuidar es nuestra pasión'}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed pr-4">
              {t('footer.about')}
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#243A47] border border-slate-600 text-xs text-teal-200">
                <Award className="w-4 h-4 text-[#4D9BBC]" />
                <span className="font-semibold">ACHC Accredited Standards</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#243A47] border border-slate-600 text-xs text-[#F7D2E4]">
                <Heart className="w-3.5 h-3.5 fill-[#D90C72] text-[#D90C72]" />
                <span className="font-semibold">Licensed Agency</span>
              </div>
            </div>

            {/* Social Media Area (Placeholders until official URLs provided) */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-300 mb-2">
                {language === 'en' ? 'Connect With Us' : 'Conéctese con Nosotros'}
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinksConfig.map((item) => {
                  const isConfigured = Boolean(item.url);
                  const IconComp = getSocialIcon(item.id);

                  if (isConfigured && item.url) {
                    return (
                      <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.ariaLabel}
                        className="w-9 h-9 rounded-lg bg-[#243A47] hover:bg-[#126B72] text-slate-200 hover:text-white border border-slate-600/70 flex items-center justify-center transition-all hover:scale-105"
                      >
                        <IconComp className="w-4 h-4" />
                      </a>
                    );
                  }

                  return (
                    <span
                      key={item.id}
                      aria-label={`${item.ariaLabel} (${language === 'en' ? 'Official profile coming soon' : 'Perfil próximamente'})`}
                      title={`${item.name} (${language === 'en' ? 'Official profile coming soon' : 'Perfil oficial próximamente'})`}
                      className="w-9 h-9 rounded-lg bg-[#243A47]/80 text-slate-400 border border-slate-700/80 flex items-center justify-center cursor-not-allowed select-none transition-opacity"
                    >
                      <IconComp className="w-4 h-4" />
                    </span>
                  );
                })}
              </div>
              <p className="text-[10px] text-slate-400/80 mt-1.5 italic">
                {language === 'en' ? 'Official social profiles coming soon' : 'Perfiles oficiales próximamente'}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase font-heading">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.insurance')}
                </Link>
              </li>
              <li>
                <Link to="/coverage-areas" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.coverage')}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.careers')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase font-heading">
              {language === 'en' ? 'Core Services' : 'Servicios Principales'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/services#personal-care" className="hover:text-white transition-colors block">
                  {language === 'en' ? 'Personal Care (PC)' : 'Cuidado Personal (PC)'}
                </Link>
              </li>
              <li>
                <Link to="/services#homemaker" className="hover:text-white transition-colors block">
                  {language === 'en' ? 'Homemaker Services (HMK)' : 'Servicios de Amo/a de Casa'}
                </Link>
              </li>
              <li>
                <Link to="/services#nursing" className="hover:text-white transition-colors block">
                  {language === 'en' ? 'Registered Nurse (RN) Care' : 'Enfermería Registrada (RN)'}
                </Link>
              </li>
              <li>
                <Link to="/services#therapy" className="hover:text-white transition-colors block">
                  {language === 'en' ? 'Physical & Occupational Therapy' : 'Fisioterapia y Terapia Ocupacional'}
                </Link>
              </li>
              <li>
                <Link to="/services#pediatric" className="hover:text-white transition-colors block">
                  {language === 'en' ? 'Pediatric Home Health Aide' : 'Asistente de Salud Pediátrico'}
                </Link>
              </li>
              <li>
                <Link to="/services#respite" className="hover:text-white transition-colors block">
                  {language === 'en' ? 'Respite & Companion Care' : 'Cuidado de Relevo y Acompañamiento'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tampa Office Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase font-heading">
              {t('footer.contactInfo')}
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4D9BBC] shrink-0 mt-0.5" />
                <address className="not-italic leading-snug">
                  829 W. Dr. Martin Luther King Jr. Blvd.<br />
                  Suite 230<br />
                  Tampa, FL 33603
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D90C72] shrink-0" />
                <a
                  href="tel:8133586688"
                  className="hover:text-white transition-colors font-medium tabular-nums"
                >
                  Phone: (813) 358-6688
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Printer className="w-4 h-4 text-[#4D9BBC] shrink-0" />
                <span className="tabular-nums">Fax: (813) 448-1748</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F7D2E4] shrink-0" />
                <a
                  href="mailto:heartbeathhc@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  heartbeathhc@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-xs text-teal-200 bg-[#126B72]/40 px-3 py-1.5 rounded-md border border-[#126B72]">
                {language === 'en'
                  ? 'Office: 8:30 AM – 5:00 PM · Client Support: 24/7'
                  : 'Horario: 8:30 AM – 5:00 PM · Atención al Cliente: 24/7'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} HeartBeat Home Health Care. {t('footer.rights')}
          </p>
          <p className="text-center md:text-right max-w-2xl text-[11px] leading-relaxed text-slate-400">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};
