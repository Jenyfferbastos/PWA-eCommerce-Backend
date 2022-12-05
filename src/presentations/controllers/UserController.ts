import { inject, injectable } from 'inversify';
import { Response } from 'express';
import { Controller, Res, Get, Param, Post, Body } from 'routing-controllers';

import { Utils } from '../helpers/Utils';
import { UserRepository } from 'src/infra/database/mongodb/repositories/UserRepository';
import { CreateUserBody } from './interfaces/CreateUserBody';

@Controller('/users')
@injectable()
export class UserController {
  constructor(
    @inject(Utils) private readonly utils: Utils,
    @inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  @Get('/:id')
  public async findUser(@Res() res: Response, @Param('id') userId: string) {
    try {
      return await this.userRepository.listUser(userId);
    } catch (error) {
      return this.utils.handleResponse(error, res);
    }
  }

  @Post()
  public async createUser(@Res() res: Response, @Body() body: CreateUserBody) {
    try {
      return await this.userRepository.createUser(body);
    } catch (error) {
      return this.utils.handleResponse(error, res);
    }
  }
}
