import { DataSource } from 'typeorm';
import { Product } from './src/products/product.entity'; 
import { Category } from './src/category/category.entity'; 

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "coderlab",
    entities: [Product, Category],
    synchronize: true,
    logging: true,
    migrations: ['src/migrations/**/*.ts'],
    subscribers: []
});