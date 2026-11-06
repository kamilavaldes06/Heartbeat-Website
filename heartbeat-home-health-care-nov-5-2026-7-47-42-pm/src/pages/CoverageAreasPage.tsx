import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  CheckCircle2,
  Building,
  Navigation,
  Phone,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { coverageCounties } from '../data/coverageData';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';

export const CoverageAreasPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCounty, setSelectedCounty] = useState<string>('hillsborough');

  const activeCounty =
    coverageCounties.find((c) => c.id === selectedCounty) || coverageCounties[0];

  return (
    <div>
      <PageHeader
        title={language === 'en' ? 'Florida Coverage Areas' : 'Áreas de Cobertura en Florida'}
        subtitle={
          language === 'en'
            ? 'HeartBeat Home Health Care delivers trusted Long-Term Care and Skilled Home Health across Hillsborough, Polk, Hardee, and Manatee counties.'
            : 'HeartBeat Home Health Care brinda servicios de confianza de Cuidado a Largo Plazo y Salud Especializada en los condados de Hillsborough, Polk, Hardee y Manatee.'
        }
        breadcrumb={t('nav.coverage')}
        categoryTag={language === 'en' ? 'Central Florida Counties' : 'Condados de Florida Central'}
      />

      {/* Regional Introduction */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
              {language === 'en'
                ? 'Serving Four Key Counties in Central Florida & Tampa Bay'
                : 'Atendiendo Cuatro Condados Clave en Tampa Bay y Florida Central'}
            </h2>
            <p className="text-base text-[#243A47]/85 leading-relaxed font-body">
              {language === 'en'
                ? 'With our primary office established at 829 W. Dr. Martin Luther King Jr. Blvd. in Tampa, our clinicians and caregivers travel directly to client residences throughout the region. We work closely with regional healthcare networks, discharge planners, community centers, and local families to ensure timely, compassionate care.'
                : 'Con nuestra sede principal en 829 W. Dr. Martin Luther King Jr. Blvd. en Tampa, nuestros médicos, enfermeros y cuidadores se trasladan a los hogares de nuestros pacientes en toda la región. Colaboramos con redes de salud, centros comunitarios y familias para brindar atención oportuna y cálida.'}
            </p>
            <p className="text-sm text-[#5C707C] leading-relaxed font-body">
              {language === 'en'
                ? 'Whether you or a loved one resides in a suburban neighborhood, urban center, or rural community across our four service counties, our licensed clinicians and compassionate aides deliver reliable care directly to your doorstep. We coordinate closely with attending physicians and family members to foster dignity, safety, and independence at home.'
                : 'Ya sea que usted o un familiar resida en un área suburbana, centro urbano o comunidad rural en nuestros cuatro condados de servicio, nuestro equipo de profesionales y cuidadores lleva atención confiable directamente a su puerta, coordinando de cerca con sus médicos para fomentar la seguridad y dignidad en el hogar.'}
            </p>
          </div>
        </div>
      </section>

      {/* Counties Grid & Interactive Explorer */}
      <section className="py-16 sm:py-20 bg-[#FDF4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 4 County Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coverageCounties.map((county) => {
              const isSelected = selectedCounty === county.id;
              return (
                <div
                  key={county.id}
                  onClick={() => setSelectedCounty(county.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border text-left ${
                    isSelected
                      ? 'bg-white border-[#D90C72] ring-2 ring-[#D90C72]/20 card-soft-shadow'
                      : 'bg-white/80 border-slate-200 hover:border-[#126B72]/40 card-soft-shadow'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? 'bg-[#FDF4F8] text-[#D90C72]'
                          : 'bg-[#E7F2F3] text-[#126B72]'
                      }`}
                    >
                      <MapPin className="w-5 h-5" />
                    </span>
                    {county.headquartersNearby && (
                      <span className="text-[10px] font-bold uppercase bg-[#D90C72] text-white px-2 py-0.5 rounded">
                        HQ Office
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#126B72] font-heading">
                    {county.name[language]}
                  </h3>
                  <p className="text-xs text-[#5C707C] mt-1 leading-snug">
                    {county.subtitle[language]}
                  </p>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#243A47]">
                      {county.keyCommunities.length}{' '}
                      {language === 'en' ? 'Communities' : 'Comunidades'}
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        isSelected ? 'text-[#D90C72]' : 'text-[#126B72]'
                      }`}
                    >
                      {language === 'en' ? 'View' : 'Ver'} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Spotlight on Selected County */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 card-soft-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left County Overview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D90C72] uppercase tracking-wider font-heading">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {language === 'en' ? 'County Spotlight' : 'Detalle del Condado'}
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                  {activeCounty.name[language]}
                </h3>

                <p className="text-sm font-semibold text-[#5C707C]">
                  {activeCounty.subtitle[language]}
                </p>

                <p className="text-sm text-[#243A47]/85 leading-relaxed font-body">
                  {activeCounty.description[language]}
                </p>

                {activeCounty.headquartersNearby && (
                  <div className="p-4 rounded-xl bg-[#FDF4F8] border border-[#F7D2E4] space-y-1">
                    <p className="text-xs font-bold text-[#D90C72]">
                      {language === 'en' ? 'HeartBeat Agency Headquarters' : 'Sede Principal de HeartBeat'}
                    </p>
                    <p className="text-xs text-[#243A47]">
                      829 W. Dr. Martin Luther King Jr. Blvd., Suite 230, Tampa, FL 33603
                    </p>
                  </div>
                )}

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#D90C72] hover:bg-[#B5085C] transition-colors"
                  >
                    <span>
                      {language === 'en'
                        ? `Inquire for ${activeCounty.name.en}`
                        : `Consultar en ${activeCounty.name.es}`}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Key Communities Grid */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#126B72] font-heading">
                    {language === 'en'
                      ? 'Covered Communities & Cities'
                      : 'Ciudades y Comunidades Atendidas'}
                  </h4>
                  <span className="text-xs text-[#5C707C]">
                    {activeCounty.keyCommunities.length} {language === 'en' ? 'Locations' : 'Localidades'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {activeCounty.keyCommunities.map((town) => (
                    <div
                      key={town}
                      className="p-3 rounded-xl bg-[#FDF4F8] border border-[#F7D2E4]/80 flex items-center gap-2 text-xs font-semibold text-[#243A47]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D90C72] shrink-0" />
                      <span className="truncate">{town}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Availability Disclaimer Section */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E7F2F3] border border-[#126B72]/20 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-[#126B72] text-sm font-bold font-heading">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>
                {language === 'en'
                  ? 'Service Availability & Clinical Evaluation Notice'
                  : 'Aviso Sobre Disponibilidad de Servicios y Evaluación Clínica'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#243A47]/80 leading-relaxed font-body">
              {language === 'en'
                ? 'HeartBeat Home Health Care is licensed to provide care in Hillsborough, Polk, Hardee, and Manatee counties. Specific clinician or aide availability, scheduling windows, and clinical service types (such as physical therapy or registered nursing) can vary by neighborhood, patient care plan, and current staffing. We do not guarantee that every specific service is immediately available in every community without prior intake confirmation. Please contact our Tampa office to confirm immediate scheduling in your neighborhood.'
                : 'HeartBeat Home Health Care tiene autorización para operar en los condados de Hillsborough, Polk, Hardee y Manatee. La disponibilidad de personal clínico, horarios y tipos específicos de servicios (como fisioterapia o enfermería) pueden variar según la zona, el plan de atención y el personal asignado. No se garantiza la disponibilidad inmediata de cada modalidad en todas las comunidades sin confirmación previa. Comuníquese con nuestra oficina en Tampa para confirmar la programación en su localidad.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={
          language === 'en'
            ? 'Confirm Care Availability in Your Area'
            : 'Confirme la Disponibilidad de Cuidado en su Área'
        }
        description={
          language === 'en'
            ? 'Call our Tampa office directly at (813) 358-6688 to discuss service options for your address.'
            : 'Llámenos directamente a nuestra oficina de Tampa al (813) 358-6688 para coordinar servicios en su dirección.'}
      />
    </div>
  );
};
