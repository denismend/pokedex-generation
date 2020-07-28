import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[shinyPkmOnHover]'
})
export class PkmShinyOnHoverDirective {

  // normal sprite
  @Input() normal = '';

  // shiny sprite
  @Input() shiny = '';

  public imgLoading = '../../../assets/loading.svg';

  private isShiny = false;
  private countLoading = 0;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('load')
  onLoad() {

    this.isShiny ?
      this.renderer.setAttribute(this.element.nativeElement, 'src', this.shiny)
      :
      this.renderer.setAttribute(this.element.nativeElement, 'src', this.normal)

  }

  @HostListener('mouseover')
  darkenOn() {
    this.isShiny = true;

    this.countLoading === 0 &&
      this.renderer.setAttribute(this.element.nativeElement, 'src', this.imgLoading);

    this.countLoading++;
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.isShiny = false;
  }
}
