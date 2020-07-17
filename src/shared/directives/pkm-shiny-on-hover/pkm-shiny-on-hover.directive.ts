import { Directive, ElementRef, HostListener, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[shinyPkmOnHover]'
})
export class PkmShinyOnHoverDirective {

  // normal sprite
  @Input() normal = '';

  // shiny sprite
  @Input() shiny = '';

  constructor(private element: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseover')
  darkenOn() {
    this.element.nativeElement.src = this.shiny;
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.element.nativeElement.src = this.normal;
  }
}
