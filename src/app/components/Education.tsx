import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar, Cpu, Globe2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { education, certifications, languages } from '../data/education';

export function Education() {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-8 h-8 text-brand-2" />;
      case 'Globe2': return <Globe2 className="w-8 h-8 text-brand-2" />;
      default: return <GraduationCap className="w-8 h-8" />;
    }
  };

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
            {t('education.title')}
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            {t('education.subtitle')}
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
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-2 to-brand-3 flex items-center justify-center text-brand-5 shadow-lg">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-1 dark:text-brand-5 mb-1">
                        {t(edu.degreeKey)}
                      </h3>
                      <div className="flex items-center gap-2 text-brand-2 dark:text-brand-3 font-semibold">
                        <Award className="w-4 h-4" />
                        <span>{t(edu.institutionKey)}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-1 mt-2 lg:mt-0">
                      <div className="flex items-center gap-2 text-brand-1/60 dark:text-brand-5/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{t(edu.periodKey)}</span>
                      </div>
                      <span className="text-sm text-brand-1/50 dark:text-brand-5/50">
                        {t(edu.locationKey)}
                      </span>
                    </div>
                  </div>

                  <p className="text-brand-1/80 dark:text-brand-5/80 mb-4">
                    {t(edu.descriptionKey)}
                  </p>

                  <div>
                    <h4 className="font-semibold text-brand-1 dark:text-brand-5 mb-2">
                      {t('education.highlights.title')}
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {edu.highlightsKeys.map((key, i) => (
                        <li key={i} className="flex items-start gap-2 text-brand-1/70 dark:text-brand-5/70 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-2 flex-shrink-0"></span>
                          <span>{t(key)}</span>
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
                {t('education.certifications.title')}
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
                    <div className="flex-shrink-0">{getIcon(cert.iconName)}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-brand-1 dark:text-brand-5 mb-1">
                        {t(cert.titleKey)}
                      </h4>
                      <p className="text-sm text-brand-1/60 dark:text-brand-5/60 mb-2">
                        {t(cert.issuerKey)}
                      </p>
                      <p className="text-sm text-brand-1/80 dark:text-brand-5/80 mb-2">
                        {t(cert.descriptionKey)}
                      </p>
                      <span className="inline-block px-3 py-1 rounded-lg bg-brand-5 dark:bg-brand-1 text-brand-2 dark:text-brand-3 text-xs font-medium">
                        {t(cert.yearKey)}
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
              <Globe2 className="w-8 h-8 text-brand-2 dark:text-brand-3" />
              <h3 className="text-3xl font-bold text-brand-1 dark:text-brand-5">
                {t('education.languages.title')}
              </h3>
            </div>
            <div className="bg-white dark:bg-brand-1/50 p-8 rounded-2xl border border-brand-2/20 dark:border-brand-5/20 hover:shadow-xl transition-all h-full">
              <div className="space-y-8">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-brand-1 dark:text-brand-5 text-lg">
                        {t(lang.languageKey)}
                      </span>
                      <span className="text-brand-2 dark:text-brand-3 font-semibold">
                        {t(lang.levelKey)}
                      </span>
                    </div>
                    <div className="h-3 w-full bg-brand-1/10 dark:bg-brand-5/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-brand-2 to-brand-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
