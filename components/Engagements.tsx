'use client';

import React, { useState, useRef } from 'react';
import { engagements, Engagement } from '@/data/engagements';

export default function Engagements() {
  const [selectedEngagement, setSelectedEngagement] = useState<Engagement | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'full'>('overview');

  const bodyRef = useRef<HTMLDivElement>(null);

  const handleReadFullNarrative = () => {
    setActiveTab('full');
    if (bodyRef.current) {
      bodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="engagements" className="py-20 md:py-32 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage">
            Strategic Consulting & Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
            Selected Engagements
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Strategic consulting engagements focused on capability architecture, learning governance, and ecosystem design.
          </p>
        </div>

        {/* Engagements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagements.map((eng) => (
            <div
              key={eng.id}
              onClick={() => {
                setSelectedEngagement(eng);
                setActiveTab('overview');
              }}
              className="group p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6 hover:border-[var(--accent-sage)] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-[var(--accent-sage)] uppercase font-semibold tracking-wider">
                  {eng.tagline}
                </span>
                <h3 className="text-2xl font-bold text-main group-hover:text-[var(--accent-sage)] transition-colors leading-snug">
                  {eng.title}
                </h3>
                <p className="text-xs font-mono text-muted italic">
                  "{eng.subtitle}"
                </p>
                <p className="text-sm text-muted leading-relaxed line-clamp-3 pt-2">
                  {eng.executiveSummary}
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-semibold text-[var(--accent-sage)]">
                <span>Read Engagement</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Header & Scrollable Body Modal */}
      {selectedEngagement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative">
            
            {/* FIXED MODAL HEADER (Stays pinned at top) */}
            <div className="flex items-start justify-between p-6 sm:p-8 pb-5 border-b border-[var(--border-color)] bg-[var(--bg-primary)] flex-shrink-0 z-10">
              <div className="space-y-1.5 pr-6">
                <span className="text-xs font-mono text-[var(--accent-sage)] uppercase font-semibold tracking-wider">
                  {selectedEngagement.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-main leading-tight">
                  {selectedEngagement.title}
                </h3>
                <p className="text-sm text-muted italic">{selectedEngagement.subtitle}</p>
              </div>

              {/* Always Visible Close Button */}
              <button
                onClick={() => setSelectedEngagement(null)}
                className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-muted hover:text-main hover:border-[var(--accent-sage)] transition-all text-lg flex-shrink-0 cursor-pointer shadow-sm"
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark px-0.5" />
              </button>
            </div>

            {/* SCROLLABLE MODAL BODY */}
            <div ref={bodyRef} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
              
              {/* TOP METADATA PANEL */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs">
                <div className="space-y-1">
                  <span className="font-mono text-muted uppercase text-[10px] tracking-wider font-bold">Engagement Type</span>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {selectedEngagement.types.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] text-main font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-muted uppercase text-[10px] tracking-wider font-bold">Deliverables</span>
                  <ul className="space-y-1 text-main font-medium pt-1">
                    {selectedEngagement.deliverables.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <i className="fa-solid fa-check text-[var(--accent-sage)] text-[10px]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-muted uppercase text-[10px] tracking-wider font-bold">Key Outcomes</span>
                  <ul className="space-y-1 text-main font-medium pt-1">
                    {selectedEngagement.outcomes.slice(0, 3).map((o, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <i className="fa-solid fa-chart-line text-[var(--accent-sage)] text-[10px]" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* View Tab Toggle */}
              <div className="flex border-b border-[var(--border-color)] gap-6 text-sm font-semibold">
                <button
                  onClick={() => {
                    setActiveTab('overview');
                    if (bodyRef.current) bodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`pb-3 transition-colors cursor-pointer ${
                    activeTab === 'overview'
                      ? 'text-[var(--accent-sage)] border-b-2 border-[var(--accent-sage)]'
                      : 'text-muted hover:text-main'
                  }`}
                >
                  Executive Summary
                </button>
                <button
                  onClick={() => {
                    setActiveTab('full');
                    if (bodyRef.current) bodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`pb-3 transition-colors cursor-pointer ${
                    activeTab === 'full'
                      ? 'text-[var(--accent-sage)] border-b-2 border-[var(--accent-sage)]'
                      : 'text-muted hover:text-main'
                  }`}
                >
                  Full Architecture Narrative
                </button>
              </div>

              {/* TAB CONTENT: Executive Overview */}
              {activeTab === 'overview' && (
                <div className="space-y-6 text-sm">
                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-2">
                    <span className="text-xs font-mono font-bold text-[var(--accent-sage)] uppercase">01 • The Challenge</span>
                    <p className="text-main leading-relaxed">{selectedEngagement.mckinseyOverview.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-2">
                    <span className="text-xs font-mono font-bold text-[var(--accent-sage)] uppercase">02 • The Real Question</span>
                    <p className="text-main italic text-base leading-relaxed">"{selectedEngagement.mckinseyOverview.question}"</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-2">
                    <span className="text-xs font-mono font-bold text-[var(--accent-sage)] uppercase">03 • Strategic Approach</span>
                    <p className="text-main leading-relaxed">{selectedEngagement.mckinseyOverview.approach}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-2">
                    <span className="text-xs font-mono font-bold text-[var(--accent-sage)] uppercase">04 • Enterprise Outcomes</span>
                    <p className="text-main leading-relaxed">{selectedEngagement.mckinseyOverview.outcomes}</p>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={handleReadFullNarrative}
                      className="btn-sage px-6 py-2.5 rounded-lg text-xs font-semibold uppercase cursor-pointer"
                    >
                      Read Full Narrative →
                    </button>
                  </div>
                </div>
              )}

              {/* TAB CONTENT: Full Architecture Narrative */}
              {activeTab === 'full' && (
                <div className="space-y-6 text-sm text-muted leading-relaxed">
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-main">The Situation</h4>
                    <p>{selectedEngagement.fullNarrative.situation}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-main">Observation</h4>
                    <p>{selectedEngagement.fullNarrative.observation}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-main">Organizational Tension</h4>
                    <p>{selectedEngagement.fullNarrative.tension}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--bg-card)] border-l-4 border-[var(--accent-sage)] space-y-1">
                    <h4 className="text-base font-bold text-main">The Real Question</h4>
                    <p className="text-main italic font-medium">"{selectedEngagement.fullNarrative.realQuestion}"</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-main">Strategic Thinking</h4>
                    <p>{selectedEngagement.fullNarrative.thinking}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-main">The Architecture</h4>
                    <p>{selectedEngagement.fullNarrative.architecture}</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-base font-bold text-main">Architect's Reflection</h4>
                    <blockquote className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] italic text-main font-medium">
                      "{selectedEngagement.fullNarrative.reflection}"
                    </blockquote>
                  </div>
                </div>
              )}

              {/* Footer Close Button */}
              <div className="pt-6 border-t border-[var(--border-color)] flex justify-end">
                <button
                  onClick={() => setSelectedEngagement(null)}
                  className="px-5 py-2 rounded-lg text-xs font-semibold uppercase bg-[var(--bg-card)] border border-[var(--border-color)] text-main hover:border-[var(--accent-sage)] cursor-pointer"
                >
                  Close Engagement Paper
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
