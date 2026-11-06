export type Language = 'en' | 'es';

export interface ServiceItem {
  id: string;
  name: {
    en: string;
    es: string;
  };
  abbreviation?: string;
  category: 'ltc' | 'skilled' | 'pediatric';
  description: {
    en: string;
    es: string;
  };
  details: {
    en: string[];
    es: string[];
  };
  iconName: string;
}

export interface InsuranceCategory {
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  providers: {
    name: string;
    note?: {
      en: string;
      es: string;
    };
  }[];
}

export interface CountyCoverage {
  id: string;
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  seat: string;
  communities: string[];
}
