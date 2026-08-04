'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { learningExperiences, LearningExperience } from '@/data/experiences';

export default function LearningExperiences() {
  const [selectedExperience, setSelectedExperience] = useState<LearningExperience | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // View mode inside modal: 'details' or 'request'
  const [modalView, setModalView] = useState<'details' | 'request'>('details');

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for scrolling and auto-focusing
  const bodyRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Compliance Training',
    'DEI & Culture',
    'Security Awareness',
    'Safety & Operations',
    'Soft Skills Training',
    'Product Training',
    'Scenario-Based Learning'
  ];

  const filteredExperiences = learningExperiences.filter((exp) => {
    if (activeCategory === 'All') return true;
    return exp.category === activeCategory;
  });

  const handleOpenModal = (exp: LearningExperience) => {
    setSelectedExperience(exp);
    setModalView('details');
    setSubmitted(false);
    setName('');
    setEmail('');
  };

  const handleToggleRequestView = () => {
    if (modalView === 'details') {
      setModalView('request');
      setTimeout(() => {
        if (bodyRef.current) {
          bodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (formSectionRef.current) {
          formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      }, 100);
    } else {
      setModalView('details');
      if (bodyRef.current) {
        bodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    try {
      const payload = new URLSearchParams({
        'form-name': 'request-preview',
        name,
        email,
        experience_title: selectedExperience?.title || '',
        experience_client: selectedExperience?.client || '',
      }).toString();

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Netlify Request Preview Form Error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="experiences" className="py-20 md:py-32 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage">
              Execution & Craftsmanship
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
              Learning Experiences
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Curated examples of production craftsmanship, interactive eLearning builds, and authoring tool execution.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'btn-sage'
                    : 'bg-[var(--bg-primary)] border border-[var(--border-color)] text-muted hover:text-main'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Robust Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => handleOpenModal(exp)}
              className="group p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-5 hover:border-[var(--accent-sage)] transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Visual Thumbnail */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white font-bold uppercase tracking-wider">
                    {exp.category}
                  </div>
                </div>

                {/* Client & Year */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[var(--accent-sage)] uppercase">{exp.client}</span>
                  <span className="text-muted">{exp.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-main group-hover:text-[var(--accent-sage)] transition-colors leading-snug">
                  {exp.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
                  {exp.description}
                </p>

                {/* Minimal Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-card)] text-muted border border-[var(--border-color)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-semibold text-[var(--accent-sage)]">
                <span>Explore Build</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rich Modal with Auto-Scroll & Auto-Focus Request Preview */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative">
            
            {/* FIXED MODAL HEADER */}
            <div className="flex items-start justify-between p-6 sm:p-8 pb-4 border-b border-[var(--border-color)] bg-[var(--bg-primary)] flex-shrink-0 z-10">
              <div className="space-y-1.5 pr-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-sage)] uppercase font-bold">
                  <span>{selectedExperience.client}</span>
                  <span>•</span>
                  <span>{selectedExperience.category}</span>
                  <span>•</span>
                  <span>{selectedExperience.year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-main leading-tight">
                  {selectedExperience.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedExperience(null)}
                className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-muted hover:text-main hover:border-[var(--accent-sage)] transition-all text-lg flex-shrink-0 cursor-pointer shadow-sm"
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark px-0.5" />
              </button>
            </div>

            {/* SCROLLABLE MODAL BODY */}
            <div ref={bodyRef} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
              
              {/* Image Preview & REQUEST PREVIEW Banner */}
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-[var(--border-color)] bg-black group">
                <Image
                  src={selectedExperience.imageUrl}
                  alt={selectedExperience.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6">
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.tools.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded text-xs font-mono bg-white/20 backdrop-blur-md text-white font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={handleToggleRequestView}
                      className="btn-sage px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <i className={`fa-solid ${modalView === 'request' ? 'fa-arrow-left' : 'fa-envelope'}`} />
                      <span>{modalView === 'request' ? 'Back to Case Study' : 'Request Preview'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* REQUEST PREVIEW FORM INLINE VIEW */}
              {modalView === 'request' ? (
                <div ref={formSectionRef} className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6 animate-fadeIn scroll-mt-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[var(--accent-sage)] uppercase font-bold tracking-wider">
                      Request Access
                    </span>
                    <h4 className="text-2xl font-extrabold text-main">
                      Request a Preview
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      These learning experiences are shared individually as part of conversations about learning strategy, design, and technology. Leave your details below and I&apos;ll send you access.
                    </p>
                  </div>

                  {!submitted ? (
                    <form
                      name="request-preview"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <input type="hidden" name="form-name" value="request-preview" />
                      <input type="hidden" name="experience_title" value={selectedExperience?.title || ''} />
                      <input type="hidden" name="experience_client" value={selectedExperience?.client || ''} />
                      <p className="hidden">
                        <label>
                          Don&apos;t fill this out: <input name="bot-field" />
                        </label>
                      </p>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-main uppercase tracking-wider font-mono">
                          Name
                        </label>
                        <input
                          ref={nameInputRef}
                          type="text"
                          name="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-main text-sm focus:outline-none focus:border-[var(--accent-sage)] transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-main uppercase tracking-wider font-mono">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-main text-sm focus:outline-none focus:border-[var(--accent-sage)] transition-all"
                        />
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-sage px-7 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-md flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <i className="fa-solid fa-spinner animate-spin" />
                              <span>Sending Request...</span>
                            </>
                          ) : (
                            <span>Request Preview</span>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setModalView('details')}
                          className="px-5 py-3 rounded-xl text-xs font-semibold uppercase text-muted hover:text-main cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="p-6 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-center space-y-3 animate-fadeIn">
                      <div className="w-12 h-12 rounded-full bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center text-xl mx-auto">
                        <i className="fa-solid fa-check" />
                      </div>
                      <h5 className="text-xl font-bold text-main">Thank you.</h5>
                      <p className="text-sm text-muted leading-relaxed">
                        I&apos;ve received your request and will send you access shortly.
                      </p>
                      <button
                        onClick={() => setModalView('details')}
                        className="btn-sage px-6 py-2 rounded-lg text-xs font-semibold uppercase cursor-pointer mt-2"
                      >
                        Return to Case Study
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* RICH CASE STUDY DETAILS VIEW */
                <>
                  {/* The Challenge */}
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-main">The Challenge</h4>
                    <p className="text-sm text-muted leading-relaxed">{selectedExperience.challenge}</p>
                  </div>

                  {/* System Strategy & Execution */}
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-main">System Strategy & Execution</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-main leading-relaxed">
                      {selectedExperience.solution.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-main">Key Interactive Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedExperience.features.map((feat, idx) => (
                        <div key={idx} className="p-3.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-main font-medium flex items-center gap-2">
                          <i className="fa-solid fa-check text-[var(--accent-sage)]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Measured Outcomes & Impact */}
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-main">Measured Outcomes & Impact</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedExperience.results.map((res, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-main font-medium flex items-start gap-2.5">
                          <i className="fa-solid fa-chart-line text-[var(--accent-sage)] text-sm mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-6 border-t border-[var(--border-color)] flex items-center justify-between">
                    <button
                      onClick={handleToggleRequestView}
                      className="btn-sage px-6 py-2.5 rounded-lg text-xs font-semibold uppercase cursor-pointer"
                    >
                      Request Preview
                    </button>

                    <button
                      onClick={() => setSelectedExperience(null)}
                      className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase bg-[var(--bg-card)] border border-[var(--border-color)] text-main hover:border-[var(--accent-sage)] cursor-pointer"
                    >
                      Close Experience
                    </button>
                  </div>
                </>
              )}

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
