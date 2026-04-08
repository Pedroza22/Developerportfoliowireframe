import { motion } from 'motion/react';
import { Music, Gamepad2, Plane, Camera, Book, Dumbbell, UtensilsCrossed } from 'lucide-react';

export function Hobbies() {
  const hobbies = [
    {
      title: 'Gastronomía Tolimense',
      description: 'Fanático de la lechona, el tamal y los bizcochos de mi tierra',
      icon: <UtensilsCrossed className="w-8 h-8" />
    },
    {
      title: 'Música',
      description: 'Tocar guitarra y descubrir nuevos géneros musicales',
      icon: <Music className="w-8 h-8" />
    },
    {
      title: 'Gaming',
      description: 'Juegos de estrategia y exploración de mundos virtuales',
      icon: <Gamepad2 className="w-8 h-8" />
    },
    {
      title: 'Viajes',
      description: 'Explorar nuevas culturas y lugares',
      icon: <Plane className="w-8 h-8" />
    },
    {
      title: 'Lectura',
      description: 'Libros de tecnología, ciencia ficción y desarrollo personal',
      icon: <Book className="w-8 h-8" />
    },
    {
      title: 'Fitness',
      description: 'Mantener un estilo de vida activo y saludable',
      icon: <Dumbbell className="w-8 h-8" />
    }
  ];

  const interests = [
    'Inteligencia Artificial',
    'Machine Learning',
    'Cloud Computing',
    'DevOps',
    'Blockchain',
    'Ciberseguridad',
    'Arquitectura de Software',
    'Open Source',
    'UI/UX Design',
    'Startups Tech',
    'Automatización',
    'Edge Computing'
  ];

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
            Hobbies e Intereses
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            Más allá del código: mis pasiones y áreas de interés
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-brand-1/50 rounded-2xl overflow-hidden border border-brand-2/20 dark:border-brand-5/20 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-2xl transition-all"
            >
              <div className="h-2 bg-gradient-to-r from-brand-2 to-brand-3"></div>
              <div className="p-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-brand-2 to-brand-3 text-brand-5 mb-4 group-hover:scale-110 transition-transform">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-2">
                  {hobby.title}
                </h3>
                <p className="text-brand-1/70 dark:text-brand-5/70">
                  {hobby.description}
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
            Áreas de Interés Tecnológico
          </h3>
          <p className="text-center text-brand-1/70 dark:text-brand-5/70 mb-8 max-w-3xl mx-auto">
            Constantemente aprendiendo y manteniéndome actualizado en las últimas tecnologías y tendencias
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {interests.map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-5 py-3 rounded-xl bg-white dark:bg-brand-1 text-brand-1 dark:text-brand-5 font-medium border border-brand-2/20 dark:border-brand-5/20 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-lg transition-all cursor-default"
              >
                {interest}
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
              "El aprendizaje continuo y la pasión por la tecnología son las claves para crear soluciones innovadoras"
            </p>
            <p className="text-brand-5/90">
              Creo firmemente en el equilibrio entre trabajo y vida personal. Mis hobbies me ayudan a mantener 
              la creatividad y el enfoque necesarios para enfrentar desafíos técnicos complejos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}