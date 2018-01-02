import { RouterModule } from '@angular/router';

import { AuthView } from './views/auth/auth.view';
import { UIKitView } from './views/ui-kit/ui-kit.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { ForbiddenComponent } from './views/forbidden/forbidden.view';

import { AuthGuard } from './guards/auth';

export const routing = RouterModule.forRoot([
  { path: '', canActivate: [AuthGuard], redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', canActivate: [AuthGuard], component: AuthView },
  { path: 'forbidden', component: ForbiddenComponent },

  { path: 'ui-kit', component: UIKitView },
  { path: '**', component: NotFoundView }
]);
