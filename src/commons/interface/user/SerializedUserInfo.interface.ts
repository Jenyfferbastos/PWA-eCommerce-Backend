import { Roles } from '../../enums/Roles';

export interface SerializedUserInfo {
  name: string;
  email: string;
  roles: Roles[];
}
