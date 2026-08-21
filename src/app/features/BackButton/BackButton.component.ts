import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './BackButton.component.html',
  styleUrls: ['./BackButton.component.scss'],
})
export class BackButtonComponent implements OnInit {
  constructor() {}

  @Input() route: string = '/';
  @Input() label: string = 'Back to Home';

  ngOnInit() {}
}
