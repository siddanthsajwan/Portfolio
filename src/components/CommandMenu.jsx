import React, { useState, useEffect } from 'react';
import { Search, Sparkles, FolderGit2, Briefcase, GraduationCap, Wrench, Trophy, Mail, FileText, X, ArrowRight, Bot } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function CommandMenu({ isOpen, onClose, onOpenResume, onNotify }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'resume',
      title: 'Open Printable / PDF Resume',
      icon: <FileText className="w-4 h-4 text-purple-300" />,
      category: 'Quick Actions',
      run: () => {
        onClose(false);
        onOpenResume();
      }
    },
    {
      id: 'email-copy',
      title: 'Copy Email Address to Clipboard',
      icon: <Mail className="w-4 h-4 text-purple-300" />,
      category: 'Quick Actions',
      run: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        onNotify({ message: 'Email copied: ' + portfolioData.personal.email, type: 'success' });
        onClose(false);
      }
    },
    {
      id: 'confetti',
      title: 'Trigger Celebratory Confetti',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      category: 'Interactive',
      run: () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        onNotify({ message: '✨ Cheers! Thanks for visiting!', type: 'success' });
        onClose(false);
      }
    },
    {
      id: 'demo',
      title: 'Jump to Autonomous Multi-Agent AI Simulator',
      icon: <Bot className="w-4 h-4 text-cyan-300" />,
      category: 'Navigation',
      run: () => {
        onClose(false);
        document.getElementById('agentic-demo')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'projects',
      title: 'Jump to Featured Projects',
      icon: <FolderGit2 className="w-4 h-4 text-purple-300" />,
      category: 'Navigation',
      run: () => {
        onClose(false);
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'experience',
      title: 'Jump to Work Experience & ProElevate',
      icon: <Briefcase className="w-4 h-4 text-emerald-300" />,
      category: 'Navigation',
      run: () => {
        onClose(false);
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'skills',
      title: 'Jump to Technical Skills Matrix',
      icon: <Wrench className="w-4 h-4 text-indigo-300" />,
      category: 'Navigation',
      run: () => {
        onClose(false);
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'contact',
      title: 'Jump to Contact Form & Details',
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      category: 'Navigation',
      run: () => {
        onClose(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={() => onClose(false)}
    >
      <div
        className="w-full max-w-xl bg-[#0e0724] rounded-3xl border border-purple-500/40 shadow-[0_0_60px_rgba(147,51,234,0.3)] overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-purple-500/20 flex items-center gap-3 bg-purple-950/40">
          <Search className="w-5 h-5 text-purple-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-purple-400/60 focus:outline-none"
          />
          <button
            onClick={() => onClose(false)}
            className="p-1 rounded-lg hover:bg-purple-900/40 text-purple-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 bg-[#090418]">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs text-purple-400/70 font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((item) => (
              <button
                key={item.id}
                onClick={item.run}
                className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-purple-950/70 text-left transition group border border-transparent hover:border-purple-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-950/80 border border-purple-500/30 group-hover:bg-purple-900/60 transition">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="text-[10px] font-mono text-purple-400/70">
                      {item.category}
                    </div>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-purple-400/50 group-hover:text-white group-hover:translate-x-0.5 transition" />
              </button>
            ))
          )}
        </div>

        {/* Command Menu Footer */}
        <div className="p-3 bg-purple-950/40 border-t border-purple-500/20 flex items-center justify-between text-[11px] font-mono text-purple-400/80">
          <span>Navigation Shortcuts</span>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-0.5 rounded bg-purple-900/60 border border-purple-500/30 text-purple-200">ESC</kbd>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
