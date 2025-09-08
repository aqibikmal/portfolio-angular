import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollFadeIn]',
  standalone: true
})
export class ScrollFadeInDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Tambah kelas 'is-visible' bila elemen masuk ke skrin
          this.el.nativeElement.classList.add('is-visible');
          // Hentikan pemerhatian selepas animasi berlaku sekali
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1 // Cetuskan bila 10% elemen kelihatan
    });

    // Mula memerhati elemen ini
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    // Hentikan pemerhatian bila komponen dimusnahkan (amalan terbaik)
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}