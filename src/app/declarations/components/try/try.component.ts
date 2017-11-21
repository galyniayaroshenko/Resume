import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cv-try',
  styleUrls: ['./try.component.scss'],
  templateUrl: './try.component.html',
})

export class TryComponent {
  @Input() parentForm: FormGroup;
  @Input() experience: any;
  @Input() experienceEditSelfState: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'work_experience',
      // new FormArray([])
      this.formBuilder.array(this.experience.map((item: any) => item))
    );

    // console.log('experienceEditSelfState', this.experienceEditSelfState);
    // console.log('parentForm.value.work_experience', this.parentForm.value.work_experience);
    console.log('parentForm.value', this.parentForm.value);
  }

  initExperience() {
    return this.formBuilder.group({
      position: '',
      startDate: '',
      endDate: '',
      company: '',
      details: '',
      website: '',
      // tools: [],
      responsibilities: ''
    });
  }

  addExperience(): void {
    this.experience.push(this.initExperience());
  }

  removeExperience(index: number): void {
    if (this.experience.length > 1) {
      this.experience.splice(index, 1);
      (<FormArray>this.parentForm.get('work_experience')).removeAt(index);
    }
  }
}
