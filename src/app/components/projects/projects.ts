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
      name: 'Sistem E-dagang Klien',
      description: 'Membangunkan platform e-dagang yang lengkap dengan sistem pembayaran dan pengurusan inventori untuk klien XYZ.',
      technologies: ['Angular', 'Firebase', 'Stripe']
    },
    {
      imageUrl: 'assets/images/project2.jpeg',
      name: 'Aplikasi Penjejak Cuaca',
      description: 'Aplikasi web peribadi untuk memaparkan data cuaca masa nyata menggunakan API awam.',
      technologies: ['Angular', 'TypeScript', 'Weather API']
    },
    {
      imageUrl: 'assets/images/project3.jpeg',
      name: 'Laman Web Portfolio (Ini!)',
      description: 'Membina laman web portfolio peribadi dari awal untuk mempamerkan kemahiran dan projek-projek saya.',
      technologies: ['Angular', 'CSS Flexbox']
    }
  ];
}