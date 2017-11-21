import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthView } from './auth.view';
import { routing } from './auth.view.routing';

@NgModule({
  declarations: [
    AuthView
  ],
  imports: [
    CommonModule,

    routing
  ]
})

export class AuthViewModule { }
