import u2groupImg from '../../assets/u2group.png';
import avicolaImg from '../../assets/avicola.png';
import mapaColombiaImg from '../../assets/calidad.png';
import catalogoImg from '../../assets/catalogo.png';
import mercadoLibreImg from '../../assets/mercadolibre.png';

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
    image: u2groupImg,
    liveUrl: 'https://www.u2.group',
    githubUrl: 'https://github.com/Pedroza22/U2GroupWeb.git',
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
    id: 6,
    titleKey: 'projects.avicola.title',
    descriptionKey: 'projects.avicola.description',
    longDescriptionKey: 'projects.avicola.longDescription',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
    category: 'Frontend',
    image: avicolaImg,
    liveUrl: 'https://v0-sistema-de-control-de-pollos.vercel.app/',
    githubUrl: 'https://github.com/Pedroza22/AvicolaFront.git',
    featuresKeys: [
      'projects.avicola.features.0',
      'projects.avicola.features.1',
      'projects.avicola.features.2'
    ]
  },
  {
    id: 7,
    titleKey: 'projects.mapacolombia.title',
    descriptionKey: 'projects.mapacolombia.description',
    longDescriptionKey: 'projects.mapacolombia.longDescription',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    category: 'Frontend',
    image: mapaColombiaImg,
    liveUrl: 'https://calidad-proyectofinal-kl4t13eef-pedrozas-projects-eb4039d0.vercel.app/mapa-colombia',
    githubUrl: 'https://github.com/Pedroza22/CalidadProyectofinal.git',
    featuresKeys: [
      'projects.mapacolombia.features.0',
      'projects.mapacolombia.features.1',
      'projects.mapacolombia.features.2'
    ]
  },
  {
    id: 8,
    titleKey: 'projects.catalogo.title',
    descriptionKey: 'projects.catalogo.description',
    longDescriptionKey: 'projects.catalogo.longDescription',
    technologies: ['React', 'Next.js', 'TailwindCSS'],
    category: 'Frontend',
    image: catalogoImg,
    liveUrl: 'https://catalogo-one-eosin.vercel.app/',
    githubUrl: 'https://github.com/Pedroza22/Catalogo.git',
    featuresKeys: [
      'projects.catalogo.features.0',
      'projects.catalogo.features.1',
      'projects.catalogo.features.2'
    ]
  },
  {
    id: 9,
    titleKey: 'projects.mercadolibre.title',
    descriptionKey: 'projects.mercadolibre.description',
    longDescriptionKey: 'projects.mercadolibre.longDescription',
    technologies: ['React', 'Next.js', 'TailwindCSS'],
    category: 'Frontend',
    image: mercadoLibreImg,
    liveUrl: 'https://mercadolibre-three.vercel.app/',
    githubUrl: 'https://github.com/Pedroza22/Mercadolibre.git',
    featuresKeys: [
      'projects.mercadolibre.features.0',
      'projects.mercadolibre.features.1',
      'projects.mercadolibre.features.2'
    ]
  }
];
