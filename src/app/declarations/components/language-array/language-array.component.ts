import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cv-language-array',
  styleUrls: ['./language-array.component.scss'],
  templateUrl: './language-array.component.html'
})

export class LanguageArrayComponent {
  @Input('parentForm') parentForm: FormGroup;
  @Input('languageEditSelfState') languageEditSelfState: Boolean;
  @Input('languages') languages: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl('languages', this.formBuilder.array(this.languages.map((item: any) => this.formBuilder.group(item))));
  }

  get arrLanguage(): FormArray {
    return this.parentForm.get('languages') as FormArray;
  };

  initLanguage() {
    return this.formBuilder.group({
      name: '',
      level: ''
    });
  }

  addLanguage(): void {
    this.arrLanguage.push(this.initLanguage());
  }

  removeLanguage(index: number): void {
    this.arrLanguage.removeAt(index);
  }
}
