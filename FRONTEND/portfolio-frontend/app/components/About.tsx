"use client";
import { motion } from 'motion/react';
import { Code, Briefcase, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Code, label: t('about.completedProjects'), value: '30+' },
    { icon: Briefcase, label: t('about.yearsExperience'), value: '3+' },
    { icon: Award, label: t('about.certifications'), value: '8+' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-16 text-gray-900 dark:text-white">
            {t('about.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src="/portfolio.png"
                alt="Alejandro Zerpa"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('about.p1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('about.p2')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('about.p3')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                  <div className="text-4xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}