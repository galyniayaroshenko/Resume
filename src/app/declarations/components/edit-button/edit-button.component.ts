import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-edit-button',
  styleUrls: ['./edit-button.component.scss'],
  templateUrl: './edit-button.component.html'
})

export class EditButtonComponent {
  visible: Boolean = true;

  @Input() class: String;

  editSelf(): void {
    this.visible = !this.visible;
  }
}
