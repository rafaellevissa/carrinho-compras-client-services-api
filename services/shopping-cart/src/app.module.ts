import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
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
    ShoppingCartModule,
  ],
})
export class AppModule {}
