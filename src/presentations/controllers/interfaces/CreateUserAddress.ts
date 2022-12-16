import { IsString } from 'class-validator';

export class CreateUserAddress {
  @IsString()
  street: string;
  @IsString()
  state: string;
  @IsString()
  city: string;
  @IsString()
  postalCode: string;
  @IsString()
  name: string;
  @IsString()
  phone: string;
  @IsString()
  phoneArea: string;
}
