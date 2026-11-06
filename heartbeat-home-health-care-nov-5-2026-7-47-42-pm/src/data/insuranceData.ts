export interface InsuranceCategory {
  id: 'ltc' | 'skilled' | 'pediatric';
  title: {
    en: string;
    es: string;
  };
  subtitle: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  providers: {
    name: string;
    planType?: {
      en: string;
      es: string;
    };
  }[];
}

export const insuranceCategories: InsuranceCategory[] = [
  {
    id: 'ltc',
    title: {
      en: 'Long-Term Care (LTC) Insurance',
      es: 'Seguros para Cuidado a Largo Plazo (LTC)',
    },
    subtitle: {
      en: 'Coverage for personal care, homemaker, companion, and respite services',
      es: 'Cobertura para cuidado personal, tareas del hogar, acompañamiento y relevo',
    },
    description: {
      en: 'Long-Term Care coverage supports individuals who need ongoing assistance with activities of daily living to remain safely and comfortably in their homes.',
      es: 'La cobertura de Cuidado a Largo Plazo apoya a personas que requieren asistencia continua en actividades de la vida diaria para permanecer en su hogar con seguridad.',
    },
    providers: [
      { name: 'Sunshine Health', planType: { en: 'LTC Managed Care', es: 'Plan Administrado LTC' } },
      { name: 'Molina Healthcare', planType: { en: 'LTC Program', es: 'Programa LTC' } },
      { name: 'Simply Healthcare', planType: { en: 'LTC Managed Care', es: 'Plan Administrado LTC' } },
      { name: 'Florida Community Care', planType: { en: 'Provider Service Network LTC', es: 'Red de Servicios de Proveedores LTC' } },
      { name: 'Aetna', planType: { en: 'LTC Coverage', es: 'Cobertura LTC' } },
    ],
  },
  {
    id: 'skilled',
    title: {
      en: 'Skilled Home Health Insurance',
      es: 'Seguros para Servicios Clínicos Especializados',
    },
    subtitle: {
      en: 'Coverage for skilled nursing, physical therapy, occupational therapy, and specialized care',
      es: 'Cobertura para enfermería, fisioterapia, terapia ocupacional y atención especializada',
    },
    description: {
      en: 'Skilled care is typically ordered by a licensed physician following an illness, injury, surgery, or hospital stay, and is covered under Medicare and participating health plans.',
      es: 'La atención clínica especializada es prescrita por un médico tras una hospitalización, cirugía o enfermedad, y está cubierta por Medicare y redes participantes.',
    },
    providers: [
      { name: 'Original Medicare', planType: { en: 'Medicare Libre (Part A)', es: 'Medicare Libre (Parte A)' } },
      { name: 'Sunshine Health', planType: { en: 'Medicaid & Medicare Plans', es: 'Planes Medicaid y Medicare' } },
      { name: 'Ambetter', planType: { en: 'Marketplace Plans', es: 'Planes Marketplace' } },
      { name: 'Simply Healthcare', planType: { en: 'Medicaid / Medicare Advantage', es: 'Medicaid / Medicare Advantage' } },
      { name: 'CarePlus', planType: { en: 'Medicare Advantage', es: 'Medicare Advantage' } },
      { name: 'Molina Healthcare', planType: { en: 'Medicaid & Medicare Options', es: 'Opciones Medicaid y Medicare' } },
      { name: 'Florida Blue', planType: { en: 'Blue Cross Blue Shield Plans', es: 'Planes Blue Cross Blue Shield' } },
      { name: 'Aetna', planType: { en: 'Medicare & Medicaid Networks', es: 'Redes Medicare y Medicaid' } },
      { name: 'Humana', planType: { en: 'Medicare Advantage & Commercial', es: 'Medicare Advantage y Comercial' } },
    ],
  },
  {
    id: 'pediatric',
    title: {
      en: 'Pediatric Care Insurance',
      es: 'Seguros para Servicios Pediátricos',
    },
    subtitle: {
      en: 'Dedicated home health aide services for eligible pediatric patients',
      es: 'Servicios dedicados de asistente de salud en el hogar para pacientes pediátricos elegibles',
    },
    description: {
      en: 'We offer specialized Home Health Aide (HHA) services for children through designated managed healthcare partnerships.',
      es: 'Ofrecemos servicios de Asistente de Salud en el Hogar (HHA) para niños a través de convenios de salud administrada.',
    },
    providers: [
      { name: 'Molina Healthcare', planType: { en: 'Pediatric HHA Coverage', es: 'Cobertura HHA Pediátrica' } },
      { name: 'Simply Healthcare', planType: { en: 'Pediatric HHA Coverage', es: 'Cobertura HHA Pediátrica' } },
    ],
  },
];
