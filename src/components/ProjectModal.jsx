import React from 'react';
import { X, ExternalLink, Github, Bot, CheckCircle2, Layers, Cpu, Wrench, Sparkles, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onLaunchSimulator }) {
  if (!project) return null;

  const tags = project.tags || project.techStack || [];
  const highlights = project.bulletPoints || project.highlights || [];

  let statsList = [];
  if (Array.isArray(project.stats)) {
    statsList = project.stats;
  } else if (project.stats && typeof project.stats === 'object') {
    statsList = Object.entries(project.stats).map(([k, v]) => ({ label: 'Key Metric', value: v }));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0e0724] rounded-3xl border border-purple-500/40 shadow-[0_0_60px_rgba(147,51,234,0.3)] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-purple-500/20 flex items-center justify-between bg-purple-950/40">
          <div className="space-y-1">
            <span className="purple-pill text-[11px] font-mono">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-purple-900/40 text-purple-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-neutral-300 text-sm">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2">
              Overview
            </h4>
            <p className="leading-relaxed text-neutral-300">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Metrics Grid */}
          {statsList.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2.5">
                Key Deliverables & Performance
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {statsList.map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30">
                    <span className="text-xs text-purple-300/70 block">{stat.label}</span>
                    <span className="text-sm sm:text-base font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Highlights */}
          {highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2.5">
                Technical Highlights
              </h4>
              <div className="space-y-2">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-purple-200 bg-purple-950/30 p-2.5 rounded-xl border border-purple-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Multi-Agent Architecture breakdown if present */}
          {project.architecture && (
            <div className="p-4 rounded-2xl bg-[#060212] border border-purple-500/30 text-white space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-mono">
                <Bot className="w-4 h-4" />
                <span>Multi-Agent System Architecture</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.architecture.agents?.map((agent, i) => (
                  <div key={i} className="p-2 rounded-lg bg-purple-950/50 border border-purple-500/30">
                    <strong className="text-cyan-300 block">{agent.name}</strong>
                    <span className="text-purple-300/80 text-[11px]">{agent.role}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-mono font-medium text-purple-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-purple-500/20 bg-purple-950/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="purple-btn-outline text-xs py-2 px-4"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="purple-btn-primary text-xs py-2 px-4"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          {(project.id === 'agentic-email' || project.id === 'email-auto-responder') && (
            <button
              onClick={() => {
                onClose();
                onLaunchSimulator();
              }}
              className="purple-pill bg-purple-600 hover:bg-purple-500 text-white border-none text-xs py-2 px-4 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-300" />
              <span>Launch Simulator</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
