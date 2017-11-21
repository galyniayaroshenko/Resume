import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'cv-skill',
  templateUrl: './skill.component.html',
})
export class SkillComponent {
  @Input() formArray: FormArray;
  @Input() skill: any;

  @Output() removed = new EventEmitter();

  skillGroup: FormGroup;
  index: number;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.skillGroup = this.toFormGroup(this.skill);

      resolvedPromise.then(() => {
          this.index = this.formArray.length;
          this.formArray.push(this.skillGroup);
      });
  }

  toFormGroup(skill: any) {
      return this.formBuilder.group({
          id: skill.id,
          name: skill.name
      });
  }
}
