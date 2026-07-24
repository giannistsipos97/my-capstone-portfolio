import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import type {
  Certification,
  Education,
  Experience,
} from './about.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly frontEndDevelopment: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript (ES6+)',
    'Tailwind',
    'HTML5',
    'CSS3',
    'PrimeNG',
    'RxJS',
  ];

  readonly apiIntegration: string[] = [
    'RESTful APIs',
    'Node.js (Express)',
    'Oracle SQL',
    'MySQL',
    'Postman',
  ];

  readonly pmSkills: string[] = [
    'Agile & Scrum fundamentals',
    'Project Planning & Scheduling',
    'Risk Management',
    'Stakeholder Communication',
  ];

  readonly testingTools: string[] = [
    'Unit Testing (Jasmine, Karma)',
    'Git',
    'GitHub',
  ];

  readonly tools: string[] = [
    'Microsoft Office',
    'Notion',
    'Kanban boards',
    'Trello',
    'Ticketing systems',
    'Postman',
    'VS Code',
    'IntelliJ IDEA',
  ];

  readonly education: Education[] = [
    {
      year: '2015 - 2022',
      type: 'MSc Diploma',
      degree: 'Information & Communication Systems Engineer',
      university: 'University of the Aegean',
      desc: 'Studied Software Engineering with a focus on Object-Oriented Programming languages such as Java, C++, Python etc. Gained experience in web application development, database creation and management with SQL, as well as foundational knowledge in data mining, machine learning, management information systems, and project management.',
      thesis: {
        title:
          'Searching for the most diverse products by analyzing query results on spatial-textual data',
        desc: 'Focused on ranking points of interest, particularly restaurants, based on their proximity to the user and relevant keywords of interest. By optimizing for both diversity and proximity, the system returns a range of unique dining options tailored to user preferences, ensuring varied and accessible choices to meet diverse user needs.',
      },
    },
  ];

  readonly experience: Experience[] = [
    {
      year: '2019',
      role: 'Internship - Technical Support Engineer',
      company: 'Municipality of Kavala',
      desc: 'Assisted in resolving technical issues within the municipality, addressing both software and hardware problems as they arose to maintain smooth operations.',
    },
    {
      year: 'September 2022 - October 2025',
      role: 'Software Engineer | IT Tech Consultant',
      company: 'ORCO S.A',
      points: [
        'Developed and optimized critical features for a comprehensive enterprise system, focusing on financial data tracking, payroll processing, and resource booking modules.',
        'Partnered closely with cross-functional teams and stakeholders to analyze complex workflows, translating operational requirements into clear technical designs and system documentation',
        'Took ownership of specific system modules from early stages; actively assisted in project planning, sprint prioritization, status reporting, and risk assessment to ensure on-time delivery.',
        'Utilized Oracle SQL to investigate data structures, resolve complex data-related issues, and ensure data integrity across interconnected system applications.',
        'Coordinated and prioritized support tickets, managing direct communication with client stakeholders to explain technical solutions clearly and ensure high-quality service delivery.',
        'Managed code workflows and version control using GitLab, ensuring reliable deployment and alignment with team-wide architectural standards.',
      ],
    },
  ];

  readonly certifications: Certification[] = [
    {
      title: 'Project Management',
      issuer: 'Workearly',
      image: 'images/Workearly.png',
      status: 'Completed',
      link: 'https://www.credly.com/badges/f18b4f7b-02f0-4279-82b4-2bb10265b0f6/public_url',
    },
    {
      title: 'Project Management & Administration Certification',
      issuer: 'TEE',
      image: 'images/TEE-logo.jpg',
    },
    {
      title: 'Certificate of English Proficiency - C2',
      issuer: 'Michigan State University',
      image: 'images/Michigan-State-university-logo.png',
    },
    {
      title: 'SQL - MySQL for data analytics and business intelligence',
      issuer: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-6ed41ebd-97b8-4091-8047-530eba13e2ec/',
      image: 'images/udemy-logo.png',
    },
    {
      title: 'Grow Greek Tourism',
      issuer: 'Google',
      image: 'images/google-logo.png',
    },
    {
      title: 'ECDL progress certificate',
      issuer: 'ECDL foundation',
      image: 'images/ecdl-logo.png',
    },
  ];
}
