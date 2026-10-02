import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module.js';
import { LibrosModule } from './libros/libros.module.js';


@Module({
  imports: [ProductModule, LibrosModule],

})
export class AppModule {}
