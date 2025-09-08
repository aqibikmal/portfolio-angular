import { Component } from '@angular/core';

// 1. IMPORT DIRECTIVE DI SINI
import { ScrollFadeInDirective } from '../../directives/scroll-fade-in';

@Component({
  selector: 'app-about',
  standalone: true,
  // 2. TAMBAH DIRECTIVE DALAM IMPORTS
  imports: [ScrollFadeInDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {

}