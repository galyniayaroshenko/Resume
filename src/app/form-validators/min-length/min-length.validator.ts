import { AbstractControl, ValidatorFn } from '@angular/forms';

import { IValidatorResult } from '../validator-result.interface';

export function minLengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): IValidatorResult => {

    if (control.value && control.value.length < length) {
      return {
        minLength: `Min length ${length}`
      };
    }

    return null;
  };
}
