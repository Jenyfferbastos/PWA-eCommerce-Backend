import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

class Categories {
  @IsOptional()
  @IsString()
  length?: string;
  @IsOptional()
  @IsString()
  color?: string;
  @IsOptional()
  @IsString()
  brand?: string;
  @IsOptional()
  @IsNumber()
  pricingBefore: number;
  @IsOptional()
  @IsString()
  discount?: number;
  @IsOptional()
  @IsString()
  rate?: string;
}
export class ListProductsBody {
  @IsOptional()
  @Type(() => Categories)
  categories?: Categories;
}
