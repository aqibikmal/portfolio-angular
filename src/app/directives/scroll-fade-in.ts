import { Directive, ElementRef, Inject, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Import isPlatformBrowser

@Directive({
  selector: '[appScrollFadeIn]',
  standalone: true
})
export class ScrollFadeInDirective implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  // Inject PLATFORM_ID untuk memeriksa platform
  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Hanya jalankan kod ini jika platform adalah pelayar web
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      }, {
        threshold: 0.1
      });

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}