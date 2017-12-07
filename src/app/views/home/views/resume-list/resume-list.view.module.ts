import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TooltipModule } from 'primeng/primeng';

import { ResumeListView } from './resume-list.view';

import { DeclarationsModule } from './declarations';

@NgModule({
  declarations: [
    ResumeListView
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DataTableModule,
    PerfectScrollbarModule,
    TooltipModule,

    DeclarationsModule
  ]
})

export class ResumeListViewModule { }
