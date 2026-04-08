import { motion } from 'motion/react';
import { useState } from 'react';
import { Quote, Star, Send, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
  date: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: 'María González',
      role: 'Project Manager',
      company: 'Tech Solutions',
      message: 'Julián es un desarrollador excepcional. Su capacidad para resolver problemas complejos y su compromiso con la calidad del código son impresionantes. Trabajar con él ha sido una experiencia excelente.',
      rating: 5,
      date: '2025-03-15'
    },
    {
      id: 2,
      name: 'Carlos Ramírez',
      role: 'Tech Lead',
      company: 'Digital Innovations',
      message: 'Excelente profesional con gran dominio de tecnologías backend. Su proactividad y habilidad para aprender nuevas tecnologías lo hacen un colaborador invaluable en cualquier equipo.',
      rating: 5,
      date: '2025-02-20'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'CTO',
      company: 'StartupX',
      message: 'Julián entregó un proyecto complejo antes de tiempo y superó nuestras expectativas. Su atención al detalle y comunicación efectiva facilitaron toda la colaboración.',
      rating: 5,
      date: '2025-01-10'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    message: '',
    rating: 5
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTestimonial: Testimonial = {
      id: testimonials.length + 1,
      name: formData.name,
      role: formData.role,
      company: formData.company,
      message: formData.message,
      rating: formData.rating,
      date: new Date().toISOString().split('T')[0]
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', role: '', company: '', message: '', rating: 5 });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.name === 'rating' ? parseInt(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Testimonios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Lo que dicen las personas con las que he trabajado
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-8 border border-gray-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-600 dark:text-blue-400 opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Message */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                "{testimonial.message}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 dark:border-zinc-700 pt-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Testimonial Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl p-8 border border-gray-200 dark:border-zinc-700 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              ¿Trabajamos juntos?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Me encantaría saber tu opinión. Deja tu testimonio aquí.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ¡Gracias por tu testimonio!
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Tu opinión ha sido publicada exitosamente.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                    placeholder="Ej: Project Manager"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                  placeholder="Nombre de la empresa"
                />
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Calificación *
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ Excelente</option>
                  <option value={4}>⭐⭐⭐⭐ Muy Bueno</option>
                  <option value={3}>⭐⭐⭐ Bueno</option>
                  <option value={2}>⭐⭐ Regular</option>
                  <option value={1}>⭐ Necesita Mejorar</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Testimonio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
                  placeholder="Cuéntanos sobre tu experiencia trabajando con Julián..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <Send className="w-5 h-5" />
                Publicar Testimonio
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
