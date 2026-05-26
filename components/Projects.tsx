'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/data/projects';

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-3xl sm:rounded-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-text-dark font-raleway">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="text-xs text-text-light flex items-center gap-1">
                <i className="fas fa-calendar" /> {project.year}
              </span>
              <span className="text-xs text-text-light flex items-center gap-1">
                <i className="fas fa-building" /> {project.client}
              </span>
              <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-text-light hover:text-text-dark text-2xl ml-4"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image + Demo Button */}
          <div className="text-center">
            <img
              src={project.fullImageUrl}
              alt={project.title}
              className="w-full rounded-lg mb-4 object-cover max-h-64"
            />
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              View Live Demo
            </a>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-bold text-text-dark mb-2">Project Overview</h3>
            <p className="text-text-light">{project.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text-dark mb-2">Challenge</h3>
            <p className="text-text-light">{project.challenge}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text-dark mb-2">Solution</h3>
            <ul className="list-disc list-inside space-y-1">
              {project.solution.map((s) => (
                <li key={s} className="text-text-light text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text-dark mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((f) => (
                <li key={f} className="text-text-light text-sm">{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text-dark mb-2">Results</h3>
            <ul className="list-disc list-inside space-y-1">
              {project.results.map((r) => (
                <li key={r} className="text-text-light text-sm">{r}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text-dark mb-2">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-shadow duration-500 ${large ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
      >
        {/* Image */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay — slides up on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-6 lg:p-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <h3 className={`font-bold text-white font-raleway mb-2 ${large ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>{project.title}</h3>
          <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
          <div className="flex gap-3">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 bg-white text-navy text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition"
            >
              Case Study
            </button>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/40 text-white text-sm font-semibold rounded-full hover:bg-white/20 transition"
            >
              View Demo
            </a>
          </div>
        </div>

        {/* Always-visible category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-xs bg-navy/60 text-white backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            {project.category}
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-bg-alt relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative mb-16">
          <span className="section-number">04</span>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Selected work</p>
            <h2 className="text-4xl font-bold text-text-dark font-raleway">Featured Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mt-3" />
          </motion.div>
        </div>

        {/* Featured (large) card */}
        <div className="mb-6">
          <ProjectCard project={projects[0]} large />
        </div>

        {/* Grid of remaining projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
