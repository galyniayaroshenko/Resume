import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeclarationsModule } from './declarations';

import { ResumeDetailView } from './resume-detail.view';

import { TooltipModule } from 'primeng/primeng';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    ResumeDetailView
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DeclarationsModule,

    TooltipModule,
    PerfectScrollbarModule
  ]
})

export class ResumeDetailViewModule { }
