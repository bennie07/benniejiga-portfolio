'use client';

import { motion } from 'framer-motion';

const contributions = [
  {
    icon: 'fa-chalkboard-teacher',
    title: 'Train-the-Trainer Materials',
    description:
      'Developed comprehensive train-the-trainer guides and facilitation materials to support learning initiatives at multiple organizations.',
    items: [
      'Workshop facilitation guides',
      'Instructional coaching resources',
      'Subject matter expert training',
      'Virtual facilitation toolkits',
    ],
  },
  {
    icon: 'fa-desktop',
    title: 'LMS Implementation',
    description:
      'Implemented and managed learning management systems for various organizations, creating efficient learning ecosystems.',
    items: [
      'Platform selection consulting',
      'System configuration and setup',
      'Course structure development',
      'User management and reporting',
    ],
  },
  {
    icon: 'fa-chart-bar',
    title: 'Key Achievements',
    description:
      'Delivered measurable improvements in learning effectiveness and business outcomes through strategic instructional design.',
    items: [
      'Improved course completion rates by 40%',
      'Reduced development time by 30%',
      'Achieved high learner satisfaction (4.8/5)',
      'Created standardized design systems',
    ],
  },
];

export default function Contributions() {
  return (
    <section id="contributions" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="relative mb-16">
          <span className="section-number">05</span>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Impact</p>
            <h2 className="text-4xl font-bold text-text-dark font-raleway">Learning &amp; Development Contributions</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mt-3" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-gray-100 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-4">
                <i className={`fas ${item.icon}`} />
              </div>
              <h3 className="text-lg font-bold text-text-dark font-raleway mb-3">{item.title}</h3>
              <p className="text-text-light text-sm mb-4 leading-relaxed">{item.description}</p>
              <ul className="space-y-2">
                {item.items.map((li) => (
                  <li key={li} className="flex items-start gap-2 text-sm text-text-light">
                    <i className="fas fa-check text-primary mt-0.5 text-xs" />
                    {li}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
