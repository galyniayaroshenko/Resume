import { Component, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'cv-skill-array',
  styleUrls: ['./skill-array.component.scss'],
  templateUrl: './skill-array.component.html'
})

export class SkillArrayComponent {
  @Input('parentForm') parentForm: FormGroup;
  @Input('skills') skills: any;
  @Input('skillsEditSelfState') skillsEditSelfState: any;

  ngOnInit() {
    console.log('skills', this.skills);
    this.parentForm.addControl('skills', new FormArray([]));
  }

  addSkill(index: number): Object {
    return this.skills.push({
      name: '',
      tools: []
    });
  }

  removeSkill(index: number) {
    if (this.skills.length > 1) {
      this.skills.splice(index, 1);
      (<FormArray>this.parentForm.get('skills')).removeAt(index);
    }
  }
}
