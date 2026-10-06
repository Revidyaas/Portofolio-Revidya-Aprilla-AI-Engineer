import React, { useState } from 'react';
import { Award, ShieldCheck, Calendar, FileText, ExternalLink, X, Download } from 'lucide-react';
import { CERTIFICATIONS, Certification } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assets';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Professional Credentials & Continuous Learning
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Certifications & Training
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Certified technical proficiencies across AI computing infrastructure, enterprise foundation models, network engineering, and executive problem-solving. Dokumen sertifikat resmi dapat dilihat dan diunduh langsung.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="neo-raised rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-5 transition-all hover:translate-y-[-2px] group"
            >
              <div className="flex flex-col gap-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl neo-inset flex items-center justify-center text-blue-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {cert.description && (
                  <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Card Footer: Verified Badge & Action Button to View/Open PDF */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200/60 text-xs">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Sertifikat Terverifikasi</span>
                </div>

                {cert.fileUrl && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="px-3 py-1.5 rounded-lg neo-btn text-[11px] font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1.5 transition-colors cursor-pointer"
                      title={`Lihat pratinjau sertifikat ${cert.name}`}
                    >
                      <FileText className="w-3 h-3 text-blue-600" />
                      <span>Pratinjau</span>
                    </button>

                    <a
                      href={getAssetUrl(cert.fileUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg neo-btn-primary text-[11px] font-semibold flex items-center gap-1.5 shadow-sm hover:scale-[1.02] transition-all"
                      title={`Buka sertifikat ${cert.name} di tab baru`}
                    >
                      <span>Buka PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && selectedCert.fileUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#E9EDF3] rounded-2xl neo-raised-lg p-5 sm:p-6 flex flex-col gap-4 border border-white/60 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5 min-w-0 pr-4">
                <div className="w-8 h-8 rounded-lg neo-inset flex items-center justify-center text-blue-600 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 id="cert-modal-title" className="text-sm font-bold text-slate-900 truncate">
                    {selectedCert.name}
                  </h3>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {selectedCert.issuer} · {selectedCert.period}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={getAssetUrl(selectedCert.fileUrl)}
                  download
                  className="px-3 py-1.5 rounded-lg neo-btn text-xs font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1.5"
                  title="Unduh PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Unduh</span>
                </a>

                <a
                  href={getAssetUrl(selectedCert.fileUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg neo-btn-primary text-xs font-semibold flex items-center gap-1.5"
                  title="Buka di tab baru"
                >
                  <span>Tab Baru</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-lg neo-btn flex items-center justify-center text-slate-500 hover:text-slate-900"
                  aria-label="Tutup pratinjau sertifikat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Frame */}
            <div className="relative w-full aspect-[4/3] sm:h-[68vh] bg-slate-900 rounded-xl overflow-hidden border border-slate-300/60 shadow-inner">
              <iframe
                src={`${getAssetUrl(selectedCert.fileUrl)}#toolbar=0&navpanes=0&scrollbar=1`}
                title={`Dokumen Sertifikat: ${selectedCert.name}`}
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer Note */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
              <span>Dokumen Sertifikat Resmi · {selectedCert.issuer}</span>
              <a
                href={getAssetUrl(selectedCert.fileUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                Buka PDF langsung ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
