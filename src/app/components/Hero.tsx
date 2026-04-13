import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/875eebb2b9b7623c18a1e44a7502a7b918373026.png';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../config/constants';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-brand-5 dark:bg-brand-1 relative overflow-hidden">
      {/* Decorative background elements for more "illumination" */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-2/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-3/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-brand-4/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-brand-4/10 border border-brand-4/30 text-brand-4 text-sm font-bold backdrop-blur-md shadow-[0_0_15px_rgba(255,203,154,0.1)]">
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-1 dark:text-brand-5"
            >
              {t('hero.greeting')}
              <span className="bg-gradient-to-r from-brand-4 via-brand-5 to-brand-3 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(209,232,226,0.2)]">
                {t('hero.name')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-brand-1/90 dark:text-brand-5/90 max-w-2xl leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-3 to-brand-4 text-brand-1 font-black hover:shadow-[0_0_30px_rgba(217,176,140,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
              >
                {t('hero.viewProjects')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-xl border-2 border-brand-1/30 dark:border-brand-5/30 text-brand-1 dark:text-brand-5 font-bold hover:bg-brand-1/10 dark:hover:bg-brand-5/10 transition-all transform hover:-translate-y-1 active:scale-95 backdrop-blur-sm"
              >
                {t('hero.contactMe')}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-brand-1/5 dark:bg-brand-5/5 text-brand-1 dark:text-brand-5 hover:bg-brand-1/20 dark:hover:bg-brand-5/20 transition-all hover:scale-110 border border-brand-1/10 dark:border-brand-5/10 hover:border-brand-1/30 dark:hover:border-brand-5/30 shadow-lg"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-brand-1/5 dark:bg-brand-5/5 text-brand-1 dark:text-brand-5 hover:bg-brand-1/20 dark:hover:bg-brand-5/20 transition-all hover:scale-110 border border-brand-1/10 dark:border-brand-5/10 hover:border-brand-1/30 dark:hover:border-brand-5/30 shadow-lg"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-4 rounded-2xl bg-brand-1/5 dark:bg-brand-5/5 text-brand-1 dark:text-brand-5 hover:bg-brand-1/20 dark:hover:bg-brand-5/20 transition-all hover:scale-110 border border-brand-1/10 dark:border-brand-5/10 hover:border-brand-1/30 dark:hover:border-brand-5/30 shadow-lg"
                aria-label="Send Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-3 to-brand-4 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
              <img
                src={profileImage}
                alt="Julián Pedroza"
                className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] object-cover object-top border border-brand-5/20 group-hover:border-brand-4/50 transition-colors duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-brand-5/60 hover:text-brand-5 transition-colors"
          >
            <span className="text-sm font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
