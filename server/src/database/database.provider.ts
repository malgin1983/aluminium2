import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/entity/user.entity';
import {Products} from "../products/entity/products.entity";
import {ProductsImages} from "../products/entity/images.entity";
require('dotenv').config()
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([User, Products, ProductsImages]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
