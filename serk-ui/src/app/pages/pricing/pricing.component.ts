import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRICING_PLANS } from '../../core/data/pricing.data';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans = PRICING_PLANS;

  included = [
    'Full source code ownership',
    'Mobile-responsive design',
    'Post-launch support window',
    'Deployment to your chosen platform',
    'Performance optimization',
    'Two revision rounds (minimum)',
    'Clear project documentation',
    'Honest, responsive communication'
  ];
}
