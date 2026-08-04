'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const pillars = [
    'Learning Strategy',
    'Experience Design',
    'Technology',
    'Capability Development',
    'Enterprise Learning',
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Subtle Mesh Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--accent-sage)] opacity-[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Ruthlessly Focused Positioning */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Signature Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-sage)] animate-pulse" />
              <span>BENJAMIN EJIGA</span>
              <span className="opacity-40">•</span>
              <span className="font-mono text-xs">bennie.pro</span>
            </div>

            {/* Primary Hero Title & Value Proposition */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-main leading-tight">
                Learning Experience <br />
                <span className="text-[var(--accent-sage)]">Architect</span>
              </h1>
              
              <p className="text-lg sm:text-2xl font-medium text-main max-w-2xl leading-relaxed">
                I design learning ecosystems that help organizations build capability, improve performance, and turn strategy into measurable outcomes.
              </p>
            </div>

            {/* Warm Personal Anecdote */}
            <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] max-w-xl">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  B
                </div>
                <div className="text-xs text-muted leading-relaxed pt-0.5">
                  Hi, I&apos;m Benjamin Ejiga. Most people know me as Bennie—and that&apos;s the name behind <span className="font-mono text-[var(--accent-sage)] font-semibold">bennie.pro</span>.
                </div>
              </div>
            </div>

            {/* Action CTAs (Primary: Discuss Your Project, Secondary: Explore Engagements) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#contact"
                className="btn-sage px-8 py-3.5 rounded-xl text-xs font-semibold tracking-wide uppercase shadow-md w-full sm:w-auto text-center"
              >
                Discuss Your Project
              </a>
              <a
                href="#engagements"
                className="btn-ghost-theme px-8 py-3.5 rounded-xl text-xs font-semibold tracking-wide uppercase w-full sm:w-auto text-center"
              >
                Explore Engagements <i className="fa-solid fa-arrow-down ml-2 text-xs" />
              </a>
            </div>

            {/* Clean Capability Pills */}
            <div className="pt-8 border-t border-[var(--border-color)] max-w-xl space-y-3">
              <p className="text-[11px] uppercase font-semibold tracking-widest text-muted">
                Core Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[var(--bg-card)] border border-[var(--border-color)] text-main hover:border-[var(--accent-sage)] transition-colors"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Corporate Portrait Integration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl group">
              <div className="aspect-[4/5] relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src="/benjamin_ejiga_corp.jpg"
                  alt="Benjamin Ejiga — Learning Experience Architect"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Portrait Info Overlay */}
              <div className="p-5 bg-[var(--bg-primary)] border-t border-[var(--border-color)] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-main">Benjamin Ejiga</h3>
                  <p className="text-xs text-[var(--accent-sage)] font-semibold uppercase tracking-wider">
                    Learning Experience Architect
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/ejiga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-muted hover:text-[var(--accent-sage)] hover:border-[var(--accent-sage)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin-in text-sm" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
