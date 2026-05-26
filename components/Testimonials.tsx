'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-28 bg-navy relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="relative mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Kind words</p>
            <h2 className="text-4xl font-bold text-white font-raleway">Client &amp; Learner Testimonials</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mt-3 mx-auto" />
          </motion.div>
        </div>

        {/* Testimonial card */}
        <div className="relative overflow-hidden">
          {/* Large quote mark */}
          <div className="absolute top-0 left-0 text-white/5 font-serif select-none pointer-events-none leading-none" style={{ fontSize: '200px', lineHeight: 1 }}>
            &ldquo;
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 pt-8 pb-4 px-4 text-center"
            >
              <p className="text-white text-xl lg:text-2xl italic leading-relaxed mb-10">
                {t.quote}
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={t.imageUrl}
                  alt={t.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/40"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.author)}&background=4361ee&color=fff`;
                  }}
                />
                <div className="text-left">
                  <h4 className="font-bold text-white">{t.author}</h4>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left text-sm" />
          </button>

          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-primary w-8' : 'bg-white/20 w-2.5'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
