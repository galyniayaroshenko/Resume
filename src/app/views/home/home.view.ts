import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  styleUrls: ['./home.view.scss'],
  templateUrl: './home.view.html'
})

export class HomeView {
  constructor(private router: Router) {}

  logOut(): void {
    this.router.navigate([`/auth`]);
  }
}
