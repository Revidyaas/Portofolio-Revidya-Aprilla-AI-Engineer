import React, { useEffect } from 'react';
import { X, AlertCircle, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assets';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#E9EDF3] rounded-2xl neo-raised-lg p-6 sm:p-8 text-slate-800 border border-white/60 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl neo-btn flex items-center justify-center text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-2 pr-10 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <span>PROJECT {project.projectNumber}</span>
            <span>·</span>
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
            {project.description}
          </p>
        </div>

        {/* Modal Body: Systematic Case Study Sections */}
        <div className="flex flex-col gap-8 py-6">
          
          {/* 1. Overview */}
          <section className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              1. Overview
            </h3>
            <div className="neo-surface rounded-xl p-4 sm:p-5 text-sm text-slate-700 leading-relaxed">
              {project.caseStudy.overview}
            </div>
          </section>

          {/* 2. Problem Statement */}
          <section className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              2. Problem Statement
            </h3>
            <div className="neo-surface rounded-xl p-4 sm:p-5 text-sm text-slate-700 leading-relaxed">
              {project.caseStudy.problem}
            </div>
          </section>

          {/* 3. Methodology */}
          <section className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              3. Research & Technical Methodology
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {project.caseStudy.methodologyDetail.map((step, idx) => (
                <div key={idx} className="neo-inset rounded-xl p-3.5 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Implementation */}
          <section className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              4. Technical Implementation
            </h3>
            <div className="neo-surface rounded-xl p-4 sm:p-5 text-sm text-slate-700 leading-relaxed">
              {project.caseStudy.implementation}
            </div>
          </section>

          {/* 5. Results & Metrics */}
          <section className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              5. Results & Evaluation Metrics
            </h3>
            
            {project.results && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.results.metricLabel1 && (
                  <div className="neo-raised rounded-xl p-4 flex flex-col">
                    <span className="text-xs text-slate-500">{project.results.metricLabel1}</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-blue-600 font-mono mt-1">
                      {project.results.metricValue1}
                    </span>
                  </div>
                )}
                {project.results.metricLabel2 && (
                  <div className="neo-raised rounded-xl p-4 flex flex-col">
                    <span className="text-xs text-slate-500">{project.results.metricLabel2}</span>
                    <span className="text-xl sm:text-2xl font-extrabold text-blue-600 font-mono mt-1">
                      {project.results.metricValue2}
                    </span>
                  </div>
                )}
                <div className="neo-raised rounded-xl p-4 flex flex-col col-span-2 sm:col-span-1">
                  <span className="text-xs text-slate-500">Target Object</span>
                  <span className="text-sm font-bold text-slate-800 mt-1">
                    Conveyor Foreign Debris
                  </span>
                </div>
              </div>
            )}

            {project.id === 'foreign-object-detection' && (
              <div className="w-full neo-inset rounded-xl p-4 flex flex-col gap-3 bg-slate-950 text-white">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-blue-400 font-semibold">DOKUMENTASI HASIL EVALUASI & INFERENSI YOLOv11n</span>
                  <span>UNSRI 2026</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { src: '/images_for_document/GUOBEI_objdet_CGUF_0012771.jpg', label: 'Conveyor Frame 12771' },
                    { src: '/images_for_document/GUOBEI_objdet_CGUF_0012812.jpg', label: 'Conveyor Frame 12812' },
                    { src: '/images_for_document/GUOBEI_objdet_CGUF_0012814.jpg', label: 'Conveyor Frame 12814' },
                    { src: '/images_for_document/GUOBEI_objdet_CGUF_0012815.jpg', label: 'Conveyor Frame 12815' },
                    { src: '/images_for_document/BoxP_curve.png', label: 'Kurva Box-P' },
                    { src: '/images_for_document/confusion_matrix_normalized.png', label: 'Confusion Matrix' },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={getAssetUrl(item.src)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-lg overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all aspect-[4/3] flex flex-col justify-end p-2"
                    >
                      <img
                        src={getAssetUrl(item.src)}
                        alt={item.label}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <span className="relative z-10 text-[10px] font-mono text-white truncate">
                        {item.label} ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="neo-surface rounded-xl p-4 sm:p-5 text-sm text-slate-700 leading-relaxed">
              {project.caseStudy.resultsDetail}
            </div>
          </section>

          {/* 6. Limitations & Future Exploration */}
          <section className="flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
              6. Scope Limitations & Research Constraints
            </h3>
            <div className="neo-inset rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-slate-600 leading-relaxed italic">
              {project.caseStudy.limitations}
            </div>
          </section>

          {/* Technology Stack Tags */}
          <section className="flex flex-col gap-2 pt-2 border-t border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-lg neo-raised-sm text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-200">
          <div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl neo-btn-primary text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl neo-btn text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
