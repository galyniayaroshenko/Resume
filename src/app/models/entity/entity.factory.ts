// import { ObjectValidator } from '../../services/object-validator';

// export interface IEntity {
//   etalon: Object;
//   idField: string;

//   // errorRaise(method: string, message: string): void;
//   fromForm(form: Object): void;
//   fromJSON(json: Object, doNotCheckFormat?: boolean): void;
//   toJSON(ignoredFields?: String[]): Object;
// }
// export interface IEntityConstructor extends IEntity {
//   new(etalon: Object): IEntityConstructor;
// }

// export function entityFactory(objectValidator: ObjectValidator) {
//   class Entity implements IEntity {
//     idField: string;

//     constructor(public etalon: Object) {
//       this.idField = 'id';
//     }

//     /* public methods */
//     // errorRaise(method: string, message: string): void {
//     //   message = `${this.constructor.name}.${method}(): ${message}`;

//     //   emService.emitFatalError(message);
//     // }

//     fromForm(form: Object): void {
//       this.fromJSON(form, true);
//     }

//     fromJSON(json: Object, doNotCheckFormat: boolean = false): void {
//       if (!json) {
//         this[this.idField] = null;
//         return;
//       }

//       if (!doNotCheckFormat) {
//         this.jsonFormatCheck(json);
//       }

//       for (let field in this.etalon) {
//         const value = json[field];
//         const constraints = this.etalon[field];
//         const type = constraints.type;

//         switch (type) {
//           case Object:
//             const objectField = this[field];

//             if (!objectField) {
//               // this.errorRaise('fromJSON',
//               //   `Object for field "${field}" is not created`);
//             }
//             if (!(objectField instanceof Entity)) {
//               // this.errorRaise('fromJSON',
//               //   `Field "${field}" should be instance of Entity`);
//             }

//             objectField.fromJSON(value, true);

//             break;
//           case Array:
//             if (constraints.arrayValueType === Object) {
//               const arrayField = this[field];

//               if (!arrayField) {
//                 // this.errorRaise('fromJSON',
//                 //   `List for field "${field}" is not created`);
//               }

//               arrayField.fromJSON(value);
//             } else {
//               this[field] = value;
//             }

//             break;
//           default:
//             this[field] = value;
//         }
//       }
//     }

//     toJSON(ignoredFields?: String[]): Object {
//       const result = {};

//       for (let field in this.etalon) {
//         const constraints = this.etalon[field];
//         const type = constraints.type;

//         // if (ignoredFields && ignoredFields.includes(field)) {
//         //   continue;
//         // }

//         let value;

//         switch (type) {
//           case Object:
//             value = this[field].toJSON();
//             break;
//           case Array:
//             if (constraints.arrayValueType === Object) {
//               value = this[field].toJSON();
//             } else {
//               value = this[field];
//             }
//             break;
//           default:
//             value = this[field];
//             if (value === '' || value == null) {
//               value = null;
//             }
//         }

//         result[field] = value;
//       }

//       return result;
//     }

//     /* private methods */
//     jsonFormatCheck(json: any) {
//       objectValidator.validate(json, this.etalon);
//     }
//   }

//   return Entity;
// }



import { ObjectValidator } from '../../services/object-validator';

export interface IEntity {
  idField: string;
  qwerty(): void;
}

export interface IEntityConstructor extends IEntity {
  new(): IEntityConstructor;
}

export function entityFactory(objectValidator: ObjectValidator) {
  class Entity implements IEntity {
    idField: string;

    constructor() {
      this.idField = 'string';
    }

    qwerty() {
      console.log('objectValidator', objectValidator);
    }
  }
}
