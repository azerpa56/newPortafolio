"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, MessageCircle, Check } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_NUMBER = '584168920230';
const EMAIL_ADDRESS = 'azerpa56@gmail.com';

export function Contact() {
  const { t } = useLanguage();
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('whatsapp.message'))}`;
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard?.writeText(EMAIL_ADDRESS).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white">
            {t('contact.title')}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">
                {t('contact.info')}
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:azerpa56@gmail.com"
                  onClick={handleEmailClick}
                  className="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 rounded-lg group-hover:scale-110 transition-transform border border-red-200 dark:border-red-800">
                    <Mail className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t('contact.email')}
                    </div>
                    <div>azerpa56@gmail.com</div>
                  </div>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg group-hover:scale-110 transition-transform border border-green-200 dark:border-green-800">
                    <SiWhatsapp className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      WhatsApp
                    </div>
                    <div>+58 416-8920230</div>
                  </div>
                </a>

                <a
                  href="https://github.com/azerpa56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      GitHub
                    </div>
                    <div>github.com/azerpa56</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/alejandro-zerpa-555a3b18b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      LinkedIn
                    </div>
                    <div>linkedin.com/in/alejandro-zerpa-555a3b18b</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative flex flex-col items-center justify-center text-center gap-5 p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 h-full">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-blue-800">
                  <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl text-gray-900 dark:text-white">
                  {t('contact.directTitle')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('contact.directText')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full mt-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    {t('contact.whatsappBtn')}
                  </a>
                  <a
                    href="mailto:azerpa56@gmail.com"
                    onClick={handleEmailClick}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    {t('contact.emailBtn')}
                  </a>
                </div>
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400"
                    >
                      <Check className="w-4 h-4" />
                      {t('contact.copied')}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
