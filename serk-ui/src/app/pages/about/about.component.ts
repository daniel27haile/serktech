import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills = [
    { category: 'Frontend', items: ['Angular 18', 'React', 'TypeScript', 'SCSS/Sass', 'HTML5'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST API', 'GraphQL', 'JWT Auth'] },
    { category: 'Database', items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Redis'] },
    { category: 'Cloud & DevOps', items: ['AWS (EC2, S3, Lambda)', 'DigitalOcean', 'GitHub Actions', 'Jenkins', 'Docker', 'CI/CD'] },
    { category: 'Tools & Practices', items: ['Git', 'Agile', 'TDD', 'Code Review', 'SEO Optimization'] }
  ];

  values = [
    { icon: '🎯', title: 'Clarity', desc: 'We communicate clearly, set expectations honestly, and make sure you always understand what we\'re doing and why.' },
    { icon: '🔨', title: 'Quality', desc: 'We don\'t ship rushed, messy code. Every project is built with care, tested thoroughly, and reviewed before delivery.' },
    { icon: '🤝', title: 'Reliability', desc: 'If we say we\'ll deliver something by Friday, we deliver it by Friday. We treat your deadlines as our own.' },
    { icon: '💬', title: 'Communication', desc: 'You\'ll never be left waiting or wondering. We respond quickly, keep you updated, and welcome honest feedback.' }
  ];
}
