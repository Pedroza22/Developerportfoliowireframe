import { motion } from 'motion/react';
import { Music, Gamepad2, Plane, Camera, Book, Dumbbell } from 'lucide-react';

export function Hobbies() {
  const hobbies = [
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
      title: 'Fotografía',
      description: 'Capturar momentos y paisajes únicos',
      icon: <Camera className="w-8 h-8" />
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
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hobbies e Intereses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
              className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {hobby.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
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
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-8 border border-gray-200 dark:border-zinc-700"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Áreas de Interés Tecnológico
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
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
                className="px-5 py-3 rounded-xl bg-white dark:bg-zinc-700 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-zinc-600 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all cursor-default"
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white shadow-2xl">
            <p className="text-2xl font-semibold italic mb-4">
              "El aprendizaje continuo y la pasión por la tecnología son las claves para crear soluciones innovadoras"
            </p>
            <p className="text-white/90">
              Creo firmemente en el equilibrio entre trabajo y vida personal. Mis hobbies me ayudan a mantener 
              la creatividad y el enfoque necesarios para enfrentar desafíos técnicos complejos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}