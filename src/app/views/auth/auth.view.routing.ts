import { RouterModule } from '@angular/router';

import { AuthView } from './auth.view';

export const routing = RouterModule.forChild([
  {
    path: '',
    component: AuthView
  }
]);
