import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar, Languages, Cpu, Globe2 } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Ingeniería de Software',
      institution: 'Universidad Cooperativa de Colombia',
      period: '2024 - En curso',
      location: 'Colombia',
      description: 'Profundización en desarrollo de software, arquitectura de sistemas y metodologías ágiles.',
      highlights: [
        'Enfoque en desarrollo de software empresarial',
        'Aprendizaje de arquitecturas escalables y patrones de diseño',
        'Participación en proyectos prácticos reales',
        'Colaboración con IBM en proyectos académicos'
      ],
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      degree: 'Tecnólogo Análisis y Desarrollo de Sistemas de Información',
      institution: 'Servicio Nacional de Aprendizaje SENA',
      period: '2020 - 2022',
      location: 'Colombia',
      description: 'Formación técnica integral en análisis, diseño y desarrollo de sistemas de información.',
      highlights: [
        'Desarrollo de aplicaciones web y móviles',
        'Análisis y diseño de bases de datos',
        'Metodologías ágiles de desarrollo',
        'Proyectos formativos con empresas reales'
      ],
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      degree: 'Técnico en Sistemas',
      institution: 'Servicio Nacional de Aprendizaje SENA',
      period: '2017 - 2019',
      location: 'Colombia',
      description: 'Formación técnica en mantenimiento de equipos, redes y soporte técnico.',
      highlights: [
        'Mantenimiento de hardware y software',
        'Configuración de redes',
        'Soporte técnico a usuarios',
        'Instalación de sistemas operativos'
      ],
      icon: <GraduationCap className="w-8 h-8" />
    }
  ];

  const certifications = [
    {
      title: 'Machine Learning aplicado a sostenibilidad',
      issuer: 'Universidad Cooperativa de Colombia e IBM',
      year: '2024',
      icon: <Cpu className="w-8 h-8 text-brand-2" />,
      description: 'Ejemplos prácticos en sostenibilidad y uso general de ML'
    },
    {
      title: 'Inglés - Nivel B1 Intermedio',
      issuer: 'Centro de Idiomas - Universidad de Nariño',
      year: '2024 - En curso',
      icon: <Globe2 className="w-8 h-8 text-brand-2" />,
      description: 'Inglés intermedio para comunicación técnica'
    }
  ];

  const languages = [
    { language: 'Español', level: 'Nativo', proficiency: 100 },
    { language: 'Inglés', level: 'Intermedio (B1)', proficiency: 60 }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-5 dark:bg-brand-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-1 dark:text-brand-5 mb-4">
            Educación y Formación
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            Mi trayectoria académica y certificaciones profesionales
          </p>
        </motion.div>

        {/* Formal Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-brand-1/50 rounded-2xl p-8 border border-brand-2/20 dark:border-brand-5/20 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-2 to-brand-3 flex items-center justify-center text-brand-5 shadow-lg">
                    {edu.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-1 dark:text-brand-5 mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-brand-2 dark:text-brand-3 font-semibold">
                        <Award className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-1 mt-2 lg:mt-0">
                      <div className="flex items-center gap-2 text-brand-1/60 dark:text-brand-5/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <span className="text-sm text-brand-1/50 dark:text-brand-5/50">
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-brand-1/80 dark:text-brand-5/80 mb-4">
                    {edu.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-brand-1 dark:text-brand-5 mb-2">
                      Destacados:
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-brand-1/70 dark:text-brand-5/70 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Languages Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-brand-2 dark:text-brand-3" />
              <h3 className="text-3xl font-bold text-brand-1 dark:text-brand-5">
                Cursos y Certificaciones
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-brand-1/50 p-6 rounded-2xl border border-brand-2/20 dark:border-brand-5/20 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-brand-1 dark:text-brand-5 mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-brand-1/60 dark:text-brand-5/60 mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-brand-1/80 dark:text-brand-5/80 mb-2">
                        {cert.description}
                      </p>
                      <span className="inline-block px-3 py-1 rounded-lg bg-brand-5 dark:bg-brand-1 text-brand-2 dark:text-brand-3 text-xs font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-8 h-8 text-brand-2 dark:text-brand-3" />
              <h3 className="text-3xl font-bold text-brand-1 dark:text-brand-5">
                Idiomas
              </h3>
            </div>
            <div className="bg-white dark:bg-brand-1/50 p-8 rounded-2xl border border-brand-2/20 dark:border-brand-5/20 h-[calc(100%-4rem)]">
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-4 bg-gradient-to-br from-brand-5/50 to-brand-4/50 dark:from-brand-1 dark:to-brand-2 rounded-xl border border-brand-2/20 dark:border-brand-5/20"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-brand-1 dark:text-brand-5 text-lg">
                        {lang.language}
                      </h4>
                      <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-brand-2 to-brand-3 text-brand-5 text-sm font-medium">
                        {lang.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-br from-brand-5/50 to-brand-4/50 dark:from-brand-1 dark:to-brand-2 rounded-xl border border-brand-2/20 dark:border-brand-5/20">
                <p className="text-sm text-brand-1/70 dark:text-brand-5/70">
                  Actualmente estudiando inglés en el Centro de Idiomas de la Universidad de Nariño 
                  para mejorar habilidades de comunicación técnica internacional.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}