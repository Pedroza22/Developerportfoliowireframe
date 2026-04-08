import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
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
    { label: 'Sobre Mí', id: 'about' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Experiencia', id: 'experience' },
    { label: 'Educación', id: 'education' },
    { label: 'Testimonios', id: 'testimonials' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Pedroza22',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/julian-pedrozaospina',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:julianpedrozaospina@gmail.com',
      label: 'Email'
    }
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
              Desarrollador Backend | Tecnólogo en Análisis y Desarrollo de Sistemas de Información.
              Más de 2 años de experiencia creando soluciones escalables y de alto rendimiento.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-brand-2/10 text-brand-2 hover:bg-gradient-to-r hover:from-brand-2 hover:to-brand-3 hover:text-brand-5 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-brand-1 dark:text-brand-5 mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-brand-1/60 dark:text-brand-5/60 hover:text-brand-2 dark:hover:text-brand-3 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-brand-1 dark:text-brand-5 mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:julianpedrozaospina@gmail.com"
                  className="text-brand-1/60 dark:text-brand-5/60 hover:text-brand-2 dark:hover:text-brand-3 transition-colors"
                >
                  julianpedrozaospina@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+573219891112"
                  className="text-brand-1/60 dark:text-brand-5/60 hover:text-brand-2 dark:hover:text-brand-3 transition-colors"
                >
                  +57 321 989 1112
                </a>
              </li>
              <li className="text-brand-1/60 dark:text-brand-5/60">
                Pasto, Nariño, Colombia
              </li>
              <li className="text-brand-1/40 dark:text-brand-5/40 text-xs mt-2">
                Disponible para trabajo remoto
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-2/20 dark:border-brand-5/20 gap-4">
          <div className="flex items-center gap-2 text-brand-1/60 dark:text-brand-5/60 text-sm">
            <span>© {new Date().getFullYear()} Julián Pedroza Ospina. Hecho con</span>
            <Heart className="w-4 h-4 text-brand-3 fill-brand-3" />
            <span>y código</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-2 to-brand-3 text-brand-5 hover:shadow-lg transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Volver arriba</span>
          </button>
        </div>
      </div>
    </footer>
  );
}