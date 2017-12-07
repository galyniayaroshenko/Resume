import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { requiredValidator, emailValidator } from '../../form-validators';

import { AuthService } from '../../services/auth';

@Component({
  styleUrls: ['./auth.view.scss'],
  templateUrl: './auth.view.html'
})

export class AuthView {
  form: FormGroup;
  error: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  /* hooks */
  ngOnInit(): void {
    this.formBuild();
  }

  login(): void {
    console.log('credentials', this.form.value);
    this.authService.login(this.form.value)
      .OK('OK')(() => {
        this.router.navigate(['/cv/resume-list']);
      })
      .OK('ERROR:general')((error: any) => {
        this.error = error;
      });
  }

  /* private methods */
  private formBuild(): void {
    this.form = this.formBuilder.group({
      name: ['', [requiredValidator]],
      password: ['', [requiredValidator, emailValidator]]
    });
  };
}
