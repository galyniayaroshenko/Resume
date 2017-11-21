import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cv-experience-array',
  styleUrls: ['./experience-array.component.scss'],
  templateUrl: './experience-array.component.html'
})

export class ExperienceArrayComponent {
  @Input('parentForm') parentForm: FormGroup;
  @Input('experienceEditSelfState') experienceEditSelfState: Boolean;
  @Input('experience') experience: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'work_experience',
      // new FormArray([])
      this.formBuilder.array(this.experience.map((item: any) => item))
    );
    // console.log('this.parentForm', this.parentForm.value.work_experience);
  }

  initExperience() {
    return this.formBuilder.group({
      position: '',
      startDate: '',
      endDate: '',
      company: '',
      details: '',
      website: '',
      tools: [],
      responsibilities: ''
    });
  }

  addExperience(): void {
    // console.log('this.experience', this.experience);
    this.experience.push(this.initExperience());
  }

  removeExperience(index: number): void {
    if (this.experience.length > 1) {
      this.experience.splice(index, 1);
      (<FormArray>this.parentForm.get('work_experience')).removeAt(index);
    }
  }
}
