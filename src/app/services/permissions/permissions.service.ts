import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from '../../config';

import { AuthService } from '../../services/auth';

@Injectable()
export class PermissionsService {
  private permissions: any;

  constructor(
    config: Config,
    private authService: AuthService,
    private router: Router
  ) {
    this.permissions = config.permissions;
  }

  can(actions: string | string[]): boolean {
    const roles = new Set();

    [].concat(actions).forEach(action => {
      if (this.permissions[action]) {
        this.permissions[action].forEach((role: any) => roles.add(role));
      } else {
        console.log(`Unknown action: ${actions}`);
      }
    });

    if (roles.size) {
      return roles.has(this.authService.user.role.abbreviation);
    }

    return false;
  }

  navigateToForbidden(): void {
    this.router.navigate(['/forbidden'], { skipLocationChange: true });
  }
}
