import { Router } from '@angular/router';

import { HttpHandlers } from '../services/http/http-handlers';

export class HttpConfig {
  public apiURL: string;
  public defaultHandlers: HttpHandlers = new HttpHandlers();

  constructor(router: Router) {
    if (process.env.ENV === 'production') {
      this.apiURL = '/app/';
    } else {
      // this.apiURL = 'https://localhost:8080/api';
      this.apiURL = 'https://private-3e6c5c-resume4.apiary-mock.com';
    }

    this.defaultHandlers.DISCONNECTED(() => {
      console.log('Disconnected server');
    });

    this.defaultHandlers.FORBIDDEN(() => {
      router.navigate(['/forbidden'], { skipLocationChange: true });
    });

    this.defaultHandlers.NOT_FOUND(() => {
      router.navigate(['/not-found'], { skipLocationChange: true });
    });

    this.defaultHandlers.UNAUTHORIZED(() => {
      localStorage.removeItem('token');
      router.navigate(['/auth']);
    });
  }
}
