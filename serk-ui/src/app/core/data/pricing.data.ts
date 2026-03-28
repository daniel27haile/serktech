export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  notIncluded?: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for a clean, professional online presence.',
    price: '$800',
    priceNote: 'Starting from',
    features: [
      'Single-page or landing page',
      'Mobile-responsive design',
      'Contact form with email integration',
      'Basic SEO setup',
      'Performance optimization',
      'Deployment to AWS or DigitalOcean',
      '14-day post-launch support',
      '2 revision rounds'
    ],
    notIncluded: [
      'Custom backend',
      'CMS integration',
      'E-commerce functionality'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For businesses ready to scale with a full website or small app.',
    price: '$2,500',
    priceNote: 'Starting from',
    features: [
      'Multi-page business website or small web app',
      'Custom design from scratch',
      'Backend API (Node.js + MongoDB)',
      'Admin panel or dashboard',
      'Third-party API integrations',
      'Advanced SEO & Open Graph',
      'AWS or DigitalOcean deployment with CI/CD',
      '30-day post-launch support',
      '3 revision rounds'
    ],
    cta: 'Start Your Project',
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Full-scale custom web solutions built to last.',
    price: '$6,000',
    priceNote: 'Starting from',
    features: [
      'Complex multi-page application',
      'Full-stack custom development',
      'User authentication & roles',
      'Payment gateway integration',
      'Advanced API integrations',
      'AWS infrastructure & scaling',
      'CI/CD pipeline setup',
      'Performance & accessibility audit',
      '60-day post-launch support',
      'Unlimited revisions during build'
    ],
    cta: 'Let\'s Talk',
    highlighted: false
  }
];
