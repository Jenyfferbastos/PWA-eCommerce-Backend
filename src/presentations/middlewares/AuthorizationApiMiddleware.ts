import HttpStatus from 'http-status';
import { injectable } from 'inversify';
import { Request, Response, NextFunction } from 'express';
import { ExpressMiddlewareInterface } from 'routing-controllers';

import { ErrorNames } from 'src/commons/enums/ErrorNames';
import { ErrorMessages } from 'src/commons/enums/ErrorMessages';
import { getErrorName } from 'src/commons/helpers/GetErrorName';

@injectable()
export class AuthorizationApiMiddleware implements ExpressMiddlewareInterface {
  public async use(req: Request, res: Response, next: NextFunction) {
    const receivedXApiKey: string = req.headers['x-api-key'] as string;

    if (!receivedXApiKey) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        name: getErrorName(
          ErrorNames.X_API_KEY_IS_REQUIRED_TO_ACCESS_THIS_RESOURCE,
        ),
        message: ErrorMessages.X_API_KEY_IS_REQUIRED_TO_ACCESS_THIS_RESOURCE,
      });
    }

    if (receivedXApiKey !== process.env.API_GDL_X_API_KEY) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        name: getErrorName(ErrorNames.INVALID_X_API_KEY),
        message: ErrorMessages.INVALID_X_API_KEY,
      });
    }

    return next();
  }
}
