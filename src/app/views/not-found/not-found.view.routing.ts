import { RouterModule } from '@angular/router';

import { NotFoundView } from './not-found.view';

export const routing = RouterModule.forChild([
  {
    path: '',
    component: NotFoundView
  }
]);
