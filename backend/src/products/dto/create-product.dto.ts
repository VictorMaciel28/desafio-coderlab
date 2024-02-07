import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  qty: number;

  @IsNumber()
  price: number;

  @IsString()
  photo: string;

  @IsString()
  categories: string[];
}