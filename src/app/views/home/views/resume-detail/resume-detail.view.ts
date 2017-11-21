import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IResumeModel, StatesEnum } from '../../../../models/resume';

@Component({
  styleUrls: ['./resume-detail.view.scss'],
  templateUrl: './resume-detail.view.html'
})

export class ResumeDetailView {
  StatesEnum = StatesEnum;

  desumeDetail: any;

  item: any;

  phoneTypes: any;
  networkTypes: any;
  experienceEditSelfState: boolean = false;

  form: FormGroup;
  ctrl: AbstractControl;

  resumeDetail: IResumeModel;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

    /* hooks */
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
       this.resumeDetail = data['resumeDetail'];
       console.log('this.resumeDetail!', this.resumeDetail);
    });

    this.phoneTypes = ['phone', 'mobile'];
    this.networkTypes = ['linkedin', 'github', 'twitter'];

    this.formBuild();
  }

  edit(): void {
    this.resumeDetail.edit();
    console.log('this.resumeDetail', this.resumeDetail);
  }

  delete(): void {
    this.resumeDetail.delete();
  }

  save(): void {
    console.log('this.form', this.form.value);
    console.log('this.form.value.name', this.form.value.name);
    let json = this.form.value;

    this.resumeDetail.save(json);
  }

  /* private methods */
  private formBuild(): void {
    this.form = this.formBuilder.group({
      name: [this.resumeDetail.result.name],
      position: [this.resumeDetail.result.position],
      email: [this.resumeDetail.result.email],
      skype: [this.resumeDetail.result.skype],
      profile: [this.resumeDetail.result.profile]
    });
  }
}
