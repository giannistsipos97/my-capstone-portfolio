import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackButtonComponent } from '../BackButton/BackButton.component';

export interface ContactItem {
  label: string;
  value: string;
  url: string;
  icon: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BackButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contacts: ContactItem[] = [
    {
      label: 'Phone',
      value: '+30 6945641534',
      url: 'tel:+306945641534',
      icon: 'fa-solid fa-phone',
    },
    {
      label: 'Email',
      value: 'gtsipos@outlook.com',
      url: 'mailto:gtsipos@outlook.com',
      icon: 'fa-solid fa-envelope',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ioannistsipos',
      url: 'https://linkedin.com/in/ioannistsipos',
      icon: 'fa-brands fa-linkedin',
      isExternal: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/giannistsipos97',
      url: 'https://github.com/giannistsipos97',
      icon: 'fa-brands fa-github',
      isExternal: true,
    },
  ];
}
