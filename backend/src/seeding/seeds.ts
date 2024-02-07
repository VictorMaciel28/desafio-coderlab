import { DataSource } from 'typeorm';
import dataSourceConfig from '../../ormconfig';
import { Category } from '../category/category.entity';
import { Product } from '../products/product.entity';

const seed = async (dataSource: DataSource) => {
    const categoryRepository = dataSource.getRepository(Category);
    const productRepository = dataSource.getRepository(Product);

    await productRepository.delete({});
    await categoryRepository.delete({});
  
    const category1 = categoryRepository.create({ name: 'Electronics' });
    await categoryRepository.save(category1);
  
    const category2 = categoryRepository.create({ name: 'Books' });
    await categoryRepository.save(category2);
  
    for (let i = 1; i <= 10; i++) {
      const product = productRepository.create({
        name: `Electronic Product ${i}`,
        qty: Math.floor(Math.random() * 50) + 1,
        price: parseFloat((Math.random() * 1000).toFixed(2)),
        photo: `url_to_photo_electronic_${i}`,
        categories: [category1], 
      });
  
      await productRepository.save(product);
    }
  
    for (let i = 1; i <= 10; i++) {
      const product = productRepository.create({
        name: `Book ${i}`,
        qty: Math.floor(Math.random() * 100) + 1,
        price: parseFloat((Math.random() * 100).toFixed(2)),
        photo: `url_to_photo_book_${i}`,
        categories: [category2], 
      });
  
      await productRepository.save(product);
    }
  };

dataSourceConfig.initialize()
  .then(async (dataSource) => {
    console.log('Running seeding...');
    await seed(dataSource);
    console.log('Seeding complete.');
    await dataSource.destroy();
  })
  .catch(error => console.log(error));