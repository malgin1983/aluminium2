import { Sequelize } from 'sequelize-typescript';
import { Products } from '../products/dto/products.dto';
import { ProductsImages } from '../products/dto/images.dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
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
            sequelize.addModels([Products, ProductsImages]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
