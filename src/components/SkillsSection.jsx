import React, { useState } from 'react';
import { getTechIcon } from './Icons.jsx';

const skillLogoMap = {
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'REST API Design': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  'JWT': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jsonwebtokens.svg',
  'OpenAI API': 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
};

const brandColorMap = {
  'Java': 'hover:border-amber-500/70 hover:text-amber-300 hover:bg-amber-500/10',
  'C++': 'hover:border-blue-500/70 hover:text-blue-300 hover:bg-blue-500/10',
  'JavaScript': 'hover:border-yellow-400/70 hover:text-yellow-300 hover:bg-yellow-400/10',
  'TypeScript': 'hover:border-sky-400/70 hover:text-sky-300 hover:bg-sky-400/10',
  'Node.js': 'hover:border-emerald-500/70 hover:text-emerald-300 hover:bg-emerald-500/10',
  'Express.js': 'hover:border-slate-400 hover:text-white hover:bg-slate-800',
  'Spring Boot': 'hover:border-green-500/70 hover:text-green-300 hover:bg-green-500/10',
  'REST API Design': 'hover:border-cyan-500/70 hover:text-cyan-300 hover:bg-cyan-500/10',
  'JWT': 'hover:border-purple-500/70 hover:text-purple-300 hover:bg-purple-500/10',
  'OpenAI API': 'hover:border-teal-400/70 hover:text-teal-300 hover:bg-teal-400/10',
  'React.js': 'hover:border-cyan-400/70 hover:text-cyan-300 hover:bg-cyan-400/10',
  'Tailwind CSS': 'hover:border-teal-400/70 hover:text-teal-300 hover:bg-teal-400/10',
  'PostgreSQL': 'hover:border-indigo-400/70 hover:text-indigo-300 hover:bg-indigo-400/10',
  'MySQL': 'hover:border-orange-400/70 hover:text-orange-300 hover:bg-orange-400/10',
  'MongoDB': 'hover:border-emerald-400/70 hover:text-emerald-300 hover:bg-emerald-400/10',
  'Redis': 'hover:border-red-500/70 hover:text-red-300 hover:bg-red-500/10',
  'Docker': 'hover:border-blue-400/70 hover:text-blue-300 hover:bg-blue-400/10',
  'AWS': 'hover:border-amber-500/70 hover:text-amber-300 hover:bg-amber-500/10',
  'Git': 'hover:border-orange-500/70 hover:text-orange-300 hover:bg-orange-500/10',
  'CI/CD': 'hover:border-blue-400/70 hover:text-blue-300 hover:bg-blue-400/10',
};

const OpenSourceLogo = ({ skillName }) => {
  const [loadFailed, setLoadFailed] = useState(false);
  const logoUrl = skillLogoMap[skillName];

  if (!logoUrl || loadFailed) {
    const fallbackSvg = getTechIcon(skillName, "w-4 h-4 shrink-0");
    return fallbackSvg || null;
  }

  // Dark icons inverted to render cleanly on dark theme
  const needsInversion = skillName === 'Express.js' || skillName === 'OpenAI API';

  return (
    <img
      src={logoUrl}
      alt={`${skillName} logo`}
      className={`w-4 h-4 object-contain shrink-0 ${needsInversion ? 'brightness-0 invert' : ''}`}
      loading="lazy"
      onError={() => setLoadFailed(true)}
    />
  );
};

export const SkillsSection = ({ groups }) => {
  return (
    <section id="skills" className="pt-1 pb-5 sm:pb-6" aria-label="Skills">
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-4 px-4 py-2.5 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 lg:hidden mb-3 flex items-center gap-2.5">
        <div className="w-1.5 h-4 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        <h2 className="text-sm font-bold tracking-wider text-white uppercase font-mono">
          Technical Skills
        </h2>
      </div>

      {/* Desktop Section Header - Prominent & Easy to Differentiate */}
      <div className="hidden lg:flex items-center gap-3 pb-2.5 border-b border-slate-800/80 mb-3.5">
        <div className="w-1.5 h-5 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        <h2 className="text-lg font-extrabold tracking-wide text-white uppercase font-mono">
          Technical Skills
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent" />
      </div>

      {/* Skill Categories */}
      <div className="space-y-3">
        {groups.map((group) => (
          <article
            key={group.category}
            className="group relative rounded-xl border border-slate-800/80 bg-slate-900/30 p-3.5 sm:p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:bg-slate-800/30 hover:border-slate-700/80 hover:shadow-xl hover:shadow-sky-500/5"
          >
            <h3 className="text-xs font-mono font-bold text-sky-300/90 tracking-wider uppercase mb-2.5 group-hover:text-white transition-colors">
              {group.category}
            </h3>

            {/* Pill-shaped tags with accurate open-source logos */}
            <div className="flex flex-wrap items-center gap-2">
              {group.skills.map((skillName) => {
                const brandClass = brandColorMap[skillName] || 'hover:border-sky-400 hover:text-white';

                return (
                  <span
                    key={skillName}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-mono font-medium border border-slate-700/70 bg-slate-950/60 text-slate-300 transition-all duration-200 cursor-default select-none shadow-sm ${brandClass}`}
                  >
                    <OpenSourceLogo skillName={skillName} />
                    <span>{skillName}</span>
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
