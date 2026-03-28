export interface PortfolioItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  category: string[];
  result: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'business-dashboard',
    title: 'Enterprise Business Dashboard',
    summary: 'Full-stack analytics dashboard for a retail business with real-time data, reporting, and user management.',
    description: 'Designed and built a complete analytics platform with Angular frontend and Node.js/MongoDB backend. Features include sales charts, inventory tracking, user roles, and PDF report exports.',
    technologies: ['Angular 18', 'Node.js', 'MongoDB', 'Chart.js', 'TypeScript', 'AWS'],
    category: ['Angular', 'Full-Stack', 'AWS'],
    result: 'Reduced manual reporting time by 80% and gave the client real-time visibility into their business performance.',
    featured: true
  },
  {
    id: 'saas-landing',
    title: 'SaaS Product Landing Page',
    summary: 'High-converting landing page for a B2B SaaS product with animated sections and lead capture forms.',
    description: 'Built a fast, SEO-optimized landing page with smooth scroll animations, an email waitlist form, pricing section, and feature showcase. Lighthouse score of 98.',
    technologies: ['Angular', 'SCSS', 'TypeScript', 'DigitalOcean', 'GitHub Actions'],
    category: ['Angular', 'Performance', 'Deployment'],
    result: 'Achieved 98 Lighthouse performance score and a 12% email signup conversion rate from launch.',
    featured: true
  },
  {
    id: 'ecommerce-frontend',
    title: 'E-Commerce Frontend',
    summary: 'React-based shopping experience with product filtering, cart, and Stripe checkout integration.',
    description: 'Built a performant React e-commerce frontend with product catalog filtering, shopping cart state management, responsive design, and Stripe payment integration.',
    technologies: ['React', 'TypeScript', 'Redux', 'Stripe API', 'Node.js'],
    category: ['React', 'Full-Stack'],
    result: 'Cut page load time in half compared to the previous solution and improved mobile checkout completion by 35%.',
    featured: true
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant Business Website',
    summary: 'Modern website for a local restaurant with online menu, reservation form, and Google Maps integration.',
    description: 'Designed and developed a full restaurant website with an interactive menu, online reservation system, photo gallery, and contact form. Fully mobile-optimized.',
    technologies: ['Angular', 'SCSS', 'Google Maps API', 'Nodemailer'],
    category: ['Angular', 'Business Website'],
    result: 'Increased online reservations by 60% in the first month after launch.',
    featured: false
  },
  {
    id: 'api-integration-project',
    title: 'CRM & Payment API Integration',
    summary: 'Integrated Stripe, HubSpot CRM, and Twilio SMS into an existing business platform.',
    description: 'Connected an existing Angular application with Stripe for subscriptions, HubSpot for lead management, and Twilio for SMS notifications — replacing a fragmented manual workflow.',
    technologies: ['Node.js', 'Stripe', 'HubSpot API', 'Twilio', 'Express'],
    category: ['API Integration', 'Full-Stack'],
    result: 'Automated the entire lead-to-payment pipeline, saving the client 15+ hours of manual work per week.',
    featured: false
  },
  {
    id: 'aws-deployment',
    title: 'Cloud Infrastructure & CI/CD Pipeline',
    summary: 'Migrated a legacy app to AWS with Docker, auto-scaling, and automated deployments via GitHub Actions and Jenkins.',
    description: 'Containerized an existing Node.js application, set up AWS ECS with auto-scaling, CloudFront CDN, and a full CI/CD pipeline using GitHub Actions and Jenkins with zero-downtime deployments.',
    technologies: ['AWS ECS', 'Docker', 'GitHub Actions', 'Jenkins', 'CloudFront', 'Nginx'],
    category: ['AWS', 'Deployment'],
    result: 'Reduced server costs by 40% and deployment time from 45 minutes to under 3 minutes.',
    featured: false
  }
];

export const PORTFOLIO_CATEGORIES = ['All', 'Angular', 'React', 'Full-Stack', 'AWS', 'Deployment', 'Performance', 'API Integration', 'Business Website'];
