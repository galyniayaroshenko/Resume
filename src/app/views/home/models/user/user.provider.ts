import { OpaqueToken, Injector } from '@angular/core';

import { userFactory } from './user.factory';

export const UserModelToken = new OpaqueToken('UserModel');

export const UserModelProvider = {
  provide: UserModelToken,
  deps: [Injector],
  useFactory: userFactory
};
