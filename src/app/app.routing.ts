import { RouterModule } from '@angular/router';

import { AuthView } from './views/auth/auth.view';
import { UIKitView } from './views/ui-kit/ui-kit.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { ForbiddenComponent } from './views/forbidden/forbidden.view';

// import { HomeView } from './views/home/home.view';

// import { ResumeListView } from './views/resume-list/resume-list.view';
// import { ResumeDetailView } from './views/resume-detail/resume-detail.view';

export const routing = RouterModule.forRoot([
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthView },
  // { path: 'home', component: HomeView },

  // { path: 'resume-list', component: ResumeListView },
  // { path: 'resume-detail/:id', component: ResumeDetailView },
  { path: 'forbidden', component: ForbiddenComponent },

  { path: 'ui-kit', component: UIKitView },
  { path: '**', component: NotFoundView }
]);
