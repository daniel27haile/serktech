import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminAuthService } from '../../../core/services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  form: FormGroup;
  isLoading = signal(false);
  errorMsg  = signal('');

  constructor(
    private fb: FormBuilder,
    private auth: AdminAuthService,
    private router: Router
  ) {
    if (auth.isLoggedIn()) router.navigate(['/admin']);

    this.form = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isInvalid(field: string): boolean {
    const c = this.form.get(field);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.isLoading.set(true);
    this.errorMsg.set('');

    this.auth.login(this.form.value.email, this.form.value.password).subscribe({
      next: () => this.router.navigate(['/admin']),
      error: (err) => {
        this.errorMsg.set(err.error?.error || 'Login failed. Check your credentials.');
        this.isLoading.set(false);
      }
    });
  }
}
