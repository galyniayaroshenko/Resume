import { NgModule } from '@angular/core';

import { DeclarationsModule as ParentDeclarationsModule } from '../../../declarations';
import { ComponentsModule } from './components';

@NgModule({
  exports: [
    ComponentsModule,
    ParentDeclarationsModule
  ]
})

export class DeclarationsModule {}
