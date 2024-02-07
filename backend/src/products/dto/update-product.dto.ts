import { IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  name?: string;

  @IsNumber()
  qty?: number;

  @IsNumber()
  price?: number;

  @IsString()
  photo?: string;

  @IsString()
  categories?: string[];
}