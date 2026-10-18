import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Terminal, 
  Search, 
  Sparkles,
  Check,
  Flame
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cloud: Cloud,
  Cpu: Cpu,
  Terminal: Terminal
};

export default function Skills({ darkMode }) {
  const { categories } = portfolioData.skills;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter skills based on selected category & search query
  const filteredCategories = categories.map((cat) => {
    const isCatMatch = selectedCategory === 'all' || cat.id === selectedCategory;
    if (!isCatMatch) return null;

    const filteredSkills = cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0 && searchQuery.trim() !== '') {
      return null;
    }

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean);

  const totalSkillCount = categories.reduce((sum, cat) => sum + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tech Stack & Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Technical <span className="gradient-text-indigo">Skills</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A comprehensive overview of my programming languages, frameworks, cloud stacks, and computer science foundations.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : darkMode
                    ? 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Skills ({totalSkillCount})
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                    : darkMode
                      ? 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. FastAPI, AWS)..."
              className={`w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border outline-none transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500 shadow-sm'
              }`}
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComp = iconMap[cat.iconName] || Code2;
            return (
              <div
                key={cat.id}
                className={`p-6 rounded-3xl border transition-all duration-300 glow-card flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-lg'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/60">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {cat.title}
                      </h3>
                      <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {cat.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                            {skill.name}
                          </span>
                          <span className="text-[11px] font-mono text-indigo-400 font-medium">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className={`w-full h-2 rounded-full overflow-hidden ${
                          darkMode ? 'bg-slate-950' : 'bg-slate-100'
                        }`}>
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>

                        <p className={`text-[11px] leading-tight ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {skill.tag}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="mt-6 pt-4 border-t border-slate-800/50 flex flex-wrap gap-1.5">
                  {cat.skills.slice(0, 3).map((s, idx) => (
                    <span 
                      key={idx}
                      className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                        darkMode ? 'bg-slate-950 text-indigo-300' : 'bg-slate-100 text-indigo-600'
                      }`}
                    >
                      #{s.name.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state if search has no results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-indigo-400 underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
