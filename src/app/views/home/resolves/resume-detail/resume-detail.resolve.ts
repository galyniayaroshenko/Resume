import { Injectable, Injector } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { IResumeModel, ResumeModelToken, IResumeModelConstructor } from '../../models/resume';

@Injectable()
export class ResumeDetailResolve implements Resolve<IResumeModel> {
  private ResumeModel: IResumeModelConstructor;

  constructor(private injector: Injector) {
    this.ResumeModel = injector.get(ResumeModelToken) as IResumeModelConstructor;
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
