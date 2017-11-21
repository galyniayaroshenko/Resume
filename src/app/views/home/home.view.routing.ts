import { RouterModule } from '@angular/router';

import { HomeView } from './home.view';
import { ResumeListView } from './views/resume-list/resume-list.view';
import { ResumeDetailView } from './views/resume-detail/resume-detail.view';

import { ResumeDetailResolve } from './resolves/resume-detail';
import { ResumeListResolve } from './resolves/resume-list';

export const routing = RouterModule.forChild([
  {
    path: 'cv',
    component: HomeView,
    children: [
      {
        path: 'resume-list',
        component: ResumeListView,
        resolve: {
          resumeList: ResumeListResolve
        }
      },
      {
        path: 'resume-detail/:id',
        component: ResumeDetailView,
        resolve: {
          resumeDetail: ResumeDetailResolve
        }
      }
    ]
  }
]);
