import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { EditDirective } from '../../../../declarations/directives/edit';
import { EditButtonComponent } from '../../../../declarations/components/edit-button';
import { EducationArrayComponent } from '../../../../declarations/components/education-array';
import { ExperienceArrayComponent } from '../../../../declarations/components/experience-array';
import { HighlightComponent } from '../../../../declarations/components/highlight';
import { HighlightDirective } from '../../../../declarations/directives/highlight';
import { LanguageArrayComponent } from '../../../../declarations/components/language-array';
import { LevelBarComponent } from '../../../../declarations/components/level-bar';
import { PhoneArrayComponent } from '../../../../declarations/components/phone-array';
import { ProjectArrayComponent } from '../../../../declarations/components/project-array';
import { SocialProfileArrayComponent } from '../../../../declarations/components/social-profile-array';
import { SkillArrayComponent } from '../../../../declarations/components/skill-array';
import { SkillComponent } from '../../../../declarations/components/skill';
import { ToolArrayComponent } from '../../../../declarations/components/tool-array';
import { ToolComponent } from '../../../../declarations/components/tool';
import { ProjectComponent } from '../../../../declarations/components/project';
import { ExperienceComponent } from '../../../../declarations/components/experience';
import { InterestArrayComponent } from '../../../../declarations/components/interest-array';

import { TryComponent } from '../../../../declarations/components/try';
import { Try1Component } from '../../../../declarations/components/try1';
import { DoComponent } from '../../../../declarations/components/do';
import { Do1Component } from '../../../../declarations/components/do1';

import { ResumeDetailView } from './resume-detail.view';

import { TooltipModule } from 'primeng/primeng';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    // EditDirective,
    EditButtonComponent,
    EducationArrayComponent,
    ExperienceArrayComponent,
    HighlightComponent,
    HighlightDirective,
    LanguageArrayComponent,
    LevelBarComponent,
    PhoneArrayComponent,
    ProjectArrayComponent,
    SocialProfileArrayComponent,
    ProjectComponent,
    ExperienceComponent,
    InterestArrayComponent,

    TryComponent,
    Try1Component,
    DoComponent,
    Do1Component,

    SkillArrayComponent,
    SkillComponent,
    ToolArrayComponent,
    ToolComponent,

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
