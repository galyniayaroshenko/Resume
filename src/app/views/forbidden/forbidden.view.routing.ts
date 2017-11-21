import { RouterModule } from '@angular/router';

import { ForbiddenComponent } from './forbidden.view';

export const routing = RouterModule.forChild([
  {
    path: '',
    component: ForbiddenComponent
  }
]);
