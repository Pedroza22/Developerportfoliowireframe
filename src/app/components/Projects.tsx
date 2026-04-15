import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Github, ExternalLink, Code2, Globe, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { projects, type Project } from '../data/projects';

export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Full Stack', 'Backend', 'Frontend'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p: Project) => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Globe className="w-4 h-4" />;
      case 'Backend':
        return <Code2 className="w-4 h-4" />;
      case 'Frontend':
        return <Code2 className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-5 dark:bg-brand-1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-1 dark:text-brand-5 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-brand-1/70 dark:text-brand-5/70 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-brand-2 via-brand-3 to-brand-4 text-brand-1 shadow-lg'
                  : 'bg-brand-1/5 dark:bg-brand-5/5 text-brand-1 dark:text-brand-5 hover:bg-brand-2/10 dark:hover:bg-brand-5/10 border border-brand-1/10 dark:border-brand-5/10'
              }`}
            >
              {category === 'all' ? t('projects.filter.all') : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-brand-1/5 dark:bg-brand-5/5 rounded-2xl overflow-hidden border border-brand-1/10 dark:border-brand-5/10 hover:border-brand-2 dark:hover:border-brand-2 hover:shadow-2xl transition-all"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-1/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-brand-5 font-bold flex items-center gap-2">
                    {t('common.viewDetails')} <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  {project.status === 'production' && (
                    <span className="px-3 py-1 rounded-lg bg-green-500/90 text-sm font-medium text-white shadow-lg backdrop-blur-md">
                      {t('common.productive')}
                    </span>
                  )}
                  <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-5/90 dark:bg-brand-1/90 text-sm font-medium text-brand-1 dark:text-brand-5 shadow-lg">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-2 group-hover:text-brand-2 dark:group-hover:text-brand-2 transition-colors line-clamp-2">
                  {t(project.titleKey)}
                </h3>
                <p className="text-brand-1/70 dark:text-brand-5/70 mb-4 line-clamp-2">
                  {t(project.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-brand-5 dark:bg-brand-1 text-brand-2 dark:text-brand-3 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 rounded-lg bg-brand-5 dark:bg-brand-1 text-brand-2 dark:text-brand-3 text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-brand-1/60 dark:text-brand-5/60 hover:text-brand-2 dark:hover:text-brand-2 transition-colors"
                      aria-label={t('common.viewCode')}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-brand-1/60 dark:text-brand-5/60 hover:text-brand-2 dark:hover:text-brand-2 transition-colors"
                      aria-label={t('common.viewLive')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">{t('common.viewSite')}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-1/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-brand-1 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-brand-2/20 dark:border-brand-5/20 relative"
            >
              <div className="sticky top-0 z-10 bg-gradient-to-r from-brand-2 to-brand-3 p-8 text-brand-5">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-brand-5/20 hover:bg-brand-5/30 transition-colors text-brand-5"
                  aria-label={t('common.close')}
                >
                  <X className="w-6 h-6" />
                </button>
                <h3 className="text-3xl font-bold mb-2 pr-12">{t(selectedProject.titleKey)}</h3>
                <p className="text-brand-5/90">{t(selectedProject.descriptionKey)}</p>
              </div>

              <div className="p-8 space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-3">
                    {t('projects.detail.description')}
                  </h4>
                  <p className="text-brand-1/80 dark:text-brand-5/80 leading-relaxed text-lg">
                    {t(selectedProject.longDescriptionKey)}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-brand-1 dark:text-brand-5 mb-4">
                    {t('projects.detail.features')}
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.featuresKeys.map((key, i) => (
                      <li key={i} className="flex items-start gap-3 text-brand-1/70 dark:text-brand-5/70">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-2 flex-shrink-0" />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-brand-1/10 dark:border-brand-5/10 flex flex-wrap justify-between items-center gap-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 rounded-full bg-brand-1/5 dark:bg-brand-5/5 text-brand-1 dark:text-brand-5 text-sm font-medium border border-brand-1/10 dark:border-brand-5/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-1 text-brand-5 hover:bg-brand-1/90 transition-all shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                        <span className="font-bold">GitHub</span>
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-2 to-brand-3 text-brand-1 hover:shadow-xl transition-all shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="font-black">{t('common.viewLive')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
