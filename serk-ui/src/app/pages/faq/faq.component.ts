import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FAQS } from '../../core/data/faq.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = FAQS;
  activeId = signal<string | null>(null);

  categories = [...new Set(this.faqs.map(f => f.category))];
  activeCategory = signal('All');

  filteredFaqs = () => {
    const cat = this.activeCategory();
    return cat === 'All' ? this.faqs : this.faqs.filter(f => f.category === cat);
  };

  toggle(id: string) {
    this.activeId.update(current => current === id ? null : id);
  }

  setCategory(cat: string) {
    this.activeCategory.set(cat);
    this.activeId.set(null);
  }
}
