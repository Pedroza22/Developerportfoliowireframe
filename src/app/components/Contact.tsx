import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, Download } from 'lucide-react';
import cvFile from '@/assets/Hoja de Vida Julian Pedroza O-7.pdf';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Principal',
      value: 'julianpedrozaospina@gmail.com',
      link: 'mailto:julianpedrozaospina@gmail.com',
      gradient: 'from-brand-2 to-brand-3'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      value: '+57 321 989 1112',
      link: 'tel:+573219891112',
      gradient: 'from-brand-2 to-brand-3'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      value: 'Pasto, Nariño, Colombia',
      gradient: 'from-brand-2 to-brand-3'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/Pedroza22',
      handle: '@Pedroza22'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/julian-pedrozaospina',
      handle: 'julian-pedrozaospina'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-5 dark:bg-brand-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-1 dark:text-brand-5 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-brand-1 dark:text-brand-5 mb-6">
                {t('contact.info')}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-brand-1/5 dark:bg-brand-5/5 border border-brand-1/10 dark:border-brand-5/10 hover:border-brand-3 transition-colors group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} text-brand-1 shadow-lg`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-brand-1/60 dark:text-brand-5/60 font-medium">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold text-brand-1 dark:text-brand-5 hover:text-brand-3 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-brand-1 dark:text-brand-5">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

              <div className="pt-8">
                <h4 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-6">
                  {t('contact.social')}
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-brand-1/5 dark:bg-brand-5/5 text-brand-1 dark:text-brand-5 hover:bg-brand-3 hover:text-brand-1 transition-all group border border-brand-1/10 dark:border-brand-5/10 shadow-lg"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CV Download Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-brand-2/10 to-brand-3/10 border border-brand-2/20 backdrop-blur-sm shadow-xl"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <h4 className="text-2xl font-bold text-brand-1 dark:text-brand-5 mb-2">
                    {t('contact.cvTitle')}
                  </h4>
                  <p className="text-brand-1/70 dark:text-brand-5/70">
                    {t('contact.cvSubtitle')}
                  </p>
                </div>
                <a
                  href={cvFile}
                  download="CV_Julian_Pedroza.pdf"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-2 via-brand-3 to-brand-4 text-brand-1 font-black hover:shadow-[0_0_30px_rgba(217,176,140,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  {t('contact.cvDownload')}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-1/5 dark:bg-brand-5/5 p-8 rounded-3xl border border-brand-1/10 dark:border-brand-5/10 backdrop-blur-sm shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-brand-1 dark:text-brand-5 mb-8">
              {t('contact.formTitle')}
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-brand-4/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12 text-brand-4" />
                </div>
                <h4 className="text-2xl font-bold text-brand-1 dark:text-brand-5 mb-2">
                  {t('contact.success')}
                </h4>
                <p className="text-brand-1/70 dark:text-brand-5/70">
                  {t('contact.successMsg')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-1 dark:text-brand-5">
                      {t('contact.name')}
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.placeholder.name')}
                      className="w-full px-4 py-3 rounded-xl bg-brand-1/10 dark:bg-brand-5/10 border border-brand-1/20 dark:border-brand-5/20 text-brand-1 dark:text-brand-5 placeholder:text-brand-1/40 dark:placeholder:text-brand-5/40 focus:outline-none focus:ring-2 focus:ring-brand-3/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-1 dark:text-brand-5">
                      {t('contact.email')}
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.placeholder.email')}
                      className="w-full px-4 py-3 rounded-xl bg-brand-1/10 dark:bg-brand-5/10 border border-brand-1/20 dark:border-brand-5/20 text-brand-1 dark:text-brand-5 placeholder:text-brand-1/40 dark:placeholder:text-brand-5/40 focus:outline-none focus:ring-2 focus:ring-brand-3/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-1 dark:text-brand-5">
                    {t('contact.subject')}
                  </label>
                  <input
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact.placeholder.subject')}
                    className="w-full px-4 py-3 rounded-xl bg-brand-1/10 dark:bg-brand-5/10 border border-brand-1/20 dark:border-brand-5/20 text-brand-1 dark:text-brand-5 placeholder:text-brand-1/40 dark:placeholder:text-brand-5/40 focus:outline-none focus:ring-2 focus:ring-brand-3/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-1 dark:text-brand-5">
                    {t('contact.message')}
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t('contact.placeholder.message')}
                    className="w-full px-4 py-3 rounded-xl bg-brand-1/10 dark:bg-brand-5/10 border border-brand-1/20 dark:border-brand-5/20 text-brand-1 dark:text-brand-5 placeholder:text-brand-1/40 dark:placeholder:text-brand-5/40 focus:outline-none focus:ring-2 focus:ring-brand-3/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-2 via-brand-3 to-brand-4 text-brand-1 font-black shadow-lg hover:shadow-[0_0_30px_rgba(217,176,140,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {t('contact.send')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
