'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { methodologyTabs, comparisonTable } from '@/data/methodology';

function ADDIEContent() {
  const steps = [
    { letter: 'A', title: 'Analysis', desc: 'Thorough needs assessment, audience analysis, and learning environment evaluation' },
    { letter: 'D', title: 'Design', desc: 'Strategic planning of learning objectives, assessments, content structure, and learning activities' },
    { letter: 'D', title: 'Development', desc: 'Creation of learning materials, media elements, and interactive components' },
    { letter: 'I', title: 'Implementation', desc: 'Deployment of learning solutions and support for facilitators and learners' },
    { letter: 'E', title: 'Evaluation', desc: 'Formative and summative assessment of learning effectiveness and business impact' },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold text-text-dark font-raleway mb-3">ADDIE Model</h3>
      <p className="text-text-light mb-5">I employ the ADDIE framework as a foundational structure for complex learning projects requiring thorough planning and systematic development:</p>
      <div className="space-y-3 mb-6">
        {steps.map((s) => (
          <div key={s.title} className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{s.letter}</div>
            <div>
              <h4 className="font-semibold text-text-dark">{s.title}</h4>
              <p className="text-text-light text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
        <h4 className="font-semibold text-text-dark mb-1">Recent Application</h4>
        <p className="text-text-light text-sm">The ADDIE framework was essential for developing the Metso Outotec Antitrust Law e-learning module, ensuring compliance requirements were thoroughly analyzed and addressed in a systematic manner.</p>
      </div>
    </div>
  );
}

function SAMContent() {
  const phases = [
    { icon: 'fa-clipboard-list', title: 'Preparation Phase', desc: 'Information gathering, background research, and stakeholder alignment' },
    { icon: 'fa-pencil-alt', title: 'Iterative Design Phase', desc: 'Rapid prototyping, collaborative review, and continuous improvement' },
    { icon: 'fa-cogs', title: 'Iterative Development Phase', desc: 'Incremental development with frequent testing and refinement' },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold text-text-dark font-raleway mb-3">SAM (Successive Approximation Model)</h3>
      <p className="text-text-light mb-5">For projects requiring rapid development and frequent stakeholder input, I use this agile, iterative approach:</p>
      <div className="space-y-3 mb-6">
        {phases.map((p) => (
          <div key={p.title} className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
              <i className={`fas ${p.icon}`} />
            </div>
            <div>
              <h4 className="font-semibold text-text-dark">{p.title}</h4>
              <p className="text-text-light text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
        <h4 className="font-semibold text-text-dark mb-1">Recent Application</h4>
        <p className="text-text-light text-sm">The SAM approach enabled rapid development of The Diversity Movement DEI training, allowing us to gather continuous feedback and iterate quickly to meet evolving stakeholder needs.</p>
      </div>
    </div>
  );
}

function BackwardsContent() {
  const steps = [
    { num: '1', title: 'Identify desired results', desc: 'Defining clear learning outcomes and performance targets' },
    { num: '2', title: 'Determine acceptable evidence', desc: 'Designing authentic assessments that demonstrate mastery' },
    { num: '3', title: 'Plan learning experiences', desc: 'Creating activities that build toward successful performance' },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold text-text-dark font-raleway mb-3">Backwards Design</h3>
      <p className="text-text-light mb-5">I frequently employ the Understanding by Design (UbD) framework to ensure alignment between outcomes, assessments, and learning experiences:</p>
      <div className="space-y-3 mb-6">
        {steps.map((s) => (
          <div key={s.num} className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">{s.num}</div>
            <div>
              <h4 className="font-semibold text-text-dark">{s.title}</h4>
              <p className="text-text-light text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
        <h4 className="font-semibold text-text-dark mb-1">Recent Application</h4>
        <p className="text-text-light text-sm">The Skillieo PCI DSS Requirements module was designed backwards from clear compliance outcomes, ensuring every learning activity directly contributed to the required knowledge and skills.</p>
      </div>
    </div>
  );
}

function BloomsContent() {
  const levels = [
    { level: 6, title: 'Create', desc: 'Produce new or original work, design, formulate, develop', color: 'bg-red-500' },
    { level: 5, title: 'Evaluate', desc: 'Justify a position, critique, judge, defend, assess', color: 'bg-orange-500' },
    { level: 4, title: 'Analyze', desc: 'Draw connections among ideas, differentiate, organize, attribute', color: 'bg-yellow-500' },
    { level: 3, title: 'Apply', desc: 'Use information in new situations, execute, implement, solve', color: 'bg-green-500' },
    { level: 2, title: 'Understand', desc: 'Explain ideas or concepts, interpret, summarize, paraphrase', color: 'bg-blue-500' },
    { level: 1, title: 'Remember', desc: 'Recall facts and basic concepts, recognize, list, retrieve', color: 'bg-indigo-500' },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold text-text-dark font-raleway mb-3">Bloom&apos;s Taxonomy</h3>
      <p className="text-text-light mb-5">I carefully craft learning objectives at appropriate cognitive levels to ensure content moves beyond simple recall to higher-order thinking:</p>
      <div className="space-y-2 mb-6">
        {levels.map((l) => (
          <div key={l.title} className="flex gap-3 items-center">
            <div className={`${l.color} text-white text-xs font-bold px-2 py-1 rounded w-8 text-center`}>{l.level}</div>
            <div className="flex-1 bg-gray-50 rounded px-3 py-2">
              <span className="font-semibold text-text-dark text-sm">{l.title}: </span>
              <span className="text-text-light text-sm">{l.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
        <h4 className="font-semibold text-text-dark mb-1">Recent Application</h4>
        <p className="text-text-light text-sm">In the HippoHub Respect in the Workplace training, I carefully structured objectives to progress from recognizing inappropriate behaviors, to analyzing situations, to creating appropriate responses.</p>
      </div>
    </div>
  );
}

function GagneContent() {
  const events = [
    { n: 1, title: 'Gain Attention', desc: 'Opening hooks and engagement techniques' },
    { n: 2, title: 'Inform Learners of Objectives', desc: 'Clear outcome statements' },
    { n: 3, title: 'Stimulate Recall of Prior Learning', desc: 'Connecting to existing knowledge' },
    { n: 4, title: 'Present the Content', desc: 'Clear, chunked information presentation' },
    { n: 5, title: 'Provide Learning Guidance', desc: 'Demonstrations and examples' },
    { n: 6, title: 'Elicit Performance', desc: 'Practice opportunities' },
    { n: 7, title: 'Provide Feedback', desc: 'Specific, actionable response' },
    { n: 8, title: 'Assess Performance', desc: 'Formal evaluation' },
    { n: 9, title: 'Enhance Retention and Transfer', desc: 'Application to real-world contexts' },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold text-text-dark font-raleway mb-3">Gagne&apos;s Nine Events of Instruction</h3>
      <p className="text-text-light mb-5">This framework guides my content sequencing and instructional strategies:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
        {events.map((e) => (
          <div key={e.n} className="flex gap-3 items-start bg-gray-50 rounded px-3 py-2">
            <span className="w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">{e.n}</span>
            <div>
              <p className="font-semibold text-text-dark text-sm">{e.title}</p>
              <p className="text-text-light text-xs">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
        <h4 className="font-semibold text-text-dark mb-1">Recent Application</h4>
        <p className="text-text-light text-sm">I applied Gagne&apos;s framework in the Smart Workplace Hearing Protection module to ensure logical progression from awareness to application of safety procedures.</p>
      </div>
    </div>
  );
}

function CognitiveContent() {
  const types = [
    { icon: 'fa-brain', title: 'Intrinsic Load', desc: 'The inherent difficulty associated with the subject matter', strategy: 'Break complex tasks into manageable parts' },
    { icon: 'fa-exclamation-circle', title: 'Extraneous Load', desc: 'Unnecessary cognitive burden caused by poor instructional design', strategy: 'Remove distractions and streamline content presentation' },
    { icon: 'fa-lightbulb', title: 'Germane Load', desc: 'The beneficial cognitive load that contributes to learning', strategy: 'Use schemas and patterns to enhance understanding' },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold text-text-dark font-raleway mb-3">Cognitive Load Theory</h3>
      <p className="text-text-light mb-5">I design learning experiences that manage cognitive load to enhance information processing and retention:</p>
      <div className="space-y-4 mb-6">
        {types.map((t) => (
          <div key={t.title} className="flex gap-4 items-start bg-gray-50 rounded-lg p-4">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
              <i className={`fas ${t.icon}`} />
            </div>
            <div>
              <h4 className="font-semibold text-text-dark">{t.title}</h4>
              <p className="text-text-light text-sm mb-1">{t.desc}</p>
              <p className="text-sm"><strong className="text-text-dark">Strategy:</strong> <span className="text-text-light">{t.strategy}</span></p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
        <h4 className="font-semibold text-text-dark mb-1">Recent Application</h4>
        <p className="text-text-light text-sm">For the Metso Outotec Antitrust Law training, I carefully managed cognitive load by breaking complex legal concepts into digestible chunks and using visual models to enhance understanding.</p>
      </div>
    </div>
  );
}

function ScenarioContent() {
  const components = [
    { icon: 'fa-bullseye', title: 'Realistic Context', desc: 'Authentic workplace situations that reflect real challenges' },
    { icon: 'fa-code-branch', title: 'Decision Points', desc: 'Critical thinking opportunities that require application of knowledge' },
    { icon: 'fa-random', title: 'Branching Consequences', desc: 'Exploration of different outcomes based on choices' },
    { icon: 'fa-comment-dots', title: 'Feedback Mechanisms', desc: 'Contextual response to choices that reinforces learning' },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold text-text-dark font-raleway mb-3">Scenario-Based Learning</h3>
      <p className="text-text-light mb-5">I develop authentic scenarios that place learners in realistic situations where they must apply knowledge and make decisions:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {components.map((c) => (
          <div key={c.title} className="bg-gray-50 rounded-lg p-4 flex gap-3 items-start">
            <div className="w-9 h-9 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
              <i className={`fas ${c.icon}`} />
            </div>
            <div>
              <h4 className="font-semibold text-text-dark text-sm">{c.title}</h4>
              <p className="text-text-light text-xs">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
        <h4 className="font-semibold text-text-dark mb-1">Recent Application</h4>
        <p className="text-text-light text-sm">The Multiple POV Scenario project exemplifies this approach, allowing learners to experience situations from different perspectives and see how their decisions impact various stakeholders.</p>
      </div>
    </div>
  );
}

function MicroContent() {
  const features = [
    { icon: 'fa-crosshairs', title: 'Single Learning Objective', desc: 'Focused outcome for each unit' },
    { icon: 'fa-hourglass-half', title: 'Short Duration', desc: 'Typically 3-5 minutes per unit' },
    { icon: 'fa-mobile-alt', title: 'Multi-platform Delivery', desc: 'Mobile-optimized for anywhere access' },
    { icon: 'fa-redo', title: 'Spaced Repetition', desc: 'Strategic scheduling for retention' },
  ];
  return (
    <div>
      <h3 className="text-xl font-bold text-text-dark font-raleway mb-3">Microlearning</h3>
      <p className="text-text-light mb-5">When appropriate, I create focused, bite-sized learning units that target specific skills or knowledge gaps:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {features.map((f) => (
          <div key={f.title} className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
              <i className={`fas ${f.icon} text-lg`} />
            </div>
            <h4 className="font-semibold text-text-dark text-sm">{f.title}</h4>
            <p className="text-text-light text-xs mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
        <h4 className="font-semibold text-text-dark mb-1">Recent Application</h4>
        <p className="text-text-light text-sm">The Northwest Farm Credit Scam USPS Delivery training applied microlearning principles to deliver focused security awareness in under 10 minutes, resulting in immediate behavior change.</p>
      </div>
    </div>
  );
}

const tabContent: Record<string, React.ReactNode> = {
  addie: <ADDIEContent />,
  sam: <SAMContent />,
  backwards: <BackwardsContent />,
  blooms: <BloomsContent />,
  gagne: <GagneContent />,
  cognitive: <CognitiveContent />,
  scenario: <ScenarioContent />,
  micro: <MicroContent />,
};

export default function Methodology() {
  const [activeTab, setActiveTab] = useState('addie');

  return (
    <section id="methodology" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="relative mb-16">
          <span className="section-number">02</span>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">My approach</p>
            <h2 className="text-4xl font-bold text-text-dark font-raleway">Instructional Design Methodology</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded mt-3" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-text-light max-w-3xl">
            My instructional design practice is built on established frameworks and contemporary
            approaches, ensuring learning experiences are engaging, effective, and aligned with
            business goals. I employ multiple methodologies strategically, selecting the right
            approach based on project requirements, organizational context, and learner needs.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 overflow-x-auto"
        >
          <table className="w-full bg-white rounded-xl shadow-md overflow-hidden text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3 text-left">Methodology</th>
                <th className="px-4 py-3 text-left">When I Use It</th>
                <th className="px-4 py-3 text-left">Key Benefits</th>
                <th className="px-4 py-3 text-left">Project Examples</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr key={row.methodology} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-semibold text-primary">{row.methodology}</td>
                  <td className="px-4 py-3 text-text-light">{row.whenIUseIt}</td>
                  <td className="px-4 py-3 text-text-light">{row.keyBenefits}</td>
                  <td className="px-4 py-3 text-text-light">{row.projectExamples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Tab Headers */}
          <div className="flex flex-wrap border-b border-gray-200 overflow-x-auto">
            {methodologyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white border-b-2 border-primary'
                    : 'text-text-light hover:text-primary hover:bg-primary/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">{tabContent[activeTab]}</div>
        </motion.div>
      </div>
    </section>
  );
}
