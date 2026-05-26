export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Bennie's instructional design expertise transformed our training programs into engaging and effective e-learning experiences. His structured approach ensured our content was not just informative but truly impactful for our learners.",
    author: 'Sarah Johnson',
    role: 'Learning Director, The Diversity Movement',
    imageUrl: '/img/testimonials/client1.jpg',
  },
  {
    id: 2,
    quote:
      "The PCI-DSS module was one of the most interactive compliance courses we've taken! Bennie has a unique talent for making complex regulatory content engaging and memorable, which has significantly improved our compliance rates.",
    author: 'Michael Chen',
    role: 'Training Manager, Skillieo',
    imageUrl: '/img/testimonials/client2.jpg',
  },
  {
    id: 3,
    quote:
      "Working with Bennie on our Antitrust Law training was a pleasure. His ability to translate complex legal concepts into practical, engaging scenarios helped our employees actually understand the material rather than just completing compliance requirements.",
    author: 'Elena Rodriguez',
    role: 'Compliance Director, Metso Outotec',
    imageUrl: '/img/testimonials/client3.jpg',
  },
  {
    id: 4,
    quote:
      "Bennie's instructional design methodology ensured our leadership development program wasn't just theoretical—it created real behavior change. The scenario-based approach and practical application focus made a significant difference in effectiveness.",
    author: 'James Wilson',
    role: 'HR Director, Anvil Media',
    imageUrl: '/img/testimonials/client4.jpg',
  },
];
