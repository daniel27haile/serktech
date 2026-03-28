export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
  forWho: string;
  outcome: string;
  tags: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-website',
    icon: '🌐',
    title: 'Business Website Development',
    shortDesc: 'Fast, modern, and conversion-focused websites for businesses.',
    description: 'We design and build professional business websites that look great, load fast, and turn visitors into customers. From landing pages to multi-page sites, every detail is crafted to represent your brand and grow your business.',
    forWho: 'Small businesses, local services, startups, and solo founders who need a strong online presence.',
    outcome: 'A professional website that builds trust, ranks on Google, and converts visitors into leads.',
    tags: ['Angular', 'React', 'HTML/CSS', 'SEO', 'Responsive Design']
  },
  {
    id: 'frontend-development',
    icon: '⚡',
    title: 'Angular / React Frontend Development',
    shortDesc: 'Fast, interactive, and scalable frontend applications.',
    description: 'We build dynamic, high-performance frontend applications using Angular and React. Whether you need a dashboard, customer portal, or complex SPA, we deliver clean, maintainable code that scales.',
    forWho: 'Companies that need a skilled frontend team to build or improve their web application UI.',
    outcome: 'A fast, accessible, and maintainable frontend that your users will enjoy using.',
    tags: ['Angular 18', 'React', 'TypeScript', 'RxJS', 'SCSS']
  },
  {
    id: 'fullstack-development',
    icon: '🔧',
    title: 'Full-Stack Web App Development',
    shortDesc: 'End-to-end web applications from UI to API to database.',
    description: 'We handle the full development lifecycle — from the user interface to backend APIs and database design. You get a complete, production-ready web application without managing multiple vendors.',
    forWho: 'Businesses and founders who want to build a complete web application with a single reliable team.',
    outcome: 'A fully functional web application ready to launch, scale, and grow.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Angular', 'React', 'REST API']
  },
  {
    id: 'api-integration',
    icon: '🔗',
    title: 'API Integration',
    shortDesc: 'Connect your apps to payment gateways, third-party tools, and more.',
    description: 'We integrate your application with external services — Stripe payments, Twilio SMS, Google APIs, Mailchimp, CRMs, and any REST or GraphQL API. We also build clean internal APIs to connect your frontend and backend.',
    forWho: 'Businesses that need to connect their systems with third-party platforms or internal services.',
    outcome: 'Seamless data flow between your systems and the tools your business depends on.',
    tags: ['REST API', 'GraphQL', 'Stripe', 'Google APIs', 'Webhooks']
  },
  {
    id: 'deployment',
    icon: '☁️',
    title: 'Cloud Deployment & CI/CD Pipelines',
    shortDesc: 'Get your application live on AWS or DigitalOcean with automated deployments.',
    description: 'We deploy web applications to production with proper configuration for performance, security, and reliability. We work with AWS (EC2, S3, CloudFront, Lambda) and DigitalOcean — and we set up CI/CD pipelines using GitHub Actions or Jenkins so every push deploys automatically.',
    forWho: 'Developers and businesses who need their app deployed properly, running reliably, and updated without manual effort.',
    outcome: 'A live, scalable application with automated deployments, zero-downtime updates, and solid uptime.',
    tags: ['AWS', 'DigitalOcean', 'GitHub Actions', 'Jenkins', 'Docker', 'Nginx']
  },
  {
    id: 'performance',
    icon: '📈',
    title: 'Website Performance Optimization',
    shortDesc: 'Make your website fast, smooth, and high-scoring.',
    description: 'Slow websites lose visitors and rank lower on Google. We audit and optimize your site for Lighthouse scores, Core Web Vitals, bundle size, image optimization, caching, and rendering performance.',
    forWho: 'Businesses with existing websites or apps that are slow, laggy, or underperforming in search.',
    outcome: 'Faster load times, better Google rankings, and a smoother experience for every visitor.',
    tags: ['Core Web Vitals', 'Lighthouse', 'Bundle Optimization', 'Lazy Loading', 'CDN']
  },
  {
    id: 'bug-fixing',
    icon: '🛠️',
    title: 'Bug Fixing & Refactoring',
    shortDesc: 'Fix broken features and modernize messy code.',
    description: 'Got a codebase with bugs, outdated dependencies, or hard-to-maintain code? We diagnose issues, fix them properly, and refactor code to be cleaner, faster, and easier to extend going forward.',
    forWho: 'Teams that inherited legacy code, have persistent bugs, or need a technical cleanup before scaling.',
    outcome: 'A stable, cleaner codebase with documented fixes and less technical debt.',
    tags: ['Debugging', 'Code Review', 'Refactoring', 'TypeScript', 'Testing']
  },
  {
    id: 'consulting',
    icon: '💡',
    title: 'Technical Consulting',
    shortDesc: 'Get expert advice before making expensive technical decisions.',
    description: 'Not sure which technology to use, how to structure your project, or whether your current architecture will scale? We provide honest, practical consulting to help you make the right technical decisions for your business.',
    forWho: 'Founders, PMs, and business owners who need technical guidance without hiring a full-time team.',
    outcome: 'Clear direction, fewer costly mistakes, and confidence in your technical strategy.',
    tags: ['Architecture', 'Tech Stack', 'Code Review', 'Strategy', 'AWS']
  }
];
