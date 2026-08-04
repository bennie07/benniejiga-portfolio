'use client';

import React from 'react';

export default function TrustedBy() {
  const sectors = [
    { title: 'NGOs & Development Orgs', icon: 'fa-earth-africa', desc: 'Capacity building & global impact training' },
    { title: 'Enterprise L&D', icon: 'fa-building-columns', desc: 'Scalable learning transformation & LXP strategy' },
    { title: 'Higher Ed & Universities', icon: 'fa-graduation-cap', desc: 'Digital curriculum architecture & interactive systems' },
    { title: 'Consulting Practices', icon: 'fa-diagram-project', desc: 'Bespoke design systems & client execution' },
    { title: 'Government Agencies', icon: 'fa-landmark', desc: 'Compliance & public sector digital training' },
  ];

  return (
    <section className="py-12 border-y border-[var(--border-color)] bg-[var(--bg-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase font-bold tracking-widest text-[var(--accent-sage)]">
            Trusted Strategic Partner
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mt-1">Sectors & Enterprise Environments</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-center space-y-2 hover:border-[var(--accent-sage)] transition-all"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center text-lg">
                <i className={`fa-solid ${sector.icon}`} />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-main">{sector.title}</h3>
              <p className="text-[11px] text-muted leading-tight">{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
