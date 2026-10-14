import { Type } from 'class-transformer';
import { IsString, IsOptional, IsNumber, IsPositive, isNumber, IsInt, Min } from 'class-validator';

export class CreateProductDto {


  @IsString()
  name!: string; //! que se va a recibir algo 

  @IsOptional()
  @IsString()
  description?: string;// : dan el tipo de dato y ? puede ser opcional 
  @IsOptional()
  @IsString()
  category?: string;

  @IsNumber()
  @Type((() => Number))
  @IsInt()
  @Min(0)
  stock!: number;


  @IsNumber()
  @Type((() => Number))
  @IsPositive()
  price!: number;
}