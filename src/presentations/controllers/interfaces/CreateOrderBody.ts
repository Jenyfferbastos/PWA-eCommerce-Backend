import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Product } from 'src/infra/database/mongodb/interfaces/Product';
import { CreateUserAddress } from './CreateUserAddress';

export class CreateOrderBody {
  @IsNumber()
  quantity: number;
  @ValidateNested({ each: true })
  @Type(() => Product)
  products: Product[];
  @IsOptional()
  @IsString()
  userId: string;
  @IsString()
  paymentMethod: string;
  @IsString()
  orderValue: string;
  @Type(() => CreateUserAddress)
  userAddress: CreateUserAddress;
}
