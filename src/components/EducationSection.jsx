import React from 'react';
import { GraduationCap } from 'lucide-react';

export const EducationSection = ({ education }) => {
  return (
    <section id="education" className="pt-1 pb-5 sm:pb-6" aria-label="Education">
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-4 px-4 py-2.5 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 lg:hidden mb-3 flex items-center gap-2.5">
        <div className="w-1.5 h-4 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        <h2 className="text-sm font-bold tracking-wider text-white uppercase font-mono">
          Education
        </h2>
      </div>

      {/* Desktop Section Header - Prominent & Easy to Differentiate */}
      <div className="hidden lg:flex items-center gap-3 pb-2.5 border-b border-slate-800/80 mb-3.5">
        <div className="w-1.5 h-5 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        <h2 className="text-lg font-extrabold tracking-wide text-white uppercase font-mono">
          Education
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent" />
      </div>

      {/* Education Cards */}
      <div className="space-y-3">
        {education.map((item, index) => (
          <article
            key={index}
            className="group relative rounded-xl border border-slate-800/80 bg-slate-900/30 p-3.5 sm:p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:bg-slate-800/30 hover:border-slate-700/80 hover:shadow-xl hover:shadow-sky-500/5"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                <h3 className="text-base font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors">
                  {item.institution}
                </h3>
              </div>
              <div className="text-xs font-mono text-slate-400 shrink-0">
                {item.period}
              </div>
            </div>

            <div className="text-sm font-semibold text-sky-300/90 pl-6 mb-1">
              {item.degree}
            </div>

            <div className="text-xs font-mono text-slate-400 pl-6">
              {item.location}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
