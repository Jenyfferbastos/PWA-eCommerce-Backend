import HttpStatus from 'http-status';
import { Response } from 'express';
import { injectable } from 'inversify';

import {
  NotFoundError,
  ValidationError,
  ForbiddenError,
  UnauthorizedError,
  UnprocessableEntityError,
  RequestTimeoutError,
} from 'src/commons/Exceptions';

@injectable()
export class Utils {
  public handleResponse(error: Error | any, res: Response) {
    if (error instanceof NotFoundError) {
      return res.status(HttpStatus.NOT_FOUND).json(error);
    } else if (error instanceof RequestTimeoutError) {
      return res.status(HttpStatus.REQUEST_TIMEOUT).json(error);
    } else if (error instanceof ValidationError) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    } else if (error instanceof ForbiddenError) {
      return res.status(HttpStatus.FORBIDDEN).json(error);
    } else if (error instanceof UnauthorizedError) {
      return res.status(HttpStatus.UNAUTHORIZED).json(error);
    } else if (error instanceof UnprocessableEntityError) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    } else {
      return res.status(HttpStatus.SERVICE_UNAVAILABLE).json(error);
    }
  }
}
