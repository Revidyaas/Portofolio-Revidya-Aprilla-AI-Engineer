import React from 'react';
import { ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ConveyorVisionSimulator } from './ConveyorVisionSimulator';
import { GoldPriceChart } from './GoldPriceChart';
import { TaskToDoMockup } from './TaskToDoMockup';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const thesisProject = PROJECTS[0];
  const secondaryProjects = PROJECTS.slice(1);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Selected Works & Academic Research
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Applied machine learning, edge computer vision research, and predictive data engineering.
          </p>
        </div>

        {/* PROJECT 01 — FEATURED (Large Horizontal Card) */}
        <div className="neo-raised rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              
              {/* Category, Year, ID (Zero-Pill: Clean unboxed metadata) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="font-mono text-blue-600 font-bold">PROJECT {thesisProject.projectNumber}</span>
                <span>·</span>
                <span className="text-slate-800">{thesisProject.category}</span>
                <span>·</span>
                <span>{thesisProject.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                {thesisProject.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {thesisProject.description}
              </p>

              {/* Key Results / Metrics Banner */}
              {thesisProject.results && (
                <div className="grid grid-cols-2 gap-3 py-1">
                  <div className="neo-inset rounded-xl p-3.5 flex flex-col">
                    <span className="text-xs text-slate-500">Test mAP@50</span>
                    <span className="text-2xl font-extrabold text-blue-600 font-mono mt-0.5">
                      {thesisProject.results.map50}
                    </span>
                  </div>
                  <div className="neo-inset rounded-xl p-3.5 flex flex-col">
                    <span className="text-xs text-slate-500">Test mAP@50–95</span>
                    <span className="text-2xl font-extrabold text-blue-600 font-mono mt-0.5">
                      {thesisProject.results.map5095}
                    </span>
                  </div>
                </div>
              )}

              {/* Methodology Highlights */}
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Research Methodology:
                </span>
                <ul className="flex flex-col gap-1 text-xs text-slate-600">
                  {thesisProject.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold shrink-0">·</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {thesisProject.technology.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-slate-700 px-2.5 py-1 rounded-md neo-surface"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectProject(thesisProject)}
                  className="px-6 py-3 rounded-xl neo-btn-primary font-semibold text-xs uppercase tracking-wider flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span>{thesisProject.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Visual Column: Interactive Conveyor Simulation */}
            <div className="lg:col-span-6 w-full">
              <ConveyorVisionSimulator />
            </div>

          </div>
        </div>

        {/* SECONDARY PROJECTS (2-Column Responsive Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PROJECT 02: Gold Price Forecasting */}
          <div className="neo-raised rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all">
            <div className="flex flex-col gap-4">
              
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="font-mono text-blue-600 font-bold">PROJECT {secondaryProjects[0].projectNumber}</span>
                <span>·</span>
                <span className="text-slate-800">{secondaryProjects[0].category}</span>
                <span>·</span>
                <span>{secondaryProjects[0].year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {secondaryProjects[0].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {secondaryProjects[0].description}
              </p>

              {/* Visual Asset: Interactive Gold Price Chart */}
              <div className="w-full pt-1">
                <GoldPriceChart />
              </div>

              {/* Methodology bullets */}
              <div className="flex flex-col gap-1 text-xs text-slate-600 pt-1">
                <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                  Methodology:
                </span>
                <ul className="flex flex-col gap-1">
                  {secondaryProjects[0].methodology.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {secondaryProjects[0].technology.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-slate-700 px-2.5 py-1 rounded-md neo-surface"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-2 border-t border-slate-200/50">
              <button
                onClick={() => onSelectProject(secondaryProjects[0])}
                className="w-full py-3 rounded-xl neo-btn font-semibold text-xs uppercase tracking-wider text-slate-800 hover:text-blue-600 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{secondaryProjects[0].ctaText}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* PROJECT 03: TaskToDo */}
          <div className="neo-raised rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all">
            <div className="flex flex-col gap-4">
              
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="font-mono text-blue-600 font-bold">PROJECT {secondaryProjects[1].projectNumber}</span>
                <span>·</span>
                <span className="text-slate-800">{secondaryProjects[1].category}</span>
                <span>·</span>
                <span>{secondaryProjects[1].year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {secondaryProjects[1].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {secondaryProjects[1].description}
              </p>

              {/* Visual Asset: Interactive TaskToDo Mockup */}
              <div className="w-full pt-1">
                <TaskToDoMockup />
              </div>

              {/* Features list */}
              {secondaryProjects[1].features && (
                <div className="flex flex-col gap-1 text-xs text-slate-600 pt-1">
                  <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                    Key Features:
                  </span>
                  <ul className="flex flex-col gap-1">
                    {secondaryProjects[1].features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {secondaryProjects[1].technology.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-slate-700 px-2.5 py-1 rounded-md neo-surface"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-2 border-t border-slate-200/50 flex items-center gap-3">
              <button
                onClick={() => onSelectProject(secondaryProjects[1])}
                className="flex-1 py-3 rounded-xl neo-btn font-semibold text-xs uppercase tracking-wider text-slate-800 hover:text-blue-600 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{secondaryProjects[1].ctaText}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {secondaryProjects[1].liveUrl && (
                <a
                  href={secondaryProjects[1].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl neo-btn-primary font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
