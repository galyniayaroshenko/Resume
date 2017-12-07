import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthView } from './auth.view';
import { routing } from './auth.view.routing';

import { DeclarationsModule } from './declarations';

@NgModule({
  declarations: [
    AuthView
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DeclarationsModule,

    routing
  ]
})

export class AuthViewModule { }
