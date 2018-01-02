import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpConfig } from './http.config';
import { permissions } from './permissions.config';

@Injectable()
export class Config {
  public http: HttpConfig;
  public permissions = permissions;

  constructor(router: Router) {
    this.http = new HttpConfig(router);
  }
}
