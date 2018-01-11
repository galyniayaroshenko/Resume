import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'validation-error',
  styleUrls: ['./validation-error.component.scss'],
  templateUrl: './validation-error.component.html'
})

export class ValidationErrorComponent {
  ctrl: AbstractControl;

  message: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  get control() {
    return this.ctrl;
  }

  @Input() set control(control: AbstractControl) {
    this.ctrl = control;

    this.ctrl.statusChanges.subscribe(() => this.onStatusChange());
    this.onStatusChange();
  }

  onStatusChange() {
    const messages = [];

    if (this.ctrl && (this.ctrl.dirty || this.ctrl.touched) && this.ctrl.invalid) {

      for (const validatorName in this.ctrl.errors) {
        messages.push(this.ctrl.errors[validatorName]);
      }
    }

    this.message = messages.join('<br>');

    this.renderer.setStyle(this.element.nativeElement, 'display', this.message ? '' : 'none');
  }
}
