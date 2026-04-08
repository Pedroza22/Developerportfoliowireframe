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
            ? 'fill-brand-3 text-brand-3'
            : 'text-brand-1/20 dark:text-brand-5/20'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-5 dark:bg-brand-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-1 dark:text-brand-5 mb-4">
            Testimonios
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
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
              className="bg-white dark:bg-brand-1/50 rounded-2xl p-8 border border-brand-2/20 dark:border-brand-5/20 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-xl transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-brand-2 dark:text-brand-3 opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Message */}
              <p className="text-brand-1/80 dark:text-brand-5/80 mb-6 relative z-10 italic">
                "{testimonial.message}"
              </p>

              {/* Author Info */}
              <div className="border-t border-brand-2/20 dark:border-brand-5/20 pt-4">
                <h4 className="font-bold text-brand-1 dark:text-brand-5 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-brand-1/60 dark:text-brand-5/60">
                  {testimonial.role}
                </p>
                <p className="text-sm text-brand-2 dark:text-brand-3 font-medium">
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
          className="max-w-3xl mx-auto bg-white dark:bg-brand-1/50 rounded-2xl p-8 border border-brand-2/20 dark:border-brand-5/20 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-brand-1 dark:text-brand-5 mb-2">
              ¿Trabajamos juntos?
            </h3>
            <p className="text-brand-1/70 dark:text-brand-5/70">
              Me encantaría saber tu opinión. Deja tu testimonio aquí.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <div className="w-20 h-20 rounded-full bg-brand-2/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-brand-2" />
              </div>
              <h4 className="text-2xl font-bold text-brand-1 dark:text-brand-5 mb-2">
                ¡Gracias por tu testimonio!
              </h4>
              <p className="text-brand-1/70 dark:text-brand-5/70 text-center">
                Tu opinión ha sido publicada exitosamente.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-1 dark:text-brand-5 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-brand-5/50 dark:bg-brand-1/50 border border-brand-2/20 dark:border-brand-5/20 text-brand-1 dark:text-brand-5 focus:border-brand-2 dark:focus:border-brand-2 focus:ring-2 focus:ring-brand-2/20 transition-all outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-brand-1 dark:text-brand-5 mb-2">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-brand-5/50 dark:bg-brand-1/50 border border-brand-2/20 dark:border-brand-5/20 text-brand-1 dark:text-brand-5 focus:border-brand-2 dark:focus:border-brand-2 focus:ring-2 focus:ring-brand-2/20 transition-all outline-none"
                    placeholder="Ej: Project Manager"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-1 dark:text-brand-5 mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-brand-5/50 dark:bg-brand-1/50 border border-brand-2/20 dark:border-brand-5/20 text-brand-1 dark:text-brand-5 focus:border-brand-2 dark:focus:border-brand-2 focus:ring-2 focus:ring-brand-2/20 transition-all outline-none"
                  placeholder="Nombre de la empresa"
                />
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-brand-1 dark:text-brand-5 mb-2">
                  Calificación *
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-brand-5/50 dark:bg-brand-1/50 border border-brand-2/20 dark:border-brand-5/20 text-brand-1 dark:text-brand-5 focus:border-brand-2 dark:focus:border-brand-2 focus:ring-2 focus:ring-brand-2/20 transition-all outline-none appearance-none"
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} Estrellas
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-1 dark:text-brand-5 mb-2">
                  Tu Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-brand-5/50 dark:bg-brand-1/50 border border-brand-2/20 dark:border-brand-5/20 text-brand-1 dark:text-brand-5 focus:border-brand-2 dark:focus:border-brand-2 focus:ring-2 focus:ring-brand-2/20 transition-all outline-none resize-none"
                  placeholder="Comparte tu experiencia trabajando conmigo..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-2 to-brand-3 text-brand-5 font-bold hover:shadow-lg hover:shadow-brand-2/50 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Testimonio
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
