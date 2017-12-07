import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cv-tool',
  styleUrls: ['./tool.component.scss'],
  templateUrl: './tool.component.html'
})

export class ToolComponent {
  @Input('group') public toolsForm: FormGroup;
}
