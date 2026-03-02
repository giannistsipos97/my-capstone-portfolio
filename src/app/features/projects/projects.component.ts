import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Gametime',
      description:
        'GameTime is a personal game-tracking web application that helps users organize their gaming backlog and monitor their progress across different games. The app allows users to: Add games to their personal library Track games as Currently Playing, Completed, or Unplayed View detailed game information and progress status.',
      status: 'development',
      image: 'images/background_image.png',
      tags: ['Angular', 'PrimeNG', 'Tailwind', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/giannistsipos97/gametime-app.git', // Add your repo link
    },
  ];
}
