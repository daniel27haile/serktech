import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');

  services = [
    'Business Website Development',
    'Angular / React Frontend Development',
    'Full-Stack Web App Development',
    'API Integration',
    'Cloud Deployment (AWS / DigitalOcean / CI/CD)',
    'Performance Optimization',
    'Bug Fixing & Refactoring',
    'Technical Consulting',
    'Not sure yet – let\'s talk'
  ];

  budgets = [
    'Under $1,000',
    '$1,000 – $2,500',
    '$2,500 – $5,000',
    '$5,000 – $10,000',
    '$10,000+',
    'Not sure yet'
  ];

  timelines = [
    'ASAP',
    '1–2 weeks',
    '2–4 weeks',
    '1–2 months',
    '2+ months',
    'Flexible'
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name:     ['', [Validators.required, Validators.minLength(2)]],
      email:    ['', [Validators.required, Validators.email]],
      company:  [''],
      service:  ['', Validators.required],
      budget:   [''],
      timeline: [''],
      message:  ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitStatus.set('idle');

    this.http.post('/api/contact', this.contactForm.value).subscribe({
      next: () => {
        this.submitStatus.set('success');
        this.contactForm.reset();
        this.isSubmitting.set(false);
      },
      error: () => {
        this.submitStatus.set('error');
        this.isSubmitting.set(false);
      }
    });
  }
}
