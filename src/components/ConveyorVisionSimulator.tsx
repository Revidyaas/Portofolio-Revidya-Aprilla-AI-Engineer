import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, X, Play, Pause, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface ConveyorVisionSimulatorProps {
  className?: string;
  isCompact?: boolean;
}

interface DocumentImage {
  id: string;
  src: string;
  fallbackSrc: string;
  title: string;
  category: 'Thesis Project' | 'Evaluation Metrics';
  badge: string;
  description: string;
}

const DOCUMENT_IMAGES: DocumentImage[] = [
  {
    id: 'frame-12771',
    src: '/images_for_document/GUOBEI_objdet_CGUF_0012771.jpg',
    fallbackSrc: '/images%20for%20document/GUOBEI_objdet_CGUF_0012771.jpg',
    title: 'Conveyor Foreign Object Detection (Frame 12771)',
    category: 'Thesis Project',
    badge: 'Foreign Object · FRAME 12771',
    description: 'Bulk coal material stream with foreign object contaminant localization on active conveyor belt.',
  },
  {
    id: 'frame-12812',
    src: '/images_for_document/GUOBEI_objdet_CGUF_0012812.jpg',
    fallbackSrc: '/images%20for%20document/GUOBEI_objdet_CGUF_0012812.jpg',
    title: 'Conveyor Foreign Object Detection (Frame 12812)',
    category: 'Thesis Project',
    badge: 'Foreign Object · FRAME 12812',
    description: 'Real-time visual monitoring under varied industrial chute illumination and conveyor transit velocity.',
  },
  {
    id: 'frame-12814',
    src: '/images_for_document/GUOBEI_objdet_CGUF_0012814.jpg',
    fallbackSrc: '/images%20for%20document/GUOBEI_objdet_CGUF_0012814.jpg',
    title: 'Conveyor Foreign Object Detection (Frame 12814)',
    category: 'Thesis Project',
    badge: 'Foreign Object · FRAME 12814',
    description: 'Consecutive detection sequence tracking irregular non-coal debris geometry.',
  },
  {
    id: 'frame-12815',
    src: '/images_for_document/GUOBEI_objdet_CGUF_0012815.jpg',
    fallbackSrc: '/images%20for%20document/GUOBEI_objdet_CGUF_0012815.jpg',
    title: 'Conveyor Foreign Object Detection (Frame 12815)',
    category: 'Thesis Project',
    badge: 'Foreign Object · FRAME 12815',
    description: 'High-speed transit inspection verifying tracking continuity across conveyor rollers.',
  },
  {
    id: 'box-p',
    src: '/images_for_document/BoxP_curve.png',
    fallbackSrc: '/images%20for%20document/BoxP_curve.png',
    title: 'Precision-Confidence Evaluation Curve (BoxP)',
    category: 'Evaluation Metrics',
    badge: 'METRICS · BOX-P CURVE',
    description: 'Experimental precision trajectory across confidence thresholds for lightweight YOLOv11n model.',
  },
  {
    id: 'confusion-matrix',
    src: '/images_for_document/confusion_matrix_normalized.png',
    fallbackSrc: '/images%20for%20document/confusion_matrix_normalized.png',
    title: 'Normalized Confusion Matrix',
    category: 'Evaluation Metrics',
    badge: 'METRICS · CONFUSION MATRIX',
    description: 'Validation matrix quantifying true positive detections and false alarm suppression on test split.',
  },
  {
    id: 'inference-overview',
    src: '/skripsi_hasil_inference.png',
    fallbackSrc: '/skripsi%20hasil%20inference.png',
    title: 'YOLOv11n Inference Output & Bounding Boxes',
    category: 'Evaluation Metrics',
    badge: 'INFERENCE · mAP@50: 0.836',
    description: 'Evaluated detection outputs displaying foreign object bounding coordinates and confidence labels.',
  }
];

