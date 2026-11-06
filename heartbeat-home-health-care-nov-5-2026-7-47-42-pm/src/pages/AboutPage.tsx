import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ShieldCheck,
  Award,
  Users,
  Home,
  MessageSquare,
  Sparkles,
  CheckCircle,
  MapPin,
  Clock,
  Phone,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/PageHeader';
import { CTASection } from '../components/CTASection';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div>
      <PageHeader
        title={
          language === 'en'
            ? 'Dedicated to Compassionate Care at Home'
            : 'Dedicados al Cuidado Compasivo en el Hogar'
        }
        subtitle={
          language === 'en'
            ? 'HeartBeat Home Health Care is a Tampa-based home healthcare agency serving individuals and families across Hillsborough, Polk, Hardee, and Manatee counties.'
            : 'HeartBeat Home Health Care es una agencia de salud en el hogar con sede en Tampa, dedicada a atender a pacientes y familias en los condados de Hillsborough, Polk, Hardee y Manatee.'
        }
        breadcrumb={t('nav.about')}
        categoryTag={language === 'en' ? 'About HeartBeat' : 'Sobre HeartBeat'}
      />

      {/* Main Philosophy & Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF4F8] text-[#D90C72] text-xs font-bold uppercase tracking-wider font-heading">
                <Heart className="w-3.5 h-3.5 fill-[#D90C72]" />
                <span>{language === 'en' ? 'Our Mission & Approach' : 'Nuestra Misión y Enfoque'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#126B72] font-heading tracking-tight text-balance">
                {language === 'en'
                  ? 'Supporting Comfort, Dignity, and Independence Where It Matters Most'
                  : 'Fomentando la Comodidad, Dignidad e Independencia en el Hogar'}
              </h2>

              <p className="text-base text-[#243A47]/85 leading-relaxed font-body">
                {language === 'en'
                  ? 'At HeartBeat Home Health Care, we recognize that true healing and well-being flourish best in familiar surroundings. Our agency was established with a singular focus: to provide thoughtful, personalized home healthcare that honors each client’s unique story, lifestyle, and preferences.'
                  : 'En HeartBeat Home Health Care, sabemos que la verdadera recuperación y el bienestar florecen mejor en el entorno familiar. Nuestra agencia se fundó con un propósito claro: brindar atención médica domiciliaria personalizada y atenta, respetando la historia, estilo de vida y preferencias de cada persona.'}
              </p>

              <p className="text-base text-[#243A47]/85 leading-relaxed font-body">
                {language === 'en'
                  ? 'From assistance with essential daily living activities to skilled clinical nursing and therapeutic rehabilitation, our licensed clinicians and caregivers work as a unified team alongside patients, primary physicians, and family members.'
                  : 'Desde el apoyo con las actividades de la vida cotidiana hasta la enfermería clínica especializada y la rehabilitación física, nuestros profesionales y cuidadores trabajan como un equipo coordinado junto al paciente, sus médicos tratantes y sus seres queridos.'}
              </p>

              <p className="text-base text-[#243A47]/85 leading-relaxed font-body">
                {language === 'en'
                  ? 'A core part of our mission is walking alongside families through the Long-Term Care inquiry process. We help families understand Florida Medicaid Long-Term Care screening and application procedures, explain what documentation may be requested, and ensure you remain fully supported at every phase.'
                  : 'Parte fundamental de nuestra misión es acompañar a las familias durante el proceso de consulta para Cuidado a Largo Plazo. Ayudamos a comprender las evaluaciones de Florida Medicaid Long-Term Care, qué información se requiere y cómo avanzar con total respaldo en cada etapa.'}
              </p>

              <div className="p-4 rounded-xl bg-[#FDF4F8] border border-[#F7D2E4] flex items-center gap-3">
                <Heart className="w-5 h-5 text-[#D90C72] fill-[#D90C72] shrink-0" />
                <p className="text-sm font-semibold italic text-[#D90C72]">
                  {language === 'en' ? '...caring is our passion' : '...cuidar es nuestra pasión'}
                </p>
              </div>
            </div>

            {/* Right Feature Card Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FDF4F8] rounded-3xl p-8 border border-[#F7D2E4] card-soft-shadow space-y-6">
                <h3 className="text-xl font-bold text-[#126B72] font-heading">
                  {language === 'en' ? 'What Defines Our Care' : 'Lo Que Define Nuestro Cuidado'}
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D90C72] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#126B72]">
                        {language === 'en' ? 'Personalized Care Plans' : 'Planes de Cuidado Personalizados'}
                      </h4>
                      <p className="text-xs text-[#5C707C] mt-0.5 leading-relaxed">
                        {language === 'en'
                          ? 'Care tailored directly to individual health goals, physician orders, and family routines.'
                          : 'Atención adaptada a las metas de salud individuales, indicaciones médicas y rutinas familiares.'}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#126B72] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#126B72]">
                        {language === 'en' ? 'Transparent Communication' : 'Comunicación Transparente'}
                      </h4>
                      <p className="text-xs text-[#5C707C] mt-0.5 leading-relaxed">
                        {language === 'en'
                          ? 'Consistent, respectful dialogue with patients and families to ensure complete peace of mind.'
                          : 'Diálogo continuo y respetuoso con pacientes y familias para brindar total tranquilidad.'}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4D9BBC] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#126B72]">
                        {language === 'en' ? 'Bilingual Care Team' : 'Equipo Bilingüe Certificado'}
                      </h4>
                      <p className="text-xs text-[#5C707C] mt-0.5 leading-relaxed">
                        {language === 'en'
                          ? 'Fluent English and Spanish speaking staff ensuring clear, culturally respectful communication.'
                          : 'Personal que domina inglés y español para garantizar una comunicación fluida y empática.'}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D90C72] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#126B72]">
                        {language === 'en' ? 'Respect for Individual Preferences' : 'Respeto a las Preferencias Individuales'}
                      </h4>
                      <p className="text-xs text-[#5C707C] mt-0.5 leading-relaxed">
                        {language === 'en'
                          ? 'Treating every home and client with genuine dignity, privacy, and compassion.'
                          : 'Trato a cada persona y a su hogar con absoluta dignidad, privacidad y afecto sincero.'}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles 4-Column Grid */}
      <section className="py-16 sm:py-20 bg-[#FDF4F8] border-t border-[#F7D2E4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#126B72] font-heading">
              {language === 'en' ? 'Core Principles' : 'Principios Fundamentales'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#126B72] font-heading tracking-tight text-balance">
              {language === 'en'
                ? 'The Pillars of Our Service'
                : 'Los Pilares de Nuestro Servicio'}
            </h2>
            <p className="text-base text-[#5C707C] leading-relaxed">
              {language === 'en'
                ? 'Every decision and interaction at HeartBeat is guided by our commitment to patient-centered excellence.'
                : 'Cada decisión e interacción en HeartBeat está guiada por nuestro compromiso con la excelencia hacia el paciente.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 card-soft-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FDF4F8] border border-[#F7D2E4] flex items-center justify-center text-[#D90C72]">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#126B72] font-heading">
                {language === 'en' ? 'Assistance with Daily Living' : 'Asistencia para la Vida Diaria'}
              </h3>
              <p className="text-xs text-[#5C707C] leading-relaxed">
                {language === 'en'
                  ? 'Personal care, bathing, dressing, meal support, and light homemaking that enable individuals to maintain daily normalcy safely in their own residence.'
                  : 'Cuidado personal, higiene, vestido, preparación de alimentos y tareas del hogar que permiten mantener la normalidad diaria con total seguridad.'}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 card-soft-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E7F2F3] border border-[#126B72]/20 flex items-center justify-center text-[#126B72]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#126B72] font-heading">
                {language === 'en' ? 'Skilled Clinical Excellence' : 'Excelencia Clínica Especializada'}
              </h3>
              <p className="text-xs text-[#5C707C] leading-relaxed">
                {language === 'en'
                  ? 'Licensed Registered Nurses, Physical Therapists, Occupational Therapists, and Speech Therapists working under strict clinical oversight to support recovery.'
                  : 'Enfermeros registrados y terapeutas licenciados que operan bajo supervisión médica para acelerar la recuperación y prevenir hospitalizaciones.'}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 card-soft-shadow space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#EBF5F9] border border-[#4D9BBC]/30 flex items-center justify-center text-[#4D9BBC]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#126B72] font-heading">
                {language === 'en' ? 'Family & Physician Partnership' : 'Alianza con Familias y Médicos'}
              </h3>
              <p className="text-xs text-[#5C707C] leading-relaxed">
                {language === 'en'
                  ? 'We maintain continuous, proactive coordination with family caregivers and attending physicians so that treatment plans remain up-to-date and responsive.'
                  : 'Mantenemos coordinación continua con cuidadores familiares y médicos para que los planes de atención se mantengan actualizados y efectivos.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACHC Accreditation & Quality Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#126B72] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-semibold">
                  <Award className="w-4 h-4 text-[#F7D2E4]" />
                  <span>
                    {language === 'en'
                      ? 'Accreditation Commission for Health Care'
                      : 'Comisión de Acreditación para la Atención Médica'}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {language === 'en'
                    ? 'ACHC Accredited Standards & State Licensing'
                    : 'Estándares de Acreditación ACHC y Licencia Estatal'}
                </h3>

                <p className="text-sm text-teal-100 leading-relaxed max-w-2xl font-body">
                  {language === 'en'
                    ? 'HeartBeat Home Health Care adheres to recognized ACHC standards, demonstrating our commitment to quality, patient safety, and clinical compliance in home health. As a licensed home health agency in Florida, we strictly follow State and Federal guidelines for patient rights, privacy, and clinical supervision.'
                    : 'HeartBeat Home Health Care cumple con los rigurosos estándares de ACHC, demostrando nuestro compromiso inquebrantable con la calidad, la seguridad del paciente y el cumplimiento normativo. Como agencia con licencia en Florida, seguimos las directrices estatales y federales de supervisión clínica.'}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/20">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    {language === 'en' ? 'Tampa Office Location' : 'Ubicación de Oficina en Tampa'}
                  </p>
                  <p className="text-xs text-teal-200 mt-1">
                    829 W. Dr. Martin Luther King Jr. Blvd., Suite 230, Tampa, FL 33603
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/20">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    {language === 'en' ? 'Direct Agency Contact' : 'Contacto Directo de la Agencia'}
                  </p>
                  <p className="text-xs text-teal-200 mt-1 tabular-nums">
                    Phone: (813) 358-6688 | Fax: (813) 448-1748
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
