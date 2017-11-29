import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { maxLengthValidator, requiredValidator } from '../../../form-validators';

import { StatesEnum } from '../../../models/resume';

@Component({
  selector: 'cv-language-array',
  styleUrls: ['./language-array.component.scss'],
  templateUrl: './language-array.component.html'
})

export class LanguageArrayComponent {
  StatesEnum = StatesEnum;

  @Input('parentForm') parentForm: FormGroup;
  @Input('languageEditSelfState') languageEditSelfState: Boolean;
  @Input('languages') languages: any;
  @Input('state') state: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'languages',
      (!this.languages ? new FormArray([]) : this.formBuilder.array(
        this.languages.map((item: any) => this.formBuilder.group({
          name: [item.name, [requiredValidator, maxLengthValidator(20)]],
          level: [item.level, requiredValidator]
        }))
      ))
    );

    if (this.state === StatesEnum.Create) {
      this.addLanguage();
    }
  }

  get arrLanguage(): FormArray {
    return this.parentForm.get('languages') as FormArray;
  };

  initLanguage() {
    return this.formBuilder.group({
      name: ['', [requiredValidator, maxLengthValidator(20)]],
      level: ['', requiredValidator]
    });
  }

  addLanguage(): void {
    this.arrLanguage.push(this.initLanguage());
  }

  removeLanguage(index: number): void {
    this.arrLanguage.removeAt(index);
  }
}
