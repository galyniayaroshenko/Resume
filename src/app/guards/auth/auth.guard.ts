import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../services/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.authService.userGet().then(user => {
      if (user) {
        return true;
      }

      let navigationExtras;

      if (state.url !== '/') {
        navigationExtras = { queryParams: { redirectTo: state.url } };
      }

      this.router.navigate(['/auth'], navigationExtras);

      return false;
    });
  }
}
