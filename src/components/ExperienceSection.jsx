import React from 'react';

export const ExperienceSection = ({ experiences }) => {
  return (
    <section id="experience" className="pt-1 pb-5 sm:pb-6" aria-label="Experience">
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-4 px-4 py-2.5 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 lg:hidden mb-3 flex items-center gap-2.5">
        <div className="w-1.5 h-4 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        <h2 className="text-sm font-bold tracking-wider text-white uppercase font-mono">
          Experience
        </h2>
      </div>

      {/* Desktop Section Header - Prominent & Easy to Differentiate */}
      <div className="hidden lg:flex items-center gap-3 pb-2.5 border-b border-slate-800/80 mb-3.5">
        <div className="w-1.5 h-5 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        <h2 className="text-lg font-extrabold tracking-wide text-white uppercase font-mono">
          Experience
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent" />
      </div>

      {/* Experience Cards */}
      <div className="space-y-4">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="group relative rounded-xl border border-slate-800/80 bg-slate-900/30 p-4.5 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:bg-slate-800/30 hover:border-slate-700/80 hover:shadow-lg hover:shadow-sky-500/5"
          >
            {/* Header: Role, Company, Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors">
                {exp.role}{' '}
                <span className="text-sky-400 font-semibold">
                  · {exp.company}
                </span>
              </h3>
              <div className="text-xs font-mono text-slate-400">
                {exp.period}
                {exp.location && ` · ${exp.location}`}
              </div>
            </div>

            {/* Core Summary */}
            <p className="text-sm leading-relaxed text-slate-300 mt-2 mb-4">
              {exp.summary}
            </p>

            {/* Highlights from Resume */}
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="space-y-2 mb-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-sky-400 mt-0.5 select-none font-bold text-xs">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/60">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-3 py-1 text-xs font-mono font-medium text-slate-300 bg-slate-800/60 border border-slate-700/60 hover:border-sky-400/60 hover:text-sky-300 hover:bg-sky-500/10 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
