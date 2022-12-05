import { ErrorNames } from '../enums/ErrorNames';

export const getErrorName = (name: ErrorNames) => ErrorNames[name];
