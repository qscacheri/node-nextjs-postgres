import { MikroORM } from '@mikro-orm/core';
import { User } from './entities/User.entity';

export const configureDatabase = async () => {
  const orm = await MikroORM.init({
    entities: [User],
    dbName: 'postgres',
    type: 'postgresql',
    clientUrl: process.env.DB_URL,
  });
  return orm;
};
