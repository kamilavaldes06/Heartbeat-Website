import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Top banner & Agency identity
    'banner.bilingual': 'Bilingual Agency · Hablamos Español',
    'banner.phone': 'Call Us: (813) 358-6688',
    'banner.hours': 'Office: 8:30 AM – 5:00 PM | Client Care Support: 24/7',
    'tagline': '...caring is our passion',
    'agency.name': 'HeartBeat Home Health Care',
    'agency.location': 'Tampa, Florida',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Our Services',
    'nav.insurance': 'Accepted Insurance',
    'nav.coverage': 'Coverage Areas',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact Us',
    'nav.callNow': 'Call Us',

    // Hero Section
    'hero.badge': 'Tampa Bay Home Healthcare',
    'hero.headline': 'Care That Comes From the Heart.',
    'hero.description':
      'HeartBeat Home Health Care provides Long-Term Care and Skilled Home Health services to individuals and families throughout the Tampa Bay area and surrounding communities.',
    'hero.primaryCta': 'Explore Our Services',
    'hero.secondaryCta': 'Contact Us',
    'hero.trust1': 'ACHC Accredited Standards',
    'hero.trust2': 'Serving 4 Florida Counties',
    'hero.trust3': 'Bilingual Care Team (EN/ES)',

    // Homepage Sections
    'home.welcome.tag': 'Welcome to HeartBeat',
    'home.welcome.title': 'Compassionate In-Home Care Tailored to You',
    'home.welcome.p1':
      'At HeartBeat Home Health Care, we believe that the highest quality care happens where you feel safest and most comfortable: inside your own home. Based in Tampa, Florida, our dedicated clinicians, nurses, therapists, and caregivers work closely with patients, families, and physicians to deliver personalized support that respects dignity, promotes independence, and nurtures well-being.',
    'home.welcome.p2':
      'Whether you or a loved one requires daily living assistance, post-hospitalization recovery, or specialized skilled therapy, we treat every client with the warmth, dedication, and clinical excellence they deserve.',

    'home.pillars.tag': 'Care Designed Around Your Needs',
    'home.pillars.title': 'Comprehensive In-Home Care Solutions',
    'home.pillars.subtitle':
      'We offer three focused categories of care designed to address varying levels of clinical, personal, and developmental needs.',
    'home.pillars.ltc.title': 'Long-Term Care (LTC)',
    'home.pillars.ltc.desc':
      'Support with daily activities, personal hygiene, light housekeeping, and companion care to help seniors and adults maintain independence safely at home.',
    'home.pillars.skilled.title': 'Skilled Home Health',
    'home.pillars.skilled.desc':
      'Professional clinical care prescribed by a physician, including Registered Nursing, Physical Therapy, Occupational Therapy, Speech Therapy, and Medical Social Work.',
    'home.pillars.pediatric.title': 'Pediatric Care',
    'home.pillars.pediatric.desc':
      'Compassionate home health aide assistance for children requiring attentive routine personal support in a secure, nurturing home setting.',

    'home.services.tag': 'Explore Our Services',
    'home.services.title': 'Personalized Care for Every Stage of Life',
    'home.services.viewAll': 'View All Services',

    'home.families.tag': 'Supporting Patients & Families',
    'home.families.title': 'Why In-Home Care Matters to Families',
    'home.families.card1.title': 'Comfort in Familiar Surroundings',
    'home.families.card1.desc':
      'Receiving care at home helps individuals recover faster, reduce hospital readmissions, and retain their daily routines surrounded by loved ones.',
    'home.families.card2.title': 'Personalized Care Plans',
    'home.families.card2.desc':
      'Every patient has unique goals and preferences. We work with physicians to tailor care schedules that adapt to changing health conditions.',
    'home.families.card3.title': 'Peace of Mind for Caregivers',
    'home.families.card3.desc':
      'Family caregivers often bear immense responsibility. Our respite and daily living assistance give families dependable relief and trusted partnership.',
    'home.families.card4.title': 'Bilingual Communication',
    'home.families.card4.desc':
      'Our bilingual team ensures clear, respectful, and compassionate communication in both English and Spanish for patients, families, and healthcare providers.',

    'home.coverage.tag': 'Communities We Serve',
    'home.coverage.title': 'Proudly Serving Four Central Florida Counties',
    'home.coverage.desc':
      'HeartBeat Home Health Care delivers trusted services across Hillsborough, Polk, Hardee, and Manatee counties. Explore our coverage to see how we can assist in your area.',
    'home.coverage.btn': 'Explore Coverage Areas',

    'home.insurance.tag': 'Accepted Insurance',
    'home.insurance.title': 'We Work With Leading Insurance Providers',
    'home.insurance.desc':
      'We accept Original Medicare, major Long-Term Care plans, and leading managed healthcare networks including Sunshine Health, Aetna, Simply Healthcare, UnitedHealthcare, and Molina Healthcare.',
    'home.insurance.btn': 'View Accepted Insurance Plans',

    'home.cta.title': 'Ready to Learn More About In-Home Care?',
    'home.cta.desc':
      'Our compassionate team is ready to answer questions, coordinate with physicians, and verify insurance benefits for you or your loved one.',
    'home.cta.btn': 'Contact Our Tampa Office',
    'home.cta.call': 'Call (813) 358-6688',

    // Footer
    'footer.about':
      'HeartBeat Home Health Care is a licensed Florida home health agency based in Tampa, dedicated to providing compassionate Long-Term Care and Skilled Home Health services.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contactInfo': 'Tampa Office Info',
    'footer.address': '829 W. Dr. Martin Luther King Jr. Blvd., Suite 230, Tampa, FL 33603',
    'footer.phone': 'Phone: (813) 358-6688',
    'footer.fax': 'Fax: (813) 448-1748',
    'footer.email': 'Email: heartbeathhc@gmail.com',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer':
      'HeartBeat Home Health Care complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex. Bilingual staff available.',

    // Common
    'common.learnMore': 'Learn More',
    'common.readMore': 'Read More',
    'common.getInTouch': 'Get in Touch',
    'common.viewDetails': 'View Details',
    'common.bilingualStaff': 'Bilingual Staff (English & Spanish)',
    'common.callToday': 'Call (813) 358-6688',
  },
  es: {
    // Top banner & Agency identity
    'banner.bilingual': 'Agencia Bilingüe · English & Español',
    'banner.phone': 'Llámenos: (813) 358-6688',
    'banner.hours': 'Horario de Oficina: 8:30 AM – 5:00 PM | Atención al Cliente: 24/7',
    'tagline': '...cuidar es nuestra pasión',
    'agency.name': 'HeartBeat Home Health Care',
    'agency.location': 'Tampa, Florida',

    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.services': 'Nuestros Servicios',
    'nav.insurance': 'Seguros Aceptados',
    'nav.coverage': 'Áreas de Cobertura',
    'nav.careers': 'Oportunidades',
    'nav.contact': 'Contáctenos',
    'nav.callNow': 'Llámenos',

    // Hero Section
    'hero.badge': 'Atención Médica en el Hogar en Tampa Bay',
    'hero.headline': 'Cuidado Que Nace del Corazón.',
    'hero.description':
      'HeartBeat Home Health Care brinda servicios de Cuidado a Largo Plazo (LTC) y Salud Especializada en el Hogar a individuos y familias en el área de Tampa Bay y comunidades circundantes.',
    'hero.primaryCta': 'Explorar Nuestros Servicios',
    'hero.secondaryCta': 'Contáctenos',
    'hero.trust1': 'Estándares de Acreditación ACHC',
    'hero.trust2': 'Servicio en 4 Condados de Florida',
    'hero.trust3': 'Equipo de Atención Bilingüe (EN/ES)',

    // Homepage Sections
    'home.welcome.tag': 'Bienvenidos a HeartBeat',
    'home.welcome.title': 'Cuidado Compasivo en el Hogar Diseñado para Usted',
    'home.welcome.p1':
      'En HeartBeat Home Health Care, creemos que la atención de mayor calidad ocurre donde usted se siente más seguro y cómodo: en su propio hogar. Con sede en Tampa, Florida, nuestros dedicados médicos, enfermeros, terapeutas y cuidadores colaboran estrechamente con pacientes, familias y médicos para brindar apoyo personalizado que respeta la dignidad, fomenta la independencia y nutre el bienestar.',
    'home.welcome.p2':
      'Ya sea que usted o un ser querido necesite asistencia para las actividades diarias, recuperación posterior a la hospitalización o terapia especializada, tratamos a cada paciente con el afecto, la dedicación y la excelencia clínica que merece.',

    'home.pillars.tag': 'Cuidado Diseñado Según Sus Necesidades',
    'home.pillars.title': 'Soluciones Integrales de Salud en el Hogar',
    'home.pillars.subtitle':
      'Ofrecemos tres categorías enfocadas de atención diseñadas para responder a diferentes niveles de necesidades clínicas, personales y de desarrollo.',
    'home.pillars.ltc.title': 'Cuidado a Largo Plazo (LTC)',
    'home.pillars.ltc.desc':
      'Apoyo en actividades cotidianas, aseo personal, tareas ligeras del hogar y acompañamiento para que los adultos mayores mantengan su independencia de forma segura en casa.',
    'home.pillars.skilled.title': 'Servicios Clínicos Especializados',
    'home.pillars.skilled.desc':
      'Atención profesional prescrita por un médico, incluyendo Enfermería Registrada, Fisioterapia, Terapia Ocupacional, Terapia del Habla y Trabajo Social Médico.',
    'home.pillars.pediatric.title': 'Servicios Pediátricos',
    'home.pillars.pediatric.desc':
      'Asistencia compasiva de asistentes de salud en el hogar (HHA) para niños que requieren apoyo en sus rutinas personales en un ambiente hogareño seguro y afectuoso.',

    'home.services.tag': 'Nuestros Servicios',
    'home.services.title': 'Atención Personalizada para Cada Etapa de la Vida',
    'home.services.viewAll': 'Ver Todos los Servicios',

    'home.families.tag': 'Apoyo a Pacientes y Familias',
    'home.families.title': 'Por Qué el Cuidado en el Hogar es Vital',
    'home.families.card1.title': 'Comodidad en un Entorno Familiar',
    'home.families.card1.desc':
      'Recibir atención en casa ayuda a los pacientes a recuperarse mejor, disminuir reingresos hospitalarios y mantener sus hábitos cotidianos junto a sus seres queridos.',
    'home.families.card2.title': 'Planes de Cuidado Personalizados',
    'home.families.card2.desc':
      'Cada persona tiene metas y preferencias únicas. Coordinamos con su médico para elaborar planes que se adapten continuamente a su estado de salud.',
    'home.families.card3.title': 'Tranquilidad para la Familia',
    'home.families.card3.desc':
      'Los cuidadores familiares llevan una gran carga. Nuestros servicios de relevo (respite) y asistencia diaria brindan un respiro seguro y un aliado de confianza.',
    'home.families.card4.title': 'Comunicación 100% Bilingüe',
    'home.families.card4.desc':
      'Nuestro personal bilingüe garantiza una comunicación clara, comprensiva y respetuosa en español e inglés para pacientes, familias y profesionales médicos.',

    'home.coverage.tag': 'Áreas de Cobertura',
    'home.coverage.title': 'Servimos con Orgullo Cuatro Condados de Florida Central',
    'home.coverage.desc':
      'HeartBeat Home Health Care brinda servicios confiables en los condados de Hillsborough, Polk, Hardee y Manatee. Conozca nuestras áreas de servicio.',
    'home.coverage.btn': 'Ver Áreas de Cobertura',

    'home.insurance.tag': 'Seguros Aceptados',
    'home.insurance.title': 'Trabajamos con las Principales Aseguradoras',
    'home.insurance.desc':
      'Aceptamos Medicare Libre (Original Medicare), programas de Cuidado a Largo Plazo y las principales redes de salud administrada incluyendo Sunshine Health, Aetna, Simply Healthcare, UnitedHealthcare y Molina Healthcare.',
    'home.insurance.btn': 'Ver Planes y Seguros Aceptados',

    'home.cta.title': '¿Listo para Conocer Más Sobre Nuestro Cuidado en el Hogar?',
    'home.cta.desc':
      'Nuestro equipo compasivo está a su disposición para resolver dudas, coordinar con sus médicos y verificar su cobertura de seguro.',
    'home.cta.btn': 'Contacte Nuestra Oficina de Tampa',
    'home.cta.call': 'Llamar al (813) 358-6688',

    // Footer
    'footer.about':
      'HeartBeat Home Health Care es una agencia de salud en el hogar autorizada en el Estado de Florida con sede en Tampa, dedicada a brindar servicios compasivos de Cuidado a Largo Plazo y Servicios Clínicos Especializados.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.contactInfo': 'Oficina en Tampa',
    'footer.address': '829 W. Dr. Martin Luther King Jr. Blvd., Suite 230, Tampa, FL 33603',
    'footer.phone': 'Teléfono: (813) 358-6688',
    'footer.fax': 'Fax: (813) 448-1748',
    'footer.email': 'Correo: heartbeathhc@gmail.com',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.disclaimer':
      'HeartBeat Home Health Care cumple con las leyes federales de derechos civiles aplicables y no discrimina por motivos de raza, color, nacionalidad, edad, discapacidad o sexo. Personal bilingüe disponible.',

    // Common
    'common.learnMore': 'Conocer Más',
    'common.readMore': 'Leer Más',
    'common.getInTouch': 'Contáctenos',
    'common.viewDetails': 'Ver Detalles',
    'common.bilingualStaff': 'Personal Bilingüe (Inglés y Español)',
    'common.callToday': 'Llamar al (813) 358-6688',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('heartbeat_lang');
    return saved === 'es' ? 'es' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('heartbeat_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
