import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
 
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}