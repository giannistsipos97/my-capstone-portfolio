import { Component } from '@angular/core';
import { HomeComponent } from './features/home/home.component'; // Adjust path if needed
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Add it here!
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
3;
