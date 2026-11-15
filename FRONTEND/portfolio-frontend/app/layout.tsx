import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_TITLE = "Alejandro Zerpa | Desarrollador Full-Stack";
const SITE_DESCRIPTION =
  "Portafolio de Alejandro Zerpa, desarrollador full-stack: sistemas de gestión para negocios reales con Next.js, React, Spring Boot y PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alejandro-zerpa.tech"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Alejandro Zerpa",
    "desarrollador full-stack",
    "n8n",
    "Next.js",
    "Spring Boot",
    "React",
    "TypeScript",
    "portafolio desarrollador",
  ],
  authors: [{ name: "Alejandro Zerpa", url: "https://alejandro-zerpa.tech" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://alejandro-zerpa.tech",
    siteName: "Alejandro Zerpa",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alejandro Zerpa",
  url: "https://alejandro-zerpa.tech",
  image: "https://alejandro-zerpa.tech/portfolio.jpg",
  jobTitle: "Desarrollador Full-Stack",
  worksFor: { "@type": "Organization", name: "Gorazer", url: "https://servergorazer.uk" },
  knowsAbout: [
    "n8n",
    "Next.js",
    "React",
    "TypeScript",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
  ],
  sameAs: [
    "https://github.com/azerpa56",
    "https://www.linkedin.com/in/alejandro-zerpa-555a3b18b",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){} })()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
