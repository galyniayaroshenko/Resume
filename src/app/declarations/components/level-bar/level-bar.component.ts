import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'level-bar',
  styleUrls: ['./level-bar.component.scss'],
  // templateUrl: './level-bar.component.html'
  template: `<div class="level-bar">
      <div class="level-bar-inner"></div>
  </div>`
})

export class LevelBarComponent implements OnInit {
  @Input() dataLevel: Number;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const levelBarInner = this.element.nativeElement.querySelector('.level-bar-inner');

    this.renderer.setStyle(levelBarInner, 'width', `${this.dataLevel + '%'}`);
  }
}
