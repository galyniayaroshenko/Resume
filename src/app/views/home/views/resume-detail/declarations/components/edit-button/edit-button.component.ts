import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cv-edit-button',
  styleUrls: ['./edit-button.component.scss'],
  templateUrl: './edit-button.component.html'
})

export class EditButtonComponent {
  visible: Boolean = true;

  @Input() class: String;
  @Input() disabled: Boolean;
  @Input() state: Boolean;

  @Output() stateUpdated = new EventEmitter();

  editSelf(): void {
    this.visible = !this.visible;
    this.state = !this.state;
    this.stateUpdated.emit(this.state);
  }
}
