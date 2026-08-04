'use client';

import React from 'react';

export default function ImpactMetrics() {
  const pillars = [
    {
      title: 'Learning Strategy',
      description: 'Capability development, curriculum architecture, governance, and learning transformation.',
      icon: 'fa-brain',
    },
    {
      title: 'Experience Design',
      description: 'Learning journeys, interaction design, design systems, accessibility, and storytelling.',
      icon: 'fa-compass-drafting',
    },
    {
      title: 'Technology',
      description: 'Learning platforms, enterprise architecture, AI-assisted workflows, analytics, and scalable implementation.',
      icon: 'fa-cubes',
    },
  ];

  return (
    <section id="my-practice" className="py-20 md:py-28 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage">
            Core Disciplines
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
            My Practice
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            My work sits at the intersection of learning strategy, experience design, and technology. I partner with organizations to design learning ecosystems that are thoughtful, scalable, and built to improve performance—not simply deliver content.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-4 hover:border-[var(--accent-sage)] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center text-lg">
                <i className={`fa-solid ${p.icon}`} />
              </div>
              <h3 className="text-xl font-bold text-main group-hover:text-[var(--accent-sage)] transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
