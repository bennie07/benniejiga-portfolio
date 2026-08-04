'use client';

import React from 'react';

export default function CurrentlyBuilding() {
  const initiatives = [
    {
      name: 'Skillieo',
      category: 'Enterprise Learning Platform',
      tagline: 'Reimagining the Learning Platform',
      desc: 'Building a modern learning platform designed to help organizations connect capability development with business performance.',
      focus: 'Beta platform development',
    },
    {
      name: 'Pinnacle',
      category: 'Learning Design System',
      tagline: 'Scaling Learning Design',
      desc: 'Developing a platform-agnostic design system that enables teams to create consistent learning experiences across any authoring environment.',
      focus: 'Framework refinement and implementation',
    },
    {
      name: 'AI Learning Workflows',
      category: 'Applied Research',
      tagline: 'Exploring Practical AI',
      desc: 'Exploring practical ways AI can support learning design, curriculum development, and assessment without replacing human expertise.',
      focus: 'Workflow experimentation',
    },
  ];

  return (
    <section id="beyond-client-work" className="py-20 md:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage">
            Applied R&D • Product Exploration
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
            Beyond Client Work
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Outside consulting engagements, I continue to explore ideas that I believe will shape the future of learning. These initiatives help me test new approaches before they become part of my client work.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item) => (
            <div
              key={item.name}
              className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex flex-col justify-between space-y-6 hover:border-[var(--accent-sage)] transition-all group"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-[var(--accent-sage)] uppercase font-semibold tracking-wider">
                  {item.category}
                </span>
                
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-main group-hover:text-[var(--accent-sage)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm font-semibold text-main">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <p className="text-xs text-muted font-medium italic">
                  Current focus: <span className="text-main font-semibold not-italic">{item.focus}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
