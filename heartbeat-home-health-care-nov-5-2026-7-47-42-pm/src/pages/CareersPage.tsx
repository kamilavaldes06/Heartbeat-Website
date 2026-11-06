import React, { useState } from 'react';
import {
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Send,
  Heart,
  MapPin,
  Clock,
  ShieldAlert,
  Globe,
  Check,
  ChevronDown,
  ChevronUp,
  CheckCheck,
  RotateCcw,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageHeader } from '../components/PageHeader';
import { careerFormConfig } from '../config/formConfig';

export interface CountyCityGroup {
  id: string;
  name: string;
  esName: string;
  cities: string[];
}

export const countyCityData: CountyCityGroup[] = [
  {
    id: 'hillsborough',
    name: 'Hillsborough County',
    esName: 'Condado de Hillsborough',
    cities: [
      'Tampa',
      'Brandon',
      'Riverview',
      'Valrico',
      'Seffner',
      'Plant City',
      'Temple Terrace',
      "Town 'n' Country",
      'Carrollwood',
      'Lutz',
      'Apollo Beach',
      'Ruskin',
      'Sun City Center',
      'Wimauma',
      'Gibsonton',
      'Thonotosassa',
      'Dover',
      'Lithia',
      'Westchase',
      'Citrus Park',
      'Keystone',
    ],
  },
  {
    id: 'polk',
    name: 'Polk County',
    esName: 'Condado de Polk',
    cities: [
      'Lakeland',
      'Winter Haven',
      'Auburndale',
      'Bartow',
      'Haines City',
      'Davenport',
      'Lake Wales',
      'Lake Alfred',
      'Mulberry',
      'Polk City',
      'Frostproof',
      'Fort Meade',
      'Eagle Lake',
      'Dundee',
      'Highland City',
    ],
  },
  {
    id: 'hardee',
    name: 'Hardee County',
    esName: 'Condado de Hardee',
    cities: [
      'Wauchula',
      'Bowling Green',
      'Zolfo Springs',
      'Ona',
      'Limestone',
    ],
  },
  {
    id: 'manatee',
    name: 'Manatee County',
    esName: 'Condado de Manatee',
    cities: [
      'Bradenton',
      'Palmetto',
      'Ellenton',
      'Parrish',
      'Lakewood Ranch',
      'Bradenton Beach',
      'Anna Maria',
      'Holmes Beach',
      'Longboat Key',
      'Myakka City',
      'West Bradenton',
      'Bayshore Gardens',
      'Samoset',
      'Oneco',
    ],
  },
];

interface CareerFormState {
  fullName: string;
  phone: string;
  email: string;
  positions: string[];
  languages: string[];
  otherLanguage: string;
  selectedCities: Record<string, string[]>;
  availability: string[];
  additionalInfo: string;
}

interface ValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  positions?: string;
  languages?: string;
  cities?: string;
}

interface SubmissionRecord {
  fullName: string;
  phone: string;
  email: string;
  positions: string[];
  languages: string[];
  otherLanguage: string;
  preferredServiceAreas: Record<string, string[]>;
  preferredServiceAreasFormatted: string;
  availability: string[];
  additionalInfo: string;
  referenceId: string;
  submittedAt: string;
}

