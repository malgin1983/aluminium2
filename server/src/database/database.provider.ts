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
                host: '5.188.45.220',
                port: 5432,
                username: 'admin',
                password: 'malgin1983',
                database: 'premium',
            });
            sequelize.addModels([Products, ProductsImages]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
