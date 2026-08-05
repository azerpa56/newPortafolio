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

export const metadata: Metadata = {
  title: "Alejandro Zerpa | Desarrollador Web Frontend",
  description:
    "Portafolio de Alejandro Zerpa, desarrollador web frontend especializado en React, Next.js y TypeScript. Interfaces modernas, interactivas y responsivas.",
  keywords: [
    "Alejandro Zerpa",
    "desarrollador frontend",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "portafolio desarrollador",
  ],
  authors: [{ name: "Alejandro Zerpa" }],
  openGraph: {
    title: "Alejandro Zerpa | Desarrollador Web Frontend",
    description:
      "Portafolio de Alejandro Zerpa, desarrollador web frontend especializado en React, Next.js y TypeScript.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: "Alejandro Zerpa | Desarrollador Web Frontend",
    description:
      "Portafolio de Alejandro Zerpa, desarrollador web frontend especializado en React, Next.js y TypeScript.",
  },
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
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
