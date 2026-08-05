'use client';

import React from 'react';
import Image from 'next/image';

export default function Approach() {
  const comparison = [
    {
      perspective: 'First Question',
      courseCentric: 'What course should we build?',
      myApproach: 'What problem are we trying to solve?',
    },
    {
      perspective: 'Starting Point',
      courseCentric: 'Learning content',
      myApproach: 'Business goals, learner needs, and system constraints',
    },
    {
      perspective: 'Design Lens',
      courseCentric: 'Individual learning assets',
      myApproach: 'The entire learning ecosystem',
    },
    {
      perspective: 'Technology',
      courseCentric: 'The authoring tool is the solution',
      myApproach: 'Technology is an enabler, not the destination',
    },
    {
      perspective: 'Measurement',
      courseCentric: 'Completion and assessment scores',
      myApproach: 'Capability, confidence, adoption, and performance',
    },
    {
      perspective: 'Outcome',
      courseCentric: 'A completed course',
      myApproach: 'A learning experience that continues creating value long after launch',
    },
  ];

  const toolsList = [
    'eLearning Authoring',
    'Product Design',
    'Full Stack Development',
    'Instructional Design',
    'Cloud Architecture',
    'Learning Analytics',
  ];

  return (
    <section id="approach" className="py-20 md:py-32 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro Section: Core Question & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage">
              How I Work & Think
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight leading-tight">
              I rarely start by asking, <br className="hidden sm:inline" />
              <span className="text-[var(--accent-sage)]">&ldquo;What learning solution do we need?&rdquo;</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
              <p className="font-semibold text-main text-lg sm:text-xl">
                I start by asking, <span className="text-[var(--accent-sage)]">&ldquo;What problem are we actually trying to solve?&rdquo;</span>
              </p>
              <p>
                The answer isn&apos;t always another course. Sometimes it&apos;s a better experience, a smarter process, or a different way of thinking.
              </p>
              <p>
                That&apos;s why I step back before I build—because the best learning experiences are created when people, technology, and business goals work together.
              </p>
            </div>
          </div>

          {/* Secondary Portrait Card */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden card-theme border border-[var(--border-color)] shadow-lg space-y-4 p-5">
              <div className="relative w-full h-64 rounded-xl overflow-hidden bg-[var(--bg-primary)]">
                <Image
                  src="/benjamin_ejiga_trad.jpg"
                  alt="Benjamin Ejiga"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                <div className="text-xs font-bold text-[var(--accent-sage)] uppercase tracking-wider font-mono">
                  Curiosity Drives My Work
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Whether I&apos;m designing a curriculum, building an interactive learning experience, or architecting an enterprise learning platform, I instinctively zoom out before I zoom in.
                </p>
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                    I tend to ask the same question:
                  </p>
                  <div className="text-sm font-bold text-main italic">
                    &ldquo;How does this fit into the bigger picture?&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table: Course-Centric vs My Approach */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-6">
          <div>
            <span className="text-xs font-mono font-bold text-[var(--accent-sage)] uppercase tracking-wider">
              Strategic Mindset
            </span>
            <h3 className="text-2xl font-bold text-main mt-1">
              Course-Centric Approach vs. My Approach
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-color)] text-muted uppercase tracking-wider">
                  <th className="py-3 px-4 w-1/4 font-semibold">Perspective</th>
                  <th className="py-3 px-4 w-3/8 font-semibold text-muted">Course-Centric Approach</th>
                  <th className="py-3 px-4 w-3/8 font-semibold text-[var(--accent-sage)]">My Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {comparison.map((row) => (
                  <tr key={row.perspective} className="hover:bg-[var(--bg-card)] transition-colors">
                    <td className="py-4 px-4 font-semibold text-main">{row.perspective}</td>
                    <td className="py-4 px-4 text-muted">{row.courseCentric}</td>
                    <td className="py-4 px-4 text-main font-medium">{row.myApproach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Closing Block: The Way I Think */}
        <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage">
              Systems Integration
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-main">The Way I Think</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-semibold text-main">
            <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              I don&apos;t separate <span className="text-[var(--accent-sage)]">learning from technology</span>.
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              I don&apos;t separate <span className="text-[var(--accent-sage)]">design from strategy</span>.
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              I don&apos;t separate <span className="text-[var(--accent-sage)]">user experience from business outcomes</span>.
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted leading-relaxed">
            To me, they&apos;re all part of the same system. That&apos;s why you&apos;ll often find me moving between eLearning authoring, product design, full stack development, instructional design, cloud architecture, and learning analytics in the same project. I choose the tools that best solve the problem—not the ones that define my role.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {toolsList.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-card)] border border-[var(--border-color)] text-main font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
