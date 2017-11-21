import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

const resolvedPromise = Promise.resolve(undefined);

@Component({
  selector: 'cv-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  @Input() formArray: FormArray;
  @Input() project: any;

  @Output() removed = new EventEmitter();

  projectGroup: FormGroup;
  index: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectGroup = this.toFormGroup(this.project);

    resolvedPromise.then(() => {
      this.index = this.formArray.length;
      this.formArray.push(this.projectGroup);
    });
  }

  toFormGroup(project: any) {
    return this.formBuilder.group({
      id: project.id,
      title: project.title,
      position: project.position,
      type: project.type,
      startDate: project.startDate,
      endDate: project.endDate,
      website: project.website,
      descriptions: project.descriptions
    });
  }
}
