import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class HighlightDirective {
  private el = this.element.nativeElement;
  private label: string = 'Edit';

  @Input() state: String;
  @Input() deleteButton: Boolean;
  @Output() actions:EventEmitter<any> = new EventEmitter();
  @Output() delete:EventEmitter<any> = new EventEmitter();
  // @Output() save:EventEmitter<any> = new EventEmitter();
  // @Output() cancel:EventEmitter<any> = new EventEmitter();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  onMouseEnter(): void {
    this.el.insertAdjacentHTML(
      'beforeend',
      `<div class="form-group-actions position">
        <button type="button" class="btn edit" (click)="edit()">Edit</button>
        <button type="button" class="btn save" (click)="save()">Save</button>
        <button type="button" class="btn cancel" (click)="cancel()">Cancel</button>
      </div>`
    );
    // this.renderer.setStyle(this.el.querySelector('.position'), 'position', `absolute`);
    if (this.deleteButton) {
      this.el
        .querySelector('.form-group-actions')
        .insertAdjacentHTML('beforeend', '<button type="button" class="btn delete" (click)="delete()">Delete</button>');
    }

    if (this.state === 'View') {
      this.disabled();
    }
    if (this.state === 'Edit') {
      this.el.querySelector('.edit').setAttribute('disabled', '');
    }

    this.renderer.listen(this.el.querySelector('.edit'), 'click', (event) => {
      this.actions.emit('Edit');
      this.state = 'Edit';
      this.el.querySelector('.save').removeAttribute('disabled');
      this.el.querySelector('.cancel').removeAttribute('disabled');
      this.el.querySelector('.edit').setAttribute('disabled', '');
    });

    this.renderer.listen(this.el.querySelector('.save'), 'click', (event) => {
      if (this.state !== 'View') {
        this.actions.emit('View');
      }
      this.disabled();
    });

    this.renderer.listen(this.el.querySelector('.cancel'), 'click', (event) => {
      this.actions.emit('View');
      this.disabled();
    });

    if (this.el.querySelector('.delete')) {
      this.renderer.listen(this.el.querySelector('.delete'), 'click', (event) => {
        this.actions.emit('View');
      });
    }
  }

  onMouseLeave(): void {
    this.el.querySelector('.form-group-actions').remove();
  }

  /* private */
  disabled(): void {
    this.el.querySelector('.save').setAttribute('disabled', '');
    this.el.querySelector('.cancel').setAttribute('disabled', '');
    this.el.querySelector('.edit').removeAttribute('disabled');
  }
}
