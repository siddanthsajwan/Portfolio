import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-500/20 bg-[#070314]/90 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/20">
          
          {/* Brand Info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-bold text-white text-lg">
                ✦ Siddanth Sajwan
              </span>
              <span className="purple-pill py-0.5 px-2 text-[10px] bg-purple-950/60 font-mono text-purple-300">
                2026 Grad
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              Frontend Developer & Autonomous Multi-Agent AI Engineer • Dehradun, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={portfolioData.personal.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400/60 hover:bg-purple-900/60 transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-blue-400 hover:border-blue-400/60 hover:bg-purple-900/60 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.personal.socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-amber-400 hover:border-amber-400/60 hover:bg-purple-900/60 transition"
              title="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400/60 hover:bg-purple-900/60 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 transition ml-2 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              title="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <div>
            © {new Date().getFullYear()} Siddanth Sajwan. All rights reserved.
          </div>
          <div>
            Built with React, Tailwind CSS, CrewAI & Groq Llama 3.1
          </div>
        </div>

      </div>
    </footer>
  );
}
