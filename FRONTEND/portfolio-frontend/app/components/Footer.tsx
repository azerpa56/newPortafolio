"use client";
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Portfolio. {t('footer.rights')}
          </p>
          <p className="text-gray-500 mt-2">{t('footer.made')}</p>
        </div>
      </div>
    </footer>
  );
}
