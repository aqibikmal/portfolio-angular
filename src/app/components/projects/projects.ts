import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. IMPORT DIRECTIVE DI SINI
import { ScrollFadeInDirective } from '../../directives/scroll-fade-in';

@Component({
  selector: 'app-projects',
  standalone: true,
  // 2. TAMBAH DIRECTIVE DALAM IMPORTS
  imports: [CommonModule, ScrollFadeInDirective],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  // 'projects' ialah satu senarai (array) yang memegang maklumat projek awak.
  projects = [
    {
      imageUrl: 'assets/images/project1.jpeg',
      name: 'Mobile Apps',
      description: 'Developed modern cross-platform mobile apps with authentication, push notifications, and real-time API integrations.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
    },
    {
      imageUrl: 'assets/images/project2.jpeg',
      name: 'Player & Coaches Contract System',
      description: 'Built a secure, server-rendered Laravel application to manage personal data and contracts for players and coaches, including role-based access control, document uploads, audit logs, and automated contract-renewal reminders',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Eloquent ORM', 'Laravel Scheduler']
    },
    {
      imageUrl: 'assets/images/project3.jpeg',
      name: 'This Portfolio Website',
      description: 'Built a personal portfolio website from scratch to showcase my skills and projects deployed on Vercel with fast global delivery and automatic deployments from Git.',
      technologies: ['Angular', 'TypeScript', 'CSS Flexbox', 'Responsive Design', 'Vercel']
    }
  ];
}