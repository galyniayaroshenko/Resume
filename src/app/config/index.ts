import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpConfig } from './http.config';

@Injectable()
export class Config {
  public http: HttpConfig;

  constructor(router: Router) {
    this.http = new HttpConfig(router);
  }
}
