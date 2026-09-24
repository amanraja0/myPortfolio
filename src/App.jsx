/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  initialProfile,
  experienceData,
  projectsData,
  algorithmicExpertiseData,
  technicalSkillsData,
  certificationsData,
  educationData,
} from './data/portfolioData.js';
import { LeftColumn } from './components/LeftColumn.jsx';
import { ExperienceSection } from './components/ExperienceSection.jsx';
import { ProjectsSection } from './components/ProjectsSection.jsx';
import { SkillsSection } from './components/SkillsSection.jsx';
import { DsaSection } from './components/DsaSection.jsx';
import { CertificationsSection } from './components/CertificationsSection.jsx';
import { EducationSection } from './components/EducationSection.jsx';
import { ResumeModal } from './components/ResumeModal.jsx';

export default function App() {
  const profile = initialProfile;
  const projects = projectsData;

  const [activeSection, setActiveSection] = useState('experience');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      'experience',
      'projects',
      'skills',
      'dsa',
      'certifications',
      'education',
    ];
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -55% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-[#94A3B8] font-['Inter',sans-serif] relative selection:bg-sky-500/30 selection:text-white">
      {/* 
        Subtle Background & Color Depth (Midnight Slate + Deep Indigo/Teal Ambient)
      */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div 
          className="absolute -top-24 -right-24 w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] rounded-full blur-[140px] opacity-20 pointer-events-none"
          style={{ backgroundColor: '#0369A1' }}
        />
        <div 
          className="absolute -bottom-24 -left-24 w-[600px] sm:w-[750px] h-[600px] sm:h-[750px] rounded-full blur-[140px] opacity-15 pointer-events-none"
          style={{ backgroundColor: '#312E81' }}
        />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Two-Column Split-Pane Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="lg:flex lg:justify-between">
          {/* Left Column (Sticky Sidebar, scrollable on overflow) */}
          <div className="lg:w-[40%] xl:w-[38%] shrink-0">
            <LeftColumn
              profile={profile}
              activeSection={activeSection}
              onNavigate={handleNavigate}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          </div>

          {/* Right Column (Scrollable) */}
          <main 
            className="lg:w-[60%] xl:w-[62%] p-4 sm:p-5 lg:p-6 lg:pt-4 lg:min-h-screen" 
            id="content"
          >
            {/* 1. Experience */}
            <ExperienceSection experiences={experienceData} />

            {/* 2. Projects */}
            <ProjectsSection projects={projects} />

            {/* 3. Skills (placed 3rd as requested) */}
            <SkillsSection groups={technicalSkillsData} />

            {/* 4. DSA & Problem Solving */}
            <DsaSection
              data={algorithmicExpertiseData}
              leetcodeUrl={profile.leetcode}
            />

            {/* 5. Certifications */}
            <CertificationsSection certifications={certificationsData} />

            {/* 6. Education */}
            <EducationSection education={educationData} />

            {/* Minimal Footer */}
            <footer className="pt-4 pb-4 border-t border-slate-800/80 text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
              <div>{profile.name} · Full-Stack Software Engineer</div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-slate-300 transition-colors inline-flex items-center gap-1 text-slate-400"
              >
                <span>Back to top</span>
                <span>↑</span>
              </button>
            </footer>
          </main>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        experiences={experienceData}
        projects={projects}
        algorithmicData={algorithmicExpertiseData}
        skillsData={technicalSkillsData}
        certificationsData={certificationsData}
        educationData={educationData}
      />
    </div>
  );
}
