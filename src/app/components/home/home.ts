import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterLink
import { ScrollFadeInDirective } from '../../directives/scroll-fade-in'; // Import Directive

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,              // Tambah di sini
    ScrollFadeInDirective  // Tambah di sini
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

}