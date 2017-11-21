import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForbiddenComponent } from './forbidden.view';
import { routing } from './forbidden.view.routing';

@NgModule({
  declarations: [
    ForbiddenComponent
  ],
  imports: [
    CommonModule,

    routing
  ]
})

export class ForbiddenViewModule { }
