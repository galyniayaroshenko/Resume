import { AbstractControl, Validators } from '@angular/forms';

import { IValidatorResult } from '../validator-result.interface';

export function requiredValidator(control: AbstractControl): IValidatorResult {
  if ((typeof control.value === 'string' && control.value.trim() === '') || Validators.required(control)) {
    return { required: 'Field is required' };
  }

  return null;
}
