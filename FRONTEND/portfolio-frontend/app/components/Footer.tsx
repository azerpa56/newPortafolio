"use client";
import { Github, Linkedin, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://github.com/azerpa56"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-zerpa-555a3b18b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/584168920230"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
          >
            <SiWhatsapp className="w-5 h-5" />
          </a>
          <a
            href="mailto:azerpa56@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Alejandro Zerpa. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
