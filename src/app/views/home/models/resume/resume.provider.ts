import { OpaqueToken, Injector } from '@angular/core';

import { HttpService } from '../../../../services/http';
import { ObjectValidator } from '../../../../services/object-validator';

import { resumeModelFactory } from './resume.factory';

export const ResumeModelToken = new OpaqueToken('ResumeModel');

export const ResumeModelProvider = {
  provide: ResumeModelToken,
  deps: [Injector, HttpService, ObjectValidator],
  useFactory: resumeModelFactory
};
