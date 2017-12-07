import { Injectable, Injector } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { IResumeModel, ResumeToken, IResumeConstructor } from '../../models/resume';

@Injectable()
export class ResumeDetailResolve implements Resolve<IResumeModel> {
  private ResumeModel: IResumeConstructor;

  constructor(private injector: Injector) {
    this.ResumeModel = injector.get(ResumeToken) as IResumeConstructor;
  }

  resolve(route: ActivatedRouteSnapshot): Promise<IResumeModel|boolean> {
    const resume: IResumeModel = new this.ResumeModel();
    const id = +route.params['id'];

    if (id) {
      return new Promise(resolve => {
        resume.load(id).completed(() => resolve(resume));
      });
    }

    return Promise.resolve(resume);
  }
}
