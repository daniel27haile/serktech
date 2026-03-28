import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AdminAuthService } from '../../../core/services/admin-auth.service';

interface Submission {
  _id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

interface SubmissionsResponse {
  submissions: Submission[];
  total: number;
  page: number;
  limit: number;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {
  submissions = signal<Submission[]>([]);
  total       = signal(0);
  isLoading   = signal(true);
  activeFilter = signal<string>('all');
  selectedId  = signal<string | null>(null);

  filters = [
    { label: 'All',     value: 'all' },
    { label: 'New',     value: 'new' },
    { label: 'Read',    value: 'read' },
    { label: 'Replied', value: 'replied' }
  ];

  constructor(private http: HttpClient, public auth: AdminAuthService) {}

  ngOnInit() { this.load(); }

  get selected(): Submission | undefined {
    return this.submissions().find(s => s._id === this.selectedId());
  }

  load() {
    this.isLoading.set(true);
    const f = this.activeFilter();
    const qs = f !== 'all' ? `?status=${f}` : '';

    this.http.get<SubmissionsResponse>(`/api/contact${qs}`).subscribe({
      next: (res) => {
        this.submissions.set(res.submissions);
        this.total.set(res.total);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  setFilter(value: string) {
    this.activeFilter.set(value);
    this.selectedId.set(null);
    this.load();
  }

  select(id: string) {
    this.selectedId.set(this.selectedId() === id ? null : id);
    const sub = this.submissions().find(s => s._id === id);
    if (sub && sub.status === 'new') this.updateStatus(id, 'read');
  }

  updateStatus(id: string, status: 'new' | 'read' | 'replied') {
    this.http.patch(`/api/contact/${id}/status`, { status }).subscribe({
      next: (updated: any) => {
        this.submissions.update(list =>
          list.map(s => s._id === id ? { ...s, status: updated.status } : s)
        );
      }
    });
  }

  delete(id: string) {
    if (!confirm('Delete this submission?')) return;
    this.http.delete(`/api/contact/${id}`).subscribe({
      next: () => {
        this.submissions.update(list => list.filter(s => s._id !== id));
        this.total.update(t => t - 1);
        if (this.selectedId() === id) this.selectedId.set(null);
      }
    });
  }

  countByStatus(status: string): number {
    if (status === 'all') return this.total();
    return this.submissions().filter(s => s.status === status).length;
  }
}
