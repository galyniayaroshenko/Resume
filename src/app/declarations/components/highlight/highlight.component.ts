import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'cv-highlight',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class HighlightComponent {
  private el = this.element.nativeElement;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
  }

  onMouseEnter() {
    this.el.insertAdjacentHTML(
      'beforeend',
      `<div class="form-group">
        <button type="button" class="btn" (click)="edit()">Edit</button>
        <button type="button" class="btn" (click)="save()">Save</button>
      </div>`
    );
  }

  onMouseLeave() {
    this.el.querySelector('.form-group').remove();
  }

  edit() {
    console.log('Edit');
  }

  save() {
    console.log('Save');
  }
}
