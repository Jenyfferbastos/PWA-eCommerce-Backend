import { AxiosError } from 'axios';
import httpStatus from 'http-status';
import { injectable } from 'inversify';

import {
  AxiosBadRequestError,
  AxiosForbiddenError,
  AxiosNotFoundError,
  AxiosRequestTimeoutError,
  AxiosUnauthorizedError,
  AxiosUnprocessableEntityError,
} from './Exceptions';
import { getErrorName } from 'src/commons/helpers/GetErrorName';
import { ErrorNames } from 'src/commons/enums/ErrorNames';

@injectable()
export class HandleAxiosError {
  public execute(error: AxiosError) {
    if (error.response.status === httpStatus.BAD_REQUEST) {
      throw new AxiosBadRequestError({
        name: getErrorName(ErrorNames.AXIOS_ERROR),
        message: error.message,
      });
    } else if (error.response.status === httpStatus.UNAUTHORIZED) {
      throw new AxiosUnauthorizedError({
        name: getErrorName(ErrorNames.AXIOS_ERROR),
        message: error.message,
      });
    } else if (error.response.status === httpStatus.FORBIDDEN) {
      throw new AxiosForbiddenError({
        name: getErrorName(ErrorNames.AXIOS_ERROR),
        message: error.message,
      });
    } else if (error.response.status === httpStatus.NOT_FOUND) {
      throw new AxiosNotFoundError({
        name: getErrorName(ErrorNames.AXIOS_ERROR),
        message: error.message,
      });
    } else if (error.response.status === httpStatus.REQUEST_TIMEOUT) {
      throw new AxiosRequestTimeoutError({
        name: getErrorName(ErrorNames.REQUEST_TIMEOUT),
        message: error.message,
      });
    } else if (error.response.status === httpStatus.UNPROCESSABLE_ENTITY) {
      throw new AxiosUnprocessableEntityError({
        name: getErrorName(ErrorNames.AXIOS_ERROR),
        message: error.message,
      });
    } else {
      throw new Error(error.message);
    }
  }
}
