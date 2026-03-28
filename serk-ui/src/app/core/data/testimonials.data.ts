export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  featured: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Thompson',
    role: 'Founder & CEO',
    company: 'LaunchPad Analytics',
    content: 'Working with Serk Technologies was the best technical decision we made this year. They built our entire analytics dashboard from scratch — clean code, great design, and delivered on time. The communication was excellent throughout.',
    rating: 5,
    featured: true
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'NovaTech Solutions',
    content: 'Our legacy frontend was a mess. Within two weeks, the codebase was clean, the bugs were fixed, and performance went from a Lighthouse score of 42 to 91. I wish we had done this sooner.',
    rating: 5,
    featured: true
  },
  {
    id: '3',
    name: 'David Okonkwo',
    role: 'Owner',
    company: 'Prime Realty Group',
    content: 'I needed a professional website for my real estate business fast. They delivered a beautiful, mobile-friendly site that actually generates leads. My contact form submissions tripled in the first month.',
    rating: 5,
    featured: true
  },
  {
    id: '4',
    name: 'Emily Ramirez',
    role: 'Co-Founder',
    company: 'FlowStack SaaS',
    content: 'The API integration work was seamless. Stripe, HubSpot, and our custom backend all connected without issues. They explained every step clearly, which made the entire process low-stress.',
    rating: 5,
    featured: false
  },
  {
    id: '5',
    name: 'James Park',
    role: 'CTO',
    company: 'BuildRight Software',
    content: 'We brought Serk Technologies in to advise on our cloud migration. The clarity, the planning, and the execution were outstanding. We moved to AWS in less time than expected and well under budget.',
    rating: 5,
    featured: false
  },
  {
    id: '6',
    name: 'Priya Nair',
    role: 'Marketing Director',
    company: 'Bloom Boutique',
    content: 'Our new website looks incredible and loads in under two seconds. The mobile experience is exactly what we wanted. The team was responsive, professional, and genuinely cared about the final result.',
    rating: 5,
    featured: false
  }
];
