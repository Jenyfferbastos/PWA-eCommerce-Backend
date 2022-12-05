import { Product } from './Product';

export interface Order {
  quantity: number;
  products: Product[];
  userId: string;
  paymentMethod: string;
  orderValue: string;
}
