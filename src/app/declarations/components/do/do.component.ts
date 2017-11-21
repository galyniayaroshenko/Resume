import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cv-do',
  styleUrls: ['./do.component.scss'],
  templateUrl: './do.component.html'
})

export class DoComponent {
  tools1: any;

  @Input('parentForm') parentForm: FormGroup;
  @Input('socialProfiles') socialProfiles: any;
  @Input('socialProfilesEditSelfState1') socialProfilesEditSelfState: Boolean;
  @Input('networkTypes') networkTypes: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log('do this.parentForm', this.parentForm);
    this.parentForm.addControl(
      'socialProfiles1',
      // new FormArray([])
      this.formBuilder.array(this.socialProfiles.map((item: any) => this.formBuilder.group(item)))
      // this.formBuilder.array(this.socialProfiles.map((item: any) => item))
    );

    console.log('this.parentForm.value.socialProfiles1', this.parentForm.value.socialProfiles1);
    // console.log('socialProfilesEditSelfState', this.socialProfilesEditSelfState);

    this.tools1 = [
      {
          "id": 1,
          "name": "HTML"
      },
      {
          "id": 2,
          "name": "CSS"
      },
      {
          "id": 3,
          "name": "Javascript"
      }
    ];
  }

  get arrSocialProfiles(): FormArray {
    return this.parentForm.get('socialProfiles1') as FormArray;
  };

  initSocialProfiles() {
    return this.formBuilder.group({
      url: '',
      network: ''
    });
  }

  addSocialProfiles(): void {
    this.arrSocialProfiles.push(this.initSocialProfiles());
  }

  removeSocialProfiles(index: number): void {
    this.arrSocialProfiles.removeAt(index);
  }
}
