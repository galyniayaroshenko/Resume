import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup  } from '@angular/forms';

@Component({
  selector: 'cv-project-array',
  styleUrls: ['./project-array.component.scss'],
  templateUrl: './project-array.component.html'
})

export class ProjectArrayComponent {
  @Input('parentForm') parentForm: FormGroup;
  @Input('projects') projects: any;
  @Input('projectsEditSelfState') projectsEditSelfState: Boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl('projects', new FormArray([]));
  }

  initProjects() {
    return this.formBuilder.group({
      title: '',
      position: '',
      type: '',
      startDate: '',
      endDate: '',
      website: '',
      descriptions: '',
      tools: []
    });
  }

  addProject(): void {
    this.projects.push(this.initProjects());
  }

  removeProject(index: number): void {
    if (this.projects.length > 1) {
      this.projects.splice(index, 1);
      (<FormArray>this.parentForm.get('projects')).removeAt(index);
    }
  }
}
