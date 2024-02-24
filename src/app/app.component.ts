import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gaza-client';
  private http: HttpClient = inject(HttpClient);
  text: any;
  constructor() {
    this.http.get<string>('http://localhost:8080/', {responseType: 'text' as 'json'}).subscribe({
      next: data => {
        this.text = data;
      },
      error: error => {
        this.text = error;
      }
    })
  }
}
