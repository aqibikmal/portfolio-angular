import { Component, HostListener, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  // Bind kelas 'header-scrolled' ke host elemen (<app-header>)
  // Kelas ini akan ditambah bila isScrolled bernilai 'true'
  @HostBinding('class.header-scrolled') isScrolled = false;

  // Dengar acara skrol pada tetingkap (window)
  @HostListener('window:scroll')
  onWindowScroll() {
    // Jika posisi skrol lebih dari 0 (bermaksud dah skrol ke bawah),
    // tetapkan isScrolled kepada 'true'. Jika tidak, 'false'.
    this.isScrolled = window.scrollY > 0;
  }
}