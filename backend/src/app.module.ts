import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/product.module';
import { CategoryModule } from './category/catecory.module';
import { UsersModule } from './users/users.module';
import dataSourceConfig from '../ormconfig';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: async() => ({
        ...dataSourceConfig.options,
        autoLoadEntities: true
      }),
  }),
    ProductsModule,
    CategoryModule,
    UsersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
