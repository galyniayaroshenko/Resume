import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Types = 'danger' | 'warning' | 'info';

@Component({
  selector: 'cv-message-inline',
  styleUrls: ['./message-inline.component.scss'],
  templateUrl: './message-inline.component.html',

  host: {
    '[hidden]': '!message',
    '[class]': 'type'
  }
})

export class MessageInlineComponent {
  @Input() bttnLabel: string = 'Close';
  @Input() message: string = '';
  @Input() type: Types = 'info';

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  close(): void {
    this.message = '';
    this.onClose.emit();
  }
}