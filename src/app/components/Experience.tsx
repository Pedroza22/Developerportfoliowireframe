import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Auxiliar de Desarrollo',
      company: 'Pragma S.A.',
      period: 'Octubre 2022 - Febrero 2025',
      location: 'Colombia',
      description: 'Desarrollo de soluciones backend para sistemas empresariales y proyectos de seguros digitales.',
      achievements: [
        'Desarrollo de componentes backend para orquestación de servicios en Java y Spring Boot',
        'Implementación de pruebas unitarias y optimización de código para mejorar el rendimiento',
        'Despliegue de aplicaciones en ambientes cloud con AWS y Azure',
        'Investigación de soluciones técnicas para mejorar procesos de desarrollo',
        'Estabilización, despliegue y mejora de aplicativos internos en el área de aliados',
        'Participación en proyectos de seguros digitales (SOAT Mundial): despliegue exitoso de tres microservicios en producción',
        'Colaboración efectiva con equipos de testing, QA y arquitectura'
      ],
      technologies: ['Java', 'Spring Boot', 'AWS', 'Azure', 'Microservicios', 'REST APIs']
    },
    {
      title: 'Técnico en Mantenimiento',
      company: 'SYSTECOL',
      period: 'Octubre 2022 - Diciembre 2023',
      location: 'Colombia',
      description: 'Soporte técnico integral y mantenimiento de infraestructura tecnológica.',
      achievements: [
        'Diagnóstico y reparación de equipos de cómputo',
        'Mantenimiento preventivo y correctivo de hardware y software',
        'Instalación y configuración de sistemas operativos',
        'Soporte técnico presencial y remoto para usuarios finales',
        'Gestión de inventario de equipos tecnológicos'
      ],
      technologies: ['Windows', 'Linux', 'Hardware', 'Redes', 'Soporte Técnico']
    },
    {
      title: 'Prácticas - Técnico en Sistemas',
      company: 'Parroquia Ntra. Sra. del Rosario de Chiquinquirá',
      period: 'Abril 2018 - Septiembre 2019',
      location: 'Colombia',
      description: 'Soporte técnico y digitalización de registros institucionales.',
      achievements: [
        'Soporte técnico a usuarios y equipos de cómputo',
        'Manejo y administración de bases de datos',
        'Digitalización de registros históricos de la parroquia',
        'Implementación de sistemas de respaldo de información',
        'Capacitación a personal en uso de herramientas ofimáticas'
      ],
      technologies: ['Bases de Datos', 'Excel', 'Office', 'SQL', 'Digitalización']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Más de 2 años de experiencia en desarrollo de software y soporte técnico
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {/* Experiences */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-2xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Responsabilidades y Logros:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-zinc-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
                  {index + 1}
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
