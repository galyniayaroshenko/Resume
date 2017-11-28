import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { StatesEnum } from '../../../models/resume';

@Component({
  selector: 'cv-education-array',
  styleUrls: ['./education-array.component.scss'],
  templateUrl: './education-array.component.html'
})

export class EducationArrayComponent {
  @Input('parentForm') parentForm: FormGroup;
  @Input('educationEditSelfState') educationEditSelfState: Boolean;
  @Input('education') education: any;
  @Input('state') state: any;

  StatesEnum = StatesEnum;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'education',
      (!this.education ? new FormArray([]) : this.formBuilder.array(
        this.education.map((item: any) => this.formBuilder.group(item))
      ))
    );

    if (this.state === StatesEnum.Create) {
      this.addEducation();
    }
  }

  get arrEducation(): FormArray {
    return this.parentForm.get('education') as FormArray;
  };

  initEducation() {
    return this.formBuilder.group({
      level_qualifications: '',
      school: '',
      startDate: '',
      endDate: '',
      area: ''
    });
  }

  addEducation(): void {
    this.arrEducation.push(this.initEducation());
  }

  removeEducation(index: number): void {
    this.arrEducation.removeAt(index);
  }
}
