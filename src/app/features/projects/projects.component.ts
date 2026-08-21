import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackButtonComponent } from '../BackButton/BackButton.component';

type ProjectStatus = 'development' | 'completed';

interface Project {
  title: string;
  description: string;
  status: ProjectStatus;
  image: string;
  tags: string[];
  github: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BackButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Gametime',
      description:
        'GameTime is a personal game-tracking web application that helps users organize their gaming backlog and monitor their progress. Users can add games to their library, track them as currently playing, completed, or unplayed, and view detailed game information.',
      status: 'completed',
      image: 'images/background_image.png',
      tags: ['Angular', 'PrimeNG', 'Tailwind', 'Node.js', 'MongoDB'],
      github: 'https://github.com/giannistsipos97/gametime-app',
    },
    {
      title: 'TrackingWallet',
      description:
        'TrackingWallet is a personal finance web application that helps users manage their income and expenses. Users can add and categorize transactions, maintain a personal ledger, and view detailed financial reports and insights.',
      status: 'completed',
      image: 'images/Wallet Background.jpg',
      tags: ['Angular', 'Tailwind', 'Node.js', 'MongoDB'],
      github: 'https://github.com/giannistsipos97/WalletApp',
    },
    {
      title: 'Movie & Series Library Tracker',
      description:
        'React MVP supporting watchlists, progress tracking, ratings, and reusable components.',
      status: 'development',
      image: 'images/TVShows-Movies-image.png',
      tags: ['React', 'Agile', 'Notion', 'TypeScript', 'Java'],
      github: 'https://github.com/giannistsipos97/movie-series-library-tracker',
    },
  ];
}
