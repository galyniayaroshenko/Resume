export const httpCodes = {
  COMPLETED: -1, // special code for internal purpose

  DISCONNECTED: 0,
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404
};

export interface IHandler {
  (data: Object | String): Promise<any> | any;
}
export interface IHandlerDefiner {
  (handler: IHandler): HttpHandlers;
}

export class HttpHandlers {
  private handlers: Object = {};
  private defaultSubStatus: string = '<default>';

  BAD_REQUEST: any;
  DISCONNECTED: any;
  FORBIDDEN: any;
  NOT_FOUND: any;
  OK: any;
  UNAUTHORIZED: any;

  completed: any;

  constructor() {
    this.BAD_REQUEST = this.handlerDefiner(httpCodes.BAD_REQUEST);
    this.DISCONNECTED = this.handlerDefiner(httpCodes.DISCONNECTED);
    this.FORBIDDEN = this.handlerDefiner(httpCodes.FORBIDDEN);
    this.NOT_FOUND = this.handlerDefiner(httpCodes.NOT_FOUND);
    this.OK = this.handlerDefiner(httpCodes.OK);
    this.UNAUTHORIZED = this.handlerDefiner(httpCodes.UNAUTHORIZED);

    this.completed = this.handlerDefiner(httpCodes.COMPLETED);
  }

  /* public methods */
  handlerExecute(handlers: IHandler[], data?: any, index: number = 0): Promise<any> {
    return Promise.resolve(handlers[index](data))
      .then(handlerData => {
        if (index < handlers.length - 1) {
          return this.handlerExecute(handlers, handlerData || data, index + 1);
        }
        return null;
      })
      .catch(error => console.log('error', error));
  }

  handlersGet(httpCode: number, subStatus: string = this.defaultSubStatus): Object {
    const handler = this.handlers[httpCode];

    if (!handler) {
      return;
    }

    const codeHandler = handler[this.defaultSubStatus];
    const subStatusHandler = handler[subStatus];

    if (!codeHandler && !subStatusHandler) {
      return;
    }

    return { codeHandler, subStatusHandler };
  }

  /* private methods */
  private handlerDefiner(httpCode: number): IHandlerDefiner {
    return this.handlerDefinerWithCode.bind(this, httpCode);
  }

  private handlerDefinerWithCode(httpCode: number, handler: IHandler): HttpHandlers;
  private handlerDefinerWithCode(httpCode: number, subStatus: string): IHandlerDefiner;
  private handlerDefinerWithCode(httpCode: number, handlerOrSubStatus: IHandler | string): HttpHandlers | IHandlerDefiner {
    if (typeof handlerOrSubStatus === 'string') { // in case of substatus
      this.subStatusDefine(httpCode, handlerOrSubStatus);

      return (handler: IHandler): HttpHandlers => {
        this.handlerDefine(httpCode, handler, handlerOrSubStatus);
        return this;
      };
    }

    this.handlerDefine(httpCode, handlerOrSubStatus);
    return this;
  }

  private handlerDefine(httpCode: number, handler: IHandler, subStatus: string = this.defaultSubStatus): void {
    this.subStatusDefine(httpCode, subStatus);

    this.handlers[httpCode][subStatus].push(handler);
  }

  private subStatusDefine(httpCode: number, subStatus: string): void {
    let codeHandlers = this.handlers[httpCode];

    if (!codeHandlers) {
      codeHandlers = this.handlers[httpCode] = {};
    }

    if (!codeHandlers[subStatus]) {
      codeHandlers[subStatus] = [];
    }
  }
}
