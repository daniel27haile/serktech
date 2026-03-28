import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TESTIMONIALS } from '../../core/data/testimonials.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = TESTIMONIALS;

  stars = [1, 2, 3, 4, 5];
}
