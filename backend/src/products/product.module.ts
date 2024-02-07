import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './product.service';
import { ProductsController } from './products.controller';
import { Product } from './product.entity';
import { CategoryModule } from '../category/catecory.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CategoryModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}