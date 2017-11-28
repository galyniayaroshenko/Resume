import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { EditDirective } from '../../../../declarations/directives/edit';
import { EditButtonComponent } from '../../../../declarations/components/edit-button';
import { EducationArrayComponent } from '../../../../declarations/components/education-array';
import { ExperienceComponent } from '../../../../declarations/components/experience';
import { HighlightComponent } from '../../../../declarations/components/highlight';
import { HighlightDirective } from '../../../../declarations/directives/highlight';
import { InterestArrayComponent } from '../../../../declarations/components/interest-array';
import { LanguageArrayComponent } from '../../../../declarations/components/language-array';
import { LevelBarComponent } from '../../../../declarations/components/level-bar';
import { PhoneArrayComponent } from '../../../../declarations/components/phone-array';
import { ProjectComponent } from '../../../../declarations/components/project';
import { SkillComponent } from '../../../../declarations/components/skill';
import { SocialProfileArrayComponent } from '../../../../declarations/components/social-profile-array';
import { ToolComponent } from '../../../../declarations/components/tool';
import { ValidationErrorComponent } from '../../../../declarations/components/validation-error';

import { ResumeDetailView } from './resume-detail.view';

import { TooltipModule } from 'primeng/primeng';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    // EditDirective,
    EditButtonComponent,
    EducationArrayComponent,
    ExperienceComponent,
    HighlightComponent,
    HighlightDirective,
    InterestArrayComponent,
    LanguageArrayComponent,
    LevelBarComponent,
    PhoneArrayComponent,
    ProjectComponent,
    SkillComponent,
    SocialProfileArrayComponent,
    ToolComponent,
    ValidationErrorComponent,

    ResumeDetailView
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TooltipModule,
    PerfectScrollbarModule
  ]
})

export class ResumeDetailViewModule { }
