'use client';

import React from 'react';

export default function Documents() {
  const resources = [
    {
      title: 'Bespoke Learning Design System (BLDS) Framework',
      category: 'Design System Guideline',
      desc: 'Comprehensive visual and structural guidelines for scalable corporate learning interfaces, typography tokens, and spacing grids.',
      icon: 'fa-book-bookmark',
      type: 'Documentation / PDF',
    },
    {
      title: 'ClimateFit Storyline Master Templates',
      category: 'Authoring System',
      desc: 'Master slide architecture, custom vector atlas maps, and interactive navigation patterns designed for Articulate Storyline 360.',
      icon: 'fa-layer-group',
      type: 'Master Slide Package',
    },
    {
      title: 'Skillieo LXP Microservices Technical Spec',
      category: 'Software Architecture',
      desc: 'Technical architecture document covering Rust backend services, NATS JetStream messaging, WebAuthn passkey auth, and Kubernetes deployment.',
      icon: 'fa-server',
      type: 'Architecture Brief',
    },
    {
      title: 'Learning Analytics & xAPI Measurement Playbook',
      category: 'Strategy & Evaluation',
      desc: 'Framework for measuring behavior change, cognitive retention, and organizational ROI beyond vanity completion metrics.',
      icon: 'fa-chart-pie',
      type: 'Strategic Playbook',
    },
  ];

  return (
    <section id="insights" className="py-20 md:py-28 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage mb-4">
            Insights & Frameworks
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
            Insights & Strategic Assets
          </h2>
          <p className="text-base sm:text-lg text-muted mt-2">
            Curated white papers, design systems, articles, and architecture specifications created to elevate digital learning standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((res) => (
            <div
              key={res.title}
              className="p-6 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-start gap-5 hover:border-[var(--accent-sage)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center text-xl flex-shrink-0">
                <i className={`fa-solid ${res.icon}`} />
              </div>

              <div className="space-y-2 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--accent-sage)] uppercase font-bold">
                    {res.category}
                  </span>
                  <span className="text-[11px] text-muted font-mono">{res.type}</span>
                </div>
                <h3 className="text-lg font-bold text-main">{res.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{res.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
