import { join } from 'path';
import { DataSourceOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import constants from 'src/common/constants';

export const dataSourceOptions: () => DataSourceOptions = () => ({
  type: constants().database.driver,
  host: constants().database.hostname,
  port: constants().database.port,
  username: constants().database.username,
  password: constants().database.password,
  database: constants().database.name,
  synchronize: constants().isDevelopment,
  entities: [join(__dirname, '..', '..', '**', '*.entity.{ts,js}')],
  seeds: [join(__dirname, '..', '..', '**', '*.seed.{ts,js}')],
});

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<DataSourceOptions> {
    return dataSourceOptions();
  }
}
