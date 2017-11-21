import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'cv-tool',
  templateUrl: './tool.component.html',
})
export class ToolComponent {
  @Input() formArray: FormArray;
  @Input() tool: any;

  toolGroup: FormGroup;
  index: number;

  @Output() removed = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.toolGroup = this.toFormGroup(this.tool);

      resolvedPromise.then(() => {
          this.index = this.formArray.length;
          this.formArray.push(this.toolGroup);
      });
  }

  toFormGroup(tool: any) {
      return this.fb.group({
          id: tool.id,
          name: tool.name
      });
  }
}
