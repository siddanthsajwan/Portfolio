import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Clock, Sparkles, MessageSquare, ArrowRight, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    onNotify({ message: `Copied ${field} to clipboard!`, type: 'success' });
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onNotify({ message: 'Please fill in your name, email, and message.', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onNotify({
        message: `Thank you ${formData.name}! Your message has been sent to Siddanth.`,
        type: 'success'
      });
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-purple-500/20 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Contact Header */}
        <div className="space-y-4 mb-14 max-w-4xl">
          <div className="inline-flex items-center gap-2 purple-pill purple-pill-glow">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[0.95]">
            Let's build something <br />
            <span className="text-gradient-neon">remarkable together.</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl pt-2">
            I am currently open for Full-Time Frontend & AI Engineering roles starting in 2026 as well as select freelance / project collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="purple-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-purple-400/80 block">Personal Email</span>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(portfolioData.personal.email, 'Email')}
                className="p-2 rounded-full hover:bg-purple-900/50 text-purple-300 hover:text-white transition"
                title="Copy email"
              >
                {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="purple-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-purple-400/80 block">Phone & WhatsApp</span>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(portfolioData.personal.phone, 'Phone')}
                className="p-2 rounded-full hover:bg-purple-900/50 text-purple-300 hover:text-white transition"
                title="Copy phone"
              >
                {copiedField === 'Phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LeetCode Card */}
            <div className="purple-card p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-purple-400/80 block">LeetCode Profile</span>
                  <a
                    href={portfolioData.personal.socialLinks.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-amber-300 transition flex items-center gap-1.5"
                  >
                    <span>leetcode.com/u/Siddanthsajwan14</span>
                  </a>
                </div>
              </div>

              <a
                href={portfolioData.personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-purple-900/50 text-purple-300 hover:text-amber-300 transition"
                title="Open LeetCode Profile"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Timezone Card */}
            <div className="purple-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Local Time (IST): <strong className="text-white">{currentTime}</strong></span>
              </div>
            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="purple-card p-6 sm:p-8 space-y-4"
            >
              <h3 className="text-lg font-bold font-display text-white mb-1">
                Send a Direct Note
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-purple-300 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/50 border border-purple-500/30 text-xs text-white placeholder-purple-400/60 focus:outline-none focus:border-purple-400 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-purple-300 block mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/50 border border-purple-500/30 text-xs text-white placeholder-purple-400/60 focus:outline-none focus:border-purple-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-purple-300 block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. AI / Frontend Engineering Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/50 border border-purple-500/30 text-xs text-white placeholder-purple-400/60 focus:outline-none focus:border-purple-400 transition"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-purple-300 block mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share details about the role or project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/50 border border-purple-500/30 text-xs text-white placeholder-purple-400/60 focus:outline-none focus:border-purple-400 resize-none transition"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full purple-btn-primary py-3.5 text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(168,85,247,0.5)]"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
