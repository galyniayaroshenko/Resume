import { RouterModule } from '@angular/router';

import { UIKitView } from './ui-kit.view';

export const routing = RouterModule.forChild([
  {
    path: '',
    component: UIKitView
  }
]);
