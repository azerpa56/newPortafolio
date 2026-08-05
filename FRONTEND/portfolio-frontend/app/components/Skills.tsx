"use client";
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { SkillsCarousel } from './SkillsCarousel';

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white">
            {t('skills.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>

          <SkillsCarousel />
        </motion.div>
      </div>
    </section>
  );
}
