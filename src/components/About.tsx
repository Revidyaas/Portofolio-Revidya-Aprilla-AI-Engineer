import React from 'react';
import { Award, BookOpen, Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assets';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Background & Research Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Primary Bio Statement */}
            <div className="neo-raised rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {PERSONAL_INFO.aboutText}
              </p>
            </div>

            {/* Three Concise Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PERSONAL_INFO.highlights.map((item, idx) => (
                <div key={idx} className="neo-raised-sm rounded-xl p-5 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-lg neo-inset flex items-center justify-center text-blue-600 font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Competencies (Curated strengths) */}
            <div className="neo-inset rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Core Analytical Competencies
                </span>
                <span className="text-[11px] text-slate-500 font-mono">Foundations</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {PERSONAL_INFO.coreCompetencies.map((comp, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-slate-700 px-3 py-1.5 rounded-lg bg-white/70 border border-slate-200/50 shadow-sm"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Technical Visual & Academic Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Academic Credential Card */}
            <div className="neo-raised rounded-2xl p-6 sm:p-7 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl neo-raised-sm p-1.5 flex items-center justify-center shrink-0 bg-[#E9EDF3]">
                    <img
                      src={getAssetUrl('/logo_unsri.png')}
                      alt="Logo Resmi Universitas Sriwijaya (UNSRI)"
                      className="w-full h-full object-contain drop-shadow-sm hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">
                      {PERSONAL_INFO.university}
                    </h4>
                    <p className="text-xs text-slate-500">
                      Faculty of Computer Science
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-extrabold text-blue-600 font-mono">
                    3.89
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">GPA / 4.00</span>
                </div>
              </div>

              {/* Academic Highlights & Research Specialization Box */}
              <div className="w-full rounded-2xl neo-inset p-4 sm:p-5 flex flex-col gap-4 bg-gradient-to-br from-slate-50/70 to-blue-50/40 border border-slate-200/60">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                      Fokus Riset & Spesialisasi
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-blue-600/10 text-blue-700 border border-blue-200/80">
                    S.Kom (Cum Laude)
                  </span>
                </div>

                {/* Thesis Summary Card */}
                <div className="neo-surface rounded-xl p-3.5 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="font-semibold text-blue-600 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      <span>PENELITIAN SKRIPSI (TUGAS AKHIR)</span>
                    </span>
                    <span className="text-slate-400">2026</span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                    Deteksi Benda Asing pada Conveyor Belt Menggunakan YOLOv11n
                  </h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Pengembangan sistem visi komputer ringan (*lightweight deep learning*) untuk melokalisasi material asing secara akurat pada aliran konveyor industri batubara guna mencegah kerusakan mesin operasional.
                  </p>
                </div>

                {/* Key Research Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="neo-raised rounded-xl p-2.5 flex flex-col justify-center">
                    <span className="text-[10px] font-medium text-slate-500">Test mAP@50</span>
                    <span className="text-sm font-extrabold text-blue-600 font-mono mt-0.5">
                      83.6%
                    </span>
                  </div>
                  <div className="neo-raised rounded-xl p-2.5 flex flex-col justify-center">
                    <span className="text-[10px] font-medium text-slate-500">mAP@50–95</span>
                    <span className="text-sm font-extrabold text-blue-600 font-mono mt-0.5">
                      62.8%
                    </span>
                  </div>
                  <div className="neo-raised rounded-xl p-2.5 flex flex-col justify-center">
                    <span className="text-[10px] font-medium text-slate-500">Arsitektur</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800 font-mono mt-0.5">
                      YOLOv11n
                    </span>
                  </div>
                </div>

                {/* Department & Accreditation Note */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1.5 border-t border-slate-200/60">
                  <span className="truncate pr-2">Fakultas Ilmu Komputer · Universitas Sriwijaya</span>
                  <span className="text-emerald-600 font-semibold flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Akreditasi Unggul</span>
                  </span>
                </div>
              </div>

              {/* Degree Details */}
              <div className="flex flex-col gap-2 pt-1 text-xs">
                <span className="font-semibold text-slate-700">
                  Relevant Academic Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] text-slate-600 px-2 py-1 rounded bg-slate-200/60 font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
