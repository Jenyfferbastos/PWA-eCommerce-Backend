import { IsString } from 'class-validator';

export class CreateUserBody {
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
