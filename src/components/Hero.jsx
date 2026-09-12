import React from 'react';
import { ArrowUpRight, Bot, Sparkles, Github, Linkedin, Mail, FileText, Code2, MapPin, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onNotify }) {
  const techPills = [
    { name: 'CrewAI Flows', icon: '🤖' },
    { name: 'Groq (Llama 3.1 8B)', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Google Gemini 1.5', icon: '✨' },
    { name: 'Docker Containers', icon: '🐳' },
    { name: 'ProElevate Intern', icon: '💼' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Python & FastAPI', icon: '🐍' },
    { name: 'LeetCode Problem Solving', icon: '💻' },
    { name: 'GEHU B.Tech CSE', icon: '🎓' },
    { name: 'Autonomous Agent Pipelines', icon: '🧠' },
    { name: 'REST & IMAP/SMTP Tools', icon: '📬' },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueePills = [...techPills, ...techPills];

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 overflow-hidden">
      
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Display Typography (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 purple-pill purple-pill-glow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="text-xs font-semibold text-purple-200 tracking-wide uppercase">
                  Available for 2026 Roles & Internships
                </span>
              </div>

              {/* Prominent LeetCode Profile Badge */}
              <a
                href={portfolioData.personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="purple-pill bg-purple-950/60 hover:bg-purple-900/80 border-purple-500/30 hover:border-amber-400/60 text-xs font-medium text-purple-200 hover:text-amber-300 transition flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.15)]"
                title="View LeetCode Profile"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode Profile</span>
                <ExternalLink className="w-3 h-3 text-amber-400/80" />
              </a>
            </div>

            {/* Giant Display Title */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-semibold tracking-tighter leading-[0.92]">
                <span className="text-gradient-purple">Frontend &</span> <br />
                <span className="text-white drop-shadow-[0_10px_25px_rgba(168,85,247,0.3)]">AI Engineer</span>
              </h1>
            </div>

            {/* Sub-text & Action Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end pt-4">
              
              {/* Short Bio & Action Buttons */}
              <div className="sm:col-span-7 space-y-4">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  Hi, I'm <strong className="text-white font-semibold">Siddanth Sajwan</strong>. A Computer Science undergraduate & AI Engineer specialized in autonomous multi-agent systems (<span className="text-purple-300 font-medium">CrewAI & Groq</span>) and high-performance frontend applications with experience at <span className="text-purple-300 font-medium">ProElevate</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#projects"
                    className="purple-btn-primary text-xs sm:text-sm px-6 py-3"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#agentic-demo"
                    className="purple-btn-outline text-xs sm:text-sm px-5 py-3"
                  >
                    <Bot className="w-4 h-4 text-purple-400" />
                    <span>Run AI Simulator</span>
                  </a>
                </div>

                {/* Social Profiles Row */}
                <div className="flex items-center gap-2 pt-2 text-xs font-mono text-neutral-400">
                  <span className="text-purple-400/70 mr-1">Profiles:</span>
                  <a
                    href={portfolioData.personal.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 hover:text-white border border-purple-500/20 transition"
                    title="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={portfolioData.personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 hover:text-blue-300 border border-purple-500/20 transition"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={portfolioData.personal.socialLinks.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 hover:text-amber-300 border border-purple-500/20 transition"
                    title="LeetCode (@Siddanthsajwan14)"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Quick stats mini card */}
              <div className="sm:col-span-5 flex sm:justify-end">
                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 backdrop-blur-md space-y-2 w-full sm:w-auto shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-display text-white">5,000+</span>
                    <span className="text-xs text-purple-300/80 leading-tight">Beta Users Impacted</span>
                  </div>
                  <div className="text-[11px] text-purple-300 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ProElevate Frontend Intern</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Framed Editorial Portrait Card (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Purple Glow halo behind portrait */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[32px] blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />

              {/* Framed Portrait Box */}
              <div className="relative rounded-[28px] overflow-hidden border border-purple-400/40 bg-[#0d0722] shadow-2xl group">
                <div className="h-[380px] sm:h-[460px] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={portfolioData.personal.avatar}
                    alt="Siddanth Sajwan"
                    className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Floating pill badge top right */}
                <div className="absolute top-4 right-4">
                  <span className="purple-pill bg-purple-950/80 backdrop-blur-md border border-purple-400/40 shadow-lg text-xs font-semibold text-purple-200">
                    ✦ Dehradun, India
                  </span>
                </div>

                {/* Bottom glass banner on image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#0a0418]/90 backdrop-blur-xl border border-purple-500/40 shadow-2xl flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-white font-display">Siddanth Sajwan</h3>
                    <p className="text-[11px] text-purple-300 font-mono">B.Tech CSE '26 • CGPA 7.22</p>
                  </div>
                  <a
                    href="#contact"
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white hover:from-purple-500 hover:to-indigo-500 transition shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    title="Get in touch"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Continuous Infinite Moving Core Competencies Marquee */}
        <div className="mt-16 pt-8 border-t border-purple-500/20">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400/70">
              Core Competencies & Stack (Live Stream)
            </div>
            <span className="text-[10px] font-mono text-purple-400/50 hidden sm:inline">
              Hover to pause
            </span>
          </div>
          
          {/* Marquee Wrapper with side gradient masks */}
          <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="animate-marquee gap-3 py-1 flex items-center">
              {marqueePills.map((pill, idx) => (
                <div
                  key={`${pill.name}-${idx}`}
                  className="purple-pill py-2 px-4.5 whitespace-nowrap bg-purple-950/50 border-purple-500/30 hover:border-purple-400/80 hover:bg-purple-900/60 shadow-[0_4px_14px_rgba(0,0,0,0.3)] transition cursor-default flex items-center gap-2"
                >
                  <span className="text-sm">{pill.icon}</span>
                  <span className="text-xs font-semibold text-purple-200">{pill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
