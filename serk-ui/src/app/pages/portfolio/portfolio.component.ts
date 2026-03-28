import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, PortfolioItem } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  allProjects = PORTFOLIO_ITEMS;
  categories = PORTFOLIO_CATEGORIES;
  activeCategory = signal('All');

  filteredProjects = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'All') return this.allProjects;
    return this.allProjects.filter(p => p.category.includes(cat));
  });

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}
