import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { maxLengthValidator, requiredValidator } from '../../../../../../../form-validators';

import { StatesEnum } from '../../../../../models/resume';

@Component({
  selector: 'cv-education-array',
  styleUrls: ['./education-array.component.scss'],
  templateUrl: './education-array.component.html'
})

export class EducationArrayComponent {
  StatesEnum = StatesEnum;

  @Input('parentForm') parentForm: FormGroup;
  @Input('educationEditSelfState') educationEditSelfState: Boolean;
  @Input('education') education: any;
  @Input('state') state: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'education',
      (!this.education ? new FormArray([]) : this.formBuilder.array(
        this.education.map((item: any) => this.formBuilder.group({
          level_qualifications: [
            item.level_qualifications,
            [requiredValidator, maxLengthValidator(50)]
          ],
          school: [
            item.school,
            [requiredValidator, maxLengthValidator(50)]
          ],
          startDate: [item.startDate, requiredValidator],
          endDate: [item.endDate, requiredValidator],
          area: [
            item.area,
            [requiredValidator, maxLengthValidator(80)]
          ]
        }))
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
      level_qualifications: ['', [requiredValidator, maxLengthValidator(50)]],
      school: ['', [requiredValidator, maxLengthValidator(50)]],
      startDate: ['', requiredValidator],
      endDate: ['', requiredValidator],
      area: ['', [requiredValidator, maxLengthValidator(80)]]
    });
  }

  addEducation(): void {
    this.arrEducation.push(this.initEducation());
  }

  removeEducation(index: number): void {
    this.arrEducation.removeAt(index);
  }
}
