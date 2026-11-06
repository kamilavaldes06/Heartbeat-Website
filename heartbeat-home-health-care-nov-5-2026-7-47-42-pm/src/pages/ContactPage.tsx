import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Printer,
  Clock,
  Heart,
  UserCheck,
  Briefcase,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/PageHeader';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errors: Partial<FormState> = {};
    if (!formState.fullName.trim()) {
      errors.fullName =
        language === 'en' ? 'Full name is required' : 'El nombre completo es requerido';
    }
    if (!formState.email.trim()) {
      errors.email =
        language === 'en' ? 'Email address is required' : 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email =
        language === 'en' ? 'Valid email address required' : 'Ingrese un correo electrónico válido';
    }
    if (!formState.phone.trim()) {
      errors.phone =
        language === 'en' ? 'Phone number is required' : 'El número de teléfono es requerido';
    }
    if (!formState.message.trim()) {
      errors.message =
        language === 'en' ? 'Message is required' : 'Por favor ingrese su mensaje o consulta';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real client submission with immediate response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormState({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div>
      <PageHeader
        title={language === 'en' ? 'Contact HeartBeat Home Health' : 'Contáctenos en HeartBeat'}
        subtitle={
          language === 'en'
            ? 'We are here to answer questions, guide families, coordinate physician referrals, and discuss career opportunities in Tampa Bay.'
            : 'Estamos aquí para orientar a familias, coordinar referencias médicas y atender consultas profesionales en Tampa Bay.'
        }
        breadcrumb={t('nav.contact')}
        categoryTag={language === 'en' ? 'Get In Touch' : 'Comuníquese con Nosotros'}
      />

      {/* Main Contact Grid & Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Official Contact Information & Google Map Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D90C72] font-heading">
                  {language === 'en' ? 'Tampa Headquarters' : 'Oficina Principal en Tampa'}
                </span>
                <h2 className="text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                  HeartBeat Home Health Care
                </h2>
                <p className="text-sm italic font-semibold text-[#D90C72]">
                  {language === 'en' ? '...caring is our passion' : '...cuidar es nuestra pasión'}
                </p>
                <p className="text-sm text-[#5C707C] leading-relaxed">
                  {language === 'en'
                    ? 'Our Tampa office provides care coordination across Hillsborough, Polk, Hardee, and Manatee counties with dedicated bilingual staff.'
                    : 'Nuestra oficina en Tampa coordina la atención en los condados de Hillsborough, Polk, Hardee y Manatee con personal bilingüe.'}
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-[#FDF4F8] border border-[#F7D2E4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#126B72] shadow-2xs shrink-0">
                    <MapPin className="w-5 h-5 text-[#4D9BBC]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#126B72]">
                      {language === 'en' ? 'Office Location' : 'Dirección de la Oficina'}
                    </h4>
                    <p className="text-sm text-[#243A47] font-medium leading-relaxed">
                      829 W. Dr. Martin Luther King Jr. Blvd.<br />
                      Suite 230<br />
                      Tampa, FL 33603
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=829+W+Dr+Martin+Luther+King+Jr+Blvd+Suite+230+Tampa+FL+33603"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D90C72] hover:text-[#B5085C] mt-2"
                    >
                      <span>{language === 'en' ? 'View on Google Maps' : 'Ver en Google Maps'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl bg-[#FDF4F8] border border-[#F7D2E4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#D90C72] shadow-2xs shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#126B72]">
                      {language === 'en' ? 'Direct Telephone' : 'Teléfono Directo'}
                    </h4>
                    <a
                      href="tel:8133586688"
                      className="text-lg font-bold text-[#D90C72] hover:underline tabular-nums block"
                    >
                      (813) 358-6688
                    </a>
                    <p className="text-xs text-[#5C707C]">
                      {language === 'en'
                        ? 'Click to call from mobile devices · English & Spanish'
                        : 'Toque para llamar desde celular · Inglés y Español'}
                    </p>
                  </div>
                </div>

                {/* Fax */}
                <div className="p-5 rounded-2xl bg-[#FDF4F8] border border-[#F7D2E4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#4D9BBC] shadow-2xs shrink-0">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#126B72]">
                      {language === 'en' ? 'Direct Fax Line' : 'Línea de Fax'}
                    </h4>
                    <p className="text-base font-bold text-[#243A47] tabular-nums">
                      (813) 448-1748
                    </p>
                    <p className="text-xs text-[#5C707C]">
                      {language === 'en'
                        ? 'For physician orders, face-to-face notes, and clinical records'
                        : 'Para órdenes médicas, notas clínicas y documentos de referencia'}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-[#FDF4F8] border border-[#F7D2E4] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#126B72] shadow-2xs shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#126B72]">
                      {language === 'en' ? 'Email Inquiries' : 'Correo Electrónico'}
                    </h4>
                    <a
                      href="mailto:heartbeathhc@gmail.com"
                      className="text-sm font-bold text-[#126B72] hover:underline break-all block"
                    >
                      heartbeathhc@gmail.com
                    </a>
                    <p className="text-xs text-[#5C707C]">
                      {language === 'en'
                        ? 'General correspondence & referral inquiries'
                        : 'Correspondencia general y solicitudes de información'}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-5 rounded-2xl bg-[#E7F2F3] border border-[#126B72]/20 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#126B72] shadow-2xs shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#126B72]">
                      {language === 'en' ? 'Operating Hours' : 'Horario de Atención'}
                    </h4>
                    <p className="text-xs text-[#243A47] font-semibold">
                      {language === 'en'
                        ? 'Office Hours: 8:30 AM – 5:00 PM (Monday – Friday)'
                        : 'Horario de Oficina: 8:30 AM – 5:00 PM (Lunes a Viernes)'}
                    </p>
                    <p className="text-xs text-[#126B72] font-bold">
                      {language === 'en'
                        ? 'Client Care Support: 24 Hours / 7 Days a Week (24/7)'
                        : 'Atención al Cliente: 24 Horas / 7 Días a la Semana (24/7)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FDF4F8] rounded-3xl p-8 sm:p-10 border border-[#F7D2E4] card-soft-shadow">
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D90C72] font-heading">
                    {language === 'en' ? 'Send a Message' : 'Envíenos un Mensaje'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
                    {language === 'en' ? 'Online Inquiry Form' : 'Formulario de Consulta'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C707C] leading-relaxed">
                    {language === 'en'
                      ? 'Please complete the form below. A member of our Tampa team will follow up promptly.'
                      : 'Complete el siguiente formulario. Un miembro de nuestro equipo en Tampa le responderá a la brevedad.'}
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-[#126B72] font-heading">
                      {language === 'en'
                        ? 'Thank You for Reaching Out'
                        : 'Gracias por Comunicarse con Nosotros'}
                    </h4>
                    <p className="text-sm text-[#5C707C] max-w-md mx-auto leading-relaxed">
                      {language === 'en'
                        ? `We have received your message regarding "${formState.inquiryType}". Our care team will review your inquiry and reach out at ${formState.email} or by phone shortly.`
                        : `Hemos recibido su mensaje. Nuestro equipo de atención revisará su solicitud y se comunicará a ${formState.email} o por teléfono a la brevedad.`}
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#126B72] text-white hover:bg-[#0D4E53] transition-colors"
                      >
                        {language === 'en' ? 'Send Another Message' : 'Enviar Otro Mensaje'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-[#126B72] mb-1 font-heading"
                      >
                        {language === 'en' ? 'Full Name *' : 'Nombre Completo *'}
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formState.fullName}
                        onChange={(e) =>
                          setFormState({ ...formState, fullName: e.target.value })
                        }
                        placeholder={language === 'en' ? 'e.g. Maria Rodriguez' : 'ej. María Rodríguez'}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72] transition-colors ${
                          formErrors.fullName
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-200'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-[#126B72] mb-1 font-heading"
                        >
                          {language === 'en' ? 'Email Address *' : 'Correo Electrónico *'}
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          placeholder="name@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72] transition-colors ${
                            formErrors.email
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-slate-200'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-[#126B72] mb-1 font-heading"
                        >
                          {language === 'en' ? 'Phone Number *' : 'Número de Teléfono *'}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          placeholder="(813) 000-0000"
                          className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72] transition-colors ${
                            formErrors.phone
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-slate-200'
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-xs font-bold uppercase tracking-wider text-[#126B72] mb-1 font-heading"
                      >
                        {language === 'en' ? 'Inquiry Type *' : 'Tipo de Consulta *'}
                      </label>
                      <select
                        id="inquiryType"
                        value={formState.inquiryType}
                        onChange={(e) =>
                          setFormState({ ...formState, inquiryType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72] transition-colors"
                      >
                        <option value="general">
                          {language === 'en' ? 'General Inquiry' : 'Consulta General'}
                        </option>
                        <option value="services">
                          {language === 'en'
                            ? 'Services & Care Information'
                            : 'Información de Servicios y Cuidado'}
                        </option>
                        <option value="referral">
                          {language === 'en'
                            ? 'Physician / Professional Referral'
                            : 'Referencia Médica / Profesional'}
                        </option>
                        <option value="employment">
                          {language === 'en'
                            ? 'Employment Inquiry'
                            : 'Consulta de Oportunidades Laborales'}
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-[#126B72] mb-1 font-heading"
                      >
                        {language === 'en' ? 'Message *' : 'Mensaje o Consulta *'}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder={
                          language === 'en'
                            ? 'Please describe how we can assist you or your family...'
                            : 'Describa cómo podemos ayudarle a usted o a su familia...'
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72] transition-colors resize-none ${
                          formErrors.message
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-200'
                        }`}
                      />
                      {formErrors.message && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.message}</p>
                      )}
                    </div>

                    {/* Privacy & Health Data Disclaimer */}
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-[11px] text-[#5C707C] leading-snug">
                      <ShieldAlert className="w-4 h-4 text-[#D90C72] shrink-0 mt-0.5" />
                      <span>
                        {language === 'en'
                          ? 'Please do not transmit sensitive personal health details, Social Security numbers, or confidential medical records through this form. For clinical records, please use our secure fax: (813) 448-1748.'
                          : 'Por favor no envíe información médica confidencial ni números de Seguro Social por este formulario. Para récords clínicos utilice nuestro fax seguro: (813) 448-1748.'}
                      </span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-sm transition-all duration-150 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>
                          {language === 'en' ? 'Submitting...' : 'Enviando...'}
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>
                            {language === 'en' ? 'Send Message' : 'Enviar Mensaje'}
                          </span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Dedicated Sections: Patients & Families | Physician Referrals | Employment */}
      <section className="py-16 sm:py-20 bg-[#FDF4F8] border-t border-[#F7D2E4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#126B72] font-heading">
              {language === 'en' ? 'Dedicated Information' : 'Información Específica'}
            </span>
            <h2 className="text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
              {language === 'en' ? 'How We Can Assist You' : 'Cómo Podemos Ayudarle'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Section 1: Patients & Families */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 card-soft-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FDF4F8] border border-[#F7D2E4] flex items-center justify-center text-[#D90C72]">
                  <Heart className="w-6 h-6 fill-[#D90C72]" />
                </div>
                <h3 className="text-xl font-bold text-[#126B72] font-heading">
                  {language === 'en' ? 'Patients & Families' : 'Pacientes y Familias'}
                </h3>
                <p className="text-xs text-[#5C707C] leading-relaxed">
                  {language === 'en'
                    ? 'Exploring care options for yourself or an aging loved one can feel overwhelming. Our friendly, bilingual intake team welcomes questions about:'
                    : 'Explorar opciones de cuidado para usted o un ser querido puede ser abrumador. Nuestro equipo bilingüe con gusto le orienta sobre:'}
                </p>
                <ul className="space-y-1.5 text-xs text-[#243A47] pt-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D90C72]"></span>
                    <span>{language === 'en' ? 'Long-Term Care services & daily living support' : 'Servicios de Cuidado a Largo Plazo y apoyo diario'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#126B72]"></span>
                    <span>{language === 'en' ? 'Understanding the Florida Medicaid application process' : 'Orientación en el proceso de solicitud de Florida Medicaid'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4D9BBC]"></span>
                    <span>{language === 'en' ? 'Available in-home care options & scheduling' : 'Opciones de cuidado en el hogar y programación'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D90C72]"></span>
                    <span>{language === 'en' ? 'Insurance verification & getting started' : 'Verificación de seguros y cómo comenzar'}</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href="tel:8133586688"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D90C72] hover:text-[#B5085C]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>
                    {language === 'en'
                      ? 'Call to Discuss Care: (813) 358-6688'
                      : 'Llamar para Consultar Cuidado'}
                  </span>
                </a>
              </div>
            </div>

            {/* Section 2: Physician & Professional Referrals */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 card-soft-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E7F2F3] border border-[#126B72]/20 flex items-center justify-center text-[#126B72]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#126B72] font-heading">
                  {language === 'en'
                    ? 'Physician & Professional Referrals'
                    : 'Referencias Médicas y Profesionales'}
                </h3>
                <p className="text-xs text-[#5C707C] leading-relaxed">
                  {language === 'en'
                    ? 'We work in close collaboration with physicians, hospital discharge planners, case managers, and social workers across Hillsborough, Polk, Hardee, and Manatee counties to initiate swift, safe in-home care transitions.'
                    : 'Colaboramos con médicos, planificadores de alta hospitalaria, trabajadores sociales y administradores de casos para garantizar transiciones de cuidado seguras, rápidas y coordinadas en el hogar.'}
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-[#243A47]">
                  <span className="font-bold text-[#126B72]">Fax Orders & Notes:</span>{' '}
                  <span className="tabular-nums font-mono font-bold">(813) 448-1748</span>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href="mailto:heartbeathhc@gmail.com?subject=Physician%20Referral%20Inquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#126B72] hover:text-[#0D4E53]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>
                    {language === 'en' ? 'Email Referral Inquiry' : 'Enviar Consulta de Referencia'}
                  </span>
                </a>
              </div>
            </div>

            {/* Section 3: Employment & Career Inquiries */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 card-soft-shadow flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F9] border border-[#4D9BBC]/30 flex items-center justify-center text-[#4D9BBC]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#126B72] font-heading">
                  {language === 'en'
                    ? 'Employment & Career Inquiries'
                    : 'Oportunidades Laborales y Empleo'}
                </h3>
                <p className="text-xs text-[#5C707C] leading-relaxed">
                  {language === 'en'
                    ? 'Are you a licensed Home Health Aide (HHA), Certified Nursing Assistant (CNA), or Registered Nurse (RN) seeking a supportive healthcare team in Tampa Bay? We welcome professionals passionate about providing dignified, compassionate care in Hillsborough, Polk, Hardee, and Manatee counties.'
                    : '¿Es usted Asistente de Salud en el Hogar (HHA), CNA o Enfermero Registrado (RN) y busca un equipo de salud compasivo en Tampa Bay? Recibimos con agrado a profesionales dedicados a brindar atención digna en los condados de Hillsborough, Polk, Hardee y Manatee.'}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-xs transition-all active:scale-95"
                >
                  <span>
                    {language === 'en'
                      ? 'Explore Career Opportunities'
                      : 'Explorar Oportunidades Laborales'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
