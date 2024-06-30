import { DataSource } from 'typeorm';
import { dataSourceOptions } from './ormconfig';

/**
 * This datasource is mostly used for typeorm-extension due to environment variable loading problems I had to move it from the ormconfig.ts
 * To make it work the environment variable is suppose to be loaded in the environment already
 */
export const dataSource = new DataSource(dataSourceOptions());
