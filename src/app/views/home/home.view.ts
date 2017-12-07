import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  styleUrls: ['./home.view.scss'],
  templateUrl: './home.view.html'
})

export class HomeView {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout().OK('OK')(() => {
      this.router.navigate(['/auth']);
    });
  }
}
