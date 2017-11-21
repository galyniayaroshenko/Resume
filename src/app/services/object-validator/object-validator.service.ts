import { Injectable } from '@angular/core';

@Injectable()
export class ObjectValidator {
  constructor() { }

  /* public methods */
  validate(object: Object, constraints: Object): any {
    let errors = [];
    let unexpectedFields = [];

    object = Object.assign({}, object);

    for (let fieldName in constraints) {
      let validationResult = this.fieldValidate(fieldName, object[fieldName],
        constraints[fieldName]);
      if (validationResult) {
        errors.push(validationResult);
      }

      delete object[fieldName];
    }

    unexpectedFields = Object.keys(object);
    if (unexpectedFields.length) {
      errors.push(`Unexpected fields: ${unexpectedFields.join(', ')}`);
    }

    if (errors.length) {
      console.log(`Validation error:\n  - ${errors.join('\n  - ')}`);
    }
  }

  /* private methods */
  private fieldValidate(name: String, value: string, constraints: any): String {
    constraints = Object.assign({ required: false }, constraints);

    for (let constraintName in constraints) {
      let validationResult = this[`${constraintName}Check`](name, value,
        constraints[constraintName]);

      if (validationResult) {
        if (validationResult === 'break') {
          break;
        }
        return validationResult;
      }
    }

    return '';
  }

  /* validators */
  private inclusionsCheck(fieldName: String, fieldValue: any, inclusions: any) { // tslint:disable-line
    if (!inclusions.includes(fieldValue)) {
      return `Value "${fieldValue}" for field "${fieldName}" is not allowed. ` +
        `Allowed values: ${inclusions.join()}`;
    }
  }

  private requiredCheck(fieldName: string, fieldValue: any, isRequired: boolean): String {
    if (fieldValue == null || fieldValue === '') {
      if (isRequired) {
        return `Field "${fieldName}" is required`;
      }
      return 'break';
    }
  }

  private typeCheck(fieldName: string, fieldValue: any, allowedType: any): String {
    let expectedType = this.typeCheck2(fieldValue, allowedType);

    if (expectedType) {
      return `Mismatch of field type (${fieldName}): ` +
        `expected ${expectedType}, but ${fieldValue.constructor.name} found`;
    }
  }

  private typeCheck2(fieldValue: string, allowedType: any): String {
    let expectedType = '';

    if (allowedType.constructor === Array) {
      let checkResult = allowedType
        .map((type: string) => this.typeCheck2(fieldValue, type))
        .filter((value: any) => !!value);

      if (checkResult.length === allowedType.length) {
        expectedType = allowedType.map((type: any) => type.name).join(' or ');
      }
    } else
    if (fieldValue.constructor !== allowedType) {
      expectedType = allowedType.name;
    }

    return expectedType;
  }
}
