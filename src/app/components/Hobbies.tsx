import { motion } from 'motion/react';
import { Music, Gamepad2, Plane, Camera, Book, Dumbbell, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { hobbies, interestKeys } from '../data/hobbies';

export function Hobbies() {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-8 h-8" />;
      case 'Music': return <Music className="w-8 h-8" />;
      case 'Gamepad2': return <Gamepad2 className="w-8 h-8" />;
      case 'Plane': return <Plane className="w-8 h-8" />;
      case 'Camera': return <Camera className="w-8 h-8" />;
      case 'Book': return <Book className="w-8 h-8" />;
      case 'Dumbbell': return <Dumbbell className="w-8 h-8" />;
      default: return <Gamepad2 className="w-8 h-8" />;
    }
  };

  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-5 dark:bg-brand-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-1 dark:text-brand-5 mb-4">
            {t('hobbies.title')}
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            {t('hobbies.subtitle')}
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-brand-1/50 rounded-2xl overflow-hidden border border-brand-2/20 dark:border-brand-5/20 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-2xl transition-all"
            >
              <div className="h-2 bg-gradient-to-r from-brand-2 to-brand-3"></div>
              <div className="p-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-brand-2 to-brand-3 text-brand-5 mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(hobby.iconName)}
                </div>
                <h3 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-2">
                  {t(hobby.titleKey)}
                </h3>
                <p className="text-brand-1/70 dark:text-brand-5/70">
                  {t(hobby.descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-5/50 to-brand-4/50 dark:from-brand-1 dark:to-brand-2 rounded-2xl p-8 border border-brand-2/20 dark:border-brand-5/20"
        >
          <h3 className="text-3xl font-bold text-brand-1 dark:text-brand-5 mb-6 text-center">
            {t('hobbies.interests.title')}
          </h3>
          <p className="text-center text-brand-1/70 dark:text-brand-5/70 mb-8 max-w-3xl mx-auto">
            {t('hobbies.interests.subtitle')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {interestKeys.map((key, index) => (
              <motion.span
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-5 py-3 rounded-xl bg-white dark:bg-brand-1 text-brand-1 dark:text-brand-5 font-medium border border-brand-2/20 dark:border-brand-5/20 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-lg transition-all cursor-default"
              >
                {t(key)}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-brand-2 to-brand-3 p-8 rounded-2xl text-brand-5 shadow-2xl">
            <p className="text-2xl font-semibold italic mb-4">
              {t('hobbies.philosophy.quote')}
            </p>
            <p className="text-brand-5/90">
              {t('hobbies.philosophy.text')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
