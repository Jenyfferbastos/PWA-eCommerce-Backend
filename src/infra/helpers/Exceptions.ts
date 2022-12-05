import {
  ForbiddenError,
  NotFoundError,
  RequestTimeoutError,
  UnauthorizedError,
  UnprocessableEntityError,
  ValidationError,
} from 'src/commons/Exceptions';
import { ExceptionErrorData } from 'src/commons/interfaces/error/ExceptionErrorData';

export class AxiosBadRequestError extends ValidationError {
  name: string;
  message: string;
  constructor(data: ExceptionErrorData) {
    super({ ...data });
    this.name = data.name;
    this.message = data.message;
  }
}

export class AxiosUnauthorizedError extends UnauthorizedError {
  name: string;
  message: string;
  constructor(data: ExceptionErrorData) {
    super({ ...data });
    this.name = data.name;
    this.message = data.message;
  }
}

export class AxiosForbiddenError extends ForbiddenError {
  name: string;
  message: string;
  constructor(data: ExceptionErrorData) {
    super({ ...data });
    this.name = data.name;
    this.message = data.message;
  }
}

export class AxiosUnprocessableEntityError extends UnprocessableEntityError {
  name: string;
  message: string;
  constructor(data: ExceptionErrorData) {
    super({ ...data });
    this.name = data.name;
    this.message = data.message;
  }
}

export class AxiosNotFoundError extends NotFoundError {
  name: string;
  message: string;
  constructor(data: ExceptionErrorData) {
    super({ ...data });
    this.name = data.name;
    this.message = data.message;
  }
}

export class AxiosRequestTimeoutError extends RequestTimeoutError {
  name: string;
  message: string;
  constructor(data: ExceptionErrorData) {
    super({ ...data });
    this.name = data.name;
    this.message = data.message;
  }
}
