import { motion } from 'motion/react';
import { useState } from 'react';
import { Github, ExternalLink, Code2, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'U2.Group - Plataforma de Arquitectura con Marketplace',
      description: 'Plataforma web integral con marketplace, dashboard administrativo y sistema de cotizaciones',
      longDescription: 'Desarrollo completo de una aplicación web moderna para arquitectura con Next.js y Django REST Framework. La plataforma incluye un marketplace completo, sistema de gestión de proyectos, calculadora de precios inteligente y panel administrativo robusto.',
      technologies: ['Next.js', 'Django REST', 'PostgreSQL', 'Google Maps API', 'JWT', 'TailwindCSS'],
      category: 'Full Stack',
      image: 'architecture-platform',
      liveUrl: 'https://www.u2.group',
      features: [
        'Desarrollo de aplicación web en Next.js con integración de Django REST Framework',
        'Implementación de dashboard administrativo para gestión de proyectos, blogs y opciones de diseño',
        'Marketplace de arquitectura con calculadora de precios y facturación automática',
        'Generación automática de cotizaciones en PDF',
        'Sistema de envío de cotizaciones por correo electrónico',
        'Integración de Google Maps API para visualización de proyectos en ubicaciones reales',
        'Autenticación segura con JWT (JSON Web Tokens) para acceso al panel administrativo',
        'Sistema de gestión de contenido (CMS) personalizado',
        'Responsive design optimizado para todos los dispositivos'
      ]
    },
    {
      id: 2,
      title: 'SOAT Mundial - Microservicios de Seguros Digitales',
      description: 'Desarrollo y despliegue de microservicios para plataforma de seguros digitales',
      longDescription: 'Participación en el desarrollo de microservicios backend para la plataforma de seguros digitales SOAT Mundial en Pragma S.A. Despliegue exitoso de tres microservicios en producción con alta disponibilidad.',
      technologies: ['Java', 'Spring Boot', 'Microservicios', 'AWS', 'PostgreSQL', 'Docker'],
      category: 'Backend',
      image: 'insurance-microservices',
      features: [
        'Desarrollo de componentes backend para orquestación de servicios',
        'Implementación de arquitectura de microservicios escalable',
        'Integración con servicios de terceros',
        'Pruebas unitarias y de integración',
        'Despliegue en ambientes cloud (AWS)',
        'Optimización de consultas y performance',
        'Colaboración con equipos de QA y arquitectura',
        'Despliegue exitoso de tres microservicios en producción'
      ]
    },
    {
      id: 3,
      title: 'Sistema de Orquestación de Servicios',
      description: 'Backend para orquestación de servicios empresariales con Spring Boot',
      longDescription: 'Desarrollo de componentes backend robustos para la orquestación de servicios empresariales. Sistema diseñado para alta disponibilidad y escalabilidad.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Azure', 'Docker'],
      category: 'Backend',
      image: 'service-orchestration',
      features: [
        'Desarrollo de APIs RESTful con Spring Boot',
        'Implementación de patrones de diseño empresariales',
        'Orquestación de múltiples servicios backend',
        'Manejo de transacciones distribuidas',
        'Implementación de circuit breakers y retry patterns',
        'Documentación con Swagger/OpenAPI',
        'Pruebas unitarias con JUnit y Mockito',
        'Despliegue en Azure con CI/CD'
      ]
    },
    {
      id: 4,
      title: 'Aplicativos Internos - Área de Aliados',
      description: 'Estabilización y mejora de aplicaciones internas empresariales',
      longDescription: 'Mantenimiento, estabilización y mejora de aplicativos internos críticos para el área de aliados en Pragma S.A. Optimización de código legacy y modernización de componentes.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'REST APIs'],
      category: 'Backend',
      image: 'internal-apps',
      features: [
        'Estabilización de aplicaciones en producción',
        'Refactorización de código legacy',
        'Optimización de consultas de base de datos',
        'Corrección de bugs críticos',
        'Implementación de nuevas funcionalidades',
        'Mejora de la documentación técnica',
        'Soporte a equipos de desarrollo',
        'Despliegue continuo con GitHub Actions'
      ]
    },
    {
      id: 5,
      title: 'Sistema de Gestión Parroquial',
      description: 'Digitalización de registros históricos y sistema de gestión de bases de datos',
      longDescription: 'Desarrollo de sistema para digitalización y gestión de registros históricos de la Parroquia. Incluye base de datos, sistema de respaldo y herramientas de búsqueda.',
      technologies: ['SQL', 'MySQL', 'Excel', 'VBA', 'Python'],
      category: 'Backend',
      image: 'parish-system',
      features: [
        'Diseño e implementación de base de datos',
        'Digitalización de registros históricos',
        'Sistema de búsqueda y consulta de registros',
        'Respaldo automático de información',
        'Generación de reportes personalizados',
        'Capacitación a personal administrativo',
        'Interfaz amigable para usuarios no técnicos',
        'Sistema de auditoría de cambios'
      ]
    }
  ];

  const categories = ['all', 'Full Stack', 'Backend'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Globe className="w-4 h-4" />;
      case 'Backend':
        return <Code2 className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-5 dark:bg-brand-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-1 dark:text-brand-5 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            Experiencia real en proyectos de producción y desarrollo empresarial
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-brand-2 to-brand-3 text-brand-5 shadow-lg'
                  : 'bg-white dark:bg-zinc-800 text-brand-1 dark:text-brand-5 hover:bg-brand-5 dark:hover:bg-brand-1 border border-brand-2/20 dark:border-brand-5/20'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white dark:bg-brand-1/50 rounded-2xl overflow-hidden border border-brand-2/20 dark:border-brand-5/20 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-2xl transition-all"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-brand-2 to-brand-3 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-brand-5/30" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-5/90 dark:bg-brand-1/90 text-sm font-medium text-brand-1 dark:text-brand-5">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-2 group-hover:text-brand-2 dark:group-hover:text-brand-2 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-brand-1/70 dark:text-brand-5/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-brand-5 dark:bg-brand-1 text-brand-2 dark:text-brand-3 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 rounded-lg bg-brand-5 dark:bg-brand-1 text-brand-2 dark:text-brand-3 text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-brand-1/60 dark:text-brand-5/60 hover:text-brand-2 dark:hover:text-brand-2 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-brand-1/60 dark:text-brand-5/60 hover:text-brand-2 dark:hover:text-brand-2 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Ver sitio</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-1/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-brand-1 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-brand-2/20 dark:border-brand-5/20"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-brand-2 to-brand-3 p-8 text-brand-5">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-brand-5/20 hover:bg-brand-5/30 transition-colors"
              >
                <ExternalLink className="w-5 h-5 rotate-45" />
              </button>
              <h3 className="text-3xl font-bold mb-2 pr-12">{selectedProject.title}</h3>
              <p className="text-brand-5/90">{selectedProject.description}</p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-3">
                  Descripción del Proyecto
                </h4>
                <p className="text-brand-1/80 dark:text-brand-5/80 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-3">
                  Características y Logros
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-brand-1/80 dark:text-brand-5/80"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-3">
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-brand-5/50 to-brand-4/50 dark:from-brand-1/50 dark:to-brand-2/50 text-brand-1 dark:text-brand-5 font-medium border border-brand-2/20 dark:border-brand-5/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                <div className="flex gap-4 pt-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-1 dark:bg-brand-5 text-brand-5 dark:text-brand-1 font-medium hover:opacity-90 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Ver en GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-2 to-brand-3 text-brand-5 font-medium hover:shadow-lg transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Ver sitio
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
