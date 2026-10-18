import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Work <span className="gradient-text-indigo">Experience</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Hands-on software engineering internships delivering enterprise and logistics solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-10">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 glow-card relative overflow-hidden ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 shadow-xl'
                  : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              {/* Subtle accent border line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                      exp.isCurrent
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                    }`}>
                      {exp.isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      )}
                      {exp.type}
                    </span>
                    <span className="text-xs text-slate-400">
                      {exp.status}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base sm:text-lg font-bold text-indigo-400">
                      {exp.company}
                    </span>
                  </div>
                </div>

                {/* Duration & Location Badge */}
                <div className={`self-start sm:self-center p-3 rounded-2xl border text-left sm:text-right ${
                  darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center sm:justify-end gap-1.5 text-xs font-semibold text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-[11px] text-slate-400 mt-1">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {exp.summary}
              </p>

              {/* Bullets directly from resume */}
              <div className="space-y-3 mb-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className={`text-xs sm:text-sm leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                <span className={`text-xs font-semibold flex items-center gap-1.5 mr-2 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  Key Tech:
                </span>
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-indigo-300'
                        : 'bg-indigo-50 border-indigo-100 text-indigo-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
