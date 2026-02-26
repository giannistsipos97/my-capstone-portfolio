import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  skills = [
    'Angular',
    'TypeScript',
    'Javascript',
    'Tailwind',
    'Node.js',
    'HTML',
    'Prime NG',
    'Git',
    'RxJs',
    'SQL',
  ];

  experience = [
    {
      year: '2015 - 2022',
      title: 'Information & Commmunication Systems Engineer',
      company: 'University Of The Aegean',
      desc: 'Studied Software Engineering with a focus on Object-Oriented Programming languages such as Java, C++, Python etc. Gained experience in web application development, database creation and management with SQL, as well as foundational knowledge in data mining, machine learning, management information systems, and project management.',
      thesis: {
        title:
          'Searching for the most diverse products by analyzing query results on spatial-textual data',
        desc: 'Focused on ranking points of interest, particularly restaurants, based on their proximity to the user and relevant keywords of interest. By optimizing for both diversity and proximity, the system returns a range of unique dining options tailored to user preferences, ensuring varied and accessible choices to meet diverse user needs.',
      },
    },
    {
      year: '2023',
      title: 'Web Development Intern',
      company: 'Tech Solutions Inc.',
      desc: 'Assisted in building responsive front-end components and optimizing API calls.',
    },
  ];
}
