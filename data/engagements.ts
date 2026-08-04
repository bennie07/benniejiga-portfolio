export interface Engagement {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  executiveSummary: string;
  types: string[];
  deliverables: string[];
  outcomes: string[];
  mckinseyOverview: {
    challenge: string;
    question: string;
    approach: string;
    outcomes: string;
  };
  fullNarrative: {
    situation: string;
    observation: string;
    tension: string;
    realQuestion: string;
    thinking: string;
    architecture: string;
    deliverablesList: string[];
    outcomesList: string[];
    reflection: string;
  };
}

export const engagements: Engagement[] = [
  {
    id: 'skillieo',
    title: 'Architecting Skillieo',
    subtitle: 'Designing a Capability Ecosystem Instead of Another LMS',
    tagline: 'Learning Technology Strategy • Enterprise Architecture',
    executiveSummary:
      'Organizations have plenty of Learning Management Systems that deliver training. But delivering training is not the same as building capability. Skillieo was designed from the ground up as an enterprise LXP that connects learning to measurable performance.',
    types: ['Learning Technology', 'Platform Architecture', 'Enterprise LXP'],
    deliverables: [
      'LXP System Architecture',
      'Rust Microservices Backend',
      'Next.js Design System',
      'Capability Pathways Engine'
    ],
    outcomes: [
      'Shifted focus from course completion to capability progression',
      'Integrated performance support and structured paths into one ecosystem',
      'Created high-concurrency enterprise learning infrastructure'
    ],
    mckinseyOverview: {
      challenge:
        'Traditional LMS platforms manage administration and course completion, but fail to develop or measure real-world organizational capability.',
      question:
        'How do we design a learning ecosystem that helps organizations turn knowledge into measurable performance?',
      approach:
        'Architected an enterprise LXP combining high-performance microservices (Rust/Next.js) with capability progression pathways instead of static course catalogs.',
      outcomes:
        'Established a foundational ecosystem model that aligns learner engagement directly with business performance metrics.'
    },
    fullNarrative: {
      situation:
        'Organizations invest heavily in Learning Management Systems to track completions and deliver compliance training. However, leadership frequently finds that high completion rates rarely correlate with improved workplace performance.',
      observation:
        'Most platforms are designed for administrators to manage files rather than for learners to build skill mastery. Learning remains episodic and disconnected from daily work.',
      tension:
        'Administrators want tracking and compliance control, while learners and managers want intuitive, just-in-time capability development without administrative friction.',
      realQuestion:
        'Can an enterprise platform be architected to prioritize capability progression while maintaining seamless scalability and governance?',
      thinking:
        'Instead of building another wrapper around SCORM files, we treated learning as a high-availability software service—decoupling content delivery from capability tracking.',
      architecture:
        'Designed a multi-layered ecosystem: Rust backend microservices for low-latency event processing (NATS JetStream), paired with a responsive Next.js frontend and WebAuthn security.',
      deliverablesList: [
        'LXP Core Architecture Blueprint',
        'Capability Mapping Engine',
        'Rust/Next.js System Stack',
        'Performance Support Module'
      ],
      outcomesList: [
        'Decoupled capability measurement from static completion data',
        'Achieved sub-100ms response times across global learning nodes',
        'Created a scalable foundation for modern enterprise learning'
      ],
      reflection:
        'Technology should disappear behind experience. Software is not the learning solution itself—it is the environment where capability naturally accelerates.'
    }
  },
  {
    id: 'pinnacle',
    title: 'Pinnacle Learning Design System',
    subtitle: 'Scaling Quality Without Sacrificing Creativity',
    tagline: 'Learning Design System • Quality Governance',
    executiveSummary:
      'As learning teams grow, maintaining quality becomes difficult. Pinnacle standardizes thinking before standardizing visuals, giving designers a shared language to build consistent, high-impact experiences.',
    types: ['Design Systems', 'Governance', 'Storyline Framework'],
    deliverables: [
      'Visual Design Language',
      'Storyline Master Templates',
      'Storyboarding Framework',
      'Quality Assurance Rubrics'
    ],
    outcomes: [
      'Eliminated "decision tax" for instructional designers',
      'Accelerated production cycles while raising visual standards',
      'Established repeatable quality governance across enterprise teams'
    ],
    mckinseyOverview: {
      challenge:
        'Fragmented design decisions across growing L&D teams resulted in inconsistent learner experiences, bloated review cycles, and duplicated effort.',
      question:
        'How do you scale quality, consistency, and efficiency without sacrificing creative freedom?',
      approach:
        'Created a 4-tier Learning Design System: Learning Philosophy → Design Principles → Reusable Design Patterns → Production Templates.',
      outcomes:
        'Transformed quality assurance from a late-stage inspection bottleneck into an inherent property of the design system.'
    },
    fullNarrative: {
      situation:
        'Large-scale learning programs rely on dozens of designers making hundreds of isolated design decisions—from navigation patterns to feedback states—leading to inconsistent learner experiences.',
      observation:
        'Designers were repeatedly reinventing infrastructure decisions on every project. This cognitive tax reduced the time available to solve genuine learning problems.',
      tension:
        'Project managers demanded faster delivery, reviewers demanded strict consistency, and designers resisted rigid templates that restricted creativity.',
      realQuestion:
        'How do we standardize decisions without standardizing creative expression?',
      thinking:
        'Software teams solved this years ago with Design Systems. Learning teams needed a design system for pedagogical and interaction patterns, not just UI colors.',
      architecture:
        'Structured around four layers: Philosophy > Principles > Interaction Patterns > Component Templates. Principles guide decisions; patterns execute them.',
      deliverablesList: [
        'Pinnacle System Documentation',
        'Storyline Master Component Library',
        'Interaction Pattern Repository',
        'Accessibility & QA Framework'
      ],
      outcomesList: [
        'Reduced course development time by eliminating repetitive layout decisions',
        'Standardized accessibility and interaction standards across all projects',
        'Shifted team focus from production mechanics to instructional impact'
      ],
      reflection:
        'The most valuable part of a design system isn\'t the templates it contains. It\'s the thinking it preserves.'
    }
  },
  {
    id: 'modern-learning-function',
    title: 'Designing a Modern Learning Function',
    subtitle: 'Governing Learning at Enterprise Scale',
    tagline: 'Enterprise L&D Strategy • Operating Model',
    executiveSummary:
      'Governing learning for over 36,000 people across multiple training hubs requires more than more trainers. It requires an integrated operating model connecting curriculum, faculty, assessment, and certification.',
    types: ['L&D Operating Model', 'Enterprise Strategy', 'Governance Framework'],
    deliverables: [
      'L&D Operating Blueprint',
      'Faculty Development Model',
      'Assessment Integrity Strategy',
      'Certification Governance'
    ],
    outcomes: [
      'Reframed L&D as a strategic capability governance function',
      'Ensured uniform certification credibility across global hubs',
      'Built a scalable operating model for enterprise growth'
    ],
    mckinseyOverview: {
      challenge:
        'Rapid enterprise expansion created fragmented training centers, inconsistent instruction, and diluted certification credibility across 36,000+ employees.',
      question:
        'How do you build a learning function that scales quality, consistency, and trust as the organization grows?',
      approach:
        'Architected an end-to-end L&D Operating Model aligning organizational strategy, curriculum governance, faculty enablement, and assessment integrity.',
      outcomes:
        'Established a unified governance framework that maintains high instructional standards regardless of delivery hub.'
    },
    fullNarrative: {
      situation:
        'A rapidly scaling enterprise trained over 36,000 personnel across dispersed training centers. Varying facilitator styles and uncoordinated curriculum updates threatened certification trust.',
      observation:
        'The organization didn\'t have a training delivery problem. It had a governance problem. Quality was tied to individual trainers rather than institutional standards.',
      tension:
        'Executive leaders expected L&D to drive strategic performance, but operationally L&D was organized merely as a scheduling and delivery service.',
      realQuestion:
        'How do you shift an L&D department from an administrative training provider to an enterprise capability architect?',
      thinking:
        'Curriculum, facilitation, assessment, and certification cannot be managed as siloed tasks. They are interdependent components of an organizational operating system.',
      architecture:
        'Designed an integrated operating model linking Organizational Strategy → Governance → Curriculum & Faculty → Quality Assurance → Certification.',
      deliverablesList: [
        'Enterprise L&D Operating Manual',
        'Facilitator Capability Framework',
        'Assessment Governance Guidelines',
        'Quality Assurance Matrix'
      ],
      outcomesList: [
        'Standardized certification validity across all regional training centers',
        'Elevated L&D leadership into strategic capability conversations',
        'Created a repeatable system for onboarding new training hubs'
      ],
      reflection:
        'Organizations don\'t outgrow their learning programs. They outgrow the systems that support them.'
    }
  },
  {
    id: 'ppd-framework',
    title: 'Personal & Professional Development Framework',
    subtitle: 'From Isolated Events to a Capability Journey',
    tagline: 'Capability Journey • Curriculum Architecture',
    executiveSummary:
      'Professional development often feels like a series of disconnected workshops. This 6-phase framework treats learning as a continuous progression where every stage builds intentionally on the previous.',
    types: ['Capability Architecture', 'Curriculum Design', 'Talent Development'],
    deliverables: [
      '6-Phase Progression Map',
      'Competency Framework',
      'Assessment & Rubric Suite',
      'Facilitator & Learner Guides'
    ],
    outcomes: [
      'Transformed episodic training into a multi-stage career progression pathway',
      'Enabled clear self-assessment and manager-led capability tracking',
      'Created a reusable capability development blueprint'
    ],
    mckinseyOverview: {
      challenge:
        'Employees completed standalone workshops and earned certificates, yet capability development remained fragmented without clear progression.',
      question:
        'How do you design a learning journey that intentionally develops capability over time instead of delivering disconnected learning events?',
      approach:
        'Constructed a 6-Phase Capability Journey: Foundation → Self Awareness → Professional Capability → Applied Practice → Leadership → Continuous Growth.',
      outcomes:
        'Shifted organizational focus from tracking course completions to nurturing long-term human capability growth.'
    },
    fullNarrative: {
      situation:
        'Employees participated in leadership workshops, compliance e-learning, and technical seminars, but managers saw minimal long-term skill progression.',
      observation:
        'Curricula answered "What topics should we cover?" rather than "Who should this person become over time?" Development was treated as an event, not a journey.',
      tension:
        'Employees wanted clear growth pathways, managers wanted applied workplace competence, and L&D kept launching isolated programs that failed to connect.',
      realQuestion:
        'How do we design a framework that organizes human growth rather than just organizing content?',
      thinking:
        'Progression requires sequencing, application, reflection, and increasing responsibility. Each learning experience must explicitly prepare the learner for the next.',
      architecture:
        'A 6-phase cumulative architecture where every stage introduces new concepts, reinforces prior skills, and expands real-world application.',
      deliverablesList: [
        '6-Phase Curriculum Roadmap',
        'Competency Rubrics',
        'Reflection & Application Workbooks',
        'Program Evaluation Framework'
      ],
      outcomesList: [
        'Established clear developmental benchmarks for employees and managers',
        'Reduced redundant training by mapping learning directly to capability levels',
        'Fostered sustained learning application beyond classroom events'
      ],
      reflection:
        'A curriculum shouldn\'t simply answer "What should people learn?" It should answer "Who are they becoming?"'
    }
  },
  {
    id: 'project-leaders',
    title: 'Programme That Builds Project Leaders',
    subtitle: 'Architecting Learning for Real-World Performance',
    tagline: 'Program Architecture • Performance Simulation',
    executiveSummary:
      'Project management is rarely learned by studying textbooks. This program integrates PM methodology, M&E, authentic decision scenarios, and practical judgment into a real-world simulation framework.',
    types: ['Program Architecture', 'Performance Simulation', 'M&E Integration'],
    deliverables: [
      'Lifecycle Curriculum Architecture',
      'Interactive Case Simulations',
      'Facilitator & Learner Guides',
      'Competency-Based Assessment Rubrics'
    ],
    outcomes: [
      'Bridged the gap between theoretical PM knowledge and real-world execution',
      'Integrated Monitoring & Evaluation throughout the project lifecycle',
      'Prepared practitioners to navigate real constraints and stakeholder dynamics'
    ],
    mckinseyOverview: {
      challenge:
        'Project managers knew methodologies and passed exams, but struggled to make sound decisions when real-world projects faced complexity and change.',
      question:
        'How do you prepare people to think, decide, and perform like project leaders before they manage high-stakes projects?',
      approach:
        'Designed a program around the full project lifecycle (Context → Design → Implementation → Monitoring → Evaluation → Reflection) driven by authentic decision-making.',
      outcomes:
        'Created a high-impact learning ecosystem that cultivates professional judgment and practical execution.'
    },
    fullNarrative: {
      situation:
        'Organizations relied heavily on project managers for strategic initiatives, but personnel often lacked the decision-making confidence required for complex project environments.',
      observation:
        'PM programs taught isolated topics (scheduling, budgeting, risk) sequentially. In reality, these disciplines interact continuously during project execution.',
      tension:
        'Leadership needed practitioners who could deliver under pressure; traditional training produced individuals who understood terms but lacked decision confidence.',
      realQuestion:
        'How do we shift project management learning from memorizing processes to practicing decision-making?',
      thinking:
        'Project management is fundamentally a decision-making discipline. Learning must mirror the authentic tension and trade-offs of real projects.',
      architecture:
        'Built around the real project lifecycle, introducing concepts at the exact moment of practical need while embedding M&E as a continuous feedback loop.',
      deliverablesList: [
        'Lifecycle Program Architecture',
        'Decision-Based Storyboards & Modules',
        'Monitoring & Evaluation Toolkit',
        'Authentic Assessment Rubrics'
      ],
      outcomesList: [
        'Enhanced learner ability to manage real-world project constraints',
        'Embedded continuous M&E thinking into daily project workflows',
        'Delivered measurable improvement in post-training project delivery'
      ],
      reflection:
        'The most valuable project plan isn\'t the one that\'s perfectly documented. It\'s the one that helps people make better decisions when reality changes.'
    }
  },
  {
    id: 'measurement-architecture',
    title: 'Learning Measurement & Assessment Architecture',
    subtitle: 'Designing Evidence, Not Just Evaluation',
    tagline: 'Measurement Strategy • Analytics Architecture',
    executiveSummary:
      'Completion rates and satisfaction surveys don\'t prove capability. This engagement designed a measurement architecture that embeds evidence collection naturally throughout the learner journey.',
    types: ['Measurement Strategy', 'Assessment Design', 'Learning Analytics'],
    deliverables: [
      'Learning Measurement Architecture',
      'Authentic Assessment Rubrics',
      'Performance Indicator Matrix',
      'Learning Analytics Blueprint'
    ],
    outcomes: [
      'Replaced vanity metrics with verifiable evidence of capability growth',
      'Standardized assessment rubrics across disparate learning programs',
      'Aligned learning analytics directly with business performance indicators'
    ],
    mckinseyOverview: {
      challenge:
        'Leadership demanded proof of performance impact, but L&D only possessed completion percentages and post-course satisfaction surveys.',
      question:
        'How do you design learning so that evidence of capability is generated naturally throughout the learner journey—not only at the end?',
      approach:
        'Embedded authentic assessment and continuous data points into the core learning architecture, building a clear bridge between learning data and capability metrics.',
      outcomes:
        'Provided executive stakeholders with verifiable evidence of skill acquisition and workplace readiness.'
    },
    fullNarrative: {
      situation:
        'L&D collected massive amounts of data—clicks, test scores, attendance—yet executive sponsors remained skeptical about actual performance improvements.',
      observation:
        'Measurement was treated as an afterthought tag appended to the end of a course, rather than an architectural element designed into the experience.',
      tension:
        'Executives demanded business evidence, while learning teams lacked the framework to collect performance-based indicators.',
      realQuestion:
        'How do we transform assessment from a administrative quiz into a source of organizational intelligence?',
      thinking:
        'If evidence is designed into the learning interactions themselves, assessment becomes a continuous developmental tool rather than a final gatekeeper.',
      architecture:
        'Designed a multi-tier measurement architecture mapping Competency Frameworks → Performance Indicators → Authentic Assessment Rubrics → Analytics Dashboards.',
      deliverablesList: [
        'Measurement System Blueprint',
        'Authentic Rubric Library',
        'Evidence Collection Framework',
        'Executive Reporting Template'
      ],
      outcomesList: [
        'Established objective capability measurement across programs',
        'Improved feedback loops for continuous curriculum enhancement',
        'Gained leadership trust through transparent performance evidence'
      ],
      reflection:
        'Learning only creates value when you can demonstrate that capability has changed.'
    }
  },
  {
    id: 'connected-learning',
    title: 'Designing Connected Learning Experiences',
    subtitle: 'Creating One Experience Across Touchpoints',
    tagline: 'Omnichannel Strategy • Blended Architecture',
    executiveSummary:
      'Learners move between workshops, digital modules, job aids, and peer networks. This architecture connects disparate channels into a single, cohesive learner journey.',
    types: ['Omnichannel Strategy', 'Blended Architecture', 'Journey Mapping'],
    deliverables: [
      'Learner Journey Maps',
      'Blended Learning Strategy',
      'Channel Selection Matrix',
      'Ecosystem Integration Architecture'
    ],
    outcomes: [
      'Eliminated fragmented learner experiences across multiple platforms',
      'Ensured every delivery channel served a clear, dedicated purpose',
      'Delivered seamless learning continuity across digital and live touchpoints'
    ],
    mckinseyOverview: {
      challenge:
        'Disjointed learning assets across workshops, videos, LMS modules, and job aids forced learners to manually connect fragmented pieces.',
      question:
        'How do you design learning that feels like one continuous journey, regardless of how or where it is delivered?',
      approach:
        'Mapped learner journeys first, assigning delivery channels (digital, live, micro, social) based on specific cognitive and performance moments.',
      outcomes:
        'Created a unified blended learning ecosystem where each channel reinforces the overall capability narrative.'
    },
    fullNarrative: {
      situation:
        'Organizations deployed multiple platforms and media types, but learners experienced them as disconnected, confusing silos.',
      observation:
        'Learning teams built assets based on tool availability rather than mapping how a learner transitions between moments of learning, practice, and support.',
      tension:
        'Tech teams managed platforms, SMEs pushed long content, and learners struggled to navigate the chaotic learning landscape.',
      realQuestion:
        'How do we design an experience where the delivery channels become invisible and the learning journey flows uninterrupted?',
      thinking:
        'Learners don\'t experience channels; they experience journeys. Channel selection must follow the psychological needs of each learning phase.',
      architecture:
        'A blended ecosystem connecting microlearning (pre-work) → immersive practice (live/simulated) → job aids (workflow support) → social reflection.',
      deliverablesList: [
        'Omnichannel Journey Map',
        'Channel Matching Framework',
        'Content Continuity Guidelines',
        'Platform Integration Spec'
      ],
      outcomesList: [
        'Unified multi-channel learning into a frictionless experience',
        'Optimized delivery costs by selecting high-impact channels for each phase',
        'Increased learner engagement through consistent journey pacing'
      ],
      reflection:
        'Learners don\'t experience channels. They experience journeys.'
    }
  }
];
