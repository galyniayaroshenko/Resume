import { Component, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'cv-tool-array',
  templateUrl: './tool-array.component.html',
})

export class ToolArrayComponent {
  @Input() parentForm: FormGroup;
  @Input() tools: any;

  ngOnInit(): void {
    this.parentForm.addControl('tools', new FormArray([]));

    // console.log('parentForm.value', this.parentForm.value);
  }

  addTool(index: number): Object {
    this.tools = (this.tools === undefined) ? [] : this.tools;

    return this.tools.push({
      name: ''
    });
  }

  removeTool(index: number): void {
    this.tools.splice(index, 1);
    (<FormArray>this.parentForm.get('tools')).removeAt(index);
  }
}
