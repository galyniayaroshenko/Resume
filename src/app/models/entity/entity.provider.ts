import { OpaqueToken } from '@angular/core';

import { ObjectValidator } from '../../services/object-validator';

import { entityFactory } from './entity.factory';

export const EntityToken = new OpaqueToken('Entity');

export const EntityProvider = {
  provide: EntityToken,
  deps: [ObjectValidator],
  useFactory: entityFactory
};
