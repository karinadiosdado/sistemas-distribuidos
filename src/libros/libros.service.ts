import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateLibroDto } from './dto/create-libro.dto.js';
import { UpdateLibroDto } from './dto/update-libro.dto.js';
import { Libro } from './entities/libro.entity.js';

@Injectable()
export class LibrosService {
  // Aqui guardo los libros en memoria (se pierden al reiniciar el servidor)
  private libros: Libro[] = [];

  // Crea un libro nuevo y le asigna un UUID automático
  create(createLibroDto: CreateLibroDto): Libro {
    const nuevo: Libro = {
      id: randomUUID(), // genero el id unico
      ...createLibroDto, // copio los datos que mando el cliente
      disponible: createLibroDto.disponible ?? true, // si no lo mandan, es true
    };
    this.libros.push(nuevo);
    return nuevo;
  }

  // Devuelve todos los libros guardados
  findAll(): Libro[] {
    return this.libros;
  }

  // Busca un libro por id; si no existe, lanza error 404
  findOne(id: string): Libro {
    const libro = this.libros.find((l) => l.id === id);
    if (!libro) {
      throw new NotFoundException(`No se encontró el libro con id ${id}`);
    }
    return libro;
  }

  // Actualiza solo los campos que el cliente mande
  update(id: string, updateLibroDto: UpdateLibroDto): Libro {
    const libro = this.findOne(id); // valida que exista
    Object.assign(libro, updateLibroDto);
    return libro;
  }

  // Elimina el libro del arreglo
  remove(id: string): { message: string } {
    const libro = this.findOne(id); // valida que exista antes de borrar
    this.libros = this.libros.filter((l) => l.id !== libro.id);
    return { message: `Libro con id ${id} eliminado correctamente` };
  }
}