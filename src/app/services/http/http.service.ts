import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Config } from '../../config';

import { ObjectValidator } from '../object-validator';

import { HttpHandlers, IHandler, httpCodes } from './http-handlers';

@Injectable()
export class HttpService {
  constructor(
    private config: Config,
    private http: Http,
    private objectValidator: ObjectValidator
  ) {}

  /* public methods */
  delete(url: string, withoutBody?: boolean): HttpRequest {
    return this.httpRequestCreate(this.http.delete(
      `${this.config.http.apiURL}${url}`,
      this.requestOptionsCreate()
    ), withoutBody);
  }

  get(url: string): HttpRequest {
    return this.httpRequestCreate(this.http.get(
      `${this.config.http.apiURL}${url}`,
      this.requestOptionsCreate()
    ));
  }

  patch(url: string, data?: Object, withoutBody?: boolean): HttpRequest {
    return this.httpRequestCreate(this.http.patch(
      `${this.config.http.apiURL}${url}`,
      JSON.stringify(data),
      this.requestOptionsCreate({ 'Content-Type': 'application/json' })
    ), withoutBody);
  }

  post(url: string, data?: Object, withoutBody?: boolean): HttpRequest {
    return this.httpRequestCreate(this.http.post(
      `${this.config.http.apiURL}${url}`,
      JSON.stringify(data),
      this.requestOptionsCreate({ 'Content-Type': 'application/json' })
    ), withoutBody);
  }

  put(url: string, data: Object): HttpRequest {
    return this.httpRequestCreate(this.http.put(
      `${this.config.http.apiURL}${url}`,
      JSON.stringify(data),
      this.requestOptionsCreate({ 'Content-Type': 'application/json' })
    ));
  }

  /* private methods */
  private httpRequestCreate(observable: any, withoutBody?: boolean): HttpRequest {
    return new HttpRequest(
      observable,
      this.objectValidator,
      this.config.http.defaultHandlers,
      !!withoutBody
    );
  }

  private requestOptionsCreate(additionalHeaders?: Object) {
    const headers = new Headers(additionalHeaders || {});
    const token = localStorage.getItem('token'); // !bad solution

    if (token) {
      headers.append('Token', token);
    }

    return new RequestOptions({ headers });
  }
}

export class HttpRequest extends HttpHandlers {
  private httpPromise: Promise<any>;
  private subscriber: any;

  constructor(
    private httpObservable: any,
    private objectValidator: ObjectValidator,
    private defaultHandlers: HttpHandlers,
    private withoutBody: boolean
  ) {
    super();

    if (!this.defaultHandlers.handlersGet(httpCodes.COMPLETED)) {
      this.defaultHandlers.completed(() => {});
    }

    this.httpPromise = this.observableToPromise();
    this.httpPromise = this.httpPromise.then(
      response => this.successHandle(response),
      response => this.errorHandle(response)
    );
  }

  /* public methods */
  handlerGet(httpCode: number, subStatus?: string): IHandler[] {
    let defaultHandlers = this.defaultHandlers.handlersGet(httpCode, subStatus);
    let handlers = this.handlersGet(httpCode, subStatus);

    if (!handlers && !defaultHandlers) {
      console.log( `Unexpected response:`,
        `  status: ${httpCode}`,
        `  substatus: ${subStatus}`);
    }

    handlers = handlers || {};
    defaultHandlers = defaultHandlers || {};

    return handlers['subStatusHandler'] ||
      defaultHandlers['subStatusHandler'] ||
      handlers['codeHandler'] ||
      defaultHandlers['codeHandler'];
  }

  /* private methods */
  private errorHandle(response: Response): void {
    this.handlerExecute(this.handlerGet(response.status).slice(0), response.text())
      .then(() => this.handlerExecute(this.handlerGet(httpCodes.COMPLETED)));
  }

  private successHandle(response: Response): void {
    let responseBody: any;

    if (response.text()) {
      responseBody = response.json();
    } else {
      if (!this.withoutBody) {
        console.log('Response body not defined');
      }
      responseBody = { status: 'OK' };
    }

    this.objectValidator.validate(responseBody, {
      status: {
        required: true,
        type: String,
        inclusions: ['OK', 'ERROR:general', 'ERROR:target']
      },
      data: {
        type: [String, Array, Object]
      }
    });

    this.handlerExecute(
      this.handlerGet(response.status, responseBody.status),
      responseBody.data
    )
      .then(() => this.handlerExecute(this.handlerGet(httpCodes.COMPLETED))) /// ?
      .then(result => {
        return result;
      });
  }

  private observableToPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
      let value: any;

      this.subscriber = this.httpObservable.subscribe(
        (v: any) => value = v,
        reject,
        () => resolve(value)
      );
    });
  }
}
