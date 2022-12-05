import { inject, injectable } from 'inversify';
import { Response } from 'express';
import { Controller, Res, Get, Param, Post, Body } from 'routing-controllers';

import { Utils } from '../helpers/Utils';
import { OrderRepository } from 'src/infra/database/mongodb/repositories/OrdersRepository';
import { CreateOrderBody } from './interfaces/CreateOrderBody';
import { UserRepository } from 'src/infra/database/mongodb/repositories/UserRepository';

@Controller('/orders')
@injectable()
export class OrdersController {
  constructor(
    @inject(Utils) private readonly utils: Utils,
    @inject(OrderRepository)
    private readonly orderRepository: OrderRepository,
    @inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  @Get('/:userId')
  public async listOrders(
    @Res() res: Response,
    @Param('userId') userId: string,
  ) {
    try {
      return await this.orderRepository.listOrders(userId);
    } catch (error) {
      return this.utils.handleResponse(error, res);
    }
  }

  @Post()
  public async createOrder(
    @Res() res: Response,
    @Body() body: CreateOrderBody,
  ) {
    try {
      const newUser = await this.userRepository.createUser(body.userData);
      delete body.userData;
      return await this.orderRepository.createOrder({
        ...body,
        userId: newUser._id,
      });
    } catch (error) {
      return this.utils.handleResponse(error, res);
    }
  }
}
