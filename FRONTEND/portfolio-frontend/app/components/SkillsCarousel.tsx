"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from 'react-icons/si';
import { DiCss3Full, DiJava } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import { Webhook, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Skill {
  name: string;
  Icon: IconType;
  color?: string;
  themeAdaptive?: boolean;
  level: number;
  descKey: string;
}

const skills: Skill[] = [
  { name: 'React', Icon: SiReact, color: '#61DAFB', level: 95, descKey: 'skills.react.desc' },
  { name: 'Next.js', Icon: SiNextdotjs, themeAdaptive: true, level: 90, descKey: 'skills.nextjs.desc' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', level: 95, descKey: 'skills.javascript.desc' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', level: 98, descKey: 'skills.html.desc' },
  { name: 'CSS3', Icon: DiCss3Full, color: '#1572B6', level: 98, descKey: 'skills.css.desc' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', level: 95, descKey: 'skills.tailwind.desc' },
  { name: 'Python', Icon: SiPython, color: '#3776AB', level: 85, descKey: 'skills.python.desc' },
  { name: 'Java', Icon: DiJava, color: '#ED8B00', level: 80, descKey: 'skills.java.desc' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', level: 75, descKey: 'skills.nodejs.desc' },
  { name: 'REST APIs', Icon: Webhook, color: '#8B5CF6', level: 85, descKey: 'skills.restapis.desc' },
  { name: 'Git', Icon: SiGit, color: '#F05032', level: 95, descKey: 'skills.git.desc' },
  { name: 'GitHub', Icon: SiGithub, themeAdaptive: true, level: 95, descKey: 'skills.github.desc' },
  { name: 'VS Code', Icon: VscVscode, color: '#007ACC', level: 95, descKey: 'skills.vscode.desc' },
  { name: 'Responsive Design', Icon: Smartphone, color: '#EC4899', level: 98, descKey: 'skills.responsive.desc' },
];

const loopSkills = [...skills, ...skills];

export function SkillsCarousel() {
  const { t } = useLanguage();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  const hoveredSkill = skills.find((s) => hoveredKey?.startsWith(`${s.name}-`));

  return (
    <div className="w-full">
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseLeave={() => setHoveredKey(null)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-20" />

        <div
          className="flex gap-6 w-max animate-marquee"
          style={{ animationPlayState: hoveredKey ? 'paused' : 'running' }}
        >
          {loopSkills.map((skill, i) => {
            const key = `${skill.name}-${i}`;
            const isHovered = hoveredKey === key;
            return (
              <motion.div
                key={key}
                onMouseEnter={() => setHoveredKey(key)}
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.25 }}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border cursor-pointer transition-colors ${
                  isHovered
                    ? 'border-blue-400 dark:border-purple-500 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 shadow-sm'
                }`}
              >
                <skill.Icon
                  className={`w-9 h-9 md:w-10 md:h-10 ${skill.themeAdaptive ? 'text-gray-900 dark:text-white' : ''}`}
                  style={skill.color ? { color: skill.color } : undefined}
                />
                <span className="mt-2 text-xs text-gray-600 dark:text-gray-400 text-center px-1 leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-8 min-h-[132px]">
        <AnimatePresence mode="wait">
          {hoveredSkill ? (
            <motion.div
              key={hoveredSkill.name}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <hoveredSkill.Icon
                    className={`w-6 h-6 ${hoveredSkill.themeAdaptive ? 'text-gray-900 dark:text-white' : ''}`}
                    style={hoveredSkill.color ? { color: hoveredSkill.color } : undefined}
                  />
                  <span className="text-gray-900 dark:text-white">{hoveredSkill.name}</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{hoveredSkill.level}%</span>
              </div>
              <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${hoveredSkill.level}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t(hoveredSkill.descKey)}</p>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center text-sm text-gray-400 dark:text-gray-500 pt-12"
            >
              {t('skills.hint')}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