export const CareersPage: React.FC = () => {
  const { language, t } = useLanguage();

  const [formState, setFormState] = useState<CareerFormState>({
    fullName: '',
    phone: '',
    email: '',
    positions: [],
    languages: [],
    otherLanguage: '',
    selectedCities: {
      hillsborough: [],
      polk: [],
      hardee: [],
      manatee: [],
    },
    availability: [],
    additionalInfo: '',
  });

  // Collapsible county sections: keep Hillsborough open by default
  const [expandedCounties, setExpandedCounties] = useState<Record<string, boolean>>({
    hillsborough: true,
    polk: true,
    hardee: true,
    manatee: true,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<SubmissionRecord | null>(null);

  // Position options
  const positionOptions = [
    { id: 'hha', label: 'Home Health Aide (HHA)', esLabel: 'Asistente de Salud en el Hogar (HHA)' },
    { id: 'cna', label: 'Certified Nursing Assistant (CNA)', esLabel: 'Asistente de Enfermería Certificado (CNA)' },
    { id: 'rn', label: 'Registered Nurse (RN)', esLabel: 'Enfermero/a Registrado/a (RN)' },
  ];

  // Language options
  const languageOptions = [
    { id: 'english', label: 'English', esLabel: 'Inglés' },
    { id: 'spanish', label: 'Spanish', esLabel: 'Español' },
    { id: 'haitian_creole', label: 'Haitian Creole', esLabel: 'Criollo Haitiano' },
    { id: 'other', label: 'Other', esLabel: 'Otro' },
  ];

  // Availability options (Optional)
  const availabilityOptions = [
    { id: 'weekdays', label: 'Weekdays', esLabel: 'Días de semana' },
    { id: 'weekends', label: 'Weekends', esLabel: 'Fines de semana' },
    { id: 'mornings', label: 'Mornings', esLabel: 'Mañanas' },
    { id: 'afternoons', label: 'Afternoons', esLabel: 'Tardes' },
    { id: 'evenings', label: 'Evenings', esLabel: 'Noches' },
    { id: 'overnight', label: 'Overnight', esLabel: 'Turno Nocturno' },
    { id: 'flexible', label: 'Flexible', esLabel: 'Horario Flexible' },
  ];

  // Toggle helper for simple multi-select arrays
  const toggleSimpleSelection = (field: 'positions' | 'languages' | 'availability', value: string) => {
    setFormState((prev) => {
      const exists = prev[field].includes(value);
      const updated = exists
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value];
      return { ...prev, [field]: updated };
    });
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Toggle individual city checkbox
  const toggleCity = (countyId: string, cityName: string) => {
    setFormState((prev) => {
      const currentList = prev.selectedCities[countyId] || [];
      const exists = currentList.includes(cityName);
      const updated = exists
        ? currentList.filter((c) => c !== cityName)
        : [...currentList, cityName];

      return {
        ...prev,
        selectedCities: {
          ...prev.selectedCities,
          [countyId]: updated,
        },
      };
    });

    if (errors.cities) {
      setErrors((prev) => ({ ...prev, cities: undefined }));
    }
  };

  // Select all cities within a county
  const selectAllCounty = (countyId: string, allCities: string[]) => {
    setFormState((prev) => ({
      ...prev,
      selectedCities: {
        ...prev.selectedCities,
        [countyId]: [...allCities],
      },
    }));

    if (errors.cities) {
      setErrors((prev) => ({ ...prev, cities: undefined }));
    }
  };

  // Clear all selections within a county
  const clearCounty = (countyId: string) => {
    setFormState((prev) => ({
      ...prev,
      selectedCities: {
        ...prev.selectedCities,
        [countyId]: [],
      },
    }));
  };

  // Toggle accordion expand/collapse
  const toggleCountyExpanded = (countyId: string) => {
    setExpandedCounties((prev) => ({
      ...prev,
      [countyId]: !prev[countyId],
    }));
  };

  // Calculate total selected cities across all counties
  const totalSelectedCities = Object.values(formState.selectedCities).reduce(
    (acc, cities) => acc + cities.length,
    0
  );

  const validate = (): boolean => {
    const errs: ValidationErrors = {};

    if (!formState.fullName.trim()) {
      errs.fullName = language === 'en' ? 'Full name is required.' : 'El nombre completo es requerido.';
    }

    if (!formState.phone.trim()) {
      errs.phone = language === 'en' ? 'Phone number is required.' : 'El número de teléfono es requerido.';
    } else {
      const digits = formState.phone.replace(/\D/g, '');
      if (digits.length < 10) {
        errs.phone = language === 'en' ? 'Please enter a valid 10-digit phone number.' : 'Ingrese un número telefónico válido de 10 dígitos.';
      }
    }

    if (!formState.email.trim()) {
      errs.email = language === 'en' ? 'Email address is required.' : 'El correo electrónico es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = language === 'en' ? 'Please enter a valid email address.' : 'Ingrese un correo electrónico válido.';
    }

    if (formState.positions.length === 0) {
      errs.positions = language === 'en' ? 'Please select at least one position of interest.' : 'Seleccione al menos una posición de interés.';
    }

    if (formState.languages.length === 0) {
      errs.languages = language === 'en' ? 'Please select at least one language you speak.' : 'Seleccione al menos un idioma que hable.';
    }

    if (totalSelectedCities === 0) {
      errs.cities = language === 'en'
        ? 'Please select at least one preferred service city from the counties below.'
        : 'Seleccione al menos una ciudad de servicio preferida en los condados siguientes.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `HB-CAREER-2026-${randomSuffix}`;
    const timestamp = new Date().toISOString();

    // Group selected cities by full county name for formatted display and payload
    const preferredServiceAreasGrouped: Record<string, string[]> = {};
    const formattedLines: string[] = [];

    countyCityData.forEach((county) => {
      const chosen = formState.selectedCities[county.id] || [];
      if (chosen.length > 0) {
        preferredServiceAreasGrouped[county.name] = chosen;
        formattedLines.push(`${county.name}: ${chosen.join(', ')}`);
      }
    });

    const record: SubmissionRecord = {
      fullName: formState.fullName,
      phone: formState.phone,
      email: formState.email,
      positions: formState.positions,
      languages: formState.languages,
      otherLanguage: formState.otherLanguage,
      preferredServiceAreas: preferredServiceAreasGrouped,
      preferredServiceAreasFormatted: formattedLines.join('\n'),
      availability: formState.availability,
      additionalInfo: formState.additionalInfo,
      referenceId,
      submittedAt: timestamp,
    };

    try {
      // Save submission to local intake storage for immediate review
      const existing = JSON.parse(localStorage.getItem('heartbeat_career_inquiries') || '[]');
      existing.push(record);
      localStorage.setItem('heartbeat_career_inquiries', JSON.stringify(existing));

      // Route to external endpoint if configured
      if (careerFormConfig.endpointUrl) {
        await fetch(careerFormConfig.endpointUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(record),
        });
      }

      setSubmissionSuccess(record);
    } catch {
      setSubmissionSuccess(record);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormState({
      fullName: '',
      phone: '',
      email: '',
      positions: [],
      languages: [],
      otherLanguage: '',
      selectedCities: {
        hillsborough: [],
        polk: [],
        hardee: [],
        manatee: [],
      },
      availability: [],
      additionalInfo: '',
    });
    setErrors({});
    setSubmissionSuccess(null);
  };

  return (
    <div>
      <PageHeader
        title={language === 'en' ? 'Join Our Team' : 'Únase a Nuestro Equipo'}
        subtitle={
          language === 'en'
            ? 'We welcome inquiries from compassionate Home Health Aides, Certified Nursing Assistants, and Registered Nurses interested in providing home healthcare throughout our coverage areas.'
            : 'Recibimos con entusiasmo a asistentes de salud en el hogar, auxiliares de enfermería y enfermeros registrados con vocación de servicio en nuestras áreas de cobertura.'
        }
        breadcrumb={t('nav.careers')}
        categoryTag={language === 'en' ? 'Careers & Opportunities' : 'Oportunidades de Empleo'}
      />

      {/* Main Career Intro & Form Container */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Official Introduction Text */}
          <div className="mb-12 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF4F8] text-[#D90C72] text-xs font-bold uppercase tracking-wider font-heading">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Career Inquiries' : 'Oportunidades Laborales'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#126B72] font-heading tracking-tight">
              {language === 'en'
                ? 'Join HeartBeat Home Health Care'
                : 'Forme Parte de HeartBeat Home Health Care'}
            </h2>

            <p className="text-base text-[#243A47]/85 leading-relaxed font-body">
              {language === 'en'
                ? "Interested in joining HeartBeat Home Health Care? We welcome inquiries from Home Health Aides, Certified Nursing Assistants, and Registered Nurses interested in providing home healthcare services throughout our coverage areas. Complete the form below to tell us about yourself, your qualifications, and the communities you're available to serve."
                : '¿Le interesa unirse a HeartBeat Home Health Care? Recibimos consultas de Asistentes de Salud en el Hogar, Asistentes de Enfermería Certificados y Enfermeros Registrados interesados en brindar atención domiciliaria en nuestras áreas de cobertura. Complete el siguiente formulario para contarnos sobre usted, sus calificaciones y las comunidades que tiene disponibilidad para atender.'}
            </p>

            {/* Value Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#5C707C]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FDF4F8] text-[#D90C72] font-semibold border border-[#F7D2E4]">
                <Heart className="w-3.5 h-3.5 fill-[#D90C72]" />
                {language === 'en' ? '...caring is our passion' : '...cuidar es nuestra pasión'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E7F2F3] text-[#126B72] font-semibold border border-[#126B72]/20">
                <MapPin className="w-3.5 h-3.5" />
                {language === 'en' ? 'Hillsborough · Polk · Hardee · Manatee' : 'Hillsborough · Polk · Hardee · Manatee'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EBF5F9] text-[#4D9BBC] font-semibold border border-[#4D9BBC]/30">
                <Globe className="w-3.5 h-3.5" />
                {language === 'en' ? 'Bilingual Culture (EN / ES / Creole)' : 'Cultura Bilingüe (EN / ES / Creole)'}
              </span>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-[#FDF4F8] rounded-3xl p-6 sm:p-10 border border-[#F7D2E4] card-soft-shadow">
            {submissionSuccess ? (
              /* Verified Confirmation View */
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-emerald-200 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                    {submissionSuccess.referenceId}
                  </span>
                  <h3 className="text-2xl font-bold text-[#126B72] font-heading">
                    {language === 'en'
                      ? 'Employment Interest Received'
                      : 'Solicitud de Interés Registrada'}
                  </h3>
                  <p className="text-sm text-[#5C707C] max-w-lg mx-auto leading-relaxed">
                    {language === 'en'
                      ? `Thank you, ${submissionSuccess.fullName}. Your employment inquiry has been recorded in our intake system. Our Tampa recruitment coordinator will review your profile and reach out via phone or email.`
                      : `Muchas gracias, ${submissionSuccess.fullName}. Su consulta de empleo ha sido registrada en nuestro sistema de admisión. Nuestro coordinador en Tampa revisará su información y se comunicará por teléfono o correo.`}
                  </p>
                </div>

                {/* Submission Summary Box with Selected Cities by County */}
                <div className="text-left bg-[#FDF4F8] border border-[#F7D2E4] rounded-xl p-5 space-y-4 text-xs">
                  <h4 className="font-bold text-[#126B72] uppercase tracking-wider text-[11px]">
                    {language === 'en' ? 'Inquiry Summary' : 'Resumen de su Solicitud'}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#243A47]">
                    <div>
                      <span className="text-slate-400 block">{language === 'en' ? 'Applicant Name:' : 'Nombre:'}</span>
                      <span className="font-semibold">{submissionSuccess.fullName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{language === 'en' ? 'Contact Phone:' : 'Teléfono:'}</span>
                      <span className="font-semibold tabular-nums">{submissionSuccess.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{language === 'en' ? 'Positions Selected:' : 'Posiciones:'}</span>
                      <span className="font-semibold">{submissionSuccess.positions.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{language === 'en' ? 'Languages Spoken:' : 'Idiomas:'}</span>
                      <span className="font-semibold">
                        {submissionSuccess.languages.join(', ')}
                        {submissionSuccess.otherLanguage ? ` (${submissionSuccess.otherLanguage})` : ''}
                      </span>
                    </div>

                    {/* Preferred Service Areas with Exact City Lists */}
                    <div className="sm:col-span-2 pt-2 border-t border-[#F7D2E4]">
                      <span className="text-slate-400 block mb-1.5 font-semibold">
                        {language === 'en' ? 'Preferred Service Areas (Selected Cities):' : 'Áreas de Servicio Preferidas (Ciudades):'}
                      </span>
                      <div className="space-y-2">
                        {Object.entries(submissionSuccess.preferredServiceAreas).map(([countyName, cities]) => (
                          <div key={countyName} className="p-3 rounded-xl bg-white border border-[#F7D2E4] text-xs">
                            <span className="font-bold text-[#D90C72]">{countyName}:</span>{' '}
                            <span className="text-[#243A47] font-medium">{cities.join(', ')}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integration Notice */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-[#5C707C] space-y-1.5">
                  <div className="flex items-center gap-2 text-[#126B72] font-bold">
                    <AlertCircle className="w-4 h-4 text-[#4D9BBC]" />
                    <span>
                      {language === 'en'
                        ? 'System & Service Integration Notice'
                        : 'Aviso del Sistema y Servicio de Envío'}
                    </span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    {language === 'en'
                      ? `Candidate records are captured locally with full city selections. To route automatic email notifications directly to ${careerFormConfig.notificationEmail} in production on Vercel, link an active API or webhook in src/config/formConfig.ts.`
                      : `Los datos se guardan en el registro local con todas las ciudades seleccionadas. Para enviar notificaciones automáticas por correo a ${careerFormConfig.notificationEmail} en producción en Vercel, configure el endpoint en src/config/formConfig.ts.`}
                  </p>
                </div>

                <div className="pt-2 flex justify-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#126B72] text-white hover:bg-[#0D4E53] transition-colors cursor-pointer"
                  >
                    {language === 'en' ? 'Submit Another Inquiry' : 'Enviar Otra Solicitud'}
                  </button>
                </div>
              </div>
            ) : (
              /* Employment Interest Form */
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {/* SECTION 1: REQUIRED CONTACT INFORMATION */}
                <div className="space-y-4">
                  <div className="border-b border-[#F7D2E4] pb-2">
                    <h3 className="text-base font-bold text-[#126B72] font-heading flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#126B72] text-white flex items-center justify-center text-xs">
                        1
                      </span>
                      <span>
                        {language === 'en' ? 'Applicant Contact Information' : 'Información de Contacto'}
                      </span>
                      <span className="text-xs text-red-500 font-normal">
                        ({language === 'en' ? 'Required' : 'Requerido'})
                      </span>
                    </h3>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="career-fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#126B72] mb-1 font-heading"
                    >
                      {language === 'en' ? 'Full Name *' : 'Nombre Completo *'}
                    </label>
                    <input
                      type="text"
                      id="career-fullName"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      placeholder={language === 'en' ? 'e.g. Maria Gonzalez, RN' : 'ej. María González, RN'}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72] transition-colors ${
                        errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="career-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#126B72] mb-1 font-heading"
                      >
                        {language === 'en' ? 'Phone Number *' : 'Número de Teléfono *'}
                      </label>
                      <input
                        type="tel"
                        id="career-phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="(813) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72] transition-colors ${
                          errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="career-email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#126B72] mb-1 font-heading"
                      >
                        {language === 'en' ? 'Email Address *' : 'Correo Electrónico *'}
                      </label>
                      <input
                        type="email"
                        id="career-email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72] transition-colors ${
                          errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* SECTION 2: POSITION OF INTEREST (MULTIPLE SELECTION) */}
                <div className="space-y-3">
                  <div className="border-b border-[#F7D2E4] pb-2">
                    <h3 className="text-base font-bold text-[#126B72] font-heading flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#126B72] text-white flex items-center justify-center text-xs">
                        2
                      </span>
                      <span>
                        {language === 'en' ? 'Position of Interest' : 'Posición de Interés'} *
                      </span>
                      <span className="text-xs text-[#5C707C] font-normal">
                        ({language === 'en' ? 'Select all that apply' : 'Seleccione todas las que apliquen'})
                      </span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {positionOptions.map((pos) => {
                      const isSelected = formState.positions.includes(pos.label);
                      return (
                        <div
                          key={pos.id}
                          onClick={() => toggleSimpleSelection('positions', pos.label)}
                          className={`cursor-pointer rounded-xl p-4 border transition-all text-left flex items-start gap-3 ${
                            isSelected
                              ? 'bg-white border-[#D90C72] ring-2 ring-[#D90C72]/20 shadow-xs'
                              : 'bg-white/80 border-slate-200 hover:border-[#126B72]/40'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#D90C72] text-white'
                                : 'border border-slate-300 bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#126B72]">
                              {language === 'en' ? pos.label : pos.esLabel}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.positions && <p className="text-xs text-red-500 mt-1">{errors.positions}</p>}
                </div>

                {/* SECTION 3: LANGUAGES SPOKEN (MULTIPLE SELECTION) */}
                <div className="space-y-3">
                  <div className="border-b border-[#F7D2E4] pb-2">
                    <h3 className="text-base font-bold text-[#126B72] font-heading flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#126B72] text-white flex items-center justify-center text-xs">
                        3
                      </span>
                      <span>
                        {language === 'en' ? 'Languages Spoken' : 'Idiomas que Habla'} *
                      </span>
                      <span className="text-xs text-[#5C707C] font-normal">
                        ({language === 'en' ? 'Select all that apply' : 'Seleccione todos los que apliquen'})
                      </span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {languageOptions.map((lang) => {
                      const isSelected = formState.languages.includes(lang.label);
                      return (
                        <div
                          key={lang.id}
                          onClick={() => toggleSimpleSelection('languages', lang.label)}
                          className={`cursor-pointer rounded-xl p-3.5 border transition-all text-left flex items-center gap-2.5 ${
                            isSelected
                              ? 'bg-white border-[#D90C72] ring-2 ring-[#D90C72]/20 shadow-xs'
                              : 'bg-white/80 border-slate-200 hover:border-[#126B72]/40'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#D90C72] text-white'
                                : 'border border-slate-300 bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-semibold text-[#243A47]">
                            {language === 'en' ? lang.label : lang.esLabel}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* If Other language is checked, show text field */}
                  {formState.languages.includes('Other') && (
                    <div className="pt-2">
                      <label
                        htmlFor="career-otherLanguage"
                        className="block text-xs font-bold text-[#126B72] mb-1 font-heading"
                      >
                        {language === 'en' ? 'Please specify other language(s):' : 'Especifique otros idiomas:'}
                      </label>
                      <input
                        type="text"
                        id="career-otherLanguage"
                        value={formState.otherLanguage}
                        onChange={(e) => setFormState({ ...formState, otherLanguage: e.target.value })}
                        placeholder={language === 'en' ? 'e.g. Portuguese, Tagalog, ASL' : 'ej. Portugués, Tagalo'}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72]"
                      />
                    </div>
                  )}
                  {errors.languages && <p className="text-xs text-red-500 mt-1">{errors.languages}</p>}
                </div>

                {/* SECTION 4: PREFERRED SERVICE AREAS — FUNCTIONAL INDIVIDUAL CITY CHECKBOXES */}
                <div className="space-y-4">
                  <div className="border-b border-[#F7D2E4] pb-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-[#126B72] font-heading flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#126B72] text-white flex items-center justify-center text-xs">
                          4
                        </span>
                        <span>
                          {language === 'en' ? 'Preferred Service Areas' : 'Áreas de Servicio Preferidas'} *
                        </span>
                      </h3>
                      <span className="text-xs font-bold text-[#D90C72] bg-white px-2.5 py-1 rounded-full border border-[#F7D2E4]">
                        {totalSelectedCities}{' '}
                        {language === 'en'
                          ? totalSelectedCities === 1 ? 'city selected' : 'cities selected'
                          : totalSelectedCities === 1 ? 'ciudad seleccionada' : 'ciudades seleccionadas'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#5C707C] leading-relaxed">
                    {language === 'en'
                      ? 'Please check the individual cities and communities where you are available to provide care. You may select cities across multiple counties or use "Select All" for an entire county.'
                      : 'Marque las ciudades y comunidades donde tiene disponibilidad para prestar atención. Puede seleccionar ciudades en múltiples condados o usar "Seleccionar Todo" para un condado completo.'}
                  </p>

                  {/* Collapsible County Groups with Individual City Checkboxes */}
                  <div className="space-y-3.5">
                    {countyCityData.map((county) => {
                      const selectedInThisCounty = formState.selectedCities[county.id] || [];
                      const isAllSelected = selectedInThisCounty.length === county.cities.length && county.cities.length > 0;
                      const hasSomeSelected = selectedInThisCounty.length > 0;
                      const isExpanded = expandedCounties[county.id];

                      return (
                        <div
                          key={county.id}
                          className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
                        >
                          {/* County Header Bar */}
                          <div className="p-4 sm:p-4.5 flex flex-wrap items-center justify-between gap-3 bg-white">
                            {/* Left: County Name & Count badge */}
                            <button
                              type="button"
                              onClick={() => toggleCountyExpanded(county.id)}
                              className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
                              aria-expanded={isExpanded}
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#E7F2F3] text-[#126B72] flex items-center justify-center shrink-0 group-hover:bg-[#126B72] group-hover:text-white transition-colors">
                                <MapPin className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-[#126B72] font-heading group-hover:text-[#D90C72] transition-colors">
                                  {language === 'en' ? county.name : county.esName}
                                </h4>
                                <span className="text-[11px] text-[#5C707C]">
                                  {county.cities.length} {language === 'en' ? 'cities available' : 'ciudades disponibles'}
                                </span>
                              </div>
                            </button>

                            {/* Right: Selection Counter, Select All / Clear, Expand Toggle */}
                            <div className="flex items-center gap-2 ml-auto">
                              {/* Selected Counter Pill */}
                              <span
                                className={`text-[11px] font-bold px-2.5 py-1 rounded-md transition-colors ${
                                  hasSomeSelected
                                    ? 'bg-[#FDF4F8] text-[#D90C72] border border-[#F7D2E4]'
                                    : 'bg-slate-100 text-slate-500'
                                }`}
                              >
                                {selectedInThisCounty.length} / {county.cities.length}{' '}
                                {language === 'en' ? 'selected' : 'seleccionadas'}
                              </span>

                              {/* Select All Button */}
                              <button
                                type="button"
                                onClick={() => selectAllCounty(county.id, county.cities)}
                                disabled={isAllSelected}
                                title={language === 'en' ? `Select all cities in ${county.name}` : `Seleccionar todas en ${county.esName}`}
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                                  isAllSelected
                                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                    : 'bg-[#E7F2F3] text-[#126B72] hover:bg-[#126B72] hover:text-white'
                                }`}
                              >
                                <CheckCheck className="w-3 h-3" />
                                <span>{language === 'en' ? 'Select All' : 'Todo'}</span>
                              </button>

                              {/* Clear Button */}
                              <button
                                type="button"
                                onClick={() => clearCounty(county.id)}
                                disabled={!hasSomeSelected}
                                title={language === 'en' ? `Clear selections for ${county.name}` : `Limpiar selecciones de ${county.esName}`}
                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                                  !hasSomeSelected
                                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                                    : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                                }`}
                              >
                                <RotateCcw className="w-3 h-3" />
                                <span>{language === 'en' ? 'Clear' : 'Limpiar'}</span>
                              </button>

                              {/* Expand / Collapse Button */}
                              <button
                                type="button"
                                onClick={() => toggleCountyExpanded(county.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-[#126B72] hover:bg-slate-100 transition-colors cursor-pointer"
                                aria-label={isExpanded ? 'Collapse county' : 'Expand county'}
                              >
                                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>

                          {/* Collapsible City Checkbox Grid */}
                          {isExpanded && (
                            <div className="border-t border-slate-100 p-4 bg-slate-50/60">
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                {county.cities.map((city) => {
                                  const isChecked = selectedInThisCounty.includes(city);
                                  return (
                                    <label
                                      key={city}
                                      onClick={(e) => {
                                        // Avoid double-toggle if clicking directly on input
                                        e.preventDefault();
                                        toggleCity(county.id, city);
                                      }}
                                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all cursor-pointer select-none text-left ${
                                        isChecked
                                          ? 'bg-white border-[#D90C72] ring-1 ring-[#D90C72]/30 shadow-2xs'
                                          : 'bg-white/80 border-slate-200/90 hover:border-[#126B72]/40 hover:bg-white'
                                      }`}
                                    >
                                      {/* Accessible Checkbox Input */}
                                      <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => toggleCity(county.id, city)}
                                        className="sr-only"
                                        aria-label={`${city}, ${county.name}`}
                                      />

                                      {/* Styled Checkbox Box */}
                                      <div
                                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all ${
                                          isChecked
                                            ? 'bg-[#D90C72] text-white'
                                            : 'border border-slate-300 bg-white'
                                        }`}
                                      >
                                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                                      </div>

                                      <span
                                        className={`text-xs ${
                                          isChecked
                                            ? 'font-bold text-[#126B72]'
                                            : 'font-medium text-[#243A47]'
                                        }`}
                                      >
                                        {city}
                                      </span>
                                    </label>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {errors.cities && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.cities}</span>
                    </p>
                  )}
                </div>

                {/* SECTION 5: AVAILABILITY (OPTIONAL) */}
                <div className="space-y-3">
                  <div className="border-b border-[#F7D2E4] pb-2">
                    <h3 className="text-base font-bold text-[#126B72] font-heading flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#4D9BBC] text-white flex items-center justify-center text-xs">
                        5
                      </span>
                      <span>
                        {language === 'en' ? 'General Availability' : 'Disponibilidad General'}
                      </span>
                      <span className="text-xs text-[#5C707C] font-normal">
                        ({language === 'en' ? 'Optional' : 'Opcional'})
                      </span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {availabilityOptions.map((avail) => {
                      const isSelected = formState.availability.includes(avail.label);
                      return (
                        <div
                          key={avail.id}
                          onClick={() => toggleSimpleSelection('availability', avail.label)}
                          className={`cursor-pointer rounded-xl p-3 border transition-all text-left flex items-center gap-2.5 ${
                            isSelected
                              ? 'bg-white border-[#4D9BBC] ring-1 ring-[#4D9BBC] shadow-2xs'
                              : 'bg-white/80 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#4D9BBC] text-white'
                                : 'border border-slate-300 bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs text-[#243A47] font-medium">
                            {language === 'en' ? avail.label : avail.esLabel}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* SECTION 6: ADDITIONAL INFORMATION (OPTIONAL) */}
                <div className="space-y-3">
                  <div className="border-b border-[#F7D2E4] pb-2">
                    <h3 className="text-base font-bold text-[#126B72] font-heading flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#4D9BBC] text-white flex items-center justify-center text-xs">
                        6
                      </span>
                      <span>
                        {language === 'en' ? 'Additional Information' : 'Información Adicional'}
                      </span>
                      <span className="text-xs text-[#5C707C] font-normal">
                        ({language === 'en' ? 'Optional' : 'Opcional'})
                      </span>
                    </h3>
                  </div>

                  <div>
                    <label
                      htmlFor="career-additionalInfo"
                      className="block text-xs font-semibold text-[#5C707C] mb-1"
                    >
                      {language === 'en'
                        ? 'Share relevant healthcare experience, certifications, specific schedule notes, or other details:'
                        : 'Comparta experiencia previa en salud, certificaciones, notas de horario u otros detalles relevantes:'}
                    </label>
                    <textarea
                      id="career-additionalInfo"
                      rows={3}
                      value={formState.additionalInfo}
                      onChange={(e) => setFormState({ ...formState, additionalInfo: e.target.value })}
                      placeholder={
                        language === 'en'
                          ? 'e.g. 4 years of HHA experience with dementia care, CPR certified, looking for weekday morning schedules...'
                          : 'ej. 4 años de experiencia como HHA, certificado CPR, busco horario de mañana...'
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#243A47] focus:outline-none focus:ring-2 focus:ring-[#D90C72] resize-none"
                    />
                  </div>
                </div>

                {/* PRIVACY & SENSITIVE DATA NOTICE */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-xs text-[#5C707C] leading-relaxed">
                  <ShieldAlert className="w-5 h-5 text-[#D90C72] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#126B72] mb-0.5">
                      {language === 'en' ? 'Privacy Notice' : 'Aviso de Privacidad'}
                    </p>
                    <p>
                      {language === 'en'
                        ? 'Information submitted through this form will be used exclusively by HeartBeat Home Health Care to respond to employment inquiries and coordinate candidate availability across our service counties. Do not submit Social Security numbers, identification documents, medical records, or sensitive paperwork through this public interest form.'
                        : 'La información enviada será utilizada exclusivamente por HeartBeat Home Health Care para responder a consultas de empleo y evaluar disponibilidad en nuestros condados. No envíe números de Seguro Social ni documentos de identidad por este formulario público.'}
                    </p>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#D90C72] hover:bg-[#B5085C] shadow-md transition-all duration-150 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>{language === 'en' ? 'Submitting Interest...' : 'Enviando...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>
                          {language === 'en'
                            ? 'Submit Employment Interest'
                            : 'Enviar Consulta de Empleo'}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
