import { motion } from 'motion/react';
import { Code2, Database, Server, Globe, Cloud } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Java, Spring Boot, Django, Python, Node.js',
      technologies: ['Java', 'Spring Boot', 'Django', 'Python', 'Node.js']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Frontend',
      description: 'Next.js, React, Flutter, TypeScript, TailwindCSS',
      technologies: ['Next.js', 'React', 'Flutter', 'TypeScript', 'TailwindCSS']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Bases de Datos',
      description: 'PostgreSQL, MySQL, SQL Server, Redis, PL/SQL, DynamoDB, Supabase',
      technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'Redis', 'PL/SQL', 'DynamoDB', 'Supabase']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, Docker, GitHub Actions',
      technologies: ['AWS', 'Azure', 'Docker', 'GitHub Actions']
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'APIs & Otros',
      description: 'REST APIs, Swagger, Postman, JWT',
      technologies: ['REST APIs', 'Swagger', 'Postman', 'JWT']
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-5 dark:bg-brand-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-1 dark:text-brand-5 mb-4">
            Sobre Mí
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            Desarrollador de software con enfoque en soluciones escalables, seguras y de alto rendimiento
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert max-w-none text-center">
              <p className="text-lg text-brand-1/80 dark:text-brand-5/80 leading-relaxed">
                Soy un desarrollador de software con más de 2 años de experiencia en el diseño e implementación 
                de aplicaciones backend y frontend. Me especializo en crear soluciones escalables, seguras y de 
                alto rendimiento utilizando tecnologías modernas.
              </p>
              <p className="text-lg text-brand-1/80 dark:text-brand-5/80 leading-relaxed">
                Mi experiencia incluye el desarrollo de componentes backend para orquestación de servicios con 
                Java y Spring Boot, implementación de pruebas unitarias, optimización de código y despliegue en 
                ambientes cloud. He participado en proyectos de seguros digitales logrando el despliegue exitoso 
                de microservicios en producción.
              </p>
              <p className="text-lg text-brand-1/80 dark:text-brand-5/80 leading-relaxed">
                Orgullosamente tolimense y apasionado por mi tierra. Más allá del código, soy un fanático 
                incansable de la gastronomía de mi región; nada supera una buena lechona, un tamal auténtico 
                o unos bizcochos tradicionales. Esta conexión con mis raíces me motiva a trabajar con la 
                misma dedicación y esmero que caracteriza a nuestra gente.
              </p>
              <p className="text-lg text-brand-1/80 dark:text-brand-5/80 leading-relaxed">
                Soy proactivo, con mentalidad de aprendizaje continuo, fuerte capacidad de resolución de problemas 
                y orientación a resultados. Me apasiona colaborar con equipos multidisciplinarios y contribuir a 
                proyectos innovadores.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-brand-1/5 dark:bg-brand-5/5 border border-brand-1/10 dark:border-brand-5/10 hover:border-brand-2 dark:hover:border-brand-2 transition-all hover:shadow-xl"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-brand-2 to-brand-3 text-brand-1 mb-4 w-fit group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-2">
                {skill.title}
              </h3>
              <p className="text-brand-1/60 dark:text-brand-5/60 text-sm leading-relaxed mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-brand-2/10 dark:bg-brand-4/10 text-brand-2 dark:text-brand-4 text-xs font-medium"
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
            className="mt-16 bg-gradient-to-r from-brand-2 to-brand-3 p-8 rounded-2xl text-brand-5"
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
                  className="flex items-center justify-center px-4 py-3 rounded-xl bg-brand-5/10 backdrop-blur-sm text-center"
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