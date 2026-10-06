import React from 'react';
import { Briefcase, Users, GraduationCap, Calendar, CheckCircle2, Award } from 'lucide-react';
import { PROFESSIONAL_EXPERIENCE, LEADERSHIP_EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assets';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Work History & Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Experience & Education
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Operational technology support, national-scale student leadership, and high-honor academic foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Work & Leadership Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Professional Internship Card */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Professional Experience
                </h3>
              </div>

              {PROFESSIONAL_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="neo-raised rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-3">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {exp.organization}
                      </h4>
                      <p className="text-xs font-semibold text-blue-600">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Key Responsibilities:
                    </span>
                    <ul className="flex flex-col gap-1.5 text-xs text-slate-600">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Leadership & Organizational Experience */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Leadership & Organizational Experience
                </h3>
              </div>

              {LEADERSHIP_EXPERIENCE.map((lead, idx) => (
                <div key={idx} className="neo-raised rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-3">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {lead.organization}
                      </h4>
                      <p className="text-xs font-semibold text-blue-600">
                        {lead.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{lead.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lead.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Key Highlights:
                    </span>
                    <ul className="flex flex-col gap-1.5 text-xs text-slate-600">
                      {lead.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Polished Education Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Academic Background
              </h3>
            </div>

            <div className="neo-raised rounded-2xl p-6 sm:p-7 flex flex-col gap-6 sticky top-24">
              {/* Institution Title */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl neo-inset p-1.5 flex items-center justify-center shrink-0 bg-[#E9EDF3]">
                    <img
                      src={getAssetUrl('/logo_unsri.png')}
                      alt="Logo Universitas Sriwijaya"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900">
                      {PERSONAL_INFO.university}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Palembang / Indralaya, South Sumatera, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Degree & Year */}
              <div className="neo-inset rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    {PERSONAL_INFO.degree}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Faculty of Computer Science
                  </span>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs font-bold text-blue-600 block">
                    {PERSONAL_INFO.graduationYear}
                  </span>
                  <span className="text-[10px] text-slate-400">Graduate</span>
                </div>
              </div>

              {/* GPA Highlight */}
              <div className="neo-surface rounded-xl p-4 flex items-center justify-between border border-blue-500/20">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-blue-600" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      Cumulative GPA
                    </span>
                    <span className="text-[10px] text-slate-500">Graduated with High Academic Distinction</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-blue-600 font-mono">
                    {PERSONAL_INFO.gpa}
                  </span>
                  <span className="text-[10px] text-slate-400 block">/ 4.00 Scale</span>
                </div>
              </div>

              {/* Coursework list */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Core Computer Science Coursework:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {PERSONAL_INFO.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="neo-inset rounded-lg p-2.5 text-xs font-medium text-slate-700 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thesis Callout */}
              <div className="border-t border-slate-200/50 pt-4 text-xs text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-700">Bachelor's Thesis:</span> Focus on lightweight YOLOv11n object detection on conveyor belt systems in industrial operations.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
