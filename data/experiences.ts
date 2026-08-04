export interface LearningExperience {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string[];
  features: string[];
  results: string[];
  tools: string[];
  demoUrl: string;
  imageUrl: string;
}

export const learningExperiences: LearningExperience[] = [
  {
    id: 'exp-pci-dss',
    title: 'PCI DSS Requirements & Security Standard',
    client: 'Skillieo / Enterprise Security',
    year: '2022',
    category: 'Compliance Training',
    tags: ['Compliance Training', 'Articulate Storyline', 'Interactive'],
    description:
      'Interactive module on PCI-DSS compliance for secure handling of cardholder data with practical applications and case studies.',
    challenge:
      'The client needed to make complex PCI-DSS compliance requirements understandable and actionable for both technical and non-technical employees. The training needed to balance technical details with practical application across different organizational roles.',
    solution: [
      'Conducted in-depth research on PCI-DSS compliance requirements and threat vectors',
      'Developed role-specific learning paths for technical, administrative, and handling personnel',
      'Created interactive case studies showing real-world application and vulnerability prevention',
      'Designed scenario-based assessments to verify understanding and remediation awareness',
      'Implemented knowledge checks with targeted remediation for missed questions',
      'Developed a compliance quick-reference guide as supporting material'
    ],
    features: [
      'Role-based learning paths',
      'Interactive compliance scenarios',
      'Technical and non-technical explanations',
      'Real-world case studies',
      'Compliance reference tools'
    ],
    results: [
      '98% pass rate on compliance certification assessment',
      '86% of employees reported clearer understanding of PCI compliance duties',
      'Successful PCI audit with zero critical findings',
      'Significant reduction in compliance-related security tickets'
    ],
    tools: ['Articulate Storyline', 'Adobe Illustrator', 'Camtasia', 'SCORM 1.2'],
    demoUrl: '/demo/storyline/PCI-DSS/story.html',
    imageUrl: '/img/projects/project3.jpg',
  },
  {
    id: 'exp-metso-outotec',
    title: 'Metso Outotec: Antitrust Law E-Learning',
    client: 'Metso Outotec',
    year: '2023',
    category: 'Compliance Training',
    tags: ['Compliance Training', 'iSpring Suite', 'SCORM'],
    description:
      'Interactive e-learning module on Antitrust Competition Law ensuring employees understand compliance regulations and apply them effectively in daily work.',
    challenge:
      'The client needed to transform complex legal content into engaging, practical training that employees would actually apply rather than just complete for compliance purposes. The training needed to be globally accessible and consistent while accounting for regional legal variations.',
    solution: [
      'Conducted a needs analysis to identify learning gaps and real-world application contexts',
      'Collaborated with legal SMEs to distill complex regulations into practical guidelines',
      'Developed a structured module using the ADDIE framework and cognitive load management',
      'Created a detailed storyboard mapping out interactions and assessments',
      'Implemented scenario-based learning approaches to increase workplace relevance',
      'Utilized branching scenarios to demonstrate consequence awareness in business dealings',
      'Developed the course using iSpring Suite ensuring SCORM compliance'
    ],
    features: [
      'Interactive decision-making scenarios',
      'Role-specific case studies',
      'Knowledge checks with remediation',
      'Document reference library',
      'Compliance certification tracking'
    ],
    results: [
      '97% completion rate across global workforce',
      '85% average assessment score (17% improvement over previous training)',
      '92% of learners reported increased confidence in identifying antitrust issues',
      'Noticeable reduction in compliance questions to legal department'
    ],
    tools: ['iSpring Suite', 'Adobe Photoshop', 'Adobe Illustrator', 'SCORM'],
    demoUrl: '/demo/ispring/Antitrust_Law/',
    imageUrl: '/img/projects/project1.jpg',
  },
  {
    id: 'exp-hippohub',
    title: 'HippoHub: Respect in the Workplace',
    client: 'HippoHub',
    year: '2023',
    category: 'DEI & Culture',
    tags: ['DEI Training', 'iSpring Suite', 'Scenario-Based'],
    description:
      'Engaging module on workplace respect, diversity, and inclusion with scenario-based learning approaches to build practical interpersonal skills.',
    challenge:
      'The client needed to move beyond theoretical diversity training to create an experience that would change behaviors and foster a more inclusive workplace environment. Previous training had low engagement and minimal impact on daily workplace interactions.',
    solution: [
      'Developed a series of realistic workplace scenarios showing common inclusion challenges',
      'Created branching scenarios where learners must make decisions and see immediate consequences',
      'Incorporated diverse perspectives through character-based narratives',
      'Designed reflection activities to connect learning to personal workplace experiences',
      'Implemented microlearning segments to reinforce key concepts over time',
      'Included practical tools and frameworks for addressing inclusion issues directly'
    ],
    features: [
      'Interactive branching scenarios',
      'Diverse character narratives',
      'Reflection and application activities',
      'Practical frameworks and tools',
      'Self-assessment components'
    ],
    results: [
      '94% of learners rated the training as "highly relevant" to their daily work',
      '78% increase in employee confidence addressing workplace inclusion issues',
      '23% reduction in reported workplace inclusion incidents',
      '89% of managers reported observing positive behavior changes'
    ],
    tools: ['iSpring Suite', 'Adobe Photoshop', 'Camtasia', 'SCORM'],
    demoUrl: '/demo/ispring/Respect_in_the_Workplace/',
    imageUrl: '/img/projects/project2.jpg',
  },
  {
    id: 'exp-usps-scam',
    title: 'USPS Delivery Scam Security Awareness',
    client: 'Northwest Farm Credit Services',
    year: '2022',
    category: 'Security Awareness',
    tags: ['Security Training', 'Articulate Storyline', 'Microlearning'],
    description:
      'Security awareness microlearning on identifying and avoiding delivery scams with interactive scenarios and practical identification tools.',
    challenge:
      'The client needed a targeted security awareness module addressing a specific threat vector affecting remote workers: delivery scams. The training needed to be brief, highly targeted, and effective in helping employees identify fraudulent communications.',
    solution: [
      'Researched current delivery scam tactics and real-world phishing examples',
      'Designed interactive scenarios showing progressive sophistication of scams',
      'Created a visual identification guide showing legitimate vs. fraudulent communications',
      'Developed decision-making practice with immediate diagnostic feedback',
      'Incorporated real examples (with sensitive information obfuscated)',
      'Created a microlearning format that could be completed in under 15 minutes'
    ],
    features: [
      'Interactive scam identification practice',
      'Visual comparison guides',
      'Decision-making scenarios',
      'Quick reference resources',
      'Mobile-friendly microlearning format'
    ],
    results: [
      '100% completion rate within two weeks of launch',
      '76% reduction in employees clicking suspicious delivery links',
      '94% of employees correctly identified scam indicators post-training',
      'Training shared as best practice across partner financial institutions'
    ],
    tools: ['Articulate Storyline', 'Adobe Photoshop', 'SCORM'],
    demoUrl: '/demo/storyline/Scam-USPS/story.html',
    imageUrl: '/img/projects/project4.jpg',
  },
  {
    id: 'exp-speak-life',
    title: 'Mia: Speak Life Essentials Communication',
    client: 'Mia Communications',
    year: '2022',
    category: 'Soft Skills Training',
    tags: ['Soft Skills', 'Articulate Storyline', 'Branching Scenarios'],
    description:
      'Communication skills training focused on positive language and constructive feedback with practical workplace application scenarios.',
    challenge:
      'The client wanted to improve organizational communication culture by training employees on using positive, constructive language in challenging situations to drive lasting behavior change.',
    solution: [
      'Developed a communication framework based on positive psychology principles',
      'Created interactive scenarios displaying multiple communication approaches',
      'Designed practice activities for transforming negative statements into constructive dialogue',
      'Incorporated real workplace examples from the client organization',
      'Implemented spaced practice with follow-up reinforcement activities',
      'Created a manager toolkit for supporting skill application on the job'
    ],
    features: [
      'Communication transformation practice',
      'Interactive workplace scenarios',
      'Feedback and coaching simulations',
      'Self-assessment tools',
      'Practical application resources'
    ],
    results: [
      '92% of participants reported applying techniques within one week',
      '22% increase in internal communication satisfaction scores',
      'Measurable reduction in escalated communication issues reported to HR',
      'Adopted as part of standard onboarding for all new employees'
    ],
    tools: ['Articulate Storyline', 'Camtasia', 'Adobe Creative Suite', 'SCORM'],
    demoUrl: '/demo/Mia/story.html',
    imageUrl: '/img/projects/project5.jpg',
  },
  {
    id: 'exp-multi-pov',
    title: 'Multiple POV Scenario-Based Learning',
    client: 'Enterprise Collaboration',
    year: '2023',
    category: 'Scenario-Based Learning',
    tags: ['Scenario-Based', 'Articulate Storyline', 'Perspective Taking'],
    description:
      'Innovative perspective-based learning scenario allowing learners to experience situations from different viewpoints for enhanced empathy and collaboration.',
    challenge:
      'The client needed to improve cross-functional collaboration by helping employees understand challenges from multiple perspectives. Traditional role-playing was ineffective, requiring an immersive digital solution.',
    solution: [
      'Developed a scenario-based approach showing the same workplace challenge from 3 viewpoints',
      'Created character-driven narratives with distinct priorities, goals, and constraints',
      'Designed an interactive interface allowing users to switch between perspectives seamlessly',
      'Incorporated decision points with consequences visible across all roles',
      'Included guided reflection activities to connect insights to workplace application',
      'Created team discussion guides for group debrief sessions'
    ],
    features: [
      'Multi-perspective scenarios',
      'Character-driven narrative approach',
      'Perspective-switching interface',
      'Consequence visualization',
      'Guided reflection activities'
    ],
    results: [
      '88% of learners reported increased understanding of peer roles',
      '35% improvement in cross-functional collaboration metrics',
      '42% decrease in cross-departmental project escalations',
      'Adopted as standard training for all leadership positions'
    ],
    tools: ['Articulate Storyline', 'Adobe Creative Suite', 'SCORM'],
    demoUrl: '/Multiple_POV_Scenario/story.html',
    imageUrl: '/img/projects/project6.jpg',
  },
  {
    id: 'exp-flatbed-tarping',
    title: 'Smart Workplace: Tarping Flatbed Loads',
    client: 'Smart Workplace',
    year: '2022',
    category: 'Safety & Operations',
    tags: ['Safety Training', 'Articulate Storyline', 'Procedural Training'],
    description:
      'Safety training module demonstrating proper techniques for securing and tarping flatbed loads to prevent accidents and ensure transportation compliance.',
    challenge:
      'The client needed to reduce load-related safety incidents by ensuring drivers understood proper load securing techniques. Traditional classroom methods were ineffective for hands-on operational skills.',
    solution: [
      'Conducted field research to document actual tarping procedures with senior drivers',
      'Created detailed step-by-step visual demonstrations of proper securing techniques',
      'Developed interactive decision points for various load, strap, and weather scenarios',
      'Incorporated common mistake identification with corrective guidance',
      'Designed mobile-compatible training for on-the-go driver reference',
      'Included equipment inspection and maintenance guidelines'
    ],
    features: [
      'Step-by-step visual demonstrations',
      'Interactive decision scenarios',
      'Safety checklist tools',
      'Equipment inspection guides',
      'Mobile-optimized reference materials'
    ],
    results: [
      '47% reduction in load-related safety incidents within six months',
      '98% of drivers rated the training as "very practical"',
      '32% reduction in damaged freight claims',
      'Adopted as standard onboarding for all new drivers'
    ],
    tools: ['Articulate Storyline', 'Adobe Photoshop', 'Camtasia', 'SCORM'],
    demoUrl: '/demo/storyline/Tarping-flatbed-loads/story.html',
    imageUrl: '/img/projects/project7.jpg',
  },
  {
    id: 'exp-hearing-protection',
    title: 'Smart Workplace: Hearing Protection',
    client: 'Smart Workplace',
    year: '2022',
    category: 'Safety & Operations',
    tags: ['Safety Training', 'Articulate Storyline', 'Interactive Assessment'],
    description:
      'Workplace safety training on proper hearing protection techniques and equipment usage in high-noise environments to prevent long-term hearing damage.',
    challenge:
      'The client experienced increasing rates of workplace hearing loss claims despite providing equipment. They needed training focusing on proper fitting techniques and overcoming objections to wearing protection.',
    solution: [
      'Researched common causes of protection failure through interviews with safety experts',
      'Created interactive simulations demonstrating proper fitting and seal techniques',
      'Developed comparative scenarios showing long-term consequences of improper usage',
      'Designed equipment selection guides based on different workplace noise levels',
      'Incorporated visualizations of cumulative hearing damage to increase motivation',
      'Included troubleshooting for common comfort and communication issues'
    ],
    features: [
      'Interactive fitting simulations',
      'Equipment selection guides',
      'Hearing damage visualizations',
      'Comfort and communication techniques',
      'Workplace noise assessment tools'
    ],
    results: [
      '82% increase in proper equipment usage during site inspections',
      '91% of employees demonstrated correct fitting techniques in assessments',
      '36% reduction in hearing protection-related comfort complaints',
      'Measurable decrease in noise-induced hearing loss claims'
    ],
    tools: ['Articulate Storyline', 'Adobe Illustrator', 'SCORM'],
    demoUrl: '/demo/storyline/Hearing-Protection/story.html',
    imageUrl: '/img/projects/project8.jpg',
  },
  {
    id: 'exp-video-elearning',
    title: 'Anvil Media: Video e-Learning Demo',
    client: 'Anvil Media',
    year: '2023',
    category: 'Product Training',
    tags: ['Product Training', 'iSpring Suite', 'Video-Based Learning'],
    description:
      'Video-based e-learning demonstration module effectively showcasing product functionality to customers with engaging interactions and practical application.',
    challenge:
      'The client needed to transform technical software demonstrations into engaging, self-paced learning experiences. Traditional video tutorials provided low engagement, and live demos were unscalable.',
    solution: [
      'Developed a structured learning path that builds from basic to advanced features',
      'Created professionally produced video demonstrations with clear visual callouts',
      'Integrated interactive practice activities between video segments',
      'Implemented knowledge checks to verify understanding before progression',
      'Designed scenario-based challenges to demonstrate practical software application',
      'Included downloadable quick reference guides for post-training support'
    ],
    features: [
      'High-quality video demonstrations',
      'Interactive practice activities',
      'Progressive skill-building path',
      'Scenario-based challenges',
      'Downloadable reference resources'
    ],
    results: [
      '64% improvement in customer onboarding satisfaction scores',
      '47% reduction in support tickets related to basic feature usage',
      '78% completion rate (versus 23% for previous static video tutorials)',
      'Format adopted as standard for all product training materials'
    ],
    tools: ['iSpring Suite', 'Adobe Premiere Pro', 'Adobe After Effects', 'SCORM'],
    demoUrl: '/demo/ispring/video_elearning_demo/',
    imageUrl: '/img/projects/project9.jpg',
  },
  {
    id: 'exp-dei-fundamentals',
    title: 'The Diversity Movement: DEI Fundamentals',
    client: 'The Diversity Movement',
    year: '2023',
    category: 'DEI & Culture',
    tags: ['DEI Training', 'Custom Development', 'Scenario-Based Learning'],
    description:
      'Comprehensive diversity, equity, and inclusion training program transformed from instructor-led to engaging e-learning format with reflection activities.',
    challenge:
      'The client needed to scale their highly effective instructor-led DEI training to reach more organizations without losing the personal impact and transformative nature of the in-person experience.',
    solution: [
      'Collaborated with DEI experts to identify key transformative moments from live training',
      'Developed a narrative-based approach featuring diverse perspectives and experiences',
      'Created interactive reflection activities to replace facilitated discussions',
      'Designed scenario-based challenges with branching outcomes and feedback',
      'Incorporated multimedia elements including video testimonials and case studies',
      'Developed implementation guides for organizational leaders to support application'
    ],
    features: [
      'Narrative-driven learning approach',
      'Interactive reflection activities',
      'Branching scenario challenges',
      'Video testimonials and case studies',
      'Implementation and discussion guides'
    ],
    results: [
      'Expanded program reach from 12 to 87 organizations in first year',
      '92% of participants rated the training as "very impactful"',
      '84% reported taking specific actions based on training insights',
      'Featured as a case study in HR industry publication for effective ILT-to-eLearning conversion'
    ],
    tools: ['Custom Development', 'Adobe Creative Suite', 'HTML5', 'SCORM'],
    demoUrl: '/demo/DI/',
    imageUrl: '/img/projects/project10.jpg',
  },
];
