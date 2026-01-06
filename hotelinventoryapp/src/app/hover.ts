import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class Hover implements OnInit {
  // Custom directive logic can be added here
  // What is directive?
  // A directive is a class in Angular that allows you to attach behavior to elements in the DOM.

  appHover: string = 'lightblue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(this.elementRef.nativeElement.style);

  }

  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = this.appHover;
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.appHover);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    console.log(this.elementRef.nativeElement.style.backgroundColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'white';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = this.appHover;
  }

}
