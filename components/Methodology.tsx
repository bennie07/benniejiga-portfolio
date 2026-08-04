'use client';

import React from 'react';

export default function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Problem Discovery & Business Alignment',
      desc: 'We start with root-cause analysis. What business problem are we solving? What should learners do differently? What barriers stand in their way?',
      outputs: ['Needs Analysis Report', 'Performance Competency Map', 'Learner Friction Matrix'],
    },
    {
      num: '02',
      title: 'Experience & Cognitive Architecture',
      desc: 'Designing the learning psychology framework. Applying cognitive load reduction, progressive disclosure, chunking, and intuitive mental models.',
      outputs: ['Learning Ecosystem Blueprint', 'Storyboards & Scenarios', 'UX Flow Diagrams'],
    },
    {
      num: '03',
      title: 'Design System & Technical Infrastructure',
      desc: 'Building reusable assets and buildable tech. From custom Storyline master slides & BLDS systems to microservices in Rust and cloud deployments.',
      outputs: ['Bespoke Learning Design System', 'Authoring Templates', 'LXP API Integrations'],
    },
    {
      num: '04',
      title: 'Measurement & Scalable Governance',
      desc: 'Validating impact beyond completion rates. Measuring retention, performance change, and building frameworks that scale long-term.',
      outputs: ['xAPI Learning Analytics', 'Governance Playbook', 'Scalability Roadmap'],
    },
  ];

  return (
    <section id="methodology" className="py-20 md:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage mb-4">
            Systematic Framework
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
            How I Think & Execute
          </h2>
          <p className="text-base sm:text-lg text-muted mt-2">
            Most consultants never reveal their mental model. Here is the 4-phase framework used to architect high-impact learning ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-8 rounded-2xl card-theme border border-[var(--border-color)] space-y-6 hover:border-[var(--accent-sage)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-[var(--accent-sage)]">
                    Phase {step.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-sage)]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-main">{step.title}</h3>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] space-y-2">
                <div className="text-xs font-semibold text-main uppercase tracking-wider">
                  Key Deliverables & Artifacts:
                </div>
                <div className="flex flex-wrap gap-2">
                  {step.outputs.map((out) => (
                    <span
                      key={out}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg-primary)] text-muted border border-[var(--border-color)]"
                    >
                      {out}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
