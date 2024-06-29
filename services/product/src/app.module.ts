import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import constants from './common/constants';
import { TypeOrmConfig } from './common/config/ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [constants],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
    ProductModule,
  ],
})
export class AppModule {}
