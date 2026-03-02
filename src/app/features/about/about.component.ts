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
    'Rest APIs',
  ];

  education = [
    {
      year: '2015 - 2022',
      type: 'BSc & MSc',
      degree: 'Information & Commmunication Systems Engineer',
      university: 'University Of The Aegean',
      desc: 'Studied Software Engineering with a focus on Object-Oriented Programming languages such as Java, C++, Python etc. Gained experience in web application development, database creation and management with SQL, as well as foundational knowledge in data mining, machine learning, management information systems, and project management.',
      thesis: {
        title:
          'Searching for the most diverse products by analyzing query results on spatial-textual data',
        desc: 'Focused on ranking points of interest, particularly restaurants, based on their proximity to the user and relevant keywords of interest. By optimizing for both diversity and proximity, the system returns a range of unique dining options tailored to user preferences, ensuring varied and accessible choices to meet diverse user needs.',
      },
    },
  ];

  experience = [
    {
      year: '2019',
      role: 'Internship - Technical Support Engineer',
      company: 'Municipality of Kavala',
      desc: 'Assisted in resolving technical issues within the municipality, addressing both software and hardware problems as they arose to maintain smooth operations.',
    },
    {
      year: 'September 2022 - October 2025',
      role: 'Software Engineer',
      company: 'ORCO S.A',
      points: [
        // Changed to an array
        'Develop and maintain a complex hospital information system (HIS) using Angular and PrimeNg.',
        'Create and enhance a web-based HR planning tool for hospital staff.',
        'Collaborate with a cross-functional development team to troubleshoot and resolve issues.',
        'Use Oracle SQL to locate, modify, and insert data in hospital-related schemas.',
        'Use GitLab for version control, managing code through branching strategies.',
        'Provide responsive technical support and assisted in resolving 100+ tickets.',
      ],
    },
  ];

  certifications = [
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
      title: 'ECDL progress certificate',
      issuer: 'ECDL foundation',
      image: 'images/ecdl-logo.png',
    },
    {
      title: 'Grow Greek Tourism',
      issuer: 'Google',
      image: 'images/google-logo.png',
    },
  ];
}
