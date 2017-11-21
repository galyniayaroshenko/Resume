import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundView } from './not-found.view';
import { routing } from './not-found.view.routing';

@NgModule({
  declarations: [
    NotFoundView
  ],
  imports: [
    CommonModule,

    routing
  ]
})

export class NotFoundViewModule { }