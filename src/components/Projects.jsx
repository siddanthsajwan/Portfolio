import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ onLaunchSimulator }) {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Agentic AI', 'Full-Stack AI', 'Frontend & Full-Stack'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 border-t border-purple-500/20 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-indigo-600/12 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 purple-pill purple-pill-glow">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Featured Projects & Systems
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              Autonomous AI agents, generative AI web apps, and high-performance frontend engineering.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/40'
                    : 'bg-purple-950/40 text-purple-300 hover:bg-purple-900/50 border border-purple-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const tags = project.tags || project.techStack || [];
            const primaryMetric = project.stats?.metric1 || (Array.isArray(project.stats) ? `${project.stats[0]?.label}: ${project.stats[0]?.value}` : 'Production Ready');

            return (
              <div
                key={project.id}
                className="purple-card p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  
                  {/* Header tag & Actions */}
                  <div className="flex items-center justify-between">
                    <span className="purple-pill py-1 px-3 text-[11px] font-mono">
                      {project.category}
                    </span>
                    
                    <div className="flex items-center gap-1.5">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full hover:bg-purple-900/50 text-purple-300 hover:text-white border border-purple-500/20 transition"
                        title="GitHub repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full hover:bg-purple-900/50 text-purple-300 hover:text-white border border-purple-500/20 transition"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold font-display text-white tracking-tight group-hover:text-purple-200 transition">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-medium text-purple-200 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Footer: Metrics & Details Button */}
                <div className="pt-6 mt-6 border-t border-purple-500/20 flex items-center justify-between">
                  
                  {/* Highlight Badge */}
                  <span className="text-[11px] font-medium text-purple-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[140px]">{primaryMetric}</span>
                  </span>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="purple-btn-outline text-xs py-1.5 px-3.5"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onLaunchSimulator={onLaunchSimulator}
        />
      )}
    </section>
  );
}
