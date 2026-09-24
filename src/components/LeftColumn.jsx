import React from 'react';
import { Github, FileText, ArrowUpRight } from 'lucide-react';
import { LeetCodeIcon, LinkedInIcon } from './Icons.jsx';

export const LeftColumn = ({
  profile,
  activeSection,
  onNavigate,
  onOpenResume
}) => {
  const navItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'dsa', label: 'DSA & Problem Solving' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <aside 
      className="lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto p-6 sm:p-7 lg:p-8 lg:py-7 bg-slate-900/50 backdrop-blur-md lg:border-r border-slate-800 z-10 flex flex-col justify-between transition-all"
      aria-label="Developer Profile & Navigation"
    >
      <div>
        {/* Top Lockup: Increased Avatar & Open to Work Badge */}
        <div className="flex items-center gap-4 mb-5">
          {/* Prominent, high-presence avatar badge */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-sky-400/40 bg-slate-800 flex items-center justify-center shadow-xl shadow-sky-500/10 shrink-0 group">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sky-600 via-indigo-900 to-slate-950 text-white font-extrabold text-xl tracking-wider select-none group-hover:scale-105 transition-transform duration-300">
              AR
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
          </div>

          {/* Clean 'Open to Work' Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-medium shadow-[0_0_14px_rgba(16,185,129,0.18)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide text-xs font-medium">
              Open to Work
            </span>
          </div>
        </div>

        {/* Developer Name */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          {profile.name}
        </h1>

        {/* Headline */}
        <p className="text-sm sm:text-base font-semibold text-sky-400 tracking-tight mb-4">
          {profile.headline}
        </p>

        {/* Single Unified Profile Summary (replaces multiple paragraphs) */}
        <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
          Full-stack engineer building production-grade <strong className="text-white font-semibold">React.js</strong> and <strong className="text-white font-semibold">Spring Boot</strong> systems, with enterprise experience at <strong className="text-slate-100 font-medium">Extramarks Education</strong>, 4 shipped full-stack projects, and <strong className="text-amber-400 font-medium">120+ DSA problems</strong> solved.
        </p>

        {/* High-Visibility View Resume Button */}
        <div className="mb-6">
          <button
            onClick={onOpenResume}
            className="w-full group relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-600 bg-size-200 hover:bg-right hover:shadow-lg hover:shadow-sky-500/25 border border-sky-400/40 transition-all duration-300 transform active:scale-[0.99]"
          >
            <FileText className="w-4 h-4 text-sky-200 group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">View Resume</span>
            <ArrowUpRight className="w-4 h-4 text-sky-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <p className="text-[11px] font-mono text-center text-slate-400 mt-1.5">
            Full experience, education & printable PDF
          </p>
        </div>

        {/* Section Navigation with Comfortable Breathing Room */}
        <nav className="space-y-1.5" aria-label="In-page navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`group flex items-center w-full text-left py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-sky-400 font-bold translate-x-1.5'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span
                  className={`h-px mr-3 transition-all duration-300 ${
                    isActive
                      ? 'w-10 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]'
                      : 'w-4 bg-slate-700 group-hover:w-8 group-hover:bg-slate-500'
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile Links with Relaxed Spacing */}
      <div className="pt-5 border-t border-slate-800/80 mt-6">
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all hover:scale-105"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all hover:scale-105"
            title="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          {/* LeetCode */}
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:bg-slate-800 transition-all hover:scale-105"
            title="LeetCode (120+ Solved)"
          >
            <LeetCodeIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
};
