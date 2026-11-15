"use client";
import { motion } from 'motion/react';
import { Sparkles, Workflow, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AI_TOOLS = ['Gemini API', 'Claude', 'n8n', 'Prompt Engineering', 'LLM Agents', 'Spring Boot + IA'];

export function AIExpertise() {
  const { t } = useLanguage();

  const pillars = [
    { icon: Sparkles, title: t('ai.products.title'), desc: t('ai.products.desc') },
    { icon: Workflow, title: t('ai.automation.title'), desc: t('ai.automation.desc') },
    { icon: Bot, title: t('ai.agents.title'), desc: t('ai.agents.desc') },
  ];

  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('ai.title')}
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t('ai.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative h-full p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 mb-5 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {AI_TOOLS.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-purple-700 dark:text-purple-300 rounded-full text-sm border border-purple-200 dark:border-purple-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
