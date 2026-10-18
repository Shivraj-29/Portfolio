import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Cloud, 
  Cpu, 
  ChevronRight,
  Info
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ darkMode }) {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['all', 'AI & GenAI', 'Full-Stack', 'Cloud & DevOps'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="gradient-text-indigo">Projects</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Production-grade systems ranging from recruitment portals to AWS-deployed dynamic link platforms and Groq-powered AI speech transcription.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center items-center gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : darkMode
                    ? 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl border flex flex-col justify-between transition-all duration-300 glow-card relative overflow-hidden group ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800/80 hover:border-indigo-500/50 shadow-xl'
                  : 'bg-white border-slate-200 hover:border-indigo-300 shadow-lg'
              }`}
            >
              {/* Header Gradient Top Line */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`}></div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Badge & Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                    {project.badge}
                  </span>
                  <span className={`text-xs font-mono font-medium ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className={`text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className={`text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.bullets[0]}
                </p>

                {/* Key Points Preview */}
                <div className="space-y-2 mb-6 flex-1">
                  {project.bullets.slice(1, 3).map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span className={`line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-slate-800/50 mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium ${
                          darkMode
                            ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2.5 rounded-xl border transition-all hover:scale-105 ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                    }`}
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {project.hasLiveDemo && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2.5 rounded-xl border transition-all hover:scale-105 ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-emerald-400 hover:border-emerald-500/50'
                          : 'bg-emerald-50 border-emerald-200 text-emerald-600 hover:bg-emerald-100'
                      }`}
                      title={project.demoLabel}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className={`max-w-2xl w-full rounded-3xl p-6 sm:p-8 border shadow-2xl max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
                {activeProjectModal.badge}
              </span>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <h3 className="text-2xl font-bold mt-4 mb-2">
              {activeProjectModal.title}
            </h3>

            <p className="text-xs font-mono text-indigo-400 mb-6">
              Development Year: {activeProjectModal.year}
            </p>

            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technical Implementation Details
            </h4>

            <div className="space-y-3 mb-6">
              {activeProjectModal.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {activeProjectModal.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              <a
                href={activeProjectModal.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{activeProjectModal.demoLabel}</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
