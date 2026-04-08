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
    <footer className="bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Julián Pedroza Ospina
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
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
                  className="p-3 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:julianpedrozaospina@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  julianpedrozaospina@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+573219891112"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +57 321 989 1112
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Pasto, Nariño, Colombia
              </li>
              <li className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                Disponible para trabajo remoto
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-zinc-800 gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Julián Pedroza Ospina. Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>y código</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Volver arriba</span>
          </button>
        </div>
      </div>
    </footer>
  );
}