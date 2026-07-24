import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly email = 'gtsipos@outlook.com';
  readonly emailUrl = `mailto:${this.email}`;
  readonly phone = '+30 694 564 1534';
  readonly phoneUrl = 'tel:+306945641534';
  readonly linkedin = 'linkedin.com/in/ioannistsipos';
  readonly linkedinUrl = `https://${this.linkedin}`;
  readonly github = 'github.com/giannistsipos97';
  readonly githubUrl = `https://${this.github}`;
}
