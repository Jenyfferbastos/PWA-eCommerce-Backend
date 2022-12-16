import { IsString } from 'class-validator';

export class CreateUserBody {
  @IsString()
  firtName: string;
  @IsString()
  lastName: string;
  @IsString()
  email: string;
  @IsString()
  phone: string;
  @IsString()
  bornDate: string;
  @IsString()
  currentPassword: string;
  @IsString()
  password: string;
}
