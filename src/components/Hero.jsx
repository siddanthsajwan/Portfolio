import React from 'react';
import { ArrowUpRight, Bot, Sparkles, Github, Linkedin, Mail, FileText, Code2, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onNotify }) {
  const techPills = [
    { name: 'CrewAI Flows', icon: '🤖' },
    { name: 'Groq (Llama 3.1)', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Google Gemini 1.5', icon: '✨' },
    { name: 'Docker', icon: '🐳' },
    { name: 'ProElevate Intern', icon: '💼' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Python & FastAPI', icon: '🐍' },
    { name: 'GEHU B.Tech CSE', icon: '🎓' },
  ];

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
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 purple-pill purple-pill-glow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="text-xs font-semibold text-purple-200 tracking-wide uppercase">
                Available for 2026 Roles & Internships
              </span>
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
              
              {/* Short Bio */}
              <div className="sm:col-span-7 space-y-4">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  Hi, I'm <strong className="text-white font-semibold">Siddanth Sajwan</strong>. A Computer Science undergraduate & AI Engineer specialized in autonomous multi-agent systems (<span className="text-purple-300 font-medium">CrewAI & Groq</span>) and high-performance frontend applications with experience at <span className="text-purple-300 font-medium">ProElevate</span>.
                </p>

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

        {/* Tech Brand Pill Ticker */}
        <div className="mt-16 pt-8 border-t border-purple-500/20">
          <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400/70 mb-4">
            Core Competencies & Stack
          </div>
          
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 no-scrollbar">
            {techPills.map((pill) => (
              <div
                key={pill.name}
                className="purple-pill py-2 px-4 whitespace-nowrap bg-purple-950/40 border-purple-500/30 hover:border-purple-400/60 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition"
              >
                <span>{pill.icon}</span>
                <span className="text-xs font-semibold text-purple-200">{pill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
