"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Header
  'nav.about': { es: 'Sobre mí', en: 'About' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.skills': { es: 'Habilidades', en: 'Skills' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  
  // Hero
  'hero.greeting': { es: 'Hola, soy', en: "Hi, I'm" },
  'hero.role': { es: 'Desarrollador Web Frontend | Creador de Experiencias Digitales', en: 'Frontend Web Developer | Digital Experience Creator' },
  'hero.description': { es: 'Especializado en crear interfaces web modernas, interactivas y responsivas. Apasionado por transformar ideas en soluciones digitales innovadoras con tecnologías de vanguardia.', en: 'Specialized in creating modern, interactive and responsive web interfaces. Passionate about transforming ideas into innovative digital solutions with cutting-edge technologies.' },
  'hero.viewProjects': { es: 'Ver Proyectos', en: 'View Projects' },
  'hero.contact': { es: 'Contáctame', en: 'Contact Me' },
  
  // About
  'about.title': { es: 'Sobre mí', en: 'About Me' },
  'about.p1': { es: 'Soy Alejandro Zerpa, un desarrollador web frontend apasionado por crear experiencias digitales que combinan diseño elegante con código limpio y eficiente. Mi enfoque está en desarrollar interfaces intuitivas que mejoren la experiencia del usuario.', en: "I'm Alejandro Zerpa, a frontend web developer passionate about creating digital experiences that combine elegant design with clean and efficient code. My focus is on developing intuitive interfaces that enhance user experience." },
  'about.p2': { es: 'Con sólida experiencia en tecnologías modernas como React, Next.js, JavaScript y Python, me especializo en transformar diseños en aplicaciones web funcionales y escalables. Cada proyecto es una oportunidad para aprender y mejorar.', en: 'With solid experience in modern technologies like React, Next.js, JavaScript and Python, I specialize in transforming designs into functional and scalable web applications. Every project is an opportunity to learn and improve.' },
  'about.p3': { es: 'Mi objetivo es seguir creciendo profesionalmente, mantenerme actualizado con las últimas tendencias del desarrollo web y contribuir a proyectos que generen impacto positivo.', en: 'My goal is to continue growing professionally, stay updated with the latest web development trends and contribute to projects that generate positive impact.' },
  'about.completedProjects': { es: 'Proyectos Completados', en: 'Completed Projects' },
  'about.yearsExperience': { es: 'Años de Experiencia', en: 'Years of Experience' },
  'about.certifications': { es: 'Tecnologías Dominadas', en: 'Technologies Mastered' },
  
  // Projects
  'projects.title': { es: 'Proyectos Destacados', en: 'Featured Projects' },
  'projects.subtitle': { es: 'Una selección de mis trabajos más recientes y proyectos personales', en: 'A selection of my most recent work and personal projects' },
  'projects.project1.title': { es: 'Plataforma E-Commerce', en: 'E-Commerce Platform' },
  'projects.project1.description': { es: 'Una plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.', en: 'A complete e-commerce platform with shopping cart, payment gateway and admin panel.' },
  'projects.project2.title': { es: 'App de Gestión de Tareas', en: 'Task Management App' },
  'projects.project2.description': { es: 'Aplicación móvil y web para gestionar proyectos y tareas con colaboración en tiempo real.', en: 'Mobile and web application to manage projects and tasks with real-time collaboration.' },
  'projects.project3.title': { es: 'Dashboard Analytics', en: 'Analytics Dashboard' },
  'projects.project3.description': { es: 'Panel de control con visualización de datos en tiempo real y análisis predictivo.', en: 'Control panel with real-time data visualization and predictive analytics.' },
  'projects.code': { es: 'Código', en: 'Code' },
  'projects.demo': { es: 'Demo', en: 'Demo' },
  
  // Skills
  'skills.title': { es: 'Habilidades', en: 'Skills' },
  'skills.subtitle': { es: 'Tecnologías y herramientas con las que trabajo día a día', en: 'Technologies and tools I work with daily' },
  'skills.frontend': { es: 'Frontend', en: 'Frontend' },
  'skills.backend': { es: 'Backend', en: 'Backend' },
  'skills.tools': { es: 'Herramientas', en: 'Tools' },
  
  // Contact
  'contact.title': { es: 'Hablemos', en: "Let's Talk" },
  'contact.subtitle': { es: '¿Tienes un proyecto en mente? Estoy siempre abierto a nuevas oportunidades', en: 'Have a project in mind? I\'m always open to new opportunities' },
  'contact.info': { es: 'Información de Contacto', en: 'Contact Information' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.message': { es: 'Mensaje', en: 'Message' },
  'contact.send': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.success': { es: '¡Mensaje enviado! (Esto es una simulación)', en: 'Message sent! (This is a simulation)' },
  
  // Footer
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  'footer.made': { es: 'Hecho con ❤️ usando React y Tailwind CSS', en: 'Made with ❤️ using React and Tailwind CSS' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      setLanguage(browserLanguage === 'es' ? 'es' : 'en');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
