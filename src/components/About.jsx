import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Mail, 
  Phone, 
  CheckCircle, 
  Code, 
  Server, 
  Cloud, 
  Cpu, 
  Sparkles, 
  Copy, 
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ darkMode }) {
  const { personal } = portfolioData;
  const [copiedKey, setCopiedKey] = useState('');

  const copyText = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2500);
  };

  const focusPillars = [
    {
      title: "Full-Stack & Web Engineering",
      desc: "Architecting responsive, user-friendly frontend applications using React.js, Next.js, and Tailwind CSS paired with high-performance APIs.",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend & Distributed Systems",
      desc: "Building robust RESTful services, JWT-based security architectures, and scalable data models with Node.js, Express.js, and Python FastAPI.",
      icon: Server,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI Systems & Multimodal RAG",
      desc: "Architecting high-scale RAG pipelines (DocRAG) with ChromaDB, hybrid BM25 search, Gemini Vision OCR, and low-latency Groq LLM streaming.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      desc: "Containerizing services with Docker and deploying microservices on AWS (EC2, RDS PostgreSQL, S3) with automated CI/CD workflows.",
      icon: Cloud,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Story</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About <span className="gradient-text-indigo">Me</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Engineering student, full-stack builder, and creative problem solver based in Pune, India.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Detailed Bio & Profile Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl ${
              darkMode ? 'bg-slate-900/80 border-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2.5 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Passionate Computer Engineering Student</span>
              </h3>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {personal.aboutDetailed.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Quick Info Grid */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">College & Degree</p>
                      <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        DYPCOE Akurdi (BE Comp)
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Academic Standing</p>
                      <p className={`text-xs font-bold text-amber-400`}>
                        9.1 / 10.0 CGPA
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate pr-2">
                      <p className="text-[11px] text-slate-400">Email Address</p>
                      <p className={`text-xs font-bold truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {personal.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText(personal.email, 'email_card')}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedKey === 'email_card' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Phone Number</p>
                      <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {personal.phone}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText(personal.phone, 'phone_card')}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedKey === 'phone_card' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Key Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className={`text-lg font-bold px-1 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              What I Specialize In
            </h3>

            {focusPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:translate-x-1.5 ${
                    darkMode
                      ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm sm:text-base font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {pillar.title}
                      </h4>
                      <p className={`mt-1 text-xs sm:text-sm leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
