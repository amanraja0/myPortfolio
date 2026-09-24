import React, { useState, useEffect, useRef } from 'react';
import { X, Download, ArrowDownToLine, Check } from 'lucide-react';
import { jsPDF } from 'jspdf';

export const ResumeModal = ({
  isOpen,
  onClose,
  profile,
  experiences,
  projects,
  algorithmicData,
  skillsData,
  certificationsData,
  educationData,
}) => {
  const modalScrollRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Ensure we start at the very top of the scroll container
      if (modalScrollRef.current) {
        modalScrollRef.current.scrollTop = 0;
      }
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);

      // 1. If user placed their own custom PDF file in /public (e.g. /Aman_Raja_Resume.pdf)
      const customUrl = profile.resumeUrl || '/Aman_Raja_Resume.pdf';
      try {
        const testRes = await fetch(customUrl, { method: 'HEAD' });
        const contentType = testRes.headers.get('content-type') || '';
        // If file exists and is indeed a PDF (not an HTML 404 fallback page)
        if (testRes.ok && (contentType.includes('pdf') || contentType.includes('octet-stream'))) {
          const a = document.createElement('a');
          a.href = customUrl;
          a.download = 'Aman_Raja_Resume.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setDownloadSuccess(true);
          setTimeout(() => setDownloadSuccess(false), 3000);
          return;
        }
      } catch {
        // Fallback to dynamic generation below
      }

      // 2. High-Fidelity ATS PDF Generator
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 36;
      const contentWidth = pageWidth - (margin * 2);
      let y = 42;

      const checkPageBreak = (neededHeight) => {
        if (y + neededHeight > pageHeight - margin) {
          doc.addPage();
          y = margin;
        }
      };

      const drawSectionHeader = (title) => {
        checkPageBreak(28);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(30, 41, 59); // slate-800
        doc.text(title.toUpperCase(), margin, y);
        y += 4;
        doc.setDrawColor(203, 213, 225); // slate-300
        doc.setLineWidth(0.75);
        doc.line(margin, y, margin + contentWidth, y);
        y += 12;
      };

      // 1. Header (Name & Contact)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(15, 23, 42); // slate-900
      doc.text(profile.name, pageWidth / 2, y, { align: 'center' });
      y += 15;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105); // slate-600
      const contactText = `${profile.phone}  |  ${profile.email}  |  linkedin.com/in/amanraja0  |  github.com/amanraja0`;
      doc.text(contactText, pageWidth / 2, y, { align: 'center' });
      y += 18;

      // 2. Professional Summary
      drawSectionHeader('Professional Summary');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const summaryText = "Full-stack developer with hands-on experience building React.js and Spring Boot applications, gained through a 6-month internship at Extramarks Education on a high-traffic edtech platform. Built and shipped 4 independent projects covering REST API development, relational database design, AI integration, and API rate limiting. Solved 120+ DSA problems in Java and completed an Accenture Software Engineering Job Simulation.";
      const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
      checkPageBreak(splitSummary.length * 11.5);
      doc.text(splitSummary, margin, y);
      y += (splitSummary.length * 11.5) + 8;

      // 3. Technical Skills
      drawSectionHeader('Technical Skills');
      const skillsCategories = [
        { label: 'Languages:', value: 'Java, JavaScript, TypeScript, C++' },
        { label: 'Frontend:', value: 'React.js, HTML5, CSS3, Tailwind CSS' },
        { label: 'Backend:', value: 'Spring Boot, Node.js, Express.js, REST API Design, JWT, OpenAI API' },
        { label: 'Databases:', value: 'PostgreSQL, MySQL, MongoDB, Redis' },
        { label: 'Cloud & DevOps:', value: 'AWS, Docker, CI/CD, Git' },
        { label: 'Core CS:', value: 'Data Structures & Algorithms, OOP, System Design, Agile/Scrum' },
      ];

      skillsCategories.forEach((sc) => {
        checkPageBreak(12);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 41, 59);
        doc.text(sc.label, margin, y);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105);
        doc.text(sc.value, margin + 85, y);
        y += 11.5;
      });
      y += 6;

      // 4. Professional Experience
      drawSectionHeader('Professional Experience');
      experiences.forEach((exp) => {
        checkPageBreak(40);
        // Company + Role
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(15, 23, 42);
        doc.text(exp.company, margin, y);
        const companyWidth = doc.getTextWidth(exp.company);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(71, 85, 105);
        doc.text(`  —  ${exp.role}`, margin + companyWidth, y);

        // Period + Location right aligned
        const dateLoc = `${exp.period}  |  ${exp.location}`;
        doc.setFontSize(8);
        doc.text(dateLoc, margin + contentWidth, y, { align: 'right' });
        y += 12;

        // Bullet points
        exp.highlights?.forEach((bullet) => {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(51, 65, 85);
          const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 10);
          checkPageBreak(bulletLines.length * 10.5);
          doc.text(bulletLines, margin + 6, y);
          y += (bulletLines.length * 10.5) + 1.5;
        });
        y += 4;
      });
      y += 4;

      // 5. Projects
      drawSectionHeader('Projects');
      projects.forEach((proj) => {
        checkPageBreak(35);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(15, 23, 42);
        doc.text(proj.title, margin, y);
        const titleWidth = doc.getTextWidth(proj.title);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(3, 105, 161); // sky-700
        doc.text(`  |  ${proj.techStack}`, margin + titleWidth, y);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text('GitHub', margin + contentWidth, y, { align: 'right' });
        y += 11;

        proj.highlights?.forEach((bullet) => {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(51, 65, 85);
          const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 10);
          checkPageBreak(bulletLines.length * 10.5);
          doc.text(bulletLines, margin + 6, y);
          y += (bulletLines.length * 10.5) + 1.5;
        });
        y += 3;
      });
      y += 4;

      // 6. Education
      drawSectionHeader('Education');
      educationData?.forEach((edu) => {
        checkPageBreak(24);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(15, 23, 42);
        doc.text(edu.institution, margin, y);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text(`${edu.period}  |  ${edu.location}`, margin + contentWidth, y, { align: 'right' });
        y += 11;

        doc.setFont('helvetica', 'normal');
        doc.text(edu.degree, margin, y);
        y += 12;
      });
      y += 4;

      // 7. Achievements & Certifications
      drawSectionHeader('Achievements & Certifications');
      const achievements = [
        "Accenture Software Engineering Job Simulation (Forage, Jun 2025) – completed practical tasks in system architecture, secure coding, testing, and agile delivery.",
        "Deloitte Data Analytics Job Simulation (Forage, Jun 2025) and Kaggle Intro to Machine Learning (Jun 2025) – applied data analysis, forensic technology, and ML fundamentals.",
        "Solved 120+ DSA problems covering arrays, strings, trees, hashmaps, dynamic programming, and greedy techniques in Java."
      ];

      achievements.forEach((ach) => {
        const lines = doc.splitTextToSize(`•  ${ach}`, contentWidth - 10);
        checkPageBreak(lines.length * 10.5);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(51, 65, 85);
        doc.text(lines, margin + 6, y);
        y += (lines.length * 10.5) + 1.5;
      });

      // Save actual PDF file to user's computer
      doc.save('Aman_Raja_Resume.pdf');
      
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      ref={modalScrollRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md p-2 sm:p-6 flex justify-center items-start print:p-0 print:bg-white print:overflow-visible"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-4 sm:my-8 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl overflow-visible print:border-none print:shadow-none print:bg-white print:text-black print:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Control Bar - Always visible, never scrolls away */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md rounded-t-xl print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
              Resume Preview · {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Primary Action: Direct Download PDF File */}
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 text-xs font-semibold font-mono text-white px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/30 border border-sky-400/40 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75"
              title="Download ATS-friendly PDF file directly to your device"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span className="text-emerald-200">Downloaded!</span>
                </>
              ) : isDownloading ? (
                <>
                  <ArrowDownToLine className="w-4 h-4 text-sky-200 animate-bounce" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-sky-100" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700 ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-12 space-y-6 text-[#94A3B8] text-sm print:text-black print:p-0 print:space-y-4">
          {/* Header */}
          <div className="border-b border-slate-800 pb-4 print:border-gray-400 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white print:text-black tracking-tight mb-1">
              {profile.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400 print:text-gray-700 mt-2">
              <span className="text-slate-200 font-medium print:text-black">{profile.phone}</span>
              <span>|</span>
              <span className="text-slate-200 font-medium print:text-black">{profile.email}</span>
              <span>|</span>
              <span>linkedin.com/in/amanraja0</span>
              <span>|</span>
              <span>github.com/amanraja0</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-white print:text-black mb-2 pb-1 border-b border-slate-800 print:border-gray-300">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-300 print:text-gray-800">
              Full-stack developer with hands-on experience building React.js and Spring Boot applications, gained through a 6-month internship at Extramarks Education on a high-traffic edtech platform. Built and shipped 4 independent projects covering REST API development, relational database design, AI integration, and API rate limiting. Completed an Accenture Software Engineering Job Simulation and looking to grow further as a Software Engineer.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-white print:text-black mb-2 pb-1 border-b border-slate-800 print:border-gray-300">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
                <span className="font-semibold text-slate-200 print:text-black">Languages:</span>
                <span className="sm:col-span-4 text-slate-300 print:text-gray-700">Java, JavaScript, TypeScript, C++</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
                <span className="font-semibold text-slate-200 print:text-black">Frontend:</span>
                <span className="sm:col-span-4 text-slate-300 print:text-gray-700">React.js, HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
                <span className="font-semibold text-slate-200 print:text-black">Backend:</span>
                <span className="sm:col-span-4 text-slate-300 print:text-gray-700">Spring Boot, Node.js, Express.js, REST API Design, JWT, OpenAI API</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
                <span className="font-semibold text-slate-200 print:text-black">Databases:</span>
                <span className="sm:col-span-4 text-slate-300 print:text-gray-700">PostgreSQL, MySQL, MongoDB, Redis</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
                <span className="font-semibold text-slate-200 print:text-black">Cloud & DevOps:</span>
                <span className="sm:col-span-4 text-slate-300 print:text-gray-700">AWS, Docker, CI/CD, Git</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
                <span className="font-semibold text-slate-200 print:text-black">Core CS:</span>
                <span className="sm:col-span-4 text-slate-300 print:text-gray-700">Data Structures & Algorithms, OOP, System Design, Agile/Scrum</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-white print:text-black mb-3 pb-1 border-b border-slate-800 print:border-gray-300">
              Professional Experience
            </h2>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="font-semibold text-slate-100 print:text-black text-xs sm:text-sm">
                      {exp.company} <span className="font-normal text-slate-400 print:text-gray-600">· {exp.role}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-gray-600 shrink-0">
                      {exp.period} · {exp.location}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-white print:text-black mb-3 pb-1 border-b border-slate-800 print:border-gray-300">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <div className="font-semibold text-slate-100 print:text-black text-xs sm:text-sm">
                      {proj.title} <span className="font-mono text-[11px] font-normal text-sky-400 print:text-gray-600">| {proj.techStack}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-gray-600">
                      GitHub
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-white print:text-black mb-2 pb-1 border-b border-slate-800 print:border-gray-300">
              Education
            </h2>
            <div className="space-y-2">
              {educationData?.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-semibold text-slate-100 print:text-black">{edu.institution}</span>
                    <div className="text-slate-400 print:text-gray-600">{edu.degree}</div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 print:text-gray-600 text-right">
                    <div>{edu.period}</div>
                    <div>{edu.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-white print:text-black mb-2 pb-1 border-b border-slate-800 print:border-gray-300">
              Achievements & Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800 leading-relaxed">
              <li>
                Accenture Software Engineering Job Simulation (Forage, Jun 2025) – completed practical tasks in system architecture, secure coding, testing, and agile delivery.
              </li>
              <li>
                Deloitte Data Analytics Job Simulation (Forage, Jun 2025) and Kaggle Intro to Machine Learning (Jun 2025) – applied data analysis, forensic technology, and ML fundamentals.
              </li>
              <li>
                Solved 120+ DSA problems covering arrays, strings, trees, hashmaps, dynamic programming, and greedy techniques.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
