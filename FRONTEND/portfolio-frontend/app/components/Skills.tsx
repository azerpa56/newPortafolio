"use client";
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML & CSS', level: 98 },
      ],
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Responsive Design', level: 98 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

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
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: catIndex * 0.1 + skillIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
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