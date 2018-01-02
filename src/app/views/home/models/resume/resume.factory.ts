import { Injector } from '@angular/core';

import { HttpRequest, HttpService } from '../../../../services/http';
import { ObjectValidator } from '../../../../services/object-validator';

export enum StatesEnum {
  View,
  Edit,
  Create
}

export interface IResumeModel {
  id: Number;
  name: String;
  position: String;
  picture: String;
  email: String;
  skype: String;
  phoneNumbers: any;
  profile: String;
  social_profiles: any;
  skills: any;
  work_expereince: any;
  pet_projects: any;
  education: any;
  languages: any;
  interests: any;
  number: any;

  state: StatesEnum;
  etalon: Object;
  baseURL: string;

  result: any;

  save(json: any): any;
  delete(): HttpRequest;
  edit(): void;
  load(id: number): HttpRequest;
  loadSuccessProcess(data: Object): any;
  urlBuild(id: number): string;
}

export interface IResumeModelConstructor extends IResumeModel {
  new(): IResumeModelConstructor;
}

export function resumeModelFactory(injector: Injector, httpService: HttpService, objectValidator: ObjectValidator) {

  class ResumeModel implements IResumeModel {
    state: StatesEnum;
    etalon: Object;
    baseURL: string = '/resume';

    id: Number;
    name: String;
    position: String;
    picture: String;
    email: String;
    skype: String;
    phoneNumbers: any;
    profile: String;
    social_profiles: any;
    skills: any;
    work_expereince: any;
    pet_projects: any;
    education: any;
    languages: any;
    interests: any;
    number: any;

    result: any;

    constructor() {
      this.state = StatesEnum.Create;
      this.etalon = {
        id: {
          type: Number,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        position: {
          type: String,
          required: true
        },
        picture: {
          type: String
        },
        email: {
          type: String,
          required: true
        },
        skype: {
          type: String,
          required: true
        },
        phoneNumbers: {
          type: Array,
          required: true
        },
        profile: {
          type: String,
          required: true
        },
        social_profiles: {
          type: Array,
          required: true
        },
        skills: {
          type: Array,
          required: true
        },
        work_experience: {
          type: Array,
          required: true
        },
        pet_projects: {
          type: Array,
          required: true
        },
        education: {
          type: Array,
          required: true
        },
        languages: {
          type: Array,
          required: true
        },
        interests: {
          type: Array,
          required: true
        },
        number: {
          type: Array,
          required: true
        }
      };
    }

    delete(): HttpRequest {
      if (this.state !== StatesEnum.View) {
        console.log('State is not View');
      }

      return httpService
        .delete(this.urlBuild(this.entityIDGet()), true)
        .OK('OK')(() => console.log('Delete success'));
    }

    edit(): void {
      if (this.state !== StatesEnum.View) {
        console.log('State is not View');
      }

      console.log('this.state', this.state);
      this.state = StatesEnum.Edit;
    }

    load(id: number): HttpRequest {
      if (this.state !== StatesEnum.Create) {
        console.log('State is not Create');
      }

      return httpService.get(this.urlBuild(id)).OK('OK')((data: any) => this.loadSuccessProcess(data));
    }

    loadSuccessProcess(data: Object) {
      this.state = StatesEnum.View;
      this.jsonFormatCheck(data);

      this.result = data;

      return data;
    }

    save(json: any): any {
      console.log('save', json);
      if (this.state === StatesEnum.View) {
        console.log('State is not Edit or Create');
      }

      let httpRequest;

      switch (this.state) {
        case StatesEnum.Edit:
          // httpRequest = httpService.put(this.urlBuild(this.entityIDGet()), json);
          httpRequest = httpService.put(this.urlBuild(1), json);
          break;
        case StatesEnum.Create:
          httpRequest = httpService.post(this.baseURL, json);
          break;
        default:
          console.log('err');
      }

      return httpRequest
        .OK('OK')((data: any) => {
          this.loadSuccessProcess(data);
        })
        .OK('ERROR:general')(() => console.log('ERROR:general'));
    }

    /* private methods */
    urlBuild(id: number): string {
      return `${this.baseURL}/${id}`;
    }

    private entityIDGet(): number {
      return this.result.id;
    }

    private jsonFormatCheck(json: any): void {
      console.log('json', json);
      console.log('this.etalon', this.etalon);
      objectValidator.validate(json, this.etalon);
    }
  }

  return ResumeModel;
}
