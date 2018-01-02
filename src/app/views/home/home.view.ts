import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../services/auth';

import { IUserModel } from './models/user';

@Component({
  styleUrls: ['./home.view.scss'],
  templateUrl: './home.view.html'
})

export class HomeView {
  user: IUserModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  /* hooks */
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.user = data['user'];
      console.log('this.user', this.user);
    });
  }

  logout(): void {
    this.authService.logout().OK('OK')(() => {
      this.router.navigate(['/auth']);
    });
  }
}
