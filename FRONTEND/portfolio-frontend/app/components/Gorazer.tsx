"use client";
import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Server, Plug, Smartphone, Gauge } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const GORAZER_URL = 'https://gorazer.tech';

export function Gorazer() {
  const { t } = useLanguage();

  const services = [
    { icon: Globe, label: t('gorazer.service.web') },
    { icon: Server, label: t('gorazer.service.backend') },
    { icon: Smartphone, label: t('gorazer.service.pwa') },
    { icon: Plug, label: t('gorazer.service.integrations') },
    { icon: Gauge, label: t('gorazer.service.optimization') },
  ];

  return (
    <section id="gorazer" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative grid md:grid-cols-[1fr_1.4fr] gap-10 items-center p-8 md:p-12 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white flex items-center justify-center p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
                  <img
                    src="/projects/gorazer.webp"
                    alt="Logo de Gorazer"
                    width={595}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="px-4 py-1.5 rounded-full text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {t('gorazer.badge')}
                </span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
                  {t('gorazer.title')}{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Gorazer
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{t('gorazer.p1')}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{t('gorazer.p2')}</p>

                <ul className="flex flex-wrap gap-3 mb-8">
                  {services.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      <Icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      {label}
                    </li>
                  ))}
                </ul>

                <a
                  href={GORAZER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                >
                  {t('gorazer.cta')}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
