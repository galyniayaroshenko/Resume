import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'cv-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  @Input() formArray: FormArray;
  @Input() experience: any;

  @Output() removed = new EventEmitter();

  experienceGroup: FormGroup;
  index: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.experienceGroup = this.toFormGroup(this.experience);

    resolvedPromise.then(() => {
      this.index = this.formArray.length;

      // this.formArray.value.map((item: any) => {
      //   console.log('item', item);
      // });

      // if (this.index <= 0) {
        this.formArray.push(this.experienceGroup);
      // }
    });
  }

  toFormGroup(experience: any) {
    return this.formBuilder.group({
      id: experience.id,
      position: experience.position,
      startDate: experience.startDate,
      endDate: experience.endDate,
      company: experience.company,
      details: experience.details,
      website: experience.website,
      responsibilities: experience.responsibilities
    });
  }
}
