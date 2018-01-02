import { OpaqueToken} from '@angular/core';

import { roleModelFactory } from './role.factory';

export const RoleModelToken = new OpaqueToken('RoleModel');

export const RoleModelProvider = {
  provide: RoleModelToken,
  useFactory: roleModelFactory
};
