import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Product } from './src/products/product.entity'; 
import { Category } from './src/category/category.entity'; 
import { User } from './src/users/user.entity';

export default new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Product, Category, User],
    synchronize: true,
    logging: true,
    migrations: ['src/migrations/**/*.ts'],
    subscribers: []
});