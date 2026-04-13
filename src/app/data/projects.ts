export interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  technologies: string[];
  category: 'Full Stack' | 'Backend' | 'Frontend';
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featuresKeys: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    titleKey: 'projects.u2group.title',
    descriptionKey: 'projects.u2group.description',
    longDescriptionKey: 'projects.u2group.longDescription',
    technologies: ['Next.js', 'Django REST', 'PostgreSQL', 'Google Maps API', 'JWT', 'TailwindCSS'],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    liveUrl: 'https://www.u2.group',
    featuresKeys: [
      'projects.u2group.features.0',
      'projects.u2group.features.1',
      'projects.u2group.features.2',
      'projects.u2group.features.3',
      'projects.u2group.features.4',
      'projects.u2group.features.5',
      'projects.u2group.features.6',
      'projects.u2group.features.7',
      'projects.u2group.features.8'
    ]
  },
  {
    id: 2,
    titleKey: 'projects.soat.title',
    descriptionKey: 'projects.soat.description',
    longDescriptionKey: 'projects.soat.longDescription',
    technologies: ['Java', 'Spring Boot', 'Microservicios', 'AWS', 'PostgreSQL', 'Docker'],
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=800&auto=format&fit=crop',
    featuresKeys: [
      'projects.soat.features.0',
      'projects.soat.features.1',
      'projects.soat.features.2',
      'projects.soat.features.3',
      'projects.soat.features.4',
      'projects.soat.features.5',
      'projects.soat.features.6',
      'projects.soat.features.7'
    ]
  },
  {
    id: 3,
    titleKey: 'projects.orchestration.title',
    descriptionKey: 'projects.orchestration.description',
    longDescriptionKey: 'projects.orchestration.longDescription',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Azure', 'Docker'],
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop',
    featuresKeys: [
      'projects.orchestration.features.0',
      'projects.orchestration.features.1',
      'projects.orchestration.features.2',
      'projects.orchestration.features.3',
      'projects.orchestration.features.4',
      'projects.orchestration.features.5',
      'projects.orchestration.features.6',
      'projects.orchestration.features.7'
    ]
  },
  {
    id: 4,
    titleKey: 'projects.allies.title',
    descriptionKey: 'projects.allies.description',
    longDescriptionKey: 'projects.allies.longDescription',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'REST APIs'],
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
    featuresKeys: [
      'projects.allies.features.0',
      'projects.allies.features.1',
      'projects.allies.features.2',
      'projects.allies.features.3',
      'projects.allies.features.4',
      'projects.allies.features.5',
      'projects.allies.features.6',
      'projects.allies.features.7'
    ]
  },
  {
    id: 5,
    titleKey: 'projects.parish.title',
    descriptionKey: 'projects.parish.description',
    longDescriptionKey: 'projects.parish.longDescription',
    technologies: ['SQL', 'MySQL', 'Excel', 'VBA', 'Python'],
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=800&auto=format&fit=crop',
    featuresKeys: [
      'projects.parish.features.0',
      'projects.parish.features.1',
      'projects.parish.features.2',
      'projects.parish.features.3',
      'projects.parish.features.4',
      'projects.parish.features.5',
      'projects.parish.features.6',
      'projects.parish.features.7'
    ]
  }
];
