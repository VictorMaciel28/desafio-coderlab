import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Category } from '../category/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @Column()
  name: string;

  @Column('int')
  qty: number;

  @Column('decimal', { precision: 5, scale: 2 })
  price: number;

  @Column()
  photo: string;
}