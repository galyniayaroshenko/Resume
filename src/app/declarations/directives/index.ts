import { NgModule } from '@angular/core';

import { HighlightDirective } from './highlight';

@NgModule({
  declarations: [
    HighlightDirective
  ],
  exports: [
    HighlightDirective
  ]
})

export class DirectivesModule {}
