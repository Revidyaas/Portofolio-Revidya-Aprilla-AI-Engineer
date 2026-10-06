import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, TECHNICAL_SKILLS, CERTIFICATIONS } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assets';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
REVIDYA APRILLA SANDIVA
Computer Science Graduate | AI Engineer | Computer Vision Specialist
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}

EDUCATION:
${PERSONAL_INFO.university}, Indonesia (2022–2026)
${PERSONAL_INFO.degree} | GPA: ${PERSONAL_INFO.gpa} / 4.00
Relevant Coursework: ${PERSONAL_INFO.coursework.join(', ')}

RESEARCH & PROJECTS:
1. Foreign Object Detection on Conveyor Belts (Bachelor's Thesis, 2026)
- YOLOv11n object detection for identifying foreign objects on coal conveyor belts.
- Results: Test mAP@50: 0.836 | Test mAP@50-95: 0.628.
- Technologies: Python, PyTorch, Ultralytics YOLO, OpenCV, Roboflow, Google Colab.

2. Gold Price Forecasting (2025)
- Time-series modeling (SMA, WMA, ARIMA) evaluating historical trends and long-term price projections through 2040.
- Technologies: Python, Pandas, NumPy, Matplotlib.

3. TaskToDo (2024)
- Task management application with prioritization and Firebase backend/hosting.

EXPERIENCE:
PT. Satria Bahana Sarana - Intern (July – August 2024)
BEM KM FASILKOM UNSRI - Deputy, Dept. of Administration (2023–2024)

CERTIFICATIONS:
${CERTIFICATIONS.map(c => `- ${c.name} (${c.issuer}, ${c.period})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#E9EDF3] rounded-2xl neo-raised-lg p-6 sm:p-8 text-slate-800 border border-white/60 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg neo-inset flex items-center justify-center text-blue-600">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-base font-bold text-slate-900">
                Curriculum Vitae · Revidya Aprilla Sandiva
              </h2>
              <span className="text-[11px] text-slate-500">Official Candidate Document</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg neo-btn text-xs font-semibold flex items-center gap-1.5 text-slate-700"
              title="Copy plain text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? "Copied" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg neo-btn text-xs font-semibold flex items-center gap-1.5 text-slate-700"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={getAssetUrl('/Revidya_Aprilla_Sandiva_CV.pdf')}
              download="Revidya_Aprilla_Sandiva_CV.pdf"
              className="px-3.5 py-1.5 rounded-lg neo-btn-primary text-xs font-semibold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg neo-btn flex items-center justify-center text-slate-500 hover:text-slate-900 ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable/Readable CV Document Layout */}
        <div className="mt-6 bg-white rounded-xl p-6 sm:p-10 shadow-sm border border-slate-200/80 text-slate-800 font-sans leading-relaxed">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-5 mb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-blue-600 mt-1">
                Computer Science Graduate · AI Engineer · Computer Vision Specialist
              </p>
            </div>
            <div className="text-xs text-slate-600 flex flex-col sm:text-right gap-1 font-mono">
              <span>{PERSONAL_INFO.email}</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="font-bold text-sm text-slate-900">
                  {PERSONAL_INFO.university}, Indonesia
                </h3>
                <p className="text-xs text-slate-600">
                  {PERSONAL_INFO.degree} · <span className="font-bold text-blue-600">GPA: {PERSONAL_INFO.gpa} / 4.00</span>
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 mt-1 sm:mt-0">
                {PERSONAL_INFO.graduationYear}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              <span className="font-semibold text-slate-700">Relevant Coursework:</span> {PERSONAL_INFO.coursework.join(', ')}
            </p>
          </section>

          {/* Core Technical Expertise */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              Technical Expertise
            </h2>
            <div className="flex flex-col gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-900">Data Science & ML: </span>
                <span className="text-slate-600">
                  {TECHNICAL_SKILLS[0].skills.join(', ')}
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900">AI & Computer Vision: </span>
                <span className="text-slate-600">
                  {TECHNICAL_SKILLS[1].skills.join(', ')}
                </span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Programming & Frameworks: </span>
                <span className="text-slate-600">
                  {TECHNICAL_SKILLS[2].skills.join(', ')}
                </span>
              </div>
            </div>
          </section>

          {/* Academic Research & Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              Academic Research & Projects
            </h2>

            {/* Project 1 */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-sm text-slate-900">
                  {PROJECTS[0].title} <span className="font-normal text-xs text-slate-500">(Bachelor's Thesis)</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">{PROJECTS[0].year}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                {PROJECTS[0].description}
              </p>
              <ul className="list-disc list-inside text-xs text-slate-600 mt-1.5 space-y-0.5">
                <li>Preprocessed and augmented conveyor belt image datasets, balancing labels under varied lighting conditions.</li>
                <li>Trained and validated ultra-lightweight YOLOv11n architecture using PyTorch and Ultralytics.</li>
                <li>Attained Test mAP@50: <strong>0.836</strong> and Test mAP@50–95: <strong>0.628</strong> for industrial foreign object detection.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-sm text-slate-900">
                  {PROJECTS[1].title} <span className="font-normal text-xs text-slate-500">(Time-Series ML)</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">{PROJECTS[1].year}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                {PROJECTS[1].description}
              </p>
              <ul className="list-disc list-inside text-xs text-slate-600 mt-1.5 space-y-0.5">
                <li>Implemented SMA, WMA, and ARIMA autoregressive models; analyzed long-term price projections through 2040.</li>
                <li>Evaluated predictive residuals using MAE, MSE, and MAPE metrics.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-sm text-slate-900">
                  {PROJECTS[2].title} <span className="font-normal text-xs text-slate-500">(Web Development)</span>
                </h3>
                <span className="text-xs font-mono text-slate-500">{PROJECTS[2].year}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Built CRUD-based task prioritization application with real-time Firebase Firestore persistence and Firebase Hosting.
              </p>
            </div>
          </section>

          {/* Professional & Leadership Experience */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              Experience & Leadership
            </h2>
            
            <div className="mb-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-sm text-slate-900">
                  PT. Satria Bahana Sarana — Intern
                </h3>
                <span className="text-xs font-mono text-slate-500">July – August 2024</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Supported network infrastructure setup, troubleshooting, workstation maintenance, and technical data management reporting.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-bold text-sm text-slate-900">
                  BEM KM FASILKOM UNSRI — Deputy, Department of Administration
                </h3>
                <span className="text-xs font-mono text-slate-500">2023 – 2024</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Supervised administrative data management; served as Secretary II for Technology Euphoria national tech event.
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
              Certifications & Training
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold shrink-0">·</span>
                  <div>
                    {cert.fileUrl ? (
                      <a
                        href={getAssetUrl(cert.fileUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-900 hover:text-blue-600 hover:underline"
                      >
                        {cert.name} ↗
                      </a>
                    ) : (
                      <span className="font-semibold text-slate-900">{cert.name}</span>
                    )}
                    <span className="text-slate-500 block text-[11px]">{cert.issuer} · {cert.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
