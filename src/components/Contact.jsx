import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ darkMode }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedKey, setCopiedKey] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2500);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 800);
  };

  const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry - Shivraj Patil'
  )}&body=${encodeURIComponent(
    `Hi Shivraj,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Connect</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get in <span className="gradient-text-indigo">Touch</span>
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Interested in hiring me for software development internships, full-time opportunities, or discussing technical projects? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl ${
              darkMode ? 'bg-slate-900/80 border-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-2.5 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Contact Information</span>
              </h3>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-400">Email Me At</p>
                        <a
                          href={`mailto:${personal.email}`}
                          className={`text-xs sm:text-sm font-bold truncate block hover:text-indigo-400 transition-colors ${
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {personal.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => copyToClipboard(personal.email, 'email')}
                        className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        title="Copy Email"
                      >
                        {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <a
                        href={`mailto:${personal.email}`}
                        className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-indigo-400 transition-colors"
                        title="Send Mail"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                        <a
                          href={`tel:${personal.rawPhone}`}
                          className={`text-xs sm:text-sm font-bold block hover:text-emerald-400 transition-colors ${
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {personal.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => copyToClipboard(personal.phone, 'phone')}
                        className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        title="Copy Phone"
                      >
                        {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <a
                        href={`tel:${personal.rawPhone}`}
                        className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors"
                        title="Call Number"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className={`p-4 rounded-2xl border ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Current Location</p>
                      <p className={`text-xs sm:text-sm font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {personal.location}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-800/60">
                <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Connect on Social Profiles
                </p>

                <div className="grid grid-cols-2 gap-3">
                  
                  {/* GitHub Card */}
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all hover:scale-[1.02] ${
                      darkMode
                        ? 'bg-slate-950/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-white'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-slate-800 text-white">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">GitHub</p>
                      <p className="text-[11px] text-slate-400">View Repos</p>
                    </div>
                  </a>

                  {/* LinkedIn Card */}
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all hover:scale-[1.02] ${
                      darkMode
                        ? 'bg-slate-950/90 border-slate-800 hover:border-blue-500/40 hover:bg-slate-900 text-white'
                        : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-800'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">LinkedIn</p>
                      <p className="text-[11px] text-blue-400">Connect</p>
                    </div>
                  </a>

                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            
            <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl relative overflow-hidden ${
              darkMode ? 'bg-slate-900/80 border-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-lg'
            }`}>
              
              <h3 className={`text-xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Send Shivraj a Direct Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Have a question, job proposal, or want to collaborate? Fill out the form below.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-400">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out! Shivraj has received your message and will get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. rahul@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Software Developer Internship Opportunity"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message, project requirements, or job details here..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all resize-none ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                      }`}
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-600/30 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message Now</span>
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoLink}
                      className={`w-full sm:w-auto px-4 py-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                          : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                      }`}
                      title="Open in default email app"
                    >
                      <Mail className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Open in Mail App</span>
                    </a>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
