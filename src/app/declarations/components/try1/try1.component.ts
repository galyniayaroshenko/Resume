import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'cv-try1',
  styleUrls: ['./try1.component.scss'],
  templateUrl: './try1.component.html',
})

export class Try1Component {
  @Input() formArray: FormArray;
  @Input() experience: any;

  @Output() removpositioned = new EventEmitter();

  experienceGroup: FormGroup;
  index: number;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.experienceGroup = this.toFormGroup(this.experience);
    // console.log('typeof this.formArray.value', typeof this.formArray.value);
    // console.log('this.formArray.value', this.formArray.value[0].id);
    // this.formArray.value.map(function(item: any) {
    //     // console.log('item', item.id)
    //     return item = {};
    // });
    // this.formArray.value = [];

    // console.log('!this.formArray.value', this.formArray.value);

    resolvedPromise.then(() => {
      this.index = this.formArray.length;
      if (this.index <= 0) {
        this.formArray.push(this.experienceGroup);
      }
    });

    // console.log('experience', this.experience);
    // console.log('formArray', this.formArray);
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
