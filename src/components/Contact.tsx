import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenCVModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCVModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Inquiry message generator
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [opportunityType, setOpportunityType] = useState('Junior AI / ML Engineer');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity Inquiry: ${opportunityType} - ${senderCompany || senderName || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hello Revidya,\n\nMy name is ${senderName}${senderCompany ? ` from ${senderCompany}` : ''}.\n\nWe are interested in discussing opportunities regarding: ${opportunityType}.\n\nMessage:\n${message}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Open for Opportunities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Let's Build Something Intelligent.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            I'm open to opportunities in AI engineering, machine learning, computer vision, and data science. Feel free to reach out for professional opportunities, research collaboration, or technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Email Card */}
            <div className="neo-raised rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl neo-inset flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-9 h-9 rounded-xl neo-btn flex items-center justify-center text-slate-500 hover:text-blue-600 shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="neo-raised rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl neo-inset flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="w-9 h-9 rounded-xl neo-btn flex items-center justify-center text-slate-500 hover:text-blue-600 shrink-0"
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="neo-raised rounded-2xl p-5 sm:p-6 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl neo-inset flex items-center justify-center text-blue-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Location & Mobility
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  Open for local, remote, and international relocation
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Inquiry%20-%20Revidya%20Aprilla%20Sandiva`}
                className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl neo-btn-primary font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <button
                onClick={onOpenCVModal}
                className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl neo-btn font-semibold text-xs uppercase tracking-wider text-slate-800 hover:text-blue-600 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiries Composer */}
          <div className="lg:col-span-7">
            <div className="neo-raised rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/60">
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    Send an Opportunity Inquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pre-formats an email client dispatch directly to Revidya's inbox.
                  </p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <form onSubmit={handleSubmitInquiry} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="px-3.5 py-2.5 text-xs rounded-xl neo-inset bg-transparent border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AI Research Lab / Tech Enterprise"
                      value={senderCompany}
                      onChange={(e) => setSenderCompany(e.target.value)}
                      className="px-3.5 py-2.5 text-xs rounded-xl neo-inset bg-transparent border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Opportunity Role Type
                  </label>
                  <select
                    value={opportunityType}
                    onChange={(e) => setOpportunityType(e.target.value)}
                    className="px-3.5 py-2.5 text-xs rounded-xl neo-inset bg-[#E9EDF3] border-none text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Junior AI Engineer">Junior AI Engineer</option>
                    <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                    <option value="Computer Vision Engineer">Computer Vision Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Research Collaboration / Other">Research Collaboration / Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Project / Role Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe the role, problem domain, team, or inquiry..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="px-3.5 py-2.5 text-xs rounded-xl neo-inset bg-transparent border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Opens default email client with populated draft
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl neo-btn-primary font-semibold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Email client triggered. Revidya looks forward to connecting!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
