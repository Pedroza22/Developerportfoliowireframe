import { motion } from 'motion/react';
import { Code2, Database, Server, Globe, Cloud } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { skills, softSkillsKeys } from '../data/about';

export function About() {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server className="w-8 h-8" />;
      case 'Globe': return <Globe className="w-8 h-8" />;
      case 'Database': return <Database className="w-8 h-8" />;
      case 'Cloud': return <Cloud className="w-8 h-8" />;
      case 'Code2': return <Code2 className="w-8 h-8" />;
      default: return <Code2 className="w-8 h-8" />;
    }
  };

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
            {t('about.title')}
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            {t('about.subtitle')}
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
                {t('about.description.p1')}
              </p>
              <p className="text-lg text-brand-1/80 dark:text-brand-5/80 leading-relaxed">
                {t('about.description.p2')}
              </p>
              <p className="text-lg text-brand-1/80 dark:text-brand-5/80 leading-relaxed">
                {t('about.description.p3')}
              </p>
              <p className="text-lg text-brand-1/80 dark:text-brand-5/80 leading-relaxed">
                {t('about.description.p4')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-brand-1/5 dark:bg-brand-5/5 border border-brand-1/10 dark:border-brand-5/10 hover:border-brand-2 dark:hover:border-brand-2 transition-all hover:shadow-xl"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-brand-2 to-brand-3 text-brand-1 mb-4 w-fit group-hover:scale-110 transition-transform">
                {getIcon(skill.iconName)}
              </div>
              <h3 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-2">
                {t(skill.titleKey)}
              </h3>
              <p className="text-brand-1/60 dark:text-brand-5/60 text-sm leading-relaxed mb-4">
                {t(skill.descriptionKey)}
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
            <h3 className="text-2xl font-bold mb-6 text-center">{t('about.softSkills.title')}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {softSkillsKeys.map((key) => (
                <div
                  key={key}
                  className="flex items-center justify-center px-4 py-3 rounded-xl bg-brand-5/10 backdrop-blur-sm text-center"
                >
                  <span className="font-medium">{t(key)}</span>
                </div>
              ))}
            </div>
          </motion.div>
      </div>
    </section>
  );
}
