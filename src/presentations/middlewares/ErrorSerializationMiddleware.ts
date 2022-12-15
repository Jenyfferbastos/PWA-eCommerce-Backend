import {
  Middleware,
  ExpressErrorMiddlewareInterface,
} from 'routing-controllers';
import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { injectable } from 'inversify';

@Middleware({ type: 'after' })
@injectable()
export class ErrorSerializationMiddleware
  implements ExpressErrorMiddlewareInterface
{
  public error(error: any, _req: Request, res: Response, next: NextFunction) {
    if (error.errors?.length && error.httpCode === httpStatus.BAD_REQUEST) {
      return res.status(httpStatus.BAD_REQUEST).json(error.errors);
    }

    return next();
  }
}
