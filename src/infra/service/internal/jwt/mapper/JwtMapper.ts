import { injectable } from 'inversify';

import { Roles } from 'src/commons/enums/Roles';
import { JwtUserDecodeService } from '../interface/JwtUserDecodeService.interface';
import { SerializedUserInfo } from 'src/commons/interface/user/SerializedUserInfo.interface';

@injectable()
export class JwtServiceMapper {
  public serializeUserInfo(data: JwtUserDecodeService): SerializedUserInfo {
    const roles = data.membership
      .map((membership) => Roles[membership])
      .filter((membership) => membership);

    return { name: data.name, email: data.email, roles };
  }
}
