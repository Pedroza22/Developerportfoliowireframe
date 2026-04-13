import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, Download, AlertCircle, Loader2 } from 'lucide-react';
import cvFile from '@/assets/Hoja de Vida Julian Pedroza O-7.pdf';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO, SOCIAL_LINKS } from '../config/constants';
import { contactService, type ContactFormData } from '../services/contactService';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const result = await contactService.sendMessage(formData);

    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setErrorMessage(result.message || t('contact.errorMsg'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      titleKey: 'contact.info.email',
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
      gradient: 'from-brand-2 to-brand-3'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      titleKey: 'contact.info.phone',
      value: CONTACT_INFO.phone,
      link: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
      gradient: 'from-brand-2 to-brand-3'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      titleKey: 'contact.info.location',
      value: CONTACT_INFO.location,
      gradient: 'from-brand-2 to-brand-3'
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
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-brand-1/5 dark:bg-brand-5/5 border border-brand-1/10 dark:border-brand-5/10 hover:border-brand-3 transition-colors group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient} text-brand-1 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-brand-1/60 dark:text-brand-5/60 font-medium">
                        {t(item.titleKey)}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-lg font-semibold text-brand-1 dark:text-brand-5 hover:text-brand-3 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-brand-1 dark:text-brand-5">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-6">
                {t('contact.social')}
              </h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-brand-1/5 dark:bg-brand-5/5 text-brand-1 dark:text-brand-5 hover:bg-brand-3 hover:text-brand-1 transition-all group border border-brand-1/10 dark:border-brand-5/10 shadow-lg"
                    title={social.name}
                    aria-label={`${t('nav.contact')} ${social.name}`}
                  >
                    {social.name === 'GitHub' ? <Github className="w-6 h-6" /> : <Linkedin className="w-6 h-6" />}
                  </a>
                ))}
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
                  download={CONTACT_INFO.cvFileName}
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

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-2/20 text-brand-2 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-1 dark:text-brand-5 mb-2">
                    {t('contact.success')}
                  </h4>
                  <p className="text-brand-1/70 dark:text-brand-5/70">
                    {t('contact.successMsg')}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-brand-1/80 dark:text-brand-5/80 ml-1">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.placeholder.name')}
                        className="w-full px-5 py-4 rounded-xl bg-white dark:bg-brand-1/50 border border-brand-1/10 dark:border-brand-5/10 focus:border-brand-2 dark:focus:border-brand-2 focus:ring-4 focus:ring-brand-2/10 transition-all outline-none text-brand-1 dark:text-brand-5"
                        aria-label={t('contact.name')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-brand-1/80 dark:text-brand-5/80 ml-1">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.placeholder.email')}
                        className="w-full px-5 py-4 rounded-xl bg-white dark:bg-brand-1/50 border border-brand-1/10 dark:border-brand-5/10 focus:border-brand-2 dark:focus:border-brand-2 focus:ring-4 focus:ring-brand-2/10 transition-all outline-none text-brand-1 dark:text-brand-5"
                        aria-label={t('contact.email')}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-brand-1/80 dark:text-brand-5/80 ml-1">
                      {t('contact.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('contact.placeholder.subject')}
                      className="w-full px-5 py-4 rounded-xl bg-white dark:bg-brand-1/50 border border-brand-1/10 dark:border-brand-5/10 focus:border-brand-2 dark:focus:border-brand-2 focus:ring-4 focus:ring-brand-2/10 transition-all outline-none text-brand-1 dark:text-brand-5"
                      aria-label={t('contact.subject')}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-brand-1/80 dark:text-brand-5/80 ml-1">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.placeholder.message')}
                      className="w-full px-5 py-4 rounded-xl bg-white dark:bg-brand-1/50 border border-brand-1/10 dark:border-brand-5/10 focus:border-brand-2 dark:focus:border-brand-2 focus:ring-4 focus:ring-brand-2/10 transition-all outline-none text-brand-1 dark:text-brand-5 resize-none"
                      aria-label={t('contact.message')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-5 rounded-xl bg-gradient-to-r from-brand-2 via-brand-3 to-brand-4 text-brand-1 font-black hover:shadow-[0_0_30px_rgba(217,176,140,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:transform-none disabled:hover:shadow-none flex items-center justify-center gap-3 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>{t('contact.sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>{t('contact.send')}</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
