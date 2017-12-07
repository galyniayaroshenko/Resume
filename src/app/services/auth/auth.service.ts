import { Injectable, Inject } from '@angular/core';

import { HttpRequest, HttpService } from '../http';

// import { UserModel } from '../../models/user';

@Injectable()
export class AuthService {
  private userGetPromise: Promise<any>;

  // public user: IUserModel;
  public user: any;

  constructor(private httpService: HttpService) {}

  clear(): void {
    this.user = null;
    this.tokenSet('');
  }

  login(credentials: any): HttpRequest {
    return this.httpService.post('/login', credentials)
      .OK('OK')((token: any) => {
        this.tokenSet(token);
      });
  }

  logout(): HttpRequest {
    return this.httpService.post('/logout', {}, true)
      .OK('OK')(() => this.clear());
  }

  tokenGet(): string {
    return localStorage.getItem('token');
  }

  userGet(): Promise<any> {
    const token = this.tokenGet();

    if (!token) {
      return Promise.resolve(null);
    }

    return this.userGetPromise = new Promise(resolve => {
      this.httpService.get('/session-user')
        .OK('OK')((data: any) => {
          this.user = data;
          resolve(this.user);
        })
        .UNAUTHORIZED(() => {
          this.clear();
          resolve();
        })
        .completed(() => {
          this.userGetPromise = null;
        });
    });
  }

  /* private methods */
  private tokenSet(token: any): void {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }
}
