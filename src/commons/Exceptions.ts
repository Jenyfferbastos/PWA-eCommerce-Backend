import { IsString } from 'class-validator';

import { ExceptionErrorData } from './interfaces/error/ExceptionErrorData';

export class ValidationError extends Error {
  @IsString()
  name: string;

  @IsString()
  message: string;

  constructor(data: ExceptionErrorData) {
    super();
    this.name = data.name;
    this.message = data.message;
  }
}

export class ForbiddenError extends Error {
  @IsString()
  name: string;

  @IsString()
  message: string;

  constructor(data: ExceptionErrorData) {
    super();
    this.name = data.name;
    this.message = data.message;
  }
}

export class NotFoundError extends Error {
  @IsString()
  name: string;

  @IsString()
  message: string;

  constructor(data: ExceptionErrorData) {
    super();
    this.name = data.name;
    this.message = data.message;
  }
}

export class RequestTimeoutError extends Error {
  @IsString()
  name: string;

  @IsString()
  message: string;

  constructor(data: ExceptionErrorData) {
    super();
    this.name = data.name;
    this.message = data.message;
  }
}

export class UnprocessableEntityError extends Error {
  @IsString()
  name: string;

  @IsString()
  message: string;

  constructor(data: ExceptionErrorData) {
    super();
    this.name = data.name;
    this.message = data.message;
  }
}

export class UnauthorizedError extends Error {
  @IsString()
  name: string;

  @IsString()
  message: string;

  constructor(data: ExceptionErrorData) {
    super();
    this.name = data.name;
    this.message = data.message || 'Solicitação não permitida';
  }
}
