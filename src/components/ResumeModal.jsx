import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Award,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, darkMode }) {
  if (!isOpen) return null;

  const { personal, education, skills, experience, projects, certifications, extracurriculars } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Dialog Card */}
      <div className={`relative max-w-4xl w-full my-auto rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[95vh] ${
        darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>

        {/* Modal Top Action Toolbar */}
        <div className={`px-6 py-4 border-b flex items-center justify-between flex-shrink-0 ${
          darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono ml-2 font-bold opacity-75">
              Shivraj_Patil_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left bg-white text-slate-900 print:p-0 print:m-0">
          
          {/* Header */}
          <div className="text-center border-b pb-6 border-slate-200">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {personal.name}
            </h1>
            <p className="text-sm font-bold text-indigo-700 uppercase tracking-wider mt-1">
              Bachelor of Computer Engineering, DYPCOE, Akurdi
            </p>

            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-3 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {personal.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-400" />
                {personal.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-400" />
                {personal.email}
              </span>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="text-indigo-600 font-bold hover:underline">
                github.com/Shivraj-29
              </a>
              <span>•</span>
              <span className="text-indigo-600 font-bold">LinkedIn</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {personal.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2.5 font-mono">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <p><strong className="text-slate-900">AI, RAG & LLMs:</strong> RAG Systems, ChromaDB (Vector DB), Hybrid Search (BM25 + Dense RRF), Gemini Vision OCR, Sentence Transformers, Groq API, LLM Streaming</p>
              <p><strong className="text-slate-900">Programming:</strong> Java, JavaScript, SQL, Python</p>
              <p><strong className="text-slate-900">Frontend:</strong> React.js, Next.js, HTML5, CSS3, Tailwind CSS, Responsive Web Design</p>
              <p><strong className="text-slate-900">Backend:</strong> Node.js, Express.js, FastAPI, REST API Development, JWT Authentication, Backend Development</p>
              <p><strong className="text-slate-900">Databases:</strong> ChromaDB, MongoDB, PostgreSQL, MySQL, SQLModel, Database Management, CRUD Operations</p>
              <p><strong className="text-slate-900">Cloud & DevOps:</strong> AWS (EC2, RDS, S3), Docker, Cloud Deployment, Vercel, Render, Git, GitHub, Version Control</p>
              <p><strong className="text-slate-900">Core CS:</strong> Data Structures and Algorithms, OOP, DBMS, Operating Systems, Computer Networks</p>
              <p><strong className="text-slate-900">Tools:</strong> Postman, MongoDB Atlas, VS Code</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3 font-mono">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                  <span>D. Y. Patil College of Engineering, Akurdi</span>
                  <span className="font-mono text-xs text-slate-600">2023 – 2027</span>
                </div>
                <div className="text-xs text-slate-700 font-medium">
                  Bachelor of Engineering in Computer Engineering | <strong className="text-indigo-700">CGPA: 9.1 / 10.0</strong>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                  <span>Higher Secondary Certificate (HSC)</span>
                  <span className="font-mono text-xs text-slate-600">2023</span>
                </div>
                <div className="text-xs text-slate-700">
                  Maharashtra State Board | 73.33% | <strong className="text-indigo-700">MHT-CET: 94.8 percentile</strong>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                  <span>Secondary School Certificate (SSC)</span>
                  <span className="font-mono text-xs text-slate-600">2021</span>
                </div>
                <div className="text-xs text-slate-700">
                  Maharashtra State Board | 74.5%
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3 font-mono">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                    <span>
                      {exp.role} | {exp.company}
                      {exp.isCurrent && <span className="ml-2 text-emerald-600 text-xs font-bold">[Ongoing]</span>}
                    </span>
                    <span className="font-mono text-xs text-slate-600">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 mt-1 pl-1">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-3 font-mono">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm text-slate-900">
                    <span>
                      {proj.title}
                      <span className="ml-2 text-indigo-700 text-xs font-normal">[{proj.demoLabel}] [GitHub]</span>
                    </span>
                    <span className="font-mono text-xs text-slate-600">{proj.year}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mb-1">
                    [ {proj.tech.join(' · ')} ]
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Certifications
            </h2>
            <p className="text-xs text-slate-700">
              • <strong>Oracle</strong> – Generative AI, LLMs, RAG & AI Agents
            </p>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <h2 className="text-xs font-extrabold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Extracurricular Activities
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <p>• <strong>Mini Project Exhibition, DYPCOE</strong> – Collaborated in a team-based hackathon, demonstrating teamwork and problem-solving.</p>
              <p>• <strong>Problem Solving</strong> – Solved 150+ coding problems combined on LeetCode and GeeksforGeeks, strengthening data structures and algorithmic problem-solving skills.</p>
              <p>• <strong>Academic Achievement</strong> – Maintained a CGPA of 9.1/10.0 in Computer Engineering.</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t flex justify-end gap-3 flex-shrink-0 ${
          darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md transition-all"
          >
            Print / Save as PDF
          </button>
        </div>

      </div>
    </div>
  );
}
