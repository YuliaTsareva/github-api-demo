import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'gh-svg-icon',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input() set src(value: string) {
    this.appendSvg(value);
  }

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  private appendSvg(source: string) {
    const element = this.elementRef.nativeElement;
    element.innerHTML = '';

    if (source) {
      const parser = new DOMParser();
      const svg = parser.parseFromString(source, 'image/svg+xml');

      this.renderer.appendChild(element, svg.documentElement);
    }
  }
}
