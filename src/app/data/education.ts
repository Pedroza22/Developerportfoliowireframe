export interface EducationItem {
  degreeKey: string;
  institutionKey: string;
  periodKey: string;
  locationKey: string;
  descriptionKey: string;
  highlightsKeys: string[];
}

export interface Certification {
  titleKey: string;
  issuerKey: string;
  yearKey: string;
  iconName: 'Cpu' | 'Globe2';
  descriptionKey: string;
}

export interface LanguageProficiency {
  languageKey: string;
  levelKey: string;
  proficiency: number;
}

export const education: EducationItem[] = [
  {
    degreeKey: 'education.degree.software',
    institutionKey: 'education.institution.ucc',
    periodKey: 'education.period.software',
    locationKey: 'common.colombia',
    descriptionKey: 'education.description.software',
    highlightsKeys: [
      'education.highlights.software.0',
      'education.highlights.software.1',
      'education.highlights.software.2',
      'education.highlights.software.3'
    ]
  },
  {
    degreeKey: 'education.degree.technologist',
    institutionKey: 'education.institution.sena',
    periodKey: 'education.period.technologist',
    locationKey: 'common.colombia',
    descriptionKey: 'education.description.technologist',
    highlightsKeys: [
      'education.highlights.technologist.0',
      'education.highlights.technologist.1',
      'education.highlights.technologist.2',
      'education.highlights.technologist.3'
    ]
  },
  {
    degreeKey: 'education.degree.technician',
    institutionKey: 'education.institution.sena',
    periodKey: 'education.period.technician',
    locationKey: 'common.colombia',
    descriptionKey: 'education.description.technician',
    highlightsKeys: [
      'education.highlights.technician.0',
      'education.highlights.technician.1',
      'education.highlights.technician.2',
      'education.highlights.technician.3'
    ]
  }
];

export const certifications: Certification[] = [
  {
    titleKey: 'education.cert.ml.title',
    issuerKey: 'education.cert.ml.issuer',
    yearKey: 'education.cert.ml.year',
    iconName: 'Cpu',
    descriptionKey: 'education.cert.ml.description'
  },
  {
    titleKey: 'education.cert.english.title',
    issuerKey: 'education.cert.english.issuer',
    yearKey: 'education.cert.english.year',
    iconName: 'Globe2',
    descriptionKey: 'education.cert.english.description'
  }
];

export const languages: LanguageProficiency[] = [
  { languageKey: 'education.lang.spanish.name', levelKey: 'education.lang.spanish.level', proficiency: 100 },
  { languageKey: 'education.lang.english.name', levelKey: 'education.lang.english.level', proficiency: 60 }
];
