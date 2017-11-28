import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup  } from '@angular/forms';

@Component({
  selector: 'cv-phone-array',
  styleUrls: ['./phone-array.component.scss'],
  templateUrl: './phone-array.component.html'
})

export class PhoneArrayComponent {
  @Input('parentForm') parentForm: FormGroup;
  @Input('phoneNumbers') phoneNumbers: any;
  @Input('phonesEditSelfState') phonesEditSelfState: Boolean;
  @Input('phoneTypes') phoneTypes: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'phoneNumber',
      this.formBuilder.array(
        this.phoneNumbers.map((item: any) => this.formBuilder.group(item))
      )
    );
  }

  get phones(): FormArray {
    return this.parentForm.get('phoneNumber') as FormArray;
  };

  initPhone() {
    return this.formBuilder.group({
      type: '',
      number: ''
    });
  }

  addPhone(): void {
    this.phones.push(this.initPhone());
  }

  removePhone(index: number): void {
    this.phones.removeAt(index);
  }
}
