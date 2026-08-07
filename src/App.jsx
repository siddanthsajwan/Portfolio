import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import AgenticDemo from './components/AgenticDemo';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CommandMenu from './components/CommandMenu';
import Toast from './components/Toast';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showNotification = ({ message, type = 'info' }) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((current) => (current?.message === message ? null : current));
    }, 3500);
  };

  const handleLaunchSimulator = () => {
    const el = document.getElementById('agentic-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      showNotification({
        message: 'Loaded Autonomous Multi-Agent Email Simulator',
        type: 'info'
      });
    }
  };

  return (
    <div className="relative min-h-screen purple-ambient-bg text-neutral-100 selection:bg-purple-600 selection:text-white font-sans">
      
      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandMenu={setIsCommandMenuOpen}
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onNotify={showNotification}
          />

          <AboutMe
            onLaunchSimulator={handleLaunchSimulator}
            onOpenResume={() => setIsResumeOpen(true)}
          />
          
          <AgenticDemo
            onNotify={showNotification}
          />

          <Projects
            onLaunchSimulator={handleLaunchSimulator}
          />

          <Experience />

          <Skills />

          <Certifications
            onNotify={showNotification}
          />

          <Contact
            onNotify={showNotification}
          />
        </main>

        {/* Footer */}
        <Footer />

      </div>

      {/* Modals & Dialogs */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onNotify={showNotification}
      />

      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={setIsCommandMenuOpen}
        onOpenResume={() => setIsResumeOpen(true)}
        onNotify={showNotification}
      />

      {/* Floating Notifications */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
