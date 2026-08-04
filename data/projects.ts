export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  description: string;
  challenge: string; // Used for "The Situation"
  realQuestion?: string; // New field for "The Real Question"
  solution: string[]; // Used for "The Architecture" / "Intervention"
  features: string[]; // Used for "Deliverables"
  results: string[]; // Used for "Outcomes"
  tools: string[];
  demoUrl: string;
  imageUrl: string;
  fullImageUrl: string;
}

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Architecting Skillieo',
    client: 'Enterprise Innovation',
    year: '2023',
    category: 'Ecosystem Architecture',
    tags: ['LXP', 'Platform Design', 'Enterprise'],
    description:
      'Designing a Capability Ecosystem Instead of Another LMS. Skillieo establishes the philosophy that better learning starts with better questions.',
    challenge:
      'Organizations have plenty of Learning Management Systems that deliver training. But delivering training is not the same as building capability. The challenge was that existing systems were designed for administrators, not for the complex reality of how professionals actually learn and grow over time.',
    realQuestion:
      'How do we design a learning ecosystem that helps organizations turn knowledge into measurable performance?',
    solution: [
      'Designed a Learning Experience Platform (LXP) from the ground up using Rust for the backend and Next.js for the frontend.',
      'Shifted the focus from course completion to capability progression.',
      'Architected the system to support multiple delivery channels, integrating microlearning, performance support, and structured paths into a single ecosystem.'
    ],
    features: [
      'Learning Experience Platform (LXP)',
      'Capability Pathways',
      'Performance Support Tools',
      'Next.js Frontend Architecture',
      'Rust Backend Microservices',
      'Analytics Dashboard'
    ],
    results: [
      'Established a foundational philosophy for enterprise capability development.',
      'Shifted organizational focus from "training delivery" to "measurable performance outcomes".'
    ],
    tools: ['Next.js', 'Rust', 'Kubernetes', 'PostgreSQL', 'Figma'],
    demoUrl: '',
    imageUrl: '/img/projects/project1.jpg',
    fullImageUrl: '/img/projects/project1.jpg',
  },
  {
    id: 'project2',
    title: 'Pinnacle Learning Design System',
    client: 'Enterprise Consulting',
    year: '2023',
    category: 'Design Systems',
    tags: ['Design System', 'Governance', 'Storyline'],
    description:
      'Scaling quality without sacrificing creativity. A design system that standardizes thinking before it standardizes visuals.',
    challenge:
      'As learning teams grow, maintaining quality becomes increasingly difficult. New designers join projects with different styles and assumptions. Storyboards evolve independently. Interactions become inconsistent. Reviews become subjective. Development slows as every project reinvents decisions that have already been made.',
    realQuestion:
      'How do you scale quality, consistency, and efficiency without sacrificing creativity?',
    solution: [
      'Developed a Learning Design System that standardizes thinking before it standardizes visuals.',
      'Designed four interconnected layers: Learning Philosophy > Design Principles > Reusable Design Patterns > Templates, Assets & Components.',
      'Standardized recurring decisions to give designers more time to solve meaningful learning problems.'
    ],
    features: [
      'Learning Design Principles',
      'Visual Design Language',
      'Storyline Master Templates',
      'Storyboarding Framework',
      'Interaction Pattern Library',
      'Assessment Design Standards'
    ],
    results: [
      'Design quality became more predictable and development became faster.',
      'Designers spent less time solving recurring production problems and more time solving learning problems.',
      'Gave teams the confidence to deliver consistently excellent learning experiences.'
    ],
    tools: ['Figma', 'Storyline', 'Design Strategy', 'Consulting'],
    demoUrl: '',
    imageUrl: '/img/projects/project2.jpg',
    fullImageUrl: '/img/projects/project2.jpg',
  },
  {
    id: 'project3',
    title: 'Designing a Modern Learning Function',
    client: 'Enterprise L&D',
    year: '2023',
    category: 'Learning Functions',
    tags: ['Governance', 'Operating Model', 'Strategy'],
    description:
      'Governing learning at enterprise scale for over 36,000 people across multiple training hubs.',
    challenge:
      'The organization had reached a point where its existing approach to learning could no longer scale. Training was taking place across multiple centres. Different facilitators brought different teaching styles. Curriculum updates had to be coordinated. Scaling learning wasn’t simply about training more people. It was about governing quality across an increasingly complex ecosystem.',
    realQuestion:
      'How do you build a learning function that scales quality, consistency, and trust as the organization grows?',
    solution: [
      'Designed an operating model for Learning & Development itself.',
      'Integrated Curriculum Management, Faculty Development, and Assessment Integrity under unified Learning Governance.',
      'Treated curriculum, facilitation, assessment, and certification as interconnected parts of a single system.'
    ],
    features: [
      'Learning Operating Model',
      'Governance Framework',
      'Curriculum Architecture',
      'Faculty Development Framework',
      'Assessment Governance Model'
    ],
    results: [
      'Reframed Learning & Development as an organizational capability rather than an administrative function.',
      'Provided leadership with a framework for ensuring that learning quality could continue to scale alongside organizational growth.'
    ],
    tools: ['Consulting', 'Organizational Design', 'Strategy'],
    demoUrl: '',
    imageUrl: '/img/projects/project3.jpg',
    fullImageUrl: '/img/projects/project3.jpg',
  },
  {
    id: 'project4',
    title: 'Personal & Professional Development Framework',
    client: 'Capability Development',
    year: '2023',
    category: 'Learning Strategy',
    tags: ['Learning Journey', 'Capability', 'Curriculum'],
    description:
      'From isolated training events to a lifelong capability journey based on progressive growth.',
    challenge:
      'Employees attend workshops, complete eLearning, and participate in mentoring, but development often feels fragmented. One programme rarely connects to the next. Learners struggle to understand where they are on their development journey. The result isn\'t a lack of learning. It\'s a lack of progression.',
    realQuestion:
      'How do you design a learning journey that intentionally develops capability over time instead of delivering disconnected learning experiences?',
    solution: [
      'Designed a framework around six interconnected phases of development: Foundation, Self Awareness, Professional Capability, Applied Practice, Leadership & Influence, Continuous Growth.',
      'Each phase introduced new knowledge, reinforced previous learning, and prepared learners for increasingly complex challenges.',
      'Shifted the focus from completing phases to progressively building capability.'
    ],
    features: [
      'Six-Phase Curriculum Architecture',
      'Competency Framework',
      'Learning Pathways',
      'Assessment Strategy',
      'Reflection Activities'
    ],
    results: [
      'Transformed development from a series of disconnected activities into a structured capability journey.',
      'Encouraged organizations to measure success by long-term growth and sustained development rather than programme completion.'
    ],
    tools: ['Consulting', 'Curriculum Architecture', 'Strategy'],
    demoUrl: '',
    imageUrl: '/img/projects/project4.jpg',
    fullImageUrl: '/img/projects/project4.jpg',
  },
  {
    id: 'project5',
    title: 'Programme That Builds Project Leaders',
    client: 'Project Management',
    year: '2023',
    category: 'Learning Strategy',
    tags: ['Simulation', 'Project Delivery', 'M&E'],
    description:
      'Architecting learning for real-world project delivery instead of teaching textbook methodologies.',
    challenge:
      'Many project teams enter complex environments having learned project management primarily through theory. They understand the language, process groups, and templates. But translating that knowledge into effective project delivery remains challenging. The gap wasn\'t information. It was application.',
    realQuestion:
      'How do you prepare people to think, decide, and perform like project professionals before they are responsible for high-stakes projects?',
    solution: [
      'Built the programme around the lifecycle of project delivery: Understanding Context, Planning & Design, Implementation, Monitoring, Evaluation, Reflection & Improvement.',
      'Organized the experience around the kinds of decisions project professionals make every day.',
      'Integrated project management, monitoring and evaluation, assessment, and authentic performance into one coherent experience.'
    ],
    features: [
      'Programme Strategy',
      'Practical Project Activities',
      'Interactive eLearning Experiences',
      'Monitoring & Evaluation Framework',
      'Competency-Based Rubrics'
    ],
    results: [
      'Provided learners with a structured environment to develop both technical knowledge and professional judgement.',
      'Produced a learning experience that emphasized capability over content and decision-making over memorization.'
    ],
    tools: ['Consulting', 'Instructional Design', 'Assessment Design'],
    demoUrl: '',
    imageUrl: '/img/projects/project5.jpg',
    fullImageUrl: '/img/projects/project5.jpg',
  },
  {
    id: 'project6',
    title: 'Measurement & Assessment Architecture',
    client: 'Enterprise Evaluation',
    year: '2023',
    category: 'Measurement & Strategy',
    tags: ['Analytics', 'Assessment', 'Evidence'],
    description:
      'Designing Evidence, Not Just Evaluation. Demonstrating that capability has actually changed.',
    challenge:
      'Learning teams were collecting data. Leadership wanted evidence. Assessments measured knowledge. Dashboards measured completion. But very little demonstrated whether learning had actually improved performance. The organization wasn’t suffering from a lack of data; it was suffering from a lack of meaningful evidence.',
    realQuestion:
      'How do you design learning so that evidence of capability is generated naturally throughout the learner journey—not only at the end?',
    solution: [
      'Designed measurement into the learning architecture itself rather than treating assessment as a final step.',
      'Focused on competency frameworks, performance indicators, and authentic assessments.',
      'Established continuous feedback loops and a learning analytics strategy.'
    ],
    features: [
      'Competency Framework',
      'Assessment Strategy & Rubrics',
      'Performance Indicators',
      'Learning Measurement Architecture',
      'Learning Analytics Blueprint'
    ],
    results: [
      'Standardized assessment quality and consistent evaluation across programmes.',
      'Generated clearer evidence of capability growth and stronger alignment between learning and organizational outcomes.'
    ],
    tools: ['Consulting', 'Data Strategy', 'Assessment Architecture'],
    demoUrl: '',
    imageUrl: '/img/projects/project6.jpg',
    fullImageUrl: '/img/projects/project6.jpg',
  },
  {
    id: 'project7',
    title: 'Designing Connected Learning Experiences',
    client: 'Omnichannel Learning',
    year: '2023',
    category: 'Ecosystem Architecture',
    tags: ['Blended Learning', 'Journey Mapping', 'Omnichannel'],
    description:
      'Creating one continuous learning experience across multiple delivery channels and touchpoints.',
    challenge:
      'Different learning experiences were being designed independently. Instructor-led training existed in one place, eLearning somewhere else, and videos in another platform. Each asset worked individually, but together they didn’t feel like one learning experience. Learners were expected to connect the pieces themselves.',
    realQuestion:
      'How do you design learning that feels like one continuous journey, regardless of how or where it is delivered?',
    solution: [
      'Started by designing the learner journey, not the delivery channels.',
      'Determined the most appropriate medium for each learning experience only after understanding the moments that mattered.',
      'Created a blended learning architecture where every delivery method had a clear purpose.'
    ],
    features: [
      'Learning Journey Maps',
      'Blended Learning Strategy',
      'Curriculum Architecture',
      'Channel Selection Framework',
      'Ecosystem Integration Strategy'
    ],
    results: [
      'Transformed fragmented assets into a seamless learner journey.',
      'Provided a strategic framework for future content delivery and channel selection.'
    ],
    tools: ['Journey Mapping', 'Consulting', 'Ecosystem Architecture'],
    demoUrl: '',
    imageUrl: '/img/projects/project7.jpg',
    fullImageUrl: '/img/projects/project7.jpg',
  }
];
