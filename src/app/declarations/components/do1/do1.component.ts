import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'cv-do1',
  styleUrls: ['./do1.component.scss'],
  templateUrl: './do1.component.html'
})

export class Do1Component {
  @Input('parentForm') parentForm: FormGroup;
  @Input('tools1') tools1: FormGroup;
  // nutritionGroup: FormGroup;

  // @Input('socialProfiles') socialProfiles: any;
  // @Input('socialProfilesEditSelfState') socialProfilesEditSelfState: Boolean;
  // @Input('networkTypes') networkTypes: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // console.log('!!parentForm Item', this.parentForm.value.languages.map((item:any) => this.formBuilder.group(item)));
    console.log('!!parentForm', this.parentForm.controls);
    console.log('!!tools', this.tools1);

    // this.nutritionGroup = new FormGroup({
    //     blank: new FormControl('')
    //   });
    // this.parentForm.addControl('nutrition', this.nutritionGroup);

    // this.parentForm.addControl("toolss", new FormArray([]));
    // this.parentForm.addControl(
    //   'toolss',
    //   new FormArray([])
    // // //   // this.formBuilder.array(this.tools.map((item: any) => this.formBuilder.group(item)))
    // //   this.formBuilder.array(this.tools1.map((item: any) => item))
    // );

    // console.log('this.tools', this.tools.map((item: any) => item));
    // console.log('this.tools', this.tools);
  }

  // get arrSocialProfiles(): FormArray {
  //   return this.parentForm.get('socialProfiles1') as FormArray;
  // };

  // initSocialProfiles() {
  //   return this.formBuilder.group({
  //     url: '',
  //     network: '',
  //     tools: []
  //   });
  // }

  // addSocialProfiles(): void {
  //   this.arrSocialProfiles.push(this.initSocialProfiles());
  // }

  // removeSocialProfiles(index: number): void {
  //   this.arrSocialProfiles.removeAt(index);
  // }
}
