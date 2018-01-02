import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { AuthService } from '../../services/auth';
import { PermissionsService } from '../../services/permissions';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private permissionsService: PermissionsService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    return this.authService.userGet().then(() => { // !because of incorrect order of guards execution. need to check why
      const action = route.data['action'];

      if (action) {
        if (this.permissionsService.can(action)) {
          return true;
        }

        console.log('Forbidden');

        return false;
      }

      console.log('PermissionsGuard used without action to check');

      return false;
    });
  }
}
