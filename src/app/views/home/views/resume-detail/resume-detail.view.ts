import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { maxLengthValidator, minLengthValidator, requiredValidator, emailValidator } from '../../../../form-validators';

import { IResumeModel, StatesEnum } from '../../models/resume';

import * as jsPDF from 'jspdf';

@Component({
  styleUrls: ['./resume-detail.view.scss'],
  templateUrl: './resume-detail.view.html'
})

export class ResumeDetailView {
  StatesEnum = StatesEnum;

  EditSelfState = {
    photo: false,
    name: false,
    position: false,
    email: false,
    skype: false,
    socialProfiles: false,
    phones: false,
    education: false,
    language: false,
    interest: false,
    profile: false,
    experience: false,
    projects: false,
    skills: false
  };

  phoneTypes: any;
  networkTypes: any;

  form: FormGroup;

  resumeDetail: IResumeModel;

  error: String;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  @ViewChild('mainWrapperToPdf') mainWrapperToPdf: ElementRef;
  @ViewChild('sidebarWrapperToPdf') sidebarWrapperToPdf: ElementRef;

  /* hooks */
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.resumeDetail = data['resumeDetail'];
    });

    this.phoneTypes = ['phone', 'mobile'];
    this.networkTypes = ['linkedin', 'github', 'twitter'];

    this.formBuild();

    if (this.resumeDetail.state === StatesEnum.Create) {
      this.addExperience();
      this.addProject();
      this.addSkill();
    }
  }

  get experienceControl(): FormArray {
    return <FormArray>this.form.get('experience');
  };

  get projectsControl(): FormArray {
    return <FormArray>this.form.get('projects');
  };

  get skillControl(): FormArray {
    return <FormArray>this.form.get('skills');
  };

  stateUpdated(state: boolean, value: string): void {
    switch (value) {
      case 'photo':
        this.EditSelfState.photo = state;
        break;
      case 'name':
        this.EditSelfState.name = state;
        break;
      case 'position':
        this.EditSelfState.position = state;
        break;
      case 'email':
        this.EditSelfState.email = state;
        break;
      case 'skype':
        this.EditSelfState.skype = state;
        break;
      case 'socialProfiles':
        this.EditSelfState.socialProfiles = state;
        break;
      case 'phones':
        this.EditSelfState.phones = state;
        break;
      case 'education':
        this.EditSelfState.education = state;
        break;
      case 'language':
        this.EditSelfState.language = state;
        break;
      case 'interest':
        this.EditSelfState.interest = state;
        break;
      case 'profile':
        this.EditSelfState.profile = state;
        break;
      case 'experience':
        this.EditSelfState.experience = state;
        break;
      case 'projects':
        this.EditSelfState.projects = state;
        break;
      case 'skills':
        this.EditSelfState.skills = state;
        break;
    }
  }

  edit(): void {
    this.resumeDetail.edit();
  }

  delete(): void {
    this.resumeDetail.delete();
    this.router.navigate([`/cv/resume-list`]);
  }

  downloadPDF(): void {
    const doc = new jsPDF();
    const margins = {
      top: 50,
      left: 20,
      width: 175
    };

    doc.setFontSize(16);
    doc.setFontType('bold');
    doc.text(20, 20, this.form.value.name);
    doc.line(20, 22, 180, 22);
    doc.setFont('times');

    doc.setFontSize(11);
    doc.setFontType('normal');
    doc.text(20, 27, `Position: ${this.form.value.position}`);
    doc.text(20, 32, `Email: ${this.form.value.email}`);
    doc.text(20, 37, `Skype: ${this.form.value.skype}`);

    doc.fromHTML(
      this.sidebarWrapperToPdf.nativeElement,
      margins.left,
      margins.top,
      { 'width': margins.width }
    );
    doc.addPage();
    doc.fromHTML(
      this.mainWrapperToPdf.nativeElement,
      margins.left,
      margins.top - 30,
      { 'width': margins.width }
    );

    doc.save('resume.pdf');
  }

  save(): void {
    this.resumeDetail.save(this.form.value)
      .OK('OK')(() => {
        this.router
          .navigate(['cv/resume', { id: this.resumeDetail.result.id }])
          .then(() => {
            this.error = '';
          });
      })
      .OK('ERROR:target')((error: any) => {
        console.log('errors target', error);
        this.error = error;
      })
      .OK('ERROR:general')((error: any) => {
        console.log('errors general', error);
        this.error = error;
      });
  }

  /* private methods */
  private formBuild(): void {
    this.form = this.formBuilder.group({
      photo: ['asd', [requiredValidator]],
      name: [
        this.resumeDetail.result ? this.resumeDetail.result.name : '',
        [requiredValidator, minLengthValidator(10), maxLengthValidator(16)]
      ],
      position: [
        this.resumeDetail.result ? this.resumeDetail.result.position : '',
        [requiredValidator, minLengthValidator(3), maxLengthValidator(15)]
      ],
      email: [
        this.resumeDetail.result ? this.resumeDetail.result.email : '',
        [requiredValidator, emailValidator]
      ],
      skype: [
        this.resumeDetail.result ? this.resumeDetail.result.skype : '',
        [requiredValidator]
      ],
      profile: [
        this.resumeDetail.result ? this.resumeDetail.result.profile : '',
        [requiredValidator, minLengthValidator(10), maxLengthValidator(350)]
      ],
      experience: !this.resumeDetail.result ? new FormArray([]) : this.formBuilder.array(
        this.resumeDetail.result.work_experience.map(
          (item: any) => this.formBuilder.group({
            position: [
              item.position,
              [requiredValidator, maxLengthValidator(20)]
            ],
            startDate: [item.startDate, requiredValidator],
            endDate: [item.endDate, requiredValidator],
            company: [
              item.company,
              [requiredValidator, maxLengthValidator(50)]
            ],
            details: [
              item.details,
              [requiredValidator, minLengthValidator(50), maxLengthValidator(250)]
            ],
            website: [
              item.website,
              [requiredValidator, maxLengthValidator(50)]
            ],
            responsibilities: [item.responsibilities, requiredValidator]
          })
        )
      ),
      projects: !this.resumeDetail.result ? new FormArray([]) : this.formBuilder.array(
        this.resumeDetail.result.pet_projects.map(
          (item: any) => this.formBuilder.group({
            title: [
              item.title,
              [requiredValidator, maxLengthValidator(20)]
            ],
            position: [
              item.position,
              [requiredValidator, maxLengthValidator(50)]
            ],
            type: [
              item.type,
              [requiredValidator, maxLengthValidator(30)]
            ],
            startDate: [item.startDate, requiredValidator],
            endDate: [item.endDate, requiredValidator],
            website: [
              item.website,
              [requiredValidator, maxLengthValidator(50)]
            ],
            descriptions: [
              item.descriptions,
              [requiredValidator, minLengthValidator(50), maxLengthValidator(250)]
            ]
          })
        )
      ),
      skills: !this.resumeDetail.result ? new FormArray([]) : this.formBuilder.array(
        this.resumeDetail.result.skills.map(
          (item: any) => this.formBuilder.group({
            name: [
              item.name,
              [requiredValidator, maxLengthValidator(60)]
            ]
          })
        )
      )
    });
  }

  initExperience() {
    return this.formBuilder.group({
      position: ['', [requiredValidator, maxLengthValidator(20)]],
      startDate: ['', requiredValidator],
      endDate: ['', requiredValidator],
      company: ['', [requiredValidator, maxLengthValidator(50)]],
      details: ['', [requiredValidator, minLengthValidator(50), maxLengthValidator(250)]],
      website: ['', [requiredValidator, maxLengthValidator(50)]],
      responsibilities: ['', requiredValidator]
    });
  }

  addExperience(): void {
    this.experienceControl.push(this.initExperience());
  }

  removeExperience(index: number): void {
    this.experienceControl.removeAt(index);
  }

  initProject() {
    return this.formBuilder.group({
      title: ['', [requiredValidator, maxLengthValidator(20)]],
      position: ['', [requiredValidator, maxLengthValidator(50)]],
      type: ['', [requiredValidator, maxLengthValidator(30)]],
      startDate: ['', requiredValidator],
      endDate: ['', requiredValidator],
      website: ['', [requiredValidator, maxLengthValidator(50)]],
      descriptions: ['', [requiredValidator, minLengthValidator(50), maxLengthValidator(250)]]
    });
  }

  addProject(): void {
    this.projectsControl.push(this.initProject());
  }

  removeProject(index: number): void {
    this.projectsControl.removeAt(index);
  }

  addSkill(): void {
    this.skillControl.push(
      this.formBuilder.group({
        name: ['', [requiredValidator, maxLengthValidator(60)]]
      })
    );
  }

  removeSkill(index: number) {
    this.skillControl.removeAt(index);
  }
}
