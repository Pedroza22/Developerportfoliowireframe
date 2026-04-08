import { motion } from 'motion/react';
import { Code2, Database, Server, Globe, Cloud } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Java, Spring Boot, Django, Python, Node.js',
      technologies: ['Java', 'Spring Boot', 'Django', 'Node.js']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Frontend',
      description: 'Next.js, React, Flutter, TypeScript, TailwindCSS',
      technologies: ['Next.js', 'React', 'Flutter', 'TypeScript']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Bases de Datos',
      description: 'PostgreSQL, MySQL, SQL Server, Redis, PL/SQL, DynamoDB, Supabase',
      technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, Docker, GitHub Actions',
      technologies: ['AWS', 'Azure', 'Docker', 'CI/CD']
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Desarrollador de software con enfoque en soluciones escalables, seguras y de alto rendimiento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Soy un desarrollador de software con más de 2 años de experiencia en el diseño e implementación 
                de aplicaciones backend y frontend. Me especializo en crear soluciones escalables, seguras y de 
                alto rendimiento utilizando tecnologías modernas.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Mi experiencia incluye el desarrollo de componentes backend para orquestación de servicios con 
                Java y Spring Boot, implementación de pruebas unitarias, optimización de código y despliegue en 
                ambientes cloud. He participado en proyectos de seguros digitales logrando el despliegue exitoso 
                de microservicios en producción.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Soy proactivo, con mentalidad de aprendizaje continuo, fuerte capacidad de resolución de problemas 
                y orientación a resultados. Me apasiona colaborar con equipos multidisciplinarios y contribuir a 
                proyectos innovadores.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 p-8 rounded-2xl border border-gray-200 dark:border-zinc-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Stack Tecnológico
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'Django', 'Python', 'Node.js'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'Flutter', 'TypeScript', 'TailwindCSS'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Bases de Datos</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'PL/SQL', 'DynamoDB', 'Supabase'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud & DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Azure', 'Docker', 'GitHub Actions'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">APIs & Otros</h4>
                  <div className="flex flex-wrap gap-2">
                    {['REST APIs', 'Swagger', 'Postman', 'JWT'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 border border-gray-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Habilidades Blandas</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              'Trabajo en equipo',
              'Liderazgo',
              'Resolución de problemas',
              'Adaptabilidad',
              'Comunicación efectiva'
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-center"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}