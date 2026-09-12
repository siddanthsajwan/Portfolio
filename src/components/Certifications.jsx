import React from 'react';
import { Trophy, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications({ onNotify }) {
  const { certifications } = portfolioData;

  const handleViewCert = (cert) => {
    if (cert.verificationUrl && cert.verificationUrl !== "#") {
      window.open(cert.verificationUrl, '_blank', 'noopener,noreferrer');
    } else {
      onNotify({
        message: `Verified Credential: ${cert.title} issued by ${cert.issuer}`,
        type: 'info'
      });
    }
  };

  return (
    <section id="certifications" className="relative py-20 border-t border-purple-500/20 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 purple-pill purple-pill-glow mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Credentials & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Certifications & Honors
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-2">
            Industry credentials and hackathon recognitions in Generative AI and Agentic Systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="purple-card p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <span className="purple-pill py-0.5 px-2.5 text-[11px] font-mono">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-purple-300 font-mono">
                  Issuer: <strong className="text-white">{cert.issuer}</strong>
                </p>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-purple-500/20 flex items-center justify-between">
                <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified</span>
                </span>

                <button
                  onClick={() => handleViewCert(cert)}
                  className="purple-btn-outline text-xs py-1.5 px-3.5"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
