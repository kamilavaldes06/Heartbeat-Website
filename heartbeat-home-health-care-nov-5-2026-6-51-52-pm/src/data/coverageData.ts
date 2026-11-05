export interface CountyInfo {
  id: string;
  name: {
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
  keyCommunities: string[];
  headquartersNearby: boolean;
}

export const coverageCounties: CountyInfo[] = [
  {
    id: 'hillsborough',
    name: {
      en: 'Hillsborough County',
      es: 'Condado de Hillsborough',
    },
    subtitle: {
      en: 'Home of HeartBeat Agency Headquarters in Tampa',
      es: 'Sede principal de HeartBeat en Tampa',
    },
    description: {
      en: 'Our primary headquarters is located in Tampa, offering rapid coordination and skilled healthcare staffing throughout Hillsborough County from urban Tampa to suburban communities and coastal regions.',
      es: 'Nuestra sede central está ubicada en Tampa, permitiendo una rápida coordinación y asignación de personal calificado en todo el condado de Hillsborough, desde el centro urbano hasta áreas suburbanas y costeras.',
    },
    headquartersNearby: true,
    keyCommunities: [
      'Tampa',
      'Brandon',
      'Riverview',
      'Valrico',
      'Seffner',
      'Temple Terrace',
      'Lutz',
      'Plant City',
      'Dover',
      'Apollo Beach',
      'Ruskin',
      'Sun City Center',
      'Wimauma',
      'Carrollwood',
      'New Tampa',
    ],
  },
  {
    id: 'polk',
    name: {
      en: 'Polk County',
      es: 'Condado de Polk',
    },
    subtitle: {
      en: 'Central Florida Corridor & Surrounding Cities',
      es: 'Corredor de Florida Central y ciudades vecinas',
    },
    description: {
      en: 'Serving communities across Central Florida with trusted long-term care aides, physical therapists, and skilled nurses helping residents live independently and comfortably at home.',
      es: 'Atendiendo a comunidades de Florida Central con asistentes de cuidado a largo plazo, fisioterapeutas y enfermeros dedicados a fomentar la autonomía en el hogar.',
    },
    headquartersNearby: false,
    keyCommunities: [
      'Lakeland',
      'Winter Haven',
      'Auburndale',
      'Bartow',
      'Mulberry',
      'Haines City',
      'Davenport',
      'Lake Wales',
    ],
  },
  {
    id: 'hardee',
    name: {
      en: 'Hardee County',
      es: 'Condado de Hardee',
    },
    subtitle: {
      en: 'Heartland Communities & Rural Care Access',
      es: 'Comunidades del interior y atención residencial',
    },
    description: {
      en: 'Dedicated to bringing high-standard, dependable in-home healthcare services to Hardee County families who value compassionate, personalized attention close to home.',
      es: 'Comprometidos con llevar servicios de salud en el hogar de primer nivel a las familias del condado de Hardee que valoran una atención compasiva y cercana.',
    },
    headquartersNearby: false,
    keyCommunities: [
      'Wauchula',
      'Zolfo Springs',
      'Bowling Green',
    ],
  },
  {
    id: 'manatee',
    name: {
      en: 'Manatee County',
      es: 'Condado de Manatee',
    },
    subtitle: {
      en: 'Gulf Coast & Southwest Central Florida',
      es: 'Costa del Golfo y suroeste de Florida Central',
    },
    description: {
      en: 'Delivering comprehensive home health and companion care across Manatee County, assisting older adults, recovering patients, and families across coastal and inland neighborhoods.',
      es: 'Proporcionando atención médica y acompañamiento integral en el condado de Manatee para adultos mayores y pacientes en recuperación.',
    },
    headquartersNearby: false,
    keyCommunities: [
      'Bradenton',
      'Palmetto',
      'Ellenton',
      'Parrish',
      'Lakewood Ranch',
    ],
  },
];
