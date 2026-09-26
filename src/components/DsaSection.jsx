import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LeetCodeIcon, JavaIcon } from './Icons.jsx';

export const DsaSection = ({ data, leetcodeUrl }) => {
  return (
    <section id="dsa" className="pt-1 pb-5 sm:pb-6" aria-label="DSA & Problem Solving">
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-4 px-4 py-2.5 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 lg:hidden mb-3 flex items-center gap-2.5">
        <div className="w-1.5 h-4 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        <h2 className="text-sm font-bold tracking-wider text-white uppercase font-mono">
          DSA & Problem Solving
        </h2>
      </div>

      {/* Desktop Section Header - Prominent & Easy to Differentiate */}
      <div className="hidden lg:flex items-center gap-3 pb-2.5 border-b border-slate-800/80 mb-3.5">
        <div className="w-1.5 h-5 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        <h2 className="text-lg font-extrabold tracking-wide text-white uppercase font-mono">
          DSA & Problem Solving
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent" />
      </div>

      {/* Main DSA Card */}
      <article className="group relative rounded-xl border border-slate-800/80 bg-slate-900/30 p-4.5 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:bg-slate-800/30 hover:border-slate-700/80 hover:shadow-xl hover:shadow-amber-500/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <LeetCodeIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors">
                250+ Coding Problems Solved
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Core Data Structures & Algorithms in Java
              </p>
            </div>
          </div>

          {leetcodeUrl && (
            <a
              href={leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-mono px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <span>LeetCode Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          )}
        </div>

        {/* Real resume text */}
        <p className="text-sm sm:text-base font-normal text-slate-200 mb-6 leading-relaxed">
          {data.text}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/60">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono font-medium bg-amber-950/40 border border-amber-500/40 text-amber-300">
            <JavaIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>{data.language}</span>
          </span>

          {data.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full px-3 py-1 text-xs font-mono font-medium bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
};
