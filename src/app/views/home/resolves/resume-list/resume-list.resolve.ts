import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { HttpService } from '../../../../services/http';

@Injectable()
export class ResumeListResolve implements Resolve<any[]> {
  constructor(private httpService: HttpService) {}

  resolve(): Promise<any> {
    return new Promise(resolve => {
      this.httpService.get('/resume-list').OK('OK')(resolve).completed(resolve);
    });
  }
}

