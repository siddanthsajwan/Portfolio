import React from 'react';
import { Bot, Zap, Sparkles, ArrowRight, CheckCircle2, Play, Users, Trophy, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutMe({ onLaunchSimulator, onOpenResume }) {
  return (
    <section id="about" className="relative py-20 border-y border-purple-500/20 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[350px] bg-purple-700/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="space-y-4 mb-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 purple-pill purple-pill-glow">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            Building intelligent agentic systems and high-performance interfaces has always been more than just code — <span className="text-gradient-neon">it's my craft and passion.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Agentic AI Engineering Highlight (7 cols) */}
          <div className="md:col-span-7 purple-card-glow p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Inner purple glow accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[70px] rounded-full pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="purple-pill bg-purple-900/60 border-purple-400/40 text-xs">
                  <Bot className="w-3.5 h-3.5 text-cyan-300" />
                  <span className="text-purple-200">Agentic AI & LLMs</span>
                </span>
                <span className="text-xs font-mono text-purple-300/80">CrewAI • Groq • Llama 3.1</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold font-display text-white tracking-tight">
                Autonomous Multi-Agent AI Systems
              </h3>

              <p className="text-purple-200/80 text-sm leading-relaxed max-w-lg">
                I design structured multi-agent workflows where specialized LLM crews collaborate seamlessly to classify, retrieve context, draft contextual responses, and interact with external APIs autonomously.
              </p>
            </div>

            {/* Interactive Run Simulation Banner */}
            <div className="mt-8 pt-6 border-t border-purple-500/30 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2 text-xs text-purple-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Live Interactive Simulator Available</span>
              </div>

              <a
                href="#agentic-demo"
                className="purple-btn-primary text-xs py-2 px-4 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              >
                <span>Launch Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Card 2: Industry Experience at ProElevate (5 cols) */}
          <div className="md:col-span-5 purple-card p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="purple-pill text-xs">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Frontend Engineering</span>
                </span>
                <span className="text-xs font-mono text-purple-300/70">May – Aug 2025</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                ProElevate Internship
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed">
                Built modular user onboarding flows, high-density analytics dashboards with 10+ KPIs, and drag-and-drop state machines supporting 5,000+ active users.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30">
                  <div className="text-xl font-bold text-white">5,000+</div>
                  <div className="text-[11px] text-purple-300/80">Beta Users Supported</div>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30">
                  <div className="text-xl font-bold text-white">-80%</div>
                  <div className="text-[11px] text-purple-300/80">Latency on Optimistic CRUD</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-purple-500/20 flex items-center justify-between">
              <span className="text-xs font-mono text-purple-300/70">React.js • Tailwind • ShadCN</span>
              <a
                href="#experience"
                className="text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1 transition"
              >
                <span>View Details</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Academic Foundation & Achievements (12 cols full width bar) */}
          <div className="md:col-span-12 purple-card p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-purple-950/60 to-[#0f0926]/90">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="font-bold text-white text-base">Graphic Era Hill University</span>
                <span className="purple-pill py-0.5 px-2.5 text-[11px]">B.Tech CSE '26</span>
                <span className="purple-pill py-0.5 px-2.5 text-[11px] font-mono text-purple-200">CGPA: 7.22 / 10</span>
              </div>
              <p className="text-xs text-neutral-300 max-w-2xl">
                Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Machine Learning.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
              <a
                href={portfolioData.personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/30 hover:border-amber-400/50 text-xs text-purple-200 hover:text-amber-300 transition shadow-[0_0_10px_rgba(245,158,11,0.1)]"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs text-purple-200">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Graphethon Finalist</span>
              </div>
              <button
                onClick={onOpenResume}
                className="purple-btn-primary text-xs py-2 px-4 whitespace-nowrap"
              >
                <span>Full Resume</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
