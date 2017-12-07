import { OpaqueToken } from '@angular/core';

import { HttpService } from '../../../../services/http';
import { ObjectValidator } from '../../../../services/object-validator';

import { resumeFactory } from './resume.factory';

export const ResumeToken = new OpaqueToken('ResumeModel');

export const ResumeProvider = {
  provide: ResumeToken,
  deps: [HttpService, ObjectValidator],
  useFactory: resumeFactory
};
