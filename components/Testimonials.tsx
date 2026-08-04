'use client';

import React from 'react';

export default function Testimonials() {
  const partners = [
    {
      title: 'Enterprise Learning & Talent',
      tagline: 'Governing Quality & Scaling Capability',
      description:
        'Organizations needing to scale learning quality across dispersed teams, establish design systems, govern certification integrity, and transition from traditional training delivery to measurable performance outcomes.',
      context: 'Common Areas of Support: Learning Strategy • Governance Frameworks • Learning Design Systems',
      icon: 'fa-building-columns',
    },
    {
      title: 'Learning Technology Teams',
      tagline: 'Learning Technology & Ecosystem Architecture',
      description:
        'Learning platforms, startups, and institutions seeking to architect custom learning technology, build capability progression engines, and move beyond legacy LMS constraints.',
      context: 'Common Areas of Support: Ecosystem Strategy • Tech Stack Architecture • Capability Mapping',
      icon: 'fa-cubes',
    },
    {
      title: 'NGOs, Universities & Mission-Driven Organizations',
      tagline: 'Complex Domain Knowledge & Impact Journeys',
      description:
        'Development organizations, universities, and non-profits needing to translate complex technical or domain expertise into engaging, scalable learning programs across diverse global contexts.',
      context: 'Common Areas of Support: Program Architecture • Competency Frameworks • Assessment Design',
      icon: 'fa-globe',
    },
  ];

  return (
    <section id="who-i-help" className="py-20 md:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage">
            Partnership & Alignment
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
            Who I Help
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            I work with organizations that see learning as more than training. Together, we design the strategies, systems, and experiences that help people build capability and improve performance.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6 flex flex-col justify-between hover:border-[var(--accent-sage)] transition-all group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center text-lg">
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-main group-hover:text-[var(--accent-sage)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--accent-sage)] uppercase tracking-wider">
                    {item.tagline}
                  </p>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <p className="text-xs text-main font-medium leading-relaxed">
                  {item.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
