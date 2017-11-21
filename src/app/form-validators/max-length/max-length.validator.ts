import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { IValidatorResult } from '../validator-result.interface';

export function maxLengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): IValidatorResult => {
    const result: any = Validators.maxLength(length)(control);

    if (result) {
      return {
        maxLength:
          `Value is too long. ` +
          `Required length: ${result.maxlength.requiredLength}, ` +
          `actual length: ${result.maxlength.actualLength}`
      };
    }
    return null;

  };
}
