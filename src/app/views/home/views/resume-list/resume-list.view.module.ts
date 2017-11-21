import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ResumeListView } from './resume-list.view';

import { TooltipModule } from 'primeng/primeng';

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

    TooltipModule
  ]
})

export class ResumeListViewModule { }
