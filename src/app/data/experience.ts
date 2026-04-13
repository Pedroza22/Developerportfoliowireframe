export interface Experience {
  titleKey: string;
  company: string;
  periodKey: string;
  locationKey: string;
  descriptionKey: string;
  achievementsKeys: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    titleKey: 'experience.pragma.title',
    company: 'Pragma S.A.',
    periodKey: 'experience.pragma.period',
    locationKey: 'common.colombia',
    descriptionKey: 'experience.pragma.description',
    achievementsKeys: [
      'experience.pragma.achievements.0',
      'experience.pragma.achievements.1',
      'experience.pragma.achievements.2',
      'experience.pragma.achievements.3',
      'experience.pragma.achievements.4',
      'experience.pragma.achievements.5',
      'experience.pragma.achievements.6'
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'Azure', 'Microservicios', 'REST APIs']
  },
  {
    titleKey: 'experience.systecol.title',
    company: 'SYSTECOL',
    periodKey: 'experience.systecol.period',
    locationKey: 'common.colombia',
    descriptionKey: 'experience.systecol.description',
    achievementsKeys: [
      'experience.systecol.achievements.0',
      'experience.systecol.achievements.1',
      'experience.systecol.achievements.2',
      'experience.systecol.achievements.3',
      'experience.systecol.achievements.4'
    ],
    technologies: ['Windows', 'Linux', 'Hardware', 'Redes', 'Soporte Técnico']
  },
  {
    titleKey: 'experience.parish.title',
    company: 'Parroquia Ntra. Sra. del Rosario de Chiquinquirá',
    periodKey: 'experience.parish.period',
    locationKey: 'common.colombia',
    descriptionKey: 'experience.parish.description',
    achievementsKeys: [
      'experience.parish.achievements.0',
      'experience.parish.achievements.1',
      'experience.parish.achievements.2',
      'experience.parish.achievements.3',
      'experience.parish.achievements.4'
    ],
    technologies: ['Bases de Datos', 'Excel', 'Office', 'SQL', 'Digitalización']
  }
];
