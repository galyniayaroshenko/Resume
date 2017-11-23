import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/primeng';

import { ResumeListViewModule } from './views/resume-list/resume-list.view.module';
import { ResumeDetailViewModule } from './views/resume-detail/resume-detail.view.module';

import { HomeView } from './home.view';

import { routing } from './home.view.routing';

import { ResumeDetailResolve } from './resolves/resume-detail';
import { ResumeListResolve } from './resolves/resume-list';

@NgModule({
  declarations: [
    HomeView
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    routing,

    TooltipModule,
    DropdownModule,

    ResumeListViewModule,
    ResumeDetailViewModule
  ],
  providers: [
    ResumeDetailResolve,
    ResumeListResolve
  ]
})

export class HomeViewModule { }
