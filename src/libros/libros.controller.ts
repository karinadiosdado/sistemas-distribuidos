import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { LibrosService } from './libros.service.js';
import { CreateLibroDto } from './dto/create-libro.dto.js';
import { UpdateLibroDto } from './dto/update-libro.dto.js';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) { }

  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.librosService.create(createLibroDto);
  }

  @Get()
  findAll() {
    return this.librosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.librosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateLibroDto: UpdateLibroDto,
  ) {
    return this.librosService.update(id, updateLibroDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.librosService.remove(id);
  }
}