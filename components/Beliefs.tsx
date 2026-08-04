'use client';

import React from 'react';

export default function Beliefs() {
  const beliefs = [
    {
      quote: 'Learning should feel effortless.',
      detail: 'When learners spend less energy figuring out the experience, they can spend more energy learning.',
    },
    {
      quote: 'Technology should disappear behind experience.',
      detail: 'The best technology supports learning quietly. It enables the experience without becoming the experience.',
    },
    {
      quote: 'Complexity should be simplified—not hidden.',
      detail: 'Complex problems deserve clear thinking. My role is to make complexity easier to understand without losing what matters.',
    },
    {
      quote: "Great learning isn't created one course at a time. It's designed as an ecosystem.",
      detail: 'Real impact comes from designing systems where people, learning, technology, and business goals work together.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-main tracking-tight">
            Four Beliefs That Shape My Work
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Over the years, these beliefs have become the foundation of how I approach learning design. They shape the questions I ask, the systems I build, and the experiences I create.
          </p>
        </div>

        {/* 2x2 Belief Cards Grid with Visual Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beliefs.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl card-theme border border-[var(--border-color)] space-y-6 hover:border-[var(--accent-sage)] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* High Contrast Visual Anchor Statement */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-main leading-snug group-hover:text-[var(--accent-sage)] transition-colors">
                  {item.quote}
                </h3>

                {/* Subordinate Explanation */}
                <p className="text-sm sm:text-base text-muted leading-relaxed font-normal pt-2 border-t border-[var(--border-color)]">
                  {item.detail}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-muted font-mono pt-4">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-sage)]" />
                <span className="text-[11px] opacity-70">bennie.pro</span>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Ending Signature Statement */}
        <div className="pt-8 text-center border-t border-[var(--border-color)]">
          <p className="text-base sm:text-lg font-bold text-main tracking-tight italic">
            &ldquo;These beliefs don&apos;t just shape how I design. They shape how I solve problems.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
