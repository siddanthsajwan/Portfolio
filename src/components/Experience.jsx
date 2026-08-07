import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="relative py-20 border-t border-purple-500/20 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-purple-700/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 purple-pill purple-pill-glow">
              <Briefcase className="w-3.5 h-3.5 text-purple-300" />
              <span>Career & Education</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Experience & Milestones
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base">
              Hands-on engineering experience and computer science foundation.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex p-1 rounded-full bg-purple-950/60 border border-purple-500/30 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-300/30'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-300/30'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Tab Content: Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experience.map((item, i) => {
              const bullets = item.bullets || item.achievements || [];
              const skills = item.techStack || item.skills || [];

              return (
                <div
                  key={item.company || i}
                  className="purple-card p-6 sm:p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-purple-500/20">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-2xl font-bold font-display text-white">
                          {item.role}
                        </h3>
                        <span className="purple-pill py-0.5 px-3 text-xs font-semibold text-purple-200 bg-purple-900/60">
                          {item.company}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-purple-300/80 font-mono">
                        {item.type || 'Remote Internship'} • {item.summary || ''}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 purple-pill bg-purple-950/60 text-xs font-mono text-purple-200 self-start">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Key Deliverables */}
                  <div className="pt-6 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold">
                      Key Deliverables & Responsibilities
                    </h4>

                    <div className="grid grid-cols-1 gap-2.5">
                      {bullets.map((bullet, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            {typeof bullet === 'string' ? bullet : (
                              <>
                                <strong className="text-white font-semibold">{bullet.title}: </strong>
                                {bullet.detail}
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Pills */}
                  {skills.length > 0 && (
                    <div className="pt-6 mt-6 border-t border-purple-500/20 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-mono text-purple-400 mr-2">Technologies:</span>
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono font-medium text-purple-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab Content: Education */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {education.map((item, i) => (
              <div
                key={item.institution || i}
                className="purple-card p-6 sm:p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-purple-500/20">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl font-bold font-display text-white">
                        {item.degree}
                      </h3>
                      <span className="purple-pill py-0.5 px-3 text-xs font-semibold text-purple-200 bg-purple-900/60">
                        {item.institution}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-purple-300/80 font-mono">
                      {item.location} • <strong className="text-white">{item.score || item.grade}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 purple-pill bg-purple-950/60 text-xs font-mono text-purple-200 self-start">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.duration || item.period}</span>
                  </div>
                </div>

                {/* Coursework & Activities */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2">
                      Academic Overview
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-3">
                      Key Highlights & Competitions
                    </h4>
                    <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
                      {item.highlights?.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/25">
                          <Award className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
