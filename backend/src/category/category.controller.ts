import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
 
  @UseGuards(LocalAuthGuard)
  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}