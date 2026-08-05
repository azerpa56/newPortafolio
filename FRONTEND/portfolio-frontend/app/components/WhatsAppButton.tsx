"use client";
import { motion } from 'motion/react';
import { SiWhatsapp } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_NUMBER = '584168920230';

export function WhatsAppButton() {
  const { t } = useLanguage();
  const message = encodeURIComponent(t('whatsapp.message'));

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp.aria')}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
      <SiWhatsapp className="relative w-7 h-7 text-white" />
    </motion.a>
  );
}
