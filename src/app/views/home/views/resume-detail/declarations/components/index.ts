import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeclarationsModule as ParentDeclarationsModule } from '../../../../declarations';

import { EditButtonComponent } from './edit-button';
import { EducationArrayComponent } from './education-array';
import { ExperienceComponent } from './experience';
import { InterestArrayComponent } from './interest-array';
import { LanguageArrayComponent } from './language-array';
import { PhoneArrayComponent } from './phone-array';
import { ProjectComponent } from './project';
import { SkillComponent } from './skill';
import { SocialProfileArrayComponent } from './social-profile-array';
import { ToolComponent } from './tool';

@NgModule({
  declarations: [
    EditButtonComponent,
    EducationArrayComponent,
    ExperienceComponent,
    InterestArrayComponent,
    LanguageArrayComponent,
    PhoneArrayComponent,
    ProjectComponent,
    SkillComponent,
    SocialProfileArrayComponent,
    ToolComponent
  ],
  exports: [
    EditButtonComponent,
    EducationArrayComponent,
    ExperienceComponent,
    InterestArrayComponent,
    LanguageArrayComponent,
    PhoneArrayComponent,
    ProjectComponent,
    SkillComponent,
    SocialProfileArrayComponent,
    ToolComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ParentDeclarationsModule
  ]
})

export class ComponentsModule {}
