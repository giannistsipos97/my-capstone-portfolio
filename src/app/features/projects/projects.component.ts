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
      tags: ['Angular', 'PrimeNG', 'Tailwind', 'Node.js', 'MongoDB'],
      github: 'https://github.com/giannistsipos97/gametime-app.git', // Add your repo link
    },
    {
      title: 'TrackingWallet',
      description:
        'TrackingWallet is a personal finance-tracking web & mobile application that helps users manage their expenses and income. The app allows users to: Add transactions to their personal ledger Categorize transactions for better organization View detailed financial reports and insights.',
      status: 'development',
      image: 'images/Wallet Background.jpg',
      tags: ['Angular', 'Tailwind', 'Node.js', 'MongoDB'],
      github: 'https://github.com/giannistsipos97/WalletApp.git', // Add your repo link
    },
  ];
}
