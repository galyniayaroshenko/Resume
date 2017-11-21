import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cv-interest-array',
  styleUrls: ['./interest-array.component.scss'],
  templateUrl: './interest-array.component.html'
})

export class InterestArrayComponent {
  @Input('parentForm') parentForm: FormGroup;
  @Input('interestEditSelfState') interestEditSelfState: Boolean;
  @Input('interests') interests: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl('interests', this.formBuilder.array(this.interests.map((item: any) => this.formBuilder.group(item))));
  }

  get arrInterests(): FormArray {
    return this.parentForm.get('interests') as FormArray;
  };

  initInterests() {
    return this.formBuilder.group({
      name: ''
    });
  }

  addInterest(): void {
    this.arrInterests.push(this.initInterests());
  }

  removeInterest(index: number): void {
    this.arrInterests.removeAt(index);
  }
}
