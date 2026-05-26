'use client';
import { motion } from 'framer-motion';

const words = ['Crafting', 'Impactful', 'Learning', 'Experiences'];

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '4.8', label: 'Avg Rating' },
  { value: '97%', label: 'Completion' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm px-4 py-2 rounded-full mb-8 border border-white/10"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for freelance projects
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold font-raleway leading-tight mb-6">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  className={`inline-block mr-4 ${i === 1 || i === 2 ? 'gradient-text' : 'text-white'}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                >
                  {word}
                  {i === 1 && <br />}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-md"
            >
              Learning Experience Designer &amp; E-Learning Developer creating engaging, effective, and business-aligned learning solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition shadow-lg shadow-primary/30 magnetic-btn">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition magnetic-btn">
                Get in Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold text-white font-raleway">{s.value}</div>
                  <div className="text-white/50 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image with glow ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Spinning gradient ring */}
              <div className="absolute inset-0 rounded-full spin-slow" style={{
                background: 'conic-gradient(from 0deg, #4361ee, #f72585, #7209b7, #4361ee)',
                padding: '3px',
              }}>
                <div className="w-full h-full rounded-full bg-navy" />
              </div>
              {/* Glow */}
              <div className="absolute inset-4 rounded-full bg-primary/20 blur-2xl" />
              {/* Photo */}
              <img
                src="/bennie-benjamin-ejiga.png"
                alt="Bennie Ejiga"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
