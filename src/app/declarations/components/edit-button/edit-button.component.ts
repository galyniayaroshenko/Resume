import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cv-edit-button',
  styleUrls: ['./edit-button.component.scss'],
  templateUrl: './edit-button.component.html'
})

export class EditButtonComponent {
  visible: Boolean = true;

  @Input() class: String;
  @Input() disabled: Boolean;
  @Input() nameEditSelfState: Boolean;

  @Output() stateUpdated = new EventEmitter();

  editSelf(): void {
    this.nameEditSelfState = !this.nameEditSelfState;
    this.stateUpdated.emit(this.nameEditSelfState);
    console.log('nameEditSelfState', this.nameEditSelfState);
    this.visible = !this.visible;
  }
}
