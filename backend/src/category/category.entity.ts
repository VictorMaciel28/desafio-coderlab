import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Category, (category) => category.chield)
  parent: Category | null;

  @OneToMany(() => Category, (category) => category.parent)
  chield: Category[];

  @Column()
  name: string;
}