import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education({ darkMode }) {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education & <span className="gradient-text-indigo">Qualifications</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Academic training from distinguished institutions in Maharashtra with consistent top-tier results.
          </p>
        </div>

        {/* Education Cards Timeline */}
        <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-12">
          
          {education.map((edu, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-4 border-indigo-500 flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              </div>

              {/* Main Card */}
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 glow-card ${
                edu.isTopGrade
                  ? darkMode 
                    ? 'bg-slate-900/90 border-indigo-500/40 shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-500/30' 
                    : 'bg-white border-indigo-300 shadow-xl shadow-indigo-200/50'
                  : darkMode
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-md'
              }`}>

                {/* Card Top Row: Degree & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        edu.isTopGrade
                          ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {edu.badge}
                      </span>
                      {edu.isTopGrade && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          <TrendingUp className="w-3 h-3" />
                          Top Academic Record
                        </span>
                      )}
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {edu.institution}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-indigo-400 mt-0.5">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Grade Pill */}
                  <div className={`self-start sm:self-center px-4 py-2 rounded-2xl border text-center ${
                    edu.isTopGrade 
                      ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400' 
                      : darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}>
                    <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">Score / Grade</p>
                    <p className="text-base sm:text-lg font-black">{edu.grade}</p>
                  </div>
                </div>

                {/* Location & Duration Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 mb-4 pb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {edu.description}
                </p>

                {/* Coursework Tags */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mb-5">
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Key Curriculum & Focus Areas</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                            darkMode
                              ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                              : 'bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Academic Highlights */}
                {edu.highlights && (
                  <div className="space-y-2 pt-2">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
