import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  email = 'gtsipos@outlook.com'; // Replace with your actual email
  phone = '+30 6945641534'; // Replace with your actual phone
  linkedin = 'linkedin.com/in/ioannistsipos';
  github = 'github.com/giannistsipos97';
}
