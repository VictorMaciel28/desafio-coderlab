import { DataSource } from 'typeorm';
import dataSourceConfig from '../ormconfig';
import * as bcrypt from 'bcryptjs';
import { Category } from '../src/category/category.entity';
import { Product } from '../src/products/product.entity';
import { User } from '../src/users/user.entity';

async function createCategories(categoryRepository) {
  return Promise.all([
    categoryRepository.save({ name: 'Couvert' }),
    categoryRepository.save({ name: 'Carnes' }),
    categoryRepository.save({ name: 'Saladas' }),
  ]);
}

async function createProducts(productRepository, categories) {
  for (const [index, categoryName] of ['Couvert', 'Carne', 'Salada'].entries()) {
    for (let i = 1; i <= 6; i++) {
      await productRepository.save({
        name: `${categoryName} ${i}`,
        qty: Math.floor(Math.random() * 100) + 1,
        price: parseFloat((Math.random() * 1000).toFixed(2)),
        photo: `url_to_photo_${categoryName.toLowerCase()}_${i}`,
        categories: [categories[index]],
      });
    }
  }
}

async function createUser(userRepository) {
  const hashedPassword = await bcrypt.hash('admin', 10);
  await userRepository.save({
    username: 'admin',
    password: hashedPassword,
  });
}

async function seed(dataSource: DataSource) {
  const categoryRepository = dataSource.getRepository(Category);
  const productRepository = dataSource.getRepository(Product);
  const userRepository = dataSource.getRepository(User);

  await userRepository.delete({});
  await categoryRepository.delete({});
  await productRepository.delete({});

  await createUser(userRepository);

  const categories = await createCategories(categoryRepository);

  await createProducts(productRepository, categories);
}

dataSourceConfig.initialize()
  .then(async (dataSource) => {
    console.log('Running seeding...');
    await seed(dataSource);
    console.log('Seeding complete.');
    await dataSource.destroy();
  })
  .catch(error => console.log('Error during seeding:', error));