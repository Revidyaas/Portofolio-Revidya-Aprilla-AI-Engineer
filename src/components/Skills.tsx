import React from 'react';
import { Database, Eye, Terminal } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Database className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Eye className="w-5 h-5 text-blue-600" />;
      case 2:
      default:
        return <Terminal className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Stack & Engineering Frameworks
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Technical Expertise
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Structured competencies spanning predictive analytics, computer vision pipelines, and production-grade developer tooling.
          </p>
        </div>

        {/* 3 Distinct Category Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNICAL_SKILLS.map((group, idx) => (
            <div
              key={idx}
              className="neo-raised rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all"
            >
              <div className="flex flex-col gap-4">
                {/* Header with icon and category name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl neo-inset flex items-center justify-center shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {group.skills.length} Technical Disciplines
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {group.description}
                </p>

                {/* Understated Skill Tags (No fake percentages!) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl neo-surface text-xs font-medium text-slate-700 flex items-center gap-1.5 hover:text-blue-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600/40" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Technical Detail */}
              <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in academic & project work</span>
                <span className="text-blue-500 font-bold">✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
