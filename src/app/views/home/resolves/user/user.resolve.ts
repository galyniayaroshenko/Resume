import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { IUserModel } from '../../models/user';

import { AuthService } from '../../../../services/auth';

@Injectable()
export class UserResolve implements Resolve<IUserModel> {
  constructor(private authService: AuthService) { }

  resolve(): Promise<IUserModel> {
    return this.authService.userGet();
  }
}
