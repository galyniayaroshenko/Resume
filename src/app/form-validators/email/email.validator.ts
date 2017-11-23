import { AbstractControl } from '@angular/forms';

import { IValidatorResult } from '../validator-result.interface';

export function emailValidator(control: AbstractControl): IValidatorResult { // tslint:disable-line
  const emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (control.value && !emailPattern.test(control.value)) {
    return { email: 'Value should be valid email' };
  }
  return null;
}
