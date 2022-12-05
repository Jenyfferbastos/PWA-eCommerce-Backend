export interface JwtUserDecodeService {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: ['giro-de-leitos', 'account'];
  sub: string;
  typ: string;
  azp: string;
  session_state: string;
  scope: string;
  email_verified: false;
  name: string;
  preferred_username: string;
  membership: Array<string>;
  given_name: string;
  family_name: string;
  email: string;
}
