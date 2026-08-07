import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award, Briefcase, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onNotify }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onNotify({
      message: 'Opening resume print/download view...',
      type: 'info'
    });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0e0724] rounded-3xl border border-purple-500/40 shadow-[0_0_60px_rgba(147,51,234,0.3)] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="p-4 sm:p-5 border-b border-purple-500/20 bg-purple-950/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="purple-pill text-xs font-semibold text-purple-200">
              Official Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="purple-btn-outline text-xs py-1.5 px-3"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="purple-btn-primary text-xs py-1.5 px-3"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-purple-900/40 text-purple-300 hover:text-white transition ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Formatted Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#070314] space-y-8 text-neutral-200 text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-purple-500/20 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-sm font-semibold text-purple-300 mt-1">
                  {portfolioData.personal.role}
                </p>
              </div>

              <div className="text-xs text-neutral-300 space-y-1 font-mono sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <a href={`mailto:${portfolioData.personal.email}`} className="hover:underline text-purple-200">
                    {portfolioData.personal.email}
                  </a>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>{portfolioData.personal.phone}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{portfolioData.personal.location}</span>
                </p>
              </div>
            </div>

            {/* Links Bar */}
            <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-purple-500/15 text-xs font-mono">
              <a href={portfolioData.personal.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-purple-300 hover:text-white">
                LinkedIn Profile ↗
              </a>
              <a href={portfolioData.personal.socialLinks.github} target="_blank" rel="noreferrer" className="text-purple-300 hover:text-white">
                GitHub Repository ↗
              </a>
              <a href={portfolioData.personal.socialLinks.leetcode} target="_blank" rel="noreferrer" className="text-purple-300 hover:text-white">
                LeetCode Profile ↗
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-purple-400 pb-2 border-b border-purple-500/20 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> EDUCATION
            </h2>
            {portfolioData.education.map((edu, i) => (
              <div key={edu.institution || i} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <strong className="text-sm text-white">{edu.institution}</strong>
                  <span className="text-xs font-mono text-purple-400">{edu.duration || edu.period}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>{edu.degree}</span>
                  <span className="font-mono font-semibold text-purple-300">CGPA: {edu.score || edu.grade}</span>
                </div>
                <p className="text-xs text-neutral-400 pt-1">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-purple-400 pb-2 border-b border-purple-500/20 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> EXPERIENCE
            </h2>
            {portfolioData.experience.map((exp, i) => (
              <div key={exp.company || i} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <strong className="text-sm text-white">{exp.role}</strong> — <span className="text-purple-300 font-medium">{exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-purple-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 pl-1 leading-relaxed">
                  {(exp.bullets || exp.achievements || []).map((ach, idx) => (
                    <li key={idx}>
                      {typeof ach === 'string' ? ach : `${ach.title}: ${ach.detail}`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-purple-400 pb-2 border-b border-purple-500/20 mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> PROJECTS
            </h2>
            <div className="space-y-4">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-sm text-white">{proj.title}</strong>
                    <span className="text-xs font-mono text-purple-400">[{ (proj.tags || proj.techStack || []).slice(0, 3).join(', ') }]</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
