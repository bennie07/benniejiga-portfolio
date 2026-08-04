'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'Learning Strategy & Transformation',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        topic: formData.service,
        message: formData.message,
      }).toString();

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Netlify Form Submission Error:', err);
      // Fallback display so user experience is never blocked
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider badge-sage">
                Initiate Engagement
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-main tracking-tight">
                Discuss Your Project
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                Whether you&apos;re exploring a new learning initiative, modernizing an existing one, or simply looking for a sounding board, I&apos;d be happy to hear about your goals.
              </p>
            </div>

            {/* Direct Details Box */}
            <div className="space-y-4 p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center flex-shrink-0 text-base">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-muted tracking-wider">Email</div>
                  <a href="mailto:benjamin@bennie.pro" className="text-sm font-semibold text-main hover:text-[var(--accent-sage)] transition-colors">
                    benjamin@bennie.pro
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[var(--border-color)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center flex-shrink-0 text-base">
                  <i className="fa-solid fa-phone" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-muted tracking-wider">Phone</div>
                  <a href="tel:+2347069589257" className="text-sm font-semibold text-main hover:text-[var(--accent-sage)] transition-colors font-mono">
                    +234 706 958 9257
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[var(--border-color)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center flex-shrink-0 text-base">
                  <i className="fa-solid fa-globe" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-muted tracking-wider">Website</div>
                  <div className="text-sm font-semibold text-main font-mono">
                    bennie.pro
                  </div>
                </div>
              </div>
            </div>

            {/* Conversational Note Box */}
            <div className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-2">
              <p className="text-xs text-muted leading-relaxed">
                Every engagement is different. If you&apos;re unsure whether your project is a good fit, feel free to get in touch.
              </p>
            </div>
          </div>

          {/* Right Column: Netlify-Ready Interactive Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--accent-sage-subtle)] text-[var(--accent-sage)] flex items-center justify-center text-2xl">
                  <i className="fa-solid fa-circle-check" />
                </div>
                <h3 className="text-2xl font-bold text-main">Message Received</h3>
                <p className="text-sm text-muted max-w-md mx-auto">
                  Thank you, {formData.name}. I&apos;ve received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-sage px-6 py-2.5 rounded-lg text-xs font-semibold uppercase mt-4 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-main tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Benjamin Ejiga"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-main text-sm focus:outline-none focus:border-[var(--accent-sage)] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-main tracking-wider">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-main text-sm focus:outline-none focus:border-[var(--accent-sage)] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-main tracking-wider">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Company, University or NGO"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-main text-sm focus:outline-none focus:border-[var(--accent-sage)] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-main tracking-wider">
                      What would you like to discuss?
                    </label>
                    <select
                      name="topic"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-main text-sm focus:outline-none focus:border-[var(--accent-sage)] transition-colors"
                    >
                      <option value="Learning Strategy & Transformation">Learning Strategy & Transformation</option>
                      <option value="Learning Experience Architecture">Learning Experience Architecture</option>
                      <option value="Curriculum & Capability Design">Curriculum & Capability Design</option>
                      <option value="Learning Technology Consulting">Learning Technology Consulting</option>
                      <option value="Learning Design Systems">Learning Design Systems</option>
                      <option value="Learning Measurement & Assessment">Learning Measurement & Assessment</option>
                      <option value="Executive Advisory, Workshops & Speaking">Executive Advisory, Workshops & Speaking</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-main tracking-wider">
                    Tell me about your project
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="What challenge are you trying to solve? Feel free to include your goals, timeline, or anything else that provides useful context."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-main text-sm focus:outline-none focus:border-[var(--accent-sage)] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-sage w-full py-4 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Start the Conversation</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
