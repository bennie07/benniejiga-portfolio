'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...form,
      });
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="relative mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Get in touch</p>
            <h2 className="text-4xl font-bold text-text-dark font-raleway">Let&apos;s Work Together</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mt-3" />
          </motion.div>
        </div>

        {/* Split card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2"
        >
          {/* Left — dark navy panel */}
          <div className="bg-navy p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white font-raleway mb-4">
                Ready to create something impactful?
              </h3>
              <p className="text-white/60 leading-relaxed mb-10">
                I&apos;m available for freelance instructional design projects, consulting, and
                full-time opportunities. Reach out to discuss how I can help create effective
                learning experiences for your organization.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope" />
                  </div>
                  <p className="text-white/80">benniejiga@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-phone" />
                  </div>
                  <p className="text-white/80">+234 706 695 892 57</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <p className="text-white/80">Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: 'fa-linkedin', label: 'LinkedIn' },
                { icon: 'fa-twitter', label: 'Twitter' },
                { icon: 'fa-behance', label: 'Behance' },
                { icon: 'fa-github', label: 'GitHub' },
              ].map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/20 text-white/70 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition"
                >
                  <i className={`fab ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — white form panel */}
          <div className="bg-white p-10 lg:p-14">
            <form onSubmit={handleSubmit} className="space-y-5" data-netlify="true" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1.5" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1.5" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl text-sm">
                  Message received! I&apos;ll get back to you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-white py-3.5 rounded-full font-semibold hover:bg-primary/90 transition shadow-lg shadow-primary/25 disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
