export const CONTACT_INFO = {
  email: 'julianpedrozaospina@gmail.com',
  phone: '+57 321 989 1112',
  location: 'Pasto, Nariño, Colombia',
  github: 'https://github.com/Pedroza22',
  linkedin: 'https://linkedin.com/in/julian-pedrozaospina',
  cvFileName: 'CV_Julian_Pedroza.pdf'
};

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: CONTACT_INFO.github,
    handle: '@Pedroza22'
  },
  {
    name: 'LinkedIn',
    url: CONTACT_INFO.linkedin,
    handle: 'julian-pedrozaospina'
  }
];

export const APP_CONFIG = {
  theme: {
    default: 'dark' as const,
  },
  language: {
    default: 'es' as const,
    available: ['es', 'en', 'pt', 'ja'] as const,
  },
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
    contactEndpoint: '/contact/',
  }
};
