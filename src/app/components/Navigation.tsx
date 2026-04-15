import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage, Language } from '../context/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.education'), id: 'education' },
    { label: t('nav.hobbies'), id: 'hobbies' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-5/80 dark:bg-brand-1/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-black bg-gradient-to-r from-brand-2 via-brand-1 to-brand-2 dark:from-brand-5 dark:via-brand-4 dark:to-brand-5 bg-clip-text text-transparent hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(209,232,226,0.3)]"
          >
            JP
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brand-1 dark:text-brand-5 hover:bg-brand-2/10 dark:hover:bg-brand-2/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 rounded-lg text-brand-1 dark:text-brand-5 hover:bg-brand-2/10 dark:hover:bg-brand-2/10 transition-colors flex items-center gap-1"
                aria-label="Change language"
              >
                <Languages className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{language}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl bg-brand-5 dark:bg-brand-1 border border-brand-2/20 dark:border-brand-5/20 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 transition-colors ${
                        language === lang.code
                          ? 'bg-brand-3 text-brand-1 font-bold'
                          : 'text-brand-1 dark:text-brand-5 hover:bg-brand-2/10 dark:hover:bg-brand-2/10'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="ml-1 p-2 rounded-lg text-brand-1 dark:text-brand-5 hover:bg-brand-2/10 dark:hover:bg-brand-2/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => {
                const currentIndex = languages.findIndex(l => l.code === language);
                const nextIndex = (currentIndex + 1) % languages.length;
                setLanguage(languages[nextIndex].code);
              }}
              className="p-2 rounded-lg text-brand-1 dark:text-brand-5 flex items-center gap-1"
              aria-label={`Change language, current: ${language}`}
            >
              <Languages className="w-5 h-5" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-brand-1 dark:text-brand-5"
              aria-label={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-1 dark:text-brand-5"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-5 dark:bg-brand-1 border-t border-brand-2/20 dark:border-brand-5/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-xl text-brand-1 dark:text-brand-5 hover:bg-brand-2/10 dark:hover:bg-brand-2/10 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}