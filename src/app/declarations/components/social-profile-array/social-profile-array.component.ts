import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cv-social-profile-array',
  styleUrls: ['./social-profile-array.component.scss'],
  templateUrl: './social-profile-array.component.html'
})

export class SocialProfileArrayComponent {
  @Input('parentForm') parentForm: FormGroup;
  @Input('socialProfiles') socialProfiles: any;
  @Input('socialProfilesEditSelfState') socialProfilesEditSelfState: Boolean;
  @Input('networkTypes') networkTypes: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm.addControl(
      'socialProfiles',
      this.formBuilder.array(this.socialProfiles.map((item: any) => this.formBuilder.group(item)))
    );
  }

  get arrSocialProfiles(): FormArray {
    return this.parentForm.get('socialProfiles') as FormArray;
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
