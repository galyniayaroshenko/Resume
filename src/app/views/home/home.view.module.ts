import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TooltipModule } from 'primeng/primeng';

import { DeclarationsModule } from './declarations';
import { ResumeListViewModule } from './views/resume-list/resume-list.view.module';
import { ResumeDetailViewModule } from './views/resume-detail/resume-detail.view.module';

import { HomeView } from './home.view';

import { routing } from './home.view.routing';

import { ResumeDetailResolve } from './resolves/resume-detail';
import { ResumeListResolve } from './resolves/resume-list';
import { UserResolve } from './resolves/user';

import { ResumeModelProvider } from './models/resume';
import { RoleModelProvider } from './models/role';
import { UserModelProvider } from './models/user';

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

    DeclarationsModule,
    ResumeListViewModule,
    ResumeDetailViewModule
  ],
  providers: [
    ResumeDetailResolve,
    ResumeListResolve,
    UserResolve,

    ResumeModelProvider,
    RoleModelProvider,
    UserModelProvider
  ]
})

export class HomeViewModule { }
