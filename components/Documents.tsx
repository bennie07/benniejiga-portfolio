'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { documents, Document } from '@/data/documents';

type FilterType = 'all' | 'analysis' | 'design' | 'development' | 'evaluation';

const filters: { label: string; value: FilterType }[] = [
  { label: 'All Documents', value: 'all' },
  { label: 'Analysis', value: 'analysis' },
  { label: 'Design', value: 'design' },
  { label: 'Development', value: 'development' },
  { label: 'Evaluation', value: 'evaluation' },
];

const categoryColors: Record<string, string> = {
  analysis: 'bg-violet-100 text-violet-700',
  design: 'bg-blue-100 text-blue-700',
  development: 'bg-emerald-100 text-emerald-700',
  evaluation: 'bg-amber-100 text-amber-700',
};

function PreviewModal({ doc, onClose }: { doc: Document; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Toolbar */}
        <div
          className="flex items-center justify-between px-6 py-3 bg-navy border-b border-white/10 shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-sm">
              <i className={`fas ${doc.icon}`} />
            </div>
            <span className="text-white font-semibold text-sm">{doc.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={doc.templateFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition px-3 py-1.5 rounded-lg hover:bg-white/10"
            >
              <i className="fas fa-arrow-up-right-from-square text-xs" />
              Open in new tab
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition"
              aria-label="Close preview"
            >
              <i className="fas fa-xmark" />
            </button>
          </div>
        </div>

        {/* iframe */}
        <div className="flex-1 overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <iframe
            src={doc.templateFile}
            className="w-full h-full border-0 bg-white"
            title={`Preview: ${doc.title}`}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function DocumentCard({ doc }: { doc: Document }) {
  const [previewing, setPreviewing] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group perspective h-[360px]"
      >
        <div className="flip-card-inner w-full h-full">
          {/* Front */}
          <div className="flip-card-front bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 p-7 flex flex-col">
            {/* Category badge */}
            <div className="mb-5">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${categoryColors[doc.category]}`}>
                {doc.category}
              </span>
            </div>

            {/* Icon */}
            <div className="w-14 h-14 bg-primary/8 text-primary rounded-2xl flex items-center justify-center mb-5 text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <i className={`fas ${doc.icon}`} />
            </div>

            <h3 className="text-base font-bold text-text-dark font-raleway mb-3 leading-snug">
              {doc.title}
            </h3>
            <p className="text-text-light text-sm leading-relaxed flex-1">
              {doc.shortDesc}
            </p>

            <div className="mt-6 flex items-center gap-1.5 text-primary text-xs font-semibold">
              <span>Hover to explore</span>
              <i className="fas fa-arrow-right text-[10px]" />
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back rounded-2xl shadow-md overflow-hidden flex flex-col"
            style={{ background: 'linear-gradient(145deg, #0d1117 0%, #1a1f3a 100%)' }}
          >
            {/* Header strip */}
            <div className="px-6 pt-6 pb-4 border-b border-white/10">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-bold text-white font-raleway leading-snug">{doc.title}</h3>
                <div className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center text-xs shrink-0">
                  <i className={`fas ${doc.icon}`} />
                </div>
              </div>
              <p className="text-white/50 text-xs mt-2 leading-relaxed">{doc.purpose}</p>
            </div>

            {/* Key components */}
            <div className="px-6 py-4 flex-1 overflow-hidden">
              <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider mb-3">
                Key Components
              </p>
              <ul className="space-y-2">
                {doc.keyComponents.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span className="text-white/70 text-xs leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 pt-3 border-t border-white/10">
              <p className="text-white/40 text-xs italic mb-4 leading-relaxed">
                {doc.value}
              </p>
              <button
                onClick={() => setPreviewing(true)}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition"
              >
                <i className="fas fa-eye" />
                Preview Sample
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {previewing && (
        <PreviewModal doc={doc} onClose={() => setPreviewing(false)} />
      )}
    </>
  );
}

export default function Documents() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered = documents.filter(
    (doc) => activeFilter === 'all' || doc.category === activeFilter
  );

  return (
    <section id="documents" className="py-28 bg-bg-alt relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="relative mb-16">
          <span className="section-number">03</span>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
              Templates &amp; frameworks
            </p>
            <h2 className="text-4xl font-bold text-text-dark font-raleway">
              Instructional Design Documents
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mt-3" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-text-light max-w-2xl mb-10"
        >
          A comprehensive set of instructional design documents is essential for creating effective
          learning experiences. Hover any card to explore details — click <strong>Preview Sample</strong> to
          open the live document.
        </motion.p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === f.value
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white text-text-light border border-gray-200 hover:border-primary/40 hover:text-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
