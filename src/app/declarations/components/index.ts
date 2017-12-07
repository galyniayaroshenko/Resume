import { NgModule } from '@angular/core';

import { HighlightComponent } from './highlight';
import { MessageInlineComponent } from './message-inline';
import { ValidationErrorComponent } from './validation-error';

@NgModule({
  declarations: [
    HighlightComponent,
    MessageInlineComponent,
    ValidationErrorComponent
  ],
  exports: [
    HighlightComponent,
    MessageInlineComponent,
    ValidationErrorComponent
  ]
})

export class ComponentsModule {}
