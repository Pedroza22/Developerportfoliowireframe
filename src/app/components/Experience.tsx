import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { experiences } from '../data/experience';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-5 dark:bg-brand-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-1 dark:text-brand-5 mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-brand-2 to-brand-3 z-0 opacity-30"></div>

          {/* Experiences */}
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center relative z-10 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full relative z-10">
                  <div className="bg-white dark:bg-brand-1/50 p-8 rounded-2xl border border-brand-2/20 dark:border-brand-5/20 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-xl transition-all backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-brand-1 dark:text-brand-5 mb-1">
                          {t(exp.titleKey)}
                        </h3>
                        <div className="flex items-center gap-2 text-brand-2 dark:text-brand-3 font-semibold">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2 text-brand-1/60 dark:text-brand-5/60 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{t(exp.periodKey)}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-brand-1/50 dark:text-brand-5/50">
                          <MapPin className="w-3 h-3" />
                          <span>{t(exp.locationKey)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-brand-1/80 dark:text-brand-5/80 mb-4">
                      {t(exp.descriptionKey)}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-brand-1 dark:text-brand-5 mb-2">
                        {t('experience.responsibilities')}
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievementsKeys.map((key, i) => (
                          <li key={i} className="flex items-start gap-2 text-brand-1/70 dark:text-brand-5/70 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-2 flex-shrink-0"></span>
                            <span>{t(key)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-brand-5 dark:bg-brand-1 text-brand-2 dark:text-brand-3 text-xs font-medium border border-brand-2/20 dark:border-brand-5/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-r from-brand-3 to-brand-4 items-center justify-center text-brand-1 font-black shadow-[0_0_20px_rgba(217,176,140,0.3)] flex-shrink-0 relative z-30 border-4 border-brand-1">
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
