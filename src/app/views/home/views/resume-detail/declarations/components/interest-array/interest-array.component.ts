import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { maxLengthValidator, requiredValidator } from '../../../../../../../form-validators';

import { StatesEnum } from '../../../../../models/resume';

@Component({
  selector: 'cv-interest-array',
  styleUrls: ['./interest-array.component.scss'],
  templateUrl: './interest-array.component.html'
})

export class InterestArrayComponent {
  StatesEnum = StatesEnum;

  @Input('parentForm') parentForm: FormGroup;
  @Input('interestEditSelfState') interestEditSelfState: Boolean;
  @Input('interests') interests: any;
  @Input('state') state: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'interests',
      (!this.interests ? new FormArray([]) : this.formBuilder.array(
        this.interests.map((item: any) => this.formBuilder.group({
          name: [item.name, [requiredValidator, maxLengthValidator(50)]]
        }))
      ))
    );

    if (this.state === StatesEnum.Create) {
      this.addInterest();
    }
  }

  get arrInterests(): FormArray {
    return this.parentForm.get('interests') as FormArray;
  };

  initInterests() {
    return this.formBuilder.group({
      name: ['', [requiredValidator, maxLengthValidator(50)]]
    });
  }

  addInterest(): void {
    this.arrInterests.push(this.initInterests());
  }

  removeInterest(index: number): void {
    this.arrInterests.removeAt(index);
  }
}
