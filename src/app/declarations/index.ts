import { NgModule } from '@angular/core';

import { ComponentsModule } from './components';
import { DirectivesModule } from './directives';
import { PipesModule } from './pipes';

@NgModule({
  exports: [
    ComponentsModule,
    PipesModule,
    DirectivesModule
  ]
})

export class DeclarationsModule { }
