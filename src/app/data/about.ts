export interface Skill {
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  iconName: 'Server' | 'Globe' | 'Database' | 'Cloud' | 'Code2';
}

export const skills: Skill[] = [
  {
    iconName: 'Server',
    titleKey: 'about.skills.backend.title',
    descriptionKey: 'about.skills.backend.description',
    technologies: ['Java', 'Spring Boot', 'Django', 'Python', 'Node.js']
  },
  {
    iconName: 'Globe',
    titleKey: 'about.skills.frontend.title',
    descriptionKey: 'about.skills.frontend.description',
    technologies: ['Next.js', 'React', 'Flutter', 'TypeScript', 'TailwindCSS']
  },
  {
    iconName: 'Database',
    titleKey: 'about.skills.database.title',
    descriptionKey: 'about.skills.database.description',
    technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'PL/SQL', 'DynamoDB', 'Supabase']
  },
  {
    iconName: 'Cloud',
    titleKey: 'about.skills.cloud.title',
    descriptionKey: 'about.skills.cloud.description',
    technologies: ['AWS', 'Azure', 'Docker', 'GitHub Actions']
  },
  {
    iconName: 'Code2',
    titleKey: 'about.skills.api.title',
    descriptionKey: 'about.skills.api.description',
    technologies: ['REST APIs', 'Swagger', 'Postman', 'JWT']
  }
];

export const softSkillsKeys = [
  'about.softSkills.teamwork',
  'about.softSkills.leadership',
  'about.softSkills.problemSolving',
  'about.softSkills.adaptability',
  'about.softSkills.communication'
];
