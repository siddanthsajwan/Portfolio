import React, { useState } from 'react';
import { Wrench, Search, Bot, Code2, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'ai',
      title: 'AI & Agentic Systems',
      icon: <Bot className="w-4 h-4 text-cyan-300" />,
      items: skills?.aiAndAgentic || []
    },
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      icon: <Code2 className="w-4 h-4 text-purple-300" />,
      items: skills?.frontend || []
    },
    {
      id: 'backend',
      title: 'Backend & DevOps',
      icon: <Database className="w-4 h-4 text-emerald-300" />,
      items: skills?.backendAndDevops || []
    },
    {
      id: 'core',
      title: 'Languages & Core CS',
      icon: <Terminal className="w-4 h-4 text-amber-300" />,
      items: skills?.languagesAndCore || []
    },
  ];

  const filteredCategories = categories.map((cat) => {
    const filteredItems = cat.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tag?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, items: filteredItems };
  }).filter((cat) => cat.items.length > 0);

  return (
    <section id="skills" className="relative py-20 border-t border-purple-500/20 overflow-hidden">
      
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 purple-pill purple-pill-glow">
              <Wrench className="w-3.5 h-3.5 text-purple-300" />
              <span>Technical Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Skills & Proficiencies
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              Autonomous AI agents, modern frontend architectures, and full-stack frameworks.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, CrewAI)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs text-white placeholder-purple-400/60 focus:outline-none focus:border-purple-400 transition"
            />
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="purple-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div className="space-y-5">
                
                {/* Category Title */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-purple-500/20">
                  <div className="p-2 rounded-xl bg-purple-950/70 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    {cat.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills Grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3.5 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-purple-200 shadow-sm hover:border-purple-400/70 hover:bg-purple-900/60 transition flex items-center gap-1.5"
                    >
                      <span className="font-medium">{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] text-purple-400/80 font-sans">
                          • {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-4 mt-6 border-t border-purple-500/20 text-[11px] font-mono text-purple-400/70">
                {cat.items.length} competencies indexed
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
