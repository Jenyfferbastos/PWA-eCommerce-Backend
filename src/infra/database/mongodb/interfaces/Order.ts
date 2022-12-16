import { Product } from './Product';
import { UserAddress } from './UserAddress';

export interface Order {
  quantity: number;
  products: Product[];
  userId: string;
  paymentMethod: string;
  orderValue: string;
  userAddress: UserAddress;
}
