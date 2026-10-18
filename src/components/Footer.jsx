import React from 'react';
import { 
  ArrowUp, 
  Terminal, 
  Heart, 
  Mail, 
  Phone 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ darkMode }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-500/25">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personal.name}
              </p>
              <p className="text-xs text-slate-500">
                Computer Engineering • DYPCOE Akurdi (9.1 CGPA)
              </p>
            </div>
          </div>

          {/* Center Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:text-white' : 'bg-white border-slate-200 hover:text-slate-900'
              }`}
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:text-blue-400' : 'bg-white border-slate-200 hover:text-blue-600'
              }`}
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:text-indigo-400' : 'bg-white border-slate-200 hover:text-indigo-600'
              }`}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${personal.rawPhone}`}
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode ? 'bg-slate-900 border-slate-800 hover:text-emerald-400' : 'bg-white border-slate-200 hover:text-emerald-600'
              }`}
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Right Back to Top */}
          <div className="flex items-center gap-4 text-xs">
            <span>© {new Date().getFullYear()} Shivraj Patil. All rights reserved.</span>
            
            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all hover:scale-105 active:scale-95 ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
              }`}
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
