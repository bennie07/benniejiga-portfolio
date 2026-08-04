'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projects, Project } from '@/data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Ecosystem Architecture', 'Learning Strategy', 'Design Systems', 'Measurement & Strategy', 'Learning Functions'];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage mb-4">
              Proven Outcomes
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
              Selected Case Studies
            </h2>
            <p className="text-base sm:text-lg text-muted mt-2">
              Enterprise buyers don&apos;t buy courses—they buy outcomes. Here is how strategic experience design transforms capability.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'btn-sage'
                    : 'bg-[var(--bg-primary)] border border-[var(--border-color)] text-muted hover:text-main'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-5 hover:border-[var(--accent-sage)] transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div className="space-y-4">
                {/* Project Image Preview */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[var(--accent-sage)] uppercase tracking-wider">
                    {project.client}
                  </span>
                  <span className="text-xs text-muted font-mono">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-main group-hover:text-[var(--accent-sage)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[var(--border-color)]">
                {/* Key Outcome Highlight */}
                {project.results && project.results.length > 0 && (
                  <div className="flex items-start gap-2 text-xs text-main font-medium">
                    <i className="fa-solid fa-check text-[var(--accent-sage)] mt-0.5" />
                    <span>{project.results[0]}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs font-semibold text-[var(--accent-sage)]">
                  <span>View Full Case Study</span>
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-muted hover:text-main text-xl cursor-pointer"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark" />
            </button>

            {/* Modal Image Header */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden border border-[var(--border-color)]">
              <Image
                src={selectedProject.fullImageUrl || selectedProject.imageUrl}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-sage)] uppercase font-bold">
                <span>{selectedProject.client}</span>
                <span>•</span>
                <span>{selectedProject.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-main">{selectedProject.title}</h3>
            </div>

            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <h4 className="text-base font-bold text-main">The Situation</h4>
              <p>{selectedProject.challenge}</p>

              {selectedProject.realQuestion && (
                <>
                  <h4 className="text-base font-bold text-main mt-4">The Real Question</h4>
                  <p className="italic text-[var(--accent-sage)] border-l-2 border-[var(--accent-sage)] pl-4 py-1 my-2">"{selectedProject.realQuestion}"</p>
                </>
              )}

              <h4 className="text-base font-bold text-main mt-4">The Architecture & Intervention</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-main">
                {selectedProject.solution.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h4 className="text-base font-bold text-main mt-4">Outcomes</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProject.results.map((res, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-main font-medium">
                    <i className="fa-solid fa-chart-line text-[var(--accent-sage)] mr-2" />
                    {res}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg-card)] text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-sage px-5 py-2 rounded-lg text-xs font-semibold uppercase cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
