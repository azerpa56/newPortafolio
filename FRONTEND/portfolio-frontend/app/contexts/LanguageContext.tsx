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
  'nav.ai': { es: 'IA', en: 'AI' },
  'nav.experience': { es: 'Experiencia', en: 'Experience' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  
  // Hero
  'hero.greeting': { es: 'Hola, soy', en: "Hi, I'm" },
  'hero.badge': { es: 'Full-Stack · IA aplicada', en: 'Full-Stack · Applied AI' },
  'hero.role': { es: 'Desarrollador Full-Stack especializado en Inteligencia Artificial', en: 'Full-Stack Developer specialized in Artificial Intelligence' },
  'hero.description': { es: 'Construyo sistemas de gestión que usan negocios reales (facturación, inventario, POS y restaurantes) con Next.js y Spring Boot, y les integro IA: modelos generativos, agentes y automatizaciones que ahorran horas de trabajo.', en: 'I build management systems used by real businesses (invoicing, inventory, POS and restaurants) with Next.js and Spring Boot, and I integrate AI into them: generative models, agents and automations that save hours of work.' },
  'hero.viewProjects': { es: 'Ver Proyectos', en: 'View Projects' },
  'hero.contact': { es: 'Contáctame', en: 'Contact Me' },
  'hero.downloadCV': { es: 'Descargar CV', en: 'Download CV' },
  
  // About
  'about.title': { es: 'Sobre mí', en: 'About Me' },
  'about.p1': { es: 'Soy Alejandro Zerpa, desarrollador full-stack y fundador de Gorazer. Diseño y construyo software de punta a punta: la interfaz en React/Next.js, el backend en Spring Boot, la base de datos en PostgreSQL y el despliegue en mi propio servidor con Docker.', en: "I'm Alejandro Zerpa, a full-stack developer and founder of Gorazer. I design and build software end to end: the interface in React/Next.js, the backend in Spring Boot, the database in PostgreSQL and the deployment on my own server with Docker." },
  'about.p2': { es: 'Mi diferencial es la Inteligencia Artificial aplicada. Integro modelos como Gemini en productos reales (como Lulu, un generador de apps web por chat), automatizo procesos con n8n y trabajo a diario con agentes de programación con IA para entregar más rápido sin sacrificar calidad.', en: 'My edge is applied Artificial Intelligence. I integrate models like Gemini into real products (such as Lulu, a chat-based web app generator), automate processes with n8n and work daily with AI coding agents to ship faster without sacrificing quality.' },
  'about.p3': { es: 'Mis sistemas resuelven problemas concretos de empresas: control de restaurantes, almacenes, puntos de venta y mantenimiento de maquinaria. Busco proyectos y equipos donde la IA y el buen software generen un impacto medible.', en: 'My systems solve concrete business problems: restaurant management, warehouses, points of sale and machinery maintenance. I look for projects and teams where AI and good software create measurable impact.' },
  'about.completedProjects': { es: 'Proyectos Completados', en: 'Completed Projects' },
  'about.yearsExperience': { es: 'Años de Experiencia', en: 'Years of Experience' },
  'about.certifications': { es: 'Tecnologías Dominadas', en: 'Technologies Mastered' },
  
  // Projects
  'projects.title': { es: 'Proyectos Destacados', en: 'Featured Projects' },
  'projects.subtitle': { es: 'Una selección de mis trabajos más recientes y proyectos personales', en: 'A selection of my most recent work and personal projects' },
  'projects.sat.title': { es: 'SAT Restaurante', en: 'SAT Restaurant' },
  'projects.sat.description': { es: 'Sistema para el control y gestión integral de un restaurante: facturación, notas de entrega y toma de pedidos.', en: 'Comprehensive restaurant management system: invoicing, delivery notes and order taking.' },
  'projects.sav.title': { es: 'SAV', en: 'SAV' },
  'projects.sav.description': { es: 'Sistema de gestión de almacén empresarial: control de inventario y generación de notas de salida.', en: 'Enterprise warehouse management system: inventory control and outbound delivery note generation.' },
  'projects.gorazerShop.title': { es: 'Gorazer Tienda', en: 'Gorazer Shop' },
  'projects.gorazerShop.description': { es: 'Catálogo y tienda online de Gorazer.', en: "Gorazer's online catalog and store." },
  'projects.gorazerDev.title': { es: 'Gorazer Dev', en: 'Gorazer Dev' },
  'projects.gorazerDev.description': { es: 'Sitio que presenta el lado de programación y desarrollo de software de Gorazer.', en: "Site showcasing Gorazer's software development side." },
  'projects.lulu.title': { es: 'Lulu', en: 'Lulu' },
  'projects.lulu.description': { es: 'Generador de apps web estilo Lovable: chat con IA que genera código y muestra una vista previa en vivo.', en: 'Lovable-style web app generator: AI chat that generates code and shows a live preview.' },
  'projects.finanzas.title': { es: 'Finanzas App', en: 'Finance App' },
  'projects.finanzas.description': { es: 'Aplicación web de finanzas para gestionar y visualizar información financiera de forma clara e intuitiva.', en: 'Web finance application to manage and visualize financial information clearly and intuitively.' },
  'projects.teampilot.title': { es: 'TeamPilot', en: 'TeamPilot' },
  'projects.teampilot.description': { es: 'WorkFlow Hub: plataforma SaaS para la gestión de proyectos, tareas, equipos y finanzas corporativas.', en: 'WorkFlow Hub: SaaS platform for managing projects, tasks, teams and corporate finances.' },
  'projects.code': { es: 'Código', en: 'Code' },
  'projects.demo': { es: 'Demo', en: 'Demo' },
  
  // AI
  'ai.title': { es: 'Inteligencia Artificial aplicada', en: 'Applied Artificial Intelligence' },
  'ai.subtitle': { es: 'No solo uso IA: la convierto en funcionalidades que resuelven problemas reales', en: "I don't just use AI: I turn it into features that solve real problems" },
  'ai.products.title': { es: 'Productos con IA generativa', en: 'Generative AI products' },
  'ai.products.desc': { es: 'Integro modelos de lenguaje (Gemini API) en aplicaciones web. Mi proyecto Lulu genera apps completas a partir de una conversación y muestra una vista previa en vivo del código generado.', en: 'I integrate language models (Gemini API) into web apps. My project Lulu generates complete apps from a conversation and shows a live preview of the generated code.' },
  'ai.automation.title': { es: 'Automatización inteligente', en: 'Intelligent automation' },
  'ai.automation.desc': { es: 'Diseño flujos en n8n que conectan modelos de IA con APIs, bases de datos y canales de mensajería para eliminar tareas manuales y repetitivas.', en: 'I design n8n workflows that connect AI models with APIs, databases and messaging channels to eliminate manual, repetitive tasks.' },
  'ai.agents.title': { es: 'Desarrollo con agentes de IA', en: 'AI-agent-driven development' },
  'ai.agents.desc': { es: 'Trabajo a diario con agentes de programación (Claude, Gemini) para diseñar, revisar y desplegar software más rápido, manteniendo control total sobre la arquitectura y la calidad del código.', en: 'I work daily with coding agents (Claude, Gemini) to design, review and ship software faster, while keeping full control over architecture and code quality.' },

  // Experience
  'experience.title': { es: 'Experiencia', en: 'Experience' },
  'experience.subtitle': { es: 'Mi recorrido profesional en desarrollo de software', en: 'My professional path in software development' },
  'experience.present': { es: 'Actual', en: 'Present' },
  'experience.remote': { es: 'Remoto', en: 'Remote' },
  'experience.isep.role': { es: 'Programador', en: 'Software Developer' },
  'experience.isep.desc': { es: 'Desarrollo y mantenimiento de aplicaciones web en un equipo remoto, incorporando herramientas de IA al flujo de desarrollo.', en: 'Development and maintenance of web applications in a remote team, bringing AI tools into the development workflow.' },
  'experience.gorazer.role': { es: 'Fundador y Desarrollador Full-Stack', en: 'Founder & Full-Stack Developer' },
  'experience.gorazer.desc': { es: 'Desarrollo de software a medida para empresas: sistemas de restaurante, almacén, POS e inventario, y mantenimiento de maquinaria pesada. Stack Next.js + Spring Boot + PostgreSQL, autoalojado con Docker.', en: 'Custom software for businesses: restaurant, warehouse, POS and inventory systems, plus heavy machinery maintenance. Next.js + Spring Boot + PostgreSQL stack, self-hosted with Docker.' },
  'experience.scraping.role': { es: 'Programador Junior', en: 'Junior Developer' },
  'experience.scraping.desc': { es: 'Desarrollo de scripts y herramientas de extracción y automatización de datos con Python y JavaScript.', en: 'Built data extraction and automation scripts and tools with Python and JavaScript.' },
  'experience.optiexpress.role': { es: 'Soporte Técnico', en: 'IT Support' },
  'experience.optiexpress.desc': { es: 'Mantenimiento de hardware y software, redes y atención a usuarios.', en: 'Hardware and software maintenance, networking and user support.' },
  'experience.education': { es: 'Formación', en: 'Education' },
  'experience.edu.una': { es: 'Ingeniería en Sistemas — Universidad Nacional Abierta (en curso)', en: 'Systems Engineering — Universidad Nacional Abierta (in progress)' },
  'experience.edu.iutirla': { es: 'Técnico Superior Universitario en Informática — IUTIRLA', en: 'Associate Degree in Computer Science — IUTIRLA' },

  // Skills
  'skills.title': { es: 'Habilidades', en: 'Skills' },
  'skills.subtitle': { es: 'Tecnologías y herramientas con las que trabajo día a día', en: 'Technologies and tools I work with daily' },
  'skills.hint': { es: 'Pasa el cursor sobre un ícono para ver el detalle', en: 'Hover an icon to see the detail' },

  // Skills - descriptions
  'skills.react.desc': { es: 'Construyo interfaces dinámicas con componentes reutilizables, hooks y manejo de estado.', en: 'I build dynamic interfaces with reusable components, hooks and state management.' },
  'skills.nextjs.desc': { es: 'Desarrollo aplicaciones con SSR/SSG, rutas API y optimización de rendimiento.', en: 'I develop apps with SSR/SSG, API routes and performance optimization.' },
  'skills.javascript.desc': { es: 'Programación en ES6+, manipulación del DOM y lógica asíncrona.', en: 'Programming in ES6+, DOM manipulation and asynchronous logic.' },
  'skills.html.desc': { es: 'Marcado semántico y accesible para estructurar interfaces web.', en: 'Semantic, accessible markup to structure web interfaces.' },
  'skills.css.desc': { es: 'Estilizado responsivo, animaciones y layouts con Flexbox/Grid.', en: 'Responsive styling, animations and Flexbox/Grid layouts.' },
  'skills.python.desc': { es: 'Scripts, automatización y APIs backend con Python.', en: 'Scripts, automation and backend APIs with Python.' },
  'skills.java.desc': { es: 'Desarrollo backend orientado a objetos con Java y Spring Boot.', en: 'Object-oriented backend development with Java and Spring Boot.' },
  'skills.nodejs.desc': { es: 'Construcción de APIs REST y servicios backend con Node.js.', en: 'Building REST APIs and backend services with Node.js.' },
  'skills.restapis.desc': { es: 'Diseño y consumo de APIs RESTful para conectar frontend y backend.', en: 'Designing and consuming RESTful APIs to connect frontend and backend.' },
  'skills.git.desc': { es: 'Control de versiones, ramas y flujo de trabajo colaborativo.', en: 'Version control, branching and collaborative workflows.' },
  'skills.github.desc': { es: 'Gestión de repositorios, Pull Requests y flujos de CI/CD.', en: 'Repository management, Pull Requests and CI/CD workflows.' },
  'skills.tailwind.desc': { es: 'Diseño de interfaces rápido y consistente con utilidades CSS.', en: 'Fast, consistent UI design using utility-first CSS.' },
  'skills.vscode.desc': { es: 'Editor principal con extensiones para productividad y debugging.', en: 'Main editor with extensions for productivity and debugging.' },
  'skills.typescript.desc': { es: 'Código tipado y mantenible en frontend y backend.', en: 'Typed, maintainable code across frontend and backend.' },
  'skills.springboot.desc': { es: 'APIs REST robustas con Spring Boot, Hibernate y seguridad.', en: 'Robust REST APIs with Spring Boot, Hibernate and security.' },
  'skills.postgresql.desc': { es: 'Modelado de datos relacionales y consultas eficientes.', en: 'Relational data modeling and efficient queries.' },
  'skills.docker.desc': { es: 'Contenedores y despliegue de mis apps en servidor propio.', en: 'Containers and deployment of my apps on my own server.' },
  'skills.gemini.desc': { es: 'Integración de modelos generativos en productos web.', en: 'Integrating generative models into web products.' },
  'skills.claude.desc': { es: 'Agentes de programación con IA en mi flujo diario de desarrollo.', en: 'AI coding agents in my daily development workflow.' },
  'skills.n8n.desc': { es: 'Automatizaciones que conectan IA, APIs y bases de datos.', en: 'Automations connecting AI, APIs and databases.' },
  'skills.responsive.desc': { es: 'Interfaces adaptables a cualquier dispositivo y tamaño de pantalla.', en: 'Interfaces that adapt to any device and screen size.' },
  
  // Contact
  'contact.title': { es: 'Hablemos', en: "Let's Talk" },
  'contact.subtitle': { es: '¿Tienes un proyecto en mente? Estoy siempre abierto a nuevas oportunidades', en: 'Have a project in mind? I\'m always open to new opportunities' },
  'contact.info': { es: 'Información de Contacto', en: 'Contact Information' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.directTitle': { es: '¿Prefieres escribir directo?', en: 'Prefer to reach out directly?' },
  'contact.directText': { es: 'Escríbeme por WhatsApp o correo y te respondo lo antes posible.', en: 'Message me on WhatsApp or email and I\'ll get back to you as soon as possible.' },
  'contact.whatsappBtn': { es: 'Escribir por WhatsApp', en: 'Message on WhatsApp' },
  'contact.emailBtn': { es: 'Enviar un Email', en: 'Send an Email' },
  'contact.copied': { es: 'Correo copiado al portapapeles', en: 'Email copied to clipboard' },

  // WhatsApp
  'whatsapp.message': { es: 'Hola Alejandro, vi tu portafolio y me gustaría contactarte.', en: 'Hi Alejandro, I saw your portfolio and I\'d like to get in touch.' },
  'whatsapp.aria': { es: 'Contactar por WhatsApp', en: 'Contact via WhatsApp' },

  // Scroll to top
  'scrollTop.aria': { es: 'Volver arriba', en: 'Scroll to top' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function readStoredLanguage(): Language | null {
  try {
    return localStorage.getItem('language') as Language | null;
  } catch {
    return null;
  }
}

function writeStoredLanguage(language: Language) {
  try {
    localStorage.setItem('language', language);
  } catch {
    // localStorage may be unavailable (blocked storage, sandboxed iframe, private mode).
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = readStoredLanguage();
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      setLanguage(browserLanguage === 'es' ? 'es' : 'en');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      writeStoredLanguage(language);
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
