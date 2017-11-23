import { AbstractControl } from '@angular/forms';

import { IValidatorResult } from '../validator-result.interface';

export function phoneNumberValidator(control: AbstractControl): IValidatorResult { // tslint:disable-line
  const phoneNumberPattern: RegExp = /^([0-9()+ -]*)$/;

  if (control.value && !phoneNumberPattern.test(control.value)) {
    return { phoneNumber: 'Value should be valid phone number' };
  }
  return null;
}
