import { Injector } from '@angular/core';

import { RoleModelToken, IRoleModelConstructor, IRoleModel } from '../role';

export interface IUserModel {
  id: number;
  name: string;
  role: IRoleModel;

  // etalon: Object;
}

export interface IUserModelConstructor extends IUserModel {
  new(): IUserModelConstructor;
}

export function userFactory(injector: Injector) {
  const RoleModel = injector.get(RoleModelToken) as IRoleModelConstructor;

  class UserModel implements IUserModel {
    id: number = null;
    name: string;
    role: IRoleModel = new RoleModel();

    // etalon: Object;

    constructor() {
      // this.etalon = {
      //   id: {
      //     type: Number,
      //     required: true
      //   },
      //   name: {
      //     type: String,
      //     required: true
      //   },
      //   role: {
      //     type: Object,
      //     required: true
      //   }
      // };
    }
  }

  return UserModel;
}
