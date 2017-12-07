import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { maxLengthValidator, requiredValidator } from '../../../../../../../form-validators';

import { StatesEnum } from '../../../../../models/resume';

@Component({
  selector: 'cv-phone-array',
  styleUrls: ['./phone-array.component.scss'],
  templateUrl: './phone-array.component.html'
})

export class PhoneArrayComponent {
  StatesEnum = StatesEnum;

  @Input('parentForm') parentForm: FormGroup;
  @Input('phoneNumbers') phoneNumbers: any;
  @Input('phonesEditSelfState') phonesEditSelfState: Boolean;
  @Input('phoneTypes') phoneTypes: any;
  @Input('state') state: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'phoneNumber',
      (!this.phoneNumbers ? new FormArray([]) : this.formBuilder.array(
        this.phoneNumbers.map((item: any) => this.formBuilder.group({
          type: [item.type, requiredValidator],
          number: [item.number, [requiredValidator, maxLengthValidator(30)]]
        }))
      ))
    );

    if (this.state === StatesEnum.Create) {
      this.addPhone();
    }
  }

  get phones(): FormArray {
    return this.parentForm.get('phoneNumber') as FormArray;
  };

  initPhone() {
    return this.formBuilder.group({
      type: ['', requiredValidator],
      number: ['', [requiredValidator, maxLengthValidator(30)]]
    });
  }

  addPhone(): void {
    this.phones.push(this.initPhone());
  }

  removePhone(index: number): void {
    this.phones.removeAt(index);
  }
}
