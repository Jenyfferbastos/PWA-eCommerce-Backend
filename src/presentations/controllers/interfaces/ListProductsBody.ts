import { IsOptional, IsString } from 'class-validator';

// class Categories {
//   @IsOptional()
//   @IsString()
//   size?: string;
//   @IsOptional()
//   @IsString()
//   color?: string;
//   @IsOptional()
//   @IsString()
//   brand?: string;
//   @IsOptional()
//   @IsNumber()
//   pricingBefore: number;
//   @IsOptional()
//   @IsString()
//   discount?: number;
//   @IsOptional()
//   @IsString()
//   rate?: string;
// }
export class ListProductsBody {
  @IsOptional()
  @IsString()
  category?: string;
  @IsOptional()
  @IsString()
  value?: string;
}
