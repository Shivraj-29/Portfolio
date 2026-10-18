import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100 bg-grid-pattern' : 'bg-slate-50 text-slate-900 bg-grid-pattern'
    }`}>
      {/* Floating Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          darkMode={darkMode}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* About Me Section (With photo & background) */}
        <About darkMode={darkMode} />

        {/* Education Section (DYPCOE Akurdi 9.1 CGPA, HSC, SSC) */}
        <Education darkMode={darkMode} />

        {/* Technical Skills Section */}
        <Skills darkMode={darkMode} />

        {/* Experience Section (Genz Infosystem, EduSkills Academy) */}
        <Experience darkMode={darkMode} />

        {/* Projects Section (Job Portal, Smart Link Hub, Recap) */}
        <Projects darkMode={darkMode} />

        {/* Certifications & Achievements Section */}
        <Certifications darkMode={darkMode} />

        {/* Contact Me Page / Section */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
