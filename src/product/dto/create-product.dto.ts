import { Type } from 'class-transformer';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateProductDto {


  @IsString()
  name!: string; //! que se va a recibir algo 

  @IsOptional()
  @IsString()
  description?: string;// : dan el tipo de dato y ? puede ser opcional 
  @IsNumber()
  @Type((()=> Number))
  price!: number;
}