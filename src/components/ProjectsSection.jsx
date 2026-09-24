import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="pt-1 pb-5 sm:pb-6" aria-label="Projects">
      {/* Mobile Sticky Section Header */}
      <div className="sticky top-0 z-20 -mx-4 px-4 py-2.5 bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 lg:hidden mb-3 flex items-center gap-2.5">
        <div className="w-1.5 h-4 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        <h2 className="text-sm font-bold tracking-wider text-white uppercase font-mono">
          Projects
        </h2>
      </div>

      {/* Desktop Section Header - Prominent & Easy to Differentiate */}
      <div className="hidden lg:flex items-center gap-3 pb-2.5 border-b border-slate-800/80 mb-3.5">
        <div className="w-1.5 h-5 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        <h2 className="text-lg font-extrabold tracking-wide text-white uppercase font-mono">
          Projects
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent" />
      </div>

      {/* Project Cards */}
      <div className="space-y-4">
        {projects.map((project) => {
          const projectUrl = project.liveUrl || project.githubUrl || 'https://github.com/amanraja0';

          return (
            <article
              key={project.id}
              className="group relative rounded-xl border border-slate-800/80 bg-slate-900/30 p-4.5 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:bg-slate-800/30 hover:border-slate-700/80 hover:shadow-xl hover:shadow-sky-500/5"
            >
              {/* Header: Title & Distinct Live Link Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-2.5 pb-2.5 border-b border-slate-800/60">
                <div>
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight hover:text-sky-300 transition-colors inline-flex items-center gap-2 group/title"
                    title={`Open ${project.title} live link in a new tab`}
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover/title:text-sky-400 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
                  </a>
                  <div className="text-xs font-mono text-sky-400 font-medium mt-1">
                    {project.techStack}
                  </div>
                </div>

                {/* Prominent Live Link Button */}
                <div className="shrink-0">
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20 transition-all duration-200 transform active:scale-95"
                    title={`Open ${project.title} live link in a new tab`}
                  >
                    <span>Live Link</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Core Project Summary */}
              <p className="text-sm leading-relaxed text-slate-200 mt-2 mb-3">
                {project.summary}
              </p>

              {/* Resume Bullet Points */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-2 mb-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-sky-400 mt-0.5 select-none font-bold text-xs">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/60">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-mono font-medium bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:border-sky-500/50 hover:text-sky-200 transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
