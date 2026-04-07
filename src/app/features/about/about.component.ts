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
  technicalSkills = [
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

  pmSkills = [
    'Agile & Scrum fundamentals',
    'Project Planning & Scheduling',
    'Risk Management',
    'Stakeholder Communication',
  ];

  pmtools = [
    'Excel for Project Management',
    'Notion',
    'Trello',
    'Ticketing systems',
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
        'DWorked on a hospital information system, building and improving features related to patient management, payroll, and bookings',
        'Collaborated daily with other developers and team members to understand requirements and deliver new functionality',
        'Handled and resolved 100+ support tickets, making sure issues were prioritized and communicated clearly with users',
        'Took responsibility for specific parts of the system (like patient management and HR tools), helping coordinate fixes and improvements.',
        'Contributed to the development of a leave management application from an early stage, gaining a better understanding of how projects evolve',
        'Used Oracle SQL to investigate and fix data-related issues when needed',
        'Worked with GitLab for version control and followed structured workflows when contributing code',
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
    {
      title: 'Project Management',
      issuer: 'Workearly',
      image: 'images/Workearly.png',
      status: 'Completed',
      link: 'https://www.credly.com/badges/f18b4f7b-02f0-4279-82b4-2bb10265b0f6/public_url',
    },
    {
      title: 'Project Management & Administration Certification',
      issuer: 'In progress (expected June 2026)',
      icon: 'fa-solid fa-spinner',
      // image: 'images/Workearly.png',
      status: 'In progress(expected June 2026)',
      // link: 'https://www.credly.com/badges/f18b4f7b-02f0-4279-82b4-2bb10265b0f6/public_url',
    },
  ];
}
