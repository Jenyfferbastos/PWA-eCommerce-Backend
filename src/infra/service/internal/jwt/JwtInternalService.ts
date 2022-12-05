import jwt from 'jsonwebtoken';
import { inject, injectable } from 'inversify';

import { JwtServiceMapper } from './mapper/JwtMapper';
import { JwtUserDecodeService } from './interface/JwtUserDecodeService.interface';
import { SerializedUserInfo } from 'src/commons/interface/user/SerializedUserInfo.interface';

const KEYCLOACK_REALM_PUBLIC_KEY = process.env.KEYCLOACK_REALM_PUBLIC_KEY;

@injectable()
export class JwtInternalService {
  private readonly cert = [
    '-----BEGIN PUBLIC KEY-----',
    KEYCLOACK_REALM_PUBLIC_KEY,
    '-----END PUBLIC KEY-----',
  ].join('\n');

  constructor(@inject(JwtServiceMapper) private mapper: JwtServiceMapper) {}

  public verifyToken(token: string) {
    try {
      return jwt.verify(token, this.cert, { algorithms: ['RS256'] });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public getUserInfo(token: string): SerializedUserInfo {
    const userDecoded = jwt.decode(token) as JwtUserDecodeService;

    return this.mapper.serializeUserInfo(userDecoded);
  }
}
