import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { maxLengthValidator, requiredValidator } from '../../../form-validators';

import { StatesEnum } from '../../../models/resume';

@Component({
  selector: 'cv-social-profile-array',
  styleUrls: ['./social-profile-array.component.scss'],
  templateUrl: './social-profile-array.component.html'
})

export class SocialProfileArrayComponent {
  StatesEnum = StatesEnum;

  @Input('parentForm') parentForm: FormGroup;
  @Input('socialProfiles') socialProfiles: any;
  @Input('socialProfilesEditSelfState') socialProfilesEditSelfState: Boolean;
  @Input('networkTypes') networkTypes: any;
  @Input('state') state: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'socialProfiles',
      (!this.socialProfiles ? new FormArray([]) : this.formBuilder.array(
        this.socialProfiles.map((item: any) => this.formBuilder.group({
          url: [item.url, [requiredValidator, maxLengthValidator(150)]],
          network: [item.network, requiredValidator]
        }))
      ))
    );

    if (this.state === StatesEnum.Create) {
      this.addSocialProfiles();
    }
  }

  get arrSocialProfiles(): FormArray {
    return this.parentForm.get('socialProfiles') as FormArray;
  };

  initSocialProfiles() {
    return this.formBuilder.group({
      url: ['', [requiredValidator, maxLengthValidator(150)]],
      network: ['', requiredValidator]
    });
  }

  addSocialProfiles(): void {
    this.arrSocialProfiles.push(this.initSocialProfiles());
  }

  removeSocialProfiles(index: number): void {
    this.arrSocialProfiles.removeAt(index);
  }
}
