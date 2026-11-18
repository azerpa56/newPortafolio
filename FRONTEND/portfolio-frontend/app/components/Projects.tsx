"use client";
import { motion } from 'motion/react';
import { ExternalLink, Github, UtensilsCrossed, Sparkles, LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  title: string;
  description: string;
  /** Logo real del proyecto (en /public/projects) */
  logo?: string;
  /** Fondo detrás del logo (por defecto blanco) */
  logoBg?: string;
  /** Si no hay logo: ícono y degradado para una tarjeta con el nombre */
  Icon?: LucideIcon;
  gradient?: string;
  tags: string[];
  github: string | null;
  demo: string;
}

export function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: t('projects.sinotruk.title'),
      description: t('projects.sinotruk.description'),
      logo: '/projects/sinotruk-picks.webp',
      logoBg: 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950',
      tags: ['Next.js', 'Vercel', 'Landing page'],
      github: null,
      demo: 'https://agencia-vehicular-navy.vercel.app/',
    },
    {
      title: t('projects.sat.title'),
      description: t('projects.sat.description'),
      Icon: UtensilsCrossed,
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      tags: ['Next.js', 'Spring Boot', 'TypeScript'],
      github: null,
      demo: 'https://sat.servergorazer.uk',
    },
    {
      title: t('projects.sav.title'),
      description: t('projects.sav.description'),
      logo: '/projects/sav.webp',
      tags: ['Next.js', 'Spring Boot', 'TypeScript'],
      github: null,
      demo: 'https://sav.servergorazer.uk/',
    },
    {
      title: t('projects.gorazerShop.title'),
      description: t('projects.gorazerShop.description'),
      logo: '/projects/gorazer.webp',
      tags: ['Next.js', 'Tailwind CSS', 'E-commerce'],
      github: null,
      demo: 'https://gorazer.servergorazer.uk/',
    },
    {
      title: t('projects.gorazerDev.title'),
      description: t('projects.gorazerDev.description'),
      logo: '/projects/gorazer.webp',
      tags: ['Next.js', 'Vercel', 'Portfolio'],
      github: null,
      demo: 'https://gorazer.tech/',
    },
    {
      title: t('projects.lulu.title'),
      description: t('projects.lulu.description'),
      Icon: Sparkles,
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
      tags: ['Next.js', 'Spring Boot', 'Gemini AI'],
      github: null,
      demo: 'https://lulu.servergorazer.uk/',
    },
    {
      title: t('projects.finanzas.title'),
      description: t('projects.finanzas.description'),
      logo: '/projects/finanzas.webp',
      tags: ['Next.js', 'TypeScript', 'Finanzas'],
      github: null,
      demo: 'https://finanzas.front.servergorazer.uk',
    },
    {
      title: t('projects.teampilot.title'),
      description: t('projects.teampilot.description'),
      logo: '/projects/teampilot.webp',
      tags: ['React', 'Vite', 'TypeScript', 'shadcn/ui'],
      github: null,
      demo: 'https://team-pilot.servergorazer.uk/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white">
            {t('projects.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="relative h-48 overflow-hidden">
                    {project.logo ? (
                      <div className={`w-full h-full ${project.logoBg ?? 'bg-white'} flex items-center justify-center p-8 border-b border-gray-200 dark:border-gray-700`}>
                        <img
                          src={project.logo}
                          alt={`Logo de ${project.title}`}
                          loading="lazy"
                          decoding="async"
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-3 text-white`}
                      >
                        {project.Icon && (
                          <project.Icon className="w-14 h-14 group-hover:scale-110 transition-transform duration-500" />
                        )}
                        <span className="text-3xl font-bold tracking-tight">{project.title}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl mb-3 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm border border-blue-200 dark:border-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>{t('projects.code')}</span>
                        </a>
                      )}
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>{t('projects.demo')}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
