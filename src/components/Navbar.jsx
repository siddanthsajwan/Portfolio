import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Terminal, Sparkles, Send, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenCommandMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'agentic-demo', 'projects', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'AI Simulator', href: '#agentic-demo' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070314]/85 backdrop-blur-xl border-b border-purple-500/20 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-300/40 transition-transform group-hover:scale-110">
              ✦
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight group-hover:text-purple-200 transition">
              Siddanth
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 px-5 py-1.5 rounded-full bg-purple-950/30 border border-purple-500/20 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-purple-300 font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={portfolioData.personal.socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-purple-900/40 text-purple-300 hover:text-amber-300 border border-purple-500/20 transition"
              title="LeetCode Profile (@siddanthsajwan4)"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenCommandMenu(true)}
              className="p-2 rounded-full hover:bg-purple-900/40 text-purple-300 hover:text-white border border-purple-500/20 transition"
              title="Search commands (⌘K)"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="purple-btn-outline text-xs px-4 py-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="purple-btn-primary text-xs px-5 py-2"
            >
              <span>Get in touch</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="purple-btn-primary text-xs px-3.5 py-1.5"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-[#0d0722]/95 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:bg-purple-900/40 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-purple-500/20 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 purple-btn-outline text-xs py-2"
            >
              Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandMenu(true);
              }}
              className="p-2 rounded-full border border-purple-500/30 text-purple-300"
            >
              <Terminal className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
