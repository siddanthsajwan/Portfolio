import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Bot, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const pipelineSteps = [
  { id: 'health', name: 'Render Cloud Container Health Check', agent: 'HealthCheckServer', tool: 'Multi-threaded Flask Server', outputSummary: 'Status 200 OK • uv environment healthy' },
  { id: 'filter', name: 'Email Classification & Spam Filtering', agent: 'Email Filter Crew', tool: 'CrewAI Agent + Groq Llama 3.1 8B', outputSummary: 'Classified: High Priority Business Inquiry' },
  { id: 'context', name: 'Thread Retrieval & Intent Extraction', agent: 'Context Analysis Crew', tool: 'GetThreadTool (IMAP SSL)', outputSummary: 'Extracted full thread history & user intent' },
  { id: 'draft', name: 'Contextual AI Response Generation', agent: 'Draft Response Crew', tool: 'Groq Llama 3.1 8B Inference', outputSummary: 'Synthesized tailored, professional response' },
  { id: 'smtp', name: 'Gmail Draft Creation & Dispatch', agent: 'Draft Response Crew', tool: 'CreateDraftTool (SMTP)', outputSummary: 'Draft synchronized to Gmail drafts inbox' },
];

export default function AgenticDemo({ onNotify }) {
  const scenarios = portfolioData.sampleEmailSimulations || [];
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [generatedDraft, setGeneratedDraft] = useState(null);
  const [activeTab, setActiveTab] = useState('pipeline');

  const currentScenario = scenarios[selectedScenarioIndex] || {
    sender: "recruiter@innovate-tech.com",
    subject: "Frontend & AI Engineering Role Opportunity",
    body: "Hi Siddanth, loved your autonomous agentic projects and ProElevate internship work. Let's connect!",
    expectedCategory: "Career Opportunity",
    draftPreview: "Hi, thank you for reaching out! I would love to connect..."
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setCompletedSteps([]);
    setTerminalLogs([]);
    setGeneratedDraft(null);
  };

  const handleRunSimulation = () => {
    handleReset();
    setIsRunning(true);
    setCurrentStepIndex(0);

    const initialLog = `[${new Date().toLocaleTimeString()}] 🚀 Initiating Autonomous CrewAI Workflow for: "${currentScenario.subject}"`;
    setTerminalLogs([initialLog]);

    let step = 0;
    const interval = setInterval(() => {
      if (step < pipelineSteps.length) {
        const stepData = pipelineSteps[step];
        setCurrentStepIndex(step);
        setCompletedSteps((prev) => [...prev, step]);

        const newLog = `[${new Date().toLocaleTimeString()}] ✅ [${stepData.agent}] -> ${stepData.outputSummary}`;
        setTerminalLogs((prev) => [...prev, newLog]);

        step++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setGeneratedDraft(currentScenario.draftPreview);
        setActiveTab('output');

        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });

        onNotify({
          message: 'Multi-Agent Autonomous Email Response Generated!',
          type: 'success'
        });
      }
    }, 1100);
  };

  return (
    <section id="agentic-demo" className="relative py-20 overflow-hidden">
      
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[400px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 purple-pill purple-pill-glow mb-3">
            <Bot className="w-3.5 h-3.5 text-cyan-300" />
            <span>Interactive AI Playground</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Autonomous Multi-Agent Email Pipeline
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-2">
            Live simulation of Siddanth's flagship <strong className="text-purple-300">CrewAI Flows + Groq (Llama 3.1 8B)</strong> autonomous agentic responder with real-world tool execution.
          </p>
        </div>

        {/* Bento Workspace */}
        <div className="purple-card overflow-hidden border-purple-500/30">
          
          {/* Top Control Bar */}
          <div className="p-4 sm:p-6 bg-purple-950/40 border-b border-purple-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 backdrop-blur-md">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-medium text-purple-300/80 mr-1">Select Scenario:</span>
              {scenarios.map((scenario, idx) => (
                <button
                  key={scenario.id || idx}
                  disabled={isRunning}
                  onClick={() => {
                    setSelectedScenarioIndex(idx);
                    handleReset();
                  }}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition ${
                    selectedScenarioIndex === idx
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-300/30'
                      : 'bg-purple-950/50 text-purple-200 hover:bg-purple-900/60 border border-purple-500/20'
                  }`}
                >
                  {scenario.expectedCategory}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="flex-1 md:flex-initial purple-btn-primary text-xs py-2 px-5 disabled:opacity-60"
              >
                {isRunning ? (
                  <>
                    <Cpu className="w-3.5 h-3.5 animate-spin text-cyan-300" />
                    <span>Executing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Multi-Agent Pipeline</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                disabled={isRunning}
                className="purple-btn-outline text-xs py-2 px-3 disabled:opacity-50"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Body Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-purple-500/20">
            
            {/* Left Column: Email Payload & Steps (5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-6 space-y-6 bg-[#0c061e]/80">
              
              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-purple-300">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-purple-300" />
                    <span>Incoming Email Payload</span>
                  </span>
                  <span className="purple-pill py-0 px-2 text-[10px] bg-purple-900/80 border-none font-semibold text-purple-200">
                    {currentScenario.expectedCategory}
                  </span>
                </div>
                <div className="text-xs">
                  <span className="text-neutral-400">From: </span>
                  <span className="font-semibold text-white">{currentScenario.sender}</span>
                </div>
                <div className="text-xs">
                  <span className="text-neutral-400">Subject: </span>
                  <span className="font-semibold text-white">{currentScenario.subject}</span>
                </div>
                <p className="text-xs text-neutral-300 italic bg-[#080314]/70 p-3 rounded-xl border border-purple-500/20">
                  "{currentScenario.body}"
                </p>
              </div>

              {/* Step by Step Flow Indicator */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-3">
                  Workflow Execution Stages
                </div>

                {pipelineSteps.map((step, idx) => {
                  const isCurrent = currentStepIndex === idx && isRunning;
                  const isDone = completedSteps.includes(idx);

                  return (
                    <div
                      key={step.id}
                      className={`p-3 rounded-xl border transition-all text-xs flex items-center justify-between ${
                        isCurrent
                          ? 'bg-purple-900/70 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                          : isDone
                          ? 'bg-purple-950/50 border-purple-500/40 text-purple-200'
                          : 'bg-[#0a0418]/50 border-purple-500/15 text-neutral-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isCurrent
                            ? 'bg-cyan-400 text-neutral-950 shadow-[0_0_10px_#22d3ee]'
                            : isDone
                            ? 'bg-purple-600 text-white shadow-[0_0_10px_#a855f7]'
                            : 'bg-purple-950/80 text-purple-400'
                        }`}>
                          {isDone ? '✓' : idx + 1}
                        </div>
                        <div>
                          <div className={`font-semibold ${isCurrent ? 'text-white' : 'text-neutral-200'}`}>
                            {step.name}
                          </div>
                          <div className={`text-[10px] font-mono ${isCurrent ? 'text-purple-200' : 'text-purple-400/70'}`}>
                            {step.agent} • {step.tool}
                          </div>
                        </div>
                      </div>

                      {isCurrent && (
                        <span className="text-[10px] font-mono text-cyan-300 animate-pulse">Running</span>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Terminal & Output (7 cols) */}
            <div className="lg:col-span-7 bg-[#060210] text-neutral-100 p-5 sm:p-6 flex flex-col justify-between min-h-[460px]">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('pipeline')}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg transition ${
                        activeTab === 'pipeline'
                          ? 'bg-purple-900/60 text-white font-bold border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Console Execution
                    </button>
                    <button
                      onClick={() => setActiveTab('output')}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
                        activeTab === 'output'
                          ? 'bg-purple-900/60 text-white font-bold border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <span>Draft Result</span>
                      {generatedDraft && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />}
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-purple-400/70">
                    CrewAI v0.102 • Groq Llama 3.1 8B
                  </span>
                </div>

                {/* Console Logs */}
                {activeTab === 'pipeline' && (
                  <div className="pt-4 font-mono text-xs space-y-2.5 max-h-96 overflow-y-auto">
                    {terminalLogs.length === 0 ? (
                      <div className="text-neutral-500 py-12 text-center">
                        <Terminal className="w-8 h-8 mx-auto mb-2 opacity-40 text-purple-400" />
                        <p className="text-purple-300/60">Click "Run Multi-Agent Pipeline" to begin live execution.</p>
                      </div>
                    ) : (
                      terminalLogs.map((log, i) => (
                        <div key={i} className="text-purple-200/90 leading-relaxed font-mono">
                          {log}
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* Draft Result */}
                {activeTab === 'output' && (
                  <div className="pt-4 space-y-4">
                    {generatedDraft ? (
                      <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-3 font-sans">
                        <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
                          <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" /> Ready for SMTP Dispatch
                          </span>
                          <span className="text-[11px] font-mono text-purple-300">SMTP CreateDraftTool</span>
                        </div>
                        <div className="text-xs text-neutral-300">
                          <strong className="text-white">Subject: </strong> Re: {currentScenario.subject}
                        </div>
                        <div className="text-xs text-purple-200 whitespace-pre-line leading-relaxed bg-[#05010e]/90 p-3 rounded-lg border border-purple-500/20 font-mono">
                          {generatedDraft}
                        </div>
                      </div>
                    ) : (
                      <div className="text-neutral-500 py-12 text-center text-xs font-mono">
                        Pipeline output will appear here after execution.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between text-[11px] font-mono text-purple-400/80">
                <span>IMAP SSL • Dockerized Flow</span>
                <a
                  href="https://github.com/siddanth-sajwan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-300 hover:text-white flex items-center gap-1 transition"
                >
                  <span>Source on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
