import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[scrollToTop]'
  })
  export class ScrollToTopDirective {
    constructor(private elementRef: ElementRef) {
    }
  
    @HostListener('click')
    public onClick() {
      if (window && window.pageYOffset) {
        window.scroll(0, 0);
      }
    }
  }