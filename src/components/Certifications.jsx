import React from 'react';
import { 
  Award, 
  Trophy, 
  Code2, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications({ darkMode }) {
  const { certifications, extracurriculars } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Accreditations & Honors</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Certifications & <span className="gradient-text-amber">Achievements</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Industry credentials and extracurricular achievements highlighting dedication to continuous learning.
          </p>
        </div>

        {/* Top Feature: Oracle Certification Card */}
        <div className="max-w-4xl mx-auto mb-12">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 glow-card relative overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border-amber-500/30 shadow-2xl'
                  : 'bg-gradient-to-br from-amber-50/50 via-white to-indigo-50/50 border-amber-200 shadow-xl'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40">
                        {cert.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {cert.issuer} • {cert.year}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {cert.title}
                    </h3>

                    <p className={`mt-2 text-xs sm:text-sm leading-relaxed max-w-2xl ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="sm:self-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 whitespace-nowrap">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Verified Credential
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Extracurricular Activities Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {extracurriculars.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border transition-all duration-300 glow-card flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-4 shadow-md">
                  {idx === 0 && <Users className="w-5 h-5" />}
                  {idx === 1 && <Code2 className="w-5 h-5" />}
                  {idx === 2 && <Trophy className="w-5 h-5" />}
                </div>

                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                  {item.badge}
                </span>

                <h4 className={`text-base font-bold mt-3 mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h4>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/40 text-[11px] font-medium text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
