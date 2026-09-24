import React from 'react';
import { Award } from 'lucide-react';

export const CertificationsSection = ({ certifications }) => {
  return (
    <section id="certifications" className="pt-1 pb-5 sm:pb-6" aria-label="Certifications">
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-4 px-4 py-2.5 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 lg:hidden mb-3 flex items-center gap-2.5">
        <div className="w-1.5 h-4 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        <h2 className="text-sm font-bold tracking-wider text-white uppercase font-mono">
          Certifications & Simulations
        </h2>
      </div>

      {/* Desktop Section Header - Prominent & Easy to Differentiate */}
      <div className="hidden lg:flex items-center gap-3 pb-2.5 border-b border-slate-800/80 mb-3.5">
        <div className="w-1.5 h-5 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        <h2 className="text-lg font-extrabold tracking-wide text-white uppercase font-mono">
          Certifications & Simulations
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent" />
      </div>

      {/* Certifications Grid */}
      <div className="space-y-3">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            className="group relative rounded-xl border border-slate-800/80 bg-slate-900/30 p-3.5 sm:p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:bg-slate-800/30 hover:border-slate-700/80 hover:shadow-xl hover:shadow-sky-500/5"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
              </div>
              <div className="text-xs font-mono text-slate-400 shrink-0 pl-9 sm:pl-0">
                {cert.issuer} · {cert.date}
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300 mt-2 mb-3 pl-0 sm:pl-9">
              {cert.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60 pl-0 sm:pl-9">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-1 text-xs font-mono font-medium bg-slate-800/60 border border-slate-700/60 text-slate-300 group-hover:border-sky-500/30 group-hover:text-sky-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
