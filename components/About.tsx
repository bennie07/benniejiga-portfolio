'use client';
import { motion } from 'framer-motion';

const skills = [
  { title: 'Instructional Design', tags: ['ADDIE', 'SAM', "Bloom's Taxonomy", "Gagne's 9 Events", 'Cognitive Load Theory'] },
  { title: 'E-Learning Tools', tags: ['Articulate Storyline', 'Articulate Rise', 'Adobe Captivate', 'iSpring Suite', 'Camtasia'] },
  { title: 'LMS Experience', tags: ['Moodle', 'TalentLMS', 'LearnDash', 'SCORM Cloud'] },
];

const stats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '4.8/5', label: 'Learner Satisfaction' },
  { value: '40%', label: 'Completion Rate Boost' },
  { value: '30%', label: 'Dev Time Saved' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="relative mb-16">
          <span className="section-number">01</span>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Get to know me</p>
            <h2 className="text-4xl font-bold text-text-dark font-raleway">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mt-3" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img src="/bennie-benjamin-ejiga_.jpg" alt="Bennie Ejiga" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Floating experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
              <div className="text-3xl font-bold text-primary font-raleway">5+</div>
              <div className="text-text-light text-sm">Years Experience</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="text-2xl font-bold text-text-dark font-raleway mb-4">
              Instructional Designer &amp; <span className="gradient-text">Learning Experience Specialist</span>
            </h3>
            <p className="text-text-light leading-relaxed mb-4">
              I&apos;m passionate about transforming complex information into engaging, effective learning experiences. With expertise in instructional design, e-learning development, and learning experience design, I create solutions that drive measurable business outcomes while delighting learners.
            </p>
            <p className="text-text-light leading-relaxed mb-8">
              My approach combines established instructional design methodologies with innovative learning techniques to create courses that engage, inspire, and deliver results.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-bg-alt rounded-xl p-4 border border-gray-100"
                >
                  <div className="text-2xl font-bold text-primary font-raleway">{s.value}</div>
                  <div className="text-text-light text-sm mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, si) => (
                <div key={skill.title}>
                  <p className="text-sm font-semibold text-text-dark mb-2">{skill.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, ti) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: si * 0.1 + ti * 0.05 }}
                        className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
