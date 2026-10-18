import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Sparkles, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ darkMode, onOpenResume }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2500);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-400">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Developer Intern @ Bajaj Finserv</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-bold">DYPCOE 9.1 CGPA</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}>
                Hi, I'm{' '}
                <span className="gradient-text-indigo">
                  {personal.name}
                </span>
                <span className="inline-block animate-bounce ml-2">👋</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-indigo-400">
                Software Developer Intern @ Bajaj Finserv • Full-Stack, RAG & Cloud Specialist
              </p>
            </div>

            {/* Summary Paragraph */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {personal.summary}
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-2">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personal.location}</span>
              </div>

              <button
                onClick={() => copyToClipboard(personal.email, 'email')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  copied === 'email'
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                    : darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                }`}
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{copied === 'email' ? 'Copied Email!' : personal.email}</span>
              </button>

              <button
                onClick={() => copyToClipboard(personal.phone, 'phone')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  copied === 'phone'
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                    : darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                }`}
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{copied === 'phone' ? 'Copied Number!' : personal.phone}</span>
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:scale-[1.02] active:scale-95 ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-700 hover:border-slate-600 text-white hover:bg-slate-800'
                    : 'bg-white border-slate-300 hover:border-slate-400 text-slate-800 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>View & Download Resume</span>
              </button>

              {/* Direct Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className={`p-3 rounded-xl border transition-all hover:scale-110 ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className={`p-3 rounded-xl border transition-all hover:scale-110 ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-blue-400 hover:border-slate-700'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-200'
                  }`}
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Photo with Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Decorative Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

              {/* Card Container */}
              <div className={`relative rounded-3xl p-3 sm:p-4 border backdrop-blur-xl ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200 shadow-2xl'
              }`}>
                
                {/* Photo Element */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/50 shadow-inner">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if local image not found
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  
                  {/* Photo Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none"></div>

                  {/* Bottom Info on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left pointer-events-none">
                    <div>
                      <p className="text-white font-bold text-base leading-tight drop-shadow-md">
                        {personal.name}
                      </p>
                      <p className="text-xs text-indigo-300 font-medium drop-shadow-md mt-0.5">
                        B.E. Computer Engineering • DYPCOE
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Top-Right: Academic CGPA */}
                <div className={`absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl border shadow-xl flex items-center gap-2 backdrop-blur-md ${
                  darkMode ? 'bg-slate-900/95 border-amber-500/30 text-white' : 'bg-white border-amber-300 text-slate-900'
                }`}>
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    🏆
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">Academic Rank</p>
                    <p className="text-xs font-extrabold text-slate-100 dark:text-white">9.1 / 10 CGPA</p>
                  </div>
                </div>

                {/* Floating Badge Bottom-Left: Tech Badge */}
                <div className={`absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl border shadow-xl flex items-center gap-2.5 backdrop-blur-md ${
                  darkMode ? 'bg-slate-900/95 border-indigo-500/30 text-white' : 'bg-white border-indigo-200 text-slate-900'
                }`}>
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/30">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold">Oracle Certified</p>
                    <p className="text-xs font-bold">Generative AI & LLMs</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Stats Row Banner */}
        <div className={`mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5 sm:p-6 rounded-2xl border backdrop-blur-md ${
          darkMode ? 'bg-slate-900/60 border-slate-800/80 shadow-xl' : 'bg-white/80 border-slate-200 shadow-lg'
        }`}>
          {personal.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`p-3 sm:p-4 text-center rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text-indigo">
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm font-semibold mt-1 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {stat.label}
              </div>
              <div className={`text-[11px] mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
