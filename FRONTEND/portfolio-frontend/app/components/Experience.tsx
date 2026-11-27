"use client";
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Job {
  key: string;
  company: string;
  /** Formato 'AAAA-MM' (igual que en el CV) */
  start: string;
  end: string | null;
  mode: 'remote' | 'onsite';
}

// Mantener sincronizado con el CV (public/Alejandro-Zerpa-CV.pdf)
const JOBS: Job[] = [
  { key: 'vidalsa', company: 'Constructora Vidalsa 27, C.A.', start: '2026-04', end: null, mode: 'onsite' },
  { key: 'gorazer', company: 'Gorazer', start: '2024-01', end: null, mode: 'remote' },
  { key: 'isep', company: 'ISEP', start: '2025-12', end: '2026-08', mode: 'remote' },
  { key: 'scraping', company: 'Scraping Code Solutions', start: '2024-04', end: '2025-12', mode: 'remote' },
  { key: 'optiexpress', company: 'Optiexpress C.A.', start: '2023-09', end: '2024-02', mode: 'onsite' },
  { key: 'coromoto', company: 'Panificadora Coromoto', start: '2021-10', end: '2022-02', mode: 'onsite' },
];

const MONTHS = {
  es: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
  en: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
};

export function Experience() {
  const { t, language } = useLanguage();

  const fmt = (ym: string) => {
    const [y, m] = ym.split('-').map(Number);
    return `${MONTHS[language][m - 1]} ${y}`;
  };
  const period = (job: Job) => `${fmt(job.start)} — ${job.end ? fmt(job.end) : t('experience.present')}`;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white">
            {t('experience.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>

          <ol className="relative border-l-2 border-purple-200 dark:border-purple-900 ml-3 space-y-10">
            {JOBS.map((job, index) => (
              <motion.li
                key={job.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="pl-8 relative"
              >
                <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center ring-4 ring-white dark:ring-gray-900">
                  <Briefcase className="w-3 h-3 text-white" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <h3 className="text-xl text-gray-900 dark:text-white">
                    {t(`experience.${job.key}.role`)}{' '}
                    <span className="text-blue-600 dark:text-blue-400">· {job.company}</span>
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {period(job)} · {t(`experience.${job.mode}`)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{t(`experience.${job.key}.desc`)}</p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="flex items-center gap-3 text-xl mb-4 text-gray-900 dark:text-white">
              <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              {t('experience.education')}
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>{t('experience.edu.una')}</li>
              <li>{t('experience.edu.iutirla')}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