export const ConveyorVisionSimulator: React.FC<ConveyorVisionSimulatorProps> = ({
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 3800; // milliseconds per slide
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play slideshow timer
  useEffect(() => {
    if (!isAutoPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / SLIDE_DURATION) * 100;

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % DOCUMENT_IMAGES.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isHovered, currentIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % DOCUMENT_IMAGES.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + DOCUMENT_IMAGES.length) % DOCUMENT_IMAGES.length);
  };

  const handleSelectSlide = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setProgress(0);
    setCurrentIndex(idx);
  };

  const currentImage = DOCUMENT_IMAGES[currentIndex];

  return (
    <div className={`w-full rounded-2xl neo-raised p-4 sm:p-5 flex flex-col gap-4 text-slate-800 ${className}`}>
      {/* Gallery Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
            Document Image Viewer
          </span>
          <span className="text-slate-400 text-xs">·</span>
          <span className="text-xs font-mono text-slate-500">YOLOv11n Research</span>
        </div>

        {/* Viewport Controls */}
        <div className="flex items-center gap-1.5 text-xs">
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="px-2.5 py-1 rounded-md neo-btn text-[11px] font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
            title="Perbesar gambar dokumen (Resolusi Penuh)"
            aria-label="Perbesar gambar"
          >
            <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Resolusi Penuh</span>
          </button>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div
        className="relative w-full aspect-[16/10] bg-[#0A0E17] rounded-xl overflow-hidden shadow-inner border border-slate-700/40 select-none group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Document Images Rotating Slideshow */}
        <div
          className="relative w-full h-full cursor-pointer flex items-center justify-center bg-slate-950"
          onClick={() => setIsLightboxOpen(true)}
        >
          {/* Main Image with smooth fade-in */}
          <img
            key={currentImage.id}
            src={getAssetUrl(currentImage.src)}
            alt={currentImage.title}
            className="w-full h-full object-contain transition-opacity duration-300 animate-in fade-in"
            onError={(e) => {
              (e.target as HTMLImageElement).src = getAssetUrl(currentImage.fallbackSrc);
            }}
          />

          {/* Click to expand hover hint */}
          <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs pointer-events-none">
            <ZoomIn className="w-4 h-4 text-blue-400" />
            <span>Klik untuk melihat resolusi penuh</span>
          </div>

          {/* Top Left Status Badge */}
          <div className="absolute top-2.5 left-2.5 font-mono text-[10px] text-slate-200 bg-slate-900/85 backdrop-blur-sm border border-slate-700/60 rounded px-2.5 py-1.5 flex flex-col gap-0.5 pointer-events-none shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">CATEGORY:</span>
              <span className="text-emerald-400 font-semibold">{currentImage.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">TAG:</span>
              <span className="text-blue-300">{currentImage.badge}</span>
            </div>
          </div>

          {/* Top Right Counter & Slide Controls */}
          <div
            className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono text-[10px] text-slate-200 bg-slate-900/85 backdrop-blur-sm border border-slate-700/60 rounded px-2 py-1 flex items-center gap-1.5 shadow-md">
              <span className="text-blue-400 font-bold">{currentIndex + 1}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">{DOCUMENT_IMAGES.length}</span>
            </div>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-7 h-7 rounded bg-slate-900/85 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 flex items-center justify-center transition-colors shadow-md cursor-pointer"
              title={isAutoPlaying ? "Jeda slideshow" : "Putar slideshow"}
              aria-label={isAutoPlaying ? "Jeda slideshow" : "Putar slideshow"}
            >
              {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-emerald-400" />}
            </button>
          </div>

          {/* Previous & Next Floating Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-slate-700/60 shadow-lg z-20 cursor-pointer"
            aria-label="Gambar sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-slate-700/60 shadow-lg z-20 cursor-pointer"
            aria-label="Gambar selanjutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-2 left-2.5 right-2.5 font-mono text-[10px] text-slate-300 bg-slate-900/85 backdrop-blur-sm border border-slate-700/40 rounded px-2.5 py-1.5 flex items-center justify-between pointer-events-none shadow-md">
            <span className="text-slate-200 font-semibold truncate pr-2">
              {currentImage.title}
            </span>
            <span className="text-blue-400 text-xs shrink-0">Perbesar ⤢</span>
          </div>

          {/* Slideshow Progress Bar */}
          {isAutoPlaying && !isHovered && (
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-800">
              <div
                className="h-full bg-blue-500 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Dot Strip / Quick Slide Selectors */}
      <div className="flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {DOCUMENT_IMAGES.map((img, idx) => (
            <button
              key={img.id}
              onClick={(e) => handleSelectSlide(idx, e)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'w-7 bg-blue-600'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              title={img.title}
              aria-label={`Pilih gambar ${idx + 1}`}
            />
          ))}
        </div>

        <div className="text-[11px] text-slate-500 font-mono flex items-center gap-2">
          <span>Rotasi Otomatis: {isAutoPlaying ? "Aktif (3.8s)" : "Jeda"}</span>
        </div>
      </div>

      {/* Metrics Row Below Viewport */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="neo-inset rounded-xl p-2.5 flex flex-col">
          <span className="text-[11px] font-medium text-slate-500">Arsitektur</span>
          <span className="text-xs sm:text-sm font-bold text-slate-800 font-mono mt-0.5">
            YOLOv11n
          </span>
        </div>
        <div className="neo-inset rounded-xl p-2.5 flex flex-col">
          <span className="text-[11px] font-medium text-slate-500">Test mAP@50</span>
          <span className="text-xs sm:text-sm font-bold text-blue-600 font-mono mt-0.5">
            0.836
          </span>
        </div>
        <div className="neo-inset rounded-xl p-2.5 flex flex-col">
          <span className="text-[11px] font-medium text-slate-500">Test mAP@50–95</span>
          <span className="text-xs sm:text-sm font-bold text-blue-600 font-mono mt-0.5">
            0.628
          </span>
        </div>
        <div className="neo-inset rounded-xl p-2.5 flex flex-col">
          <span className="text-[11px] font-medium text-slate-500">Dokumen Galeri</span>
          <span className="text-xs sm:text-sm font-bold text-slate-800 font-mono mt-0.5">
            {DOCUMENT_IMAGES.length} Foto & Grafik
          </span>
        </div>
      </div>

      {/* Explicit Caption */}
      <p className="text-[11px] text-slate-600 italic leading-relaxed text-center sm:text-left">
        * Menampilkan dokumen asli foto inspeksi conveyor belt dan grafik evaluasi performa model YOLOv11n. 
      </p>

      {/* Lightbox Modal for High Resolution Inspection */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3.5 bg-slate-900 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2 min-w-0 pr-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 truncate">
                  {currentImage.title}
                </span>
                <span className="text-slate-500 text-xs">·</span>
                <span className="text-xs text-slate-400 font-mono shrink-0">
                  {currentIndex + 1} / {DOCUMENT_IMAGES.length}
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white shrink-0 cursor-pointer"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Area with Nav buttons */}
            <div className="relative p-2 sm:p-4 overflow-auto flex items-center justify-center flex-1 bg-black min-h-[50vh] max-h-[75vh]">
              <img
                src={getAssetUrl(currentImage.src)}
                alt={currentImage.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />

              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center border border-slate-700 shadow-lg cursor-pointer"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center border border-slate-700 shadow-lg cursor-pointer"
                aria-label="Gambar selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer with details & full tab link */}
            <div className="p-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2">
              <span className="text-slate-400">{currentImage.description}</span>
              <a
                href={getAssetUrl(currentImage.src)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-semibold flex items-center gap-1 shrink-0"
              >
                <span>Buka file asli di tab baru</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
