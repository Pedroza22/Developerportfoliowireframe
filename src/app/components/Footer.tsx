import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, SOCIAL_LINKS } from '../config/constants';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { labelKey: 'nav.about', id: 'about' },
    { labelKey: 'nav.projects', id: 'projects' },
    { labelKey: 'nav.experience', id: 'experience' },
    { labelKey: 'nav.education', id: 'education' },
    { labelKey: 'nav.contact', id: 'contact' }
  ];

  return (
    <footer className="bg-brand-5 dark:bg-brand-1 border-t border-brand-2/20 dark:border-brand-5/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-brand-2 to-brand-3 bg-clip-text text-transparent mb-4">
              Julián Pedroza Ospina
            </div>
            <p className="text-brand-1/70 dark:text-brand-5/70 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-brand-2/10 text-brand-2 hover:bg-gradient-to-r hover:from-brand-2 hover:to-brand-3 hover:text-brand-5 transition-all"
                  aria-label={social.name}
                >
                  {social.name === 'GitHub' ? <Github className="w-5 h-5" /> : <Linkedin className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-brand-1 dark:text-brand-5 mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-brand-1/60 dark:text-brand-5/60 hover:text-brand-2 dark:hover:text-brand-3 transition-colors"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-brand-1 dark:text-brand-5 mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-brand-1/60 dark:text-brand-5/60 hover:text-brand-2 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="text-brand-1/60 dark:text-brand-5/60">
                {CONTACT_INFO.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-1/10 dark:border-brand-5/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-1/50 dark:text-brand-5/50 text-sm">
            © {new Date().getFullYear()} Julián Pedroza. {t('footer.allRights')}
          </p>
          <div className="flex items-center gap-2 text-brand-1/50 dark:text-brand-5/50 text-sm">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t('footer.by')} Julián</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-brand-1/5 dark:bg-brand-5/5 text-brand-1 dark:text-brand-5 hover:bg-brand-2 hover:text-brand-5 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
