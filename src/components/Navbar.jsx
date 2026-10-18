import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  FileText, 
  Send, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
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
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? darkMode 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20' 
          : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-200/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {portfolioData.personal.name}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  Bajaj Finserv Intern
                </span>
              </div>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                DYPCOE Akurdi • 9.1 CGPA
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                        : 'text-indigo-600 bg-indigo-50/80 shadow-sm border border-indigo-100'
                      : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:border-slate-300'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              Resume
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 lg:hidden rounded-xl border transition-colors ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-1.5 backdrop-blur-2xl ${
          darkMode 
            ? 'bg-slate-950/95 border-slate-800 text-white' 
            : 'bg-white/95 border-slate-200 text-slate-900 shadow-xl'
        }`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? darkMode
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 font-semibold'
                      : 'bg-indigo-50 text-indigo-600 border border-indigo-200 font-semibold'
                    : darkMode
                      ? 'text-slate-300 hover:bg-slate-900'
                      : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-800/50 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-slate-800/80 text-white hover:bg-slate-800"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
