import {Component, signal} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-queue-count',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './queue-count.component.html',
  styleUrl: './queue-count.component.scss'
})
export class QueueCountComponent {
  private url = 'https://httpbin.org/delay/2';

  queueCount = signal<number | null>(null);
  loading = signal<boolean>(false);

  constructor(private http: HttpClient) {
  }

  updateQueueCount() {
    this.loading.set(true);
    this.http.get<string>(this.url).subscribe({
      next: (data) => {
        const r = Math.random() * 25;
        this.queueCount.set(r);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error fetching queue count', error);
        this.loading.set(false);
      }
    });
  }
}

