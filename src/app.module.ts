import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module.js';

@Module({
  imports: [ProductModule],
})
export class AppModule {}