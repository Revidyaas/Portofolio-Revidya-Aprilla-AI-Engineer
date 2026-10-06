import React from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ConveyorVisionSimulator } from './ConveyorVisionSimulator';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Eyebrow - Clean unboxed metadata with dot separators */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>{PERSONAL_INFO.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
              {PERSONAL_INFO.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Trust Markers & Availability (Zero-Pill: Clean unboxed metadata) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-emerald-700 font-semibold">
                  {PERSONAL_INFO.availability}
                </span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-mono">
                <span className="text-slate-500">GPA</span>
                <span className="font-bold text-slate-800">{PERSONAL_INFO.gpa}</span>
              </div>
            </div>

            {/* Two Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="px-6 py-3.5 rounded-xl neo-btn-primary font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="px-6 py-3.5 rounded-xl neo-btn font-semibold text-xs sm:text-sm uppercase tracking-wider text-slate-800 hover:text-blue-600 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Academic Heritage Footnote */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span className="font-semibold text-slate-700">{PERSONAL_INFO.university}</span>
              <span>·</span>
              <span>Class of 2026</span>
              <span>·</span>
              <span>Bachelor of Computer Science</span>
            </div>
          </div>

          {/* Right Column: Industrial CV Simulator */}
          <div className="lg:col-span-6 w-full">
            <ConveyorVisionSimulator />
          </div>

        </div>
      </div>
    </section>
  );
};
