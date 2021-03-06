import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { maxLengthValidator, requiredValidator } from '../../../../../../../form-validators';

@Component({
  selector: 'cv-experience',
  templateUrl: 'experience.component.html',
})

export class ExperienceComponent {
  @Input('group') public experienceForm: FormGroup;
  @Input('tools') public tools: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.tools = this.tools ? this.tools : [];

    this.experienceForm.addControl(
      'tools',
      this.formBuilder.array(this.tools.map((item: any) => this.formBuilder.group({
        id: [item.id],
        name: [item.name, [requiredValidator, maxLengthValidator(80)]]
      })))
    );
  }

  get control(): FormArray {
    return <FormArray>this.experienceForm.get('tools');
  };

  initTool() {
    return this.formBuilder.group({
      id: [''],
      name: ['', [requiredValidator, maxLengthValidator(80)]]
    });
  }

  addTool(): void {
    const addrCtrl = this.initTool();

    this.control.push(addrCtrl);
  }

  removeTool(i: number): void {
    this.control.removeAt(i);
  }
}
