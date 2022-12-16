import { injectable } from 'inversify';

import { UserAddress } from '../interfaces/UserAddress';
import { UserModel } from '../schemas/UserSchema';

@injectable()
export class UserRepository {
  async createUser(user: UserAddress) {
    const newUser = await UserModel.create(user);
    return JSON.parse(JSON.stringify(newUser));
  }

  async listUser(userId: string) {
    const user = await UserModel.findOne({ _id: userId });
    return JSON.stringify(user);
  }
}
