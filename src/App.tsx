import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#E9EDF3] text-slate-800 antialiased">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-xs shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation Bar */}
      <Navbar
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />
        <About />
        <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />
        <Skills />
        <Experience />
        <Certifications />
        <Contact onOpenCVModal={() => setIsCVModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Official CV Reader & Download Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
