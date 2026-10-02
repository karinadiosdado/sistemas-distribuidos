
import {
  IsBoolean,   // revisa que el valor sea true o false
  IsInt,       // revisa que el valor sea un numero entero
  IsNotEmpty,  // revisa que el campo no este vacio
  IsOptional,  // indica que el campo se puede omitir
  IsString,    // revisa que el valor sea texto
  Min,         // revisa que el numero no sea menor a un minimo
} from 'class-validator';

// Este DTO define que datos tiene que mandar el cliente para CREAR un libro.
export class CreateLibroDto {

  @IsString()// es  texto
  @IsNotEmpty()// no puede venir vacio
  autor: string;

  @IsString()// es  texto
  @IsNotEmpty()// no puede venir vacio
  titulo: string;

  @IsInt()// es entero
  // no acepta valores menores a 1
  @Min(1)
  paginas: number;

  @IsBoolean()// es true o false
  @IsOptional()// es opcional
  disponible?: boolean;
}