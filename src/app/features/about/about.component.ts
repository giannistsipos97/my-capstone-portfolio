import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { Certification, Education, Experience } from './about.models';
import { BackButtonComponent } from '../BackButton/BackButton.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgTemplateOutlet, BackButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly programmingLanguages: string[] = [
    'TypeScript',
    'JavaScript (ES6+)',
    'Java',
    'SQL',
  ];

  readonly frontEndDevelopment: string[] = [
    'Angular',
    'React.js',
    'RxJS',
    'NgRx Signals',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'PrimeNG',
  ];

  readonly apiIntegration: string[] = [
    'Node.js',
    'Express',
    'REST APIs',
    'JSON',
    'API Integration',
    'Postman',
    'Oracle SQL',
    'MySQL',
    'MongoDB',
  ];

  readonly cloudComputing: string[] = [
    'Docker — basic hands-on exposure',
    'Git',
    'GitLab',
    'GitHub',
  ];

  readonly pmSkills: string[] = [
    'Problem Solving',
    'Team Collaboration',
    'Stakeholder Communication',
    'Project Management',
    'Agile and Scrum Fundamentals',
  ];

  readonly testingTools: string[] = [
    'Jasmine',
    'Karma',
    'Unit Testing',
    'Functional Testing',
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
      type: 'Integrated Master’s Degree',
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
      role: 'Software Engineer | Front-End Developer, Enterprise Applications',
      company: 'ORCO S.A',
      points: [
        'Developed and maintained enterprise Angular applications supporting business-critical workflows, including patient management, payroll processing, financial tracking, resource management, external unit bookings, and employee leave processes.',
        'Built reusable Angular components, responsive user interfaces, administrative dashboards, data-entry forms, and validation logic using TypeScript, RxJS, HTML, CSS, and PrimeNG.',
        'Integrated frontend applications with secure backend REST APIs, working with JSON request and response structures, asynchronous data flows, error handling, and data mapping between frontend components and backend services.',
        'Used Oracle SQL to query and analyze relational data, investigate production issues, verify application behavior, and identify inconsistencies between stored data and expected system results.',
        'Analyzed support tickets and user-reported issues, reproduced technical problems, investigated frontend, API, and data-related causes, and supported the implementation and verification of fixes.',
        'Collaborated with developers, stakeholders, and team members to clarify requirements, understand operational workflows, and deliver application functionality aligned with business needs.',
        'Participated in code reviews, application maintenance, production support, and the controlled delivery of updates using Git and GitLab.',
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
