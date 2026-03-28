export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'timeline',
    question: 'How long does a project typically take?',
    answer: 'It depends on scope. A professional business website usually takes 1–2 weeks. A multi-page site or small web app takes 2–4 weeks. Complex full-stack applications typically range from 4–8 weeks. We\'ll give you a clear timeline estimate during our initial consultation before any work begins.',
    category: 'Process'
  },
  {
    id: 'technologies',
    question: 'What technologies do you use?',
    answer: 'For frontend: Angular 18 and React with TypeScript. For backend: Node.js and Express. For databases: MongoDB and PostgreSQL. For deployment: AWS (EC2, S3, CloudFront, Lambda) and DigitalOcean, with CI/CD pipelines through GitHub Actions or Jenkins. We choose the right tool for the job — not just the one we\'re most comfortable with.',
    category: 'Technical'
  },
  {
    id: 'deployment',
    question: 'Do you help with deployment and hosting?',
    answer: 'Yes. We handle full deployment — from setting up your hosting environment to going live. We work with AWS and DigitalOcean, and we set up CI/CD pipelines using GitHub Actions or Jenkins so future updates deploy automatically. We can also help if you already have a server and just need deployment support.',
    category: 'Technical'
  },
  {
    id: 'existing-project',
    question: 'Can you fix or improve an existing project?',
    answer: 'Absolutely. We regularly take on projects where the codebase needs debugging, refactoring, performance improvements, or new features. We\'ll review what you have, give you an honest assessment, and tell you exactly what we can do and how long it will take.',
    category: 'Process'
  },
  {
    id: 'small-business',
    question: 'Do you work with small businesses and solo founders?',
    answer: 'Yes, and that\'s where we do some of our best work. Small businesses often need quality execution without enterprise-level overhead. We offer flexible packages and clear pricing so you know exactly what you\'re getting for your budget.',
    category: 'General'
  },
  {
    id: 'ongoing-support',
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes. After launch, we offer a free support window of 14 days for bug fixes and minor adjustments. For ongoing maintenance, updates, or new features, we offer flexible monthly retainer arrangements. We can discuss what level of support makes sense for your business.',
    category: 'Support'
  },
  {
    id: 'payments',
    question: 'How do payments work?',
    answer: 'For most projects, we work on a 50/50 payment split — 50% upfront to start, 50% on delivery. For larger or longer-term projects, we can structure milestone-based payments. We accept bank transfers and other standard payment methods.',
    category: 'Business'
  },
  {
    id: 'design',
    question: 'Do you do design as well as development?',
    answer: 'Yes. We handle the full design-to-code process. We work from your brand guidelines if you have them, or we\'ll create a clean, professional design that fits your business. We don\'t use generic templates — every design is built for your specific goals.',
    category: 'General'
  },
  {
    id: 'communication',
    question: 'How do you keep clients updated during a project?',
    answer: 'Communication is something we take seriously. We send regular updates, share progress previews, and are available by email or video call during business hours. You\'ll never be left wondering where your project stands.',
    category: 'Process'
  },
  {
    id: 'revisions',
    question: 'How many revisions are included?',
    answer: 'Every project includes two full revision rounds after delivery. If something doesn\'t look or feel right, we\'ll fix it. For larger changes that fall outside the original scope, we\'ll discuss them openly and agree on a clear plan before proceeding.',
    category: 'Process'
  }
];
