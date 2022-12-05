import { injectable } from 'inversify';

import { Order } from '../interfaces/Order';
import { OrderModel } from '../schemas/OrderSchema';

@injectable()
export class OrderRepository {
  async createOrder(order: Order) {
    const newOrder = await OrderModel.create(order);
    return JSON.stringify(newOrder);
  }

  async listOrders(userId: string) {
    const orders = await OrderModel.find({ userId });
    return JSON.stringify(orders);
  }
}
