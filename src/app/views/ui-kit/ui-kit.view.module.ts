import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIKitView } from './ui-kit.view';
import { routing } from './ui-kit.view.routing';

@NgModule({
  declarations: [
    UIKitView
  ],
  imports: [
    CommonModule,

    routing
  ]
})

export class UIKitViewModule { }
