import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../core/data/services.data';
import { PORTFOLIO_ITEMS } from '../../core/data/portfolio.data';
import { TESTIMONIALS } from '../../core/data/testimonials.data';
import { FAQS } from '../../core/data/faq.data';
import { PRICING_PLANS } from '../../core/data/pricing.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredServices = SERVICES.slice(0, 4);
  featuredProjects = PORTFOLIO_ITEMS.filter(p => p.featured);
  featuredTestimonials = TESTIMONIALS.filter(t => t.featured);
  pricingPlans = PRICING_PLANS;
  featuredFaqs = FAQS.slice(0, 5);

  trustPoints = [
    { icon: '✓', label: '50+ Projects Delivered' },
    { icon: '✓', label: '5-Star Client Reviews' },
    { icon: '✓', label: 'On-Time Delivery' },
    { icon: '✓', label: 'Clean, Maintainable Code' }
  ];

  whyPoints = [
    {
      icon: '🎯',
      title: 'Outcome-First Thinking',
      desc: 'We focus on what your website needs to achieve — not just how it looks. Every decision we make is tied to your business goals.'
    },
    {
      icon: '🔒',
      title: 'Reliable Communication',
      desc: "You'll always know where your project stands. No ghosting, no surprises — just clear, honest updates throughout."
    },
    {
      icon: '⚡',
      title: 'Fast, Clean Code',
      desc: 'We write code that performs well, stays maintainable, and scales as your business grows. No shortcuts, no bloat.'
    },
    {
      icon: '🤝',
      title: 'You Own Everything',
      desc: 'All source code, assets, and deployments are yours. No lock-in, no hidden dependencies — just clean handover.'
    }
  ];

  process = [
    { step: '01', title: 'Discover', desc: 'We learn about your goals, audience, and requirements — asking the right questions so we start fully aligned.' },
    { step: '02', title: 'Build', desc: 'We build your project with regular check-ins, progress updates, and your feedback incorporated throughout.' },
    { step: '03', title: 'Review', desc: 'You test everything, share feedback, and we refine until it is exactly right.' },
    { step: '04', title: 'Launch', desc: 'We deploy your project, ensure everything is working, and hand over clean documentation and source code.' }
  ];
}
