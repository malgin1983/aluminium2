import { Sequelize } from 'sequelize-typescript';
import { Products } from '../products/dto/products.dto';
import { ProductsImages } from '../products/dto/images.dto';
import { PROCESS } from '../env';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: PROCESS.DB_HOST,
                port: 5432,
                username: PROCESS.DB_USER,
                password: PROCESS.DB_PASS,
                database: PROCESS.DB_NAME,
            });
            sequelize.addModels([Products, ProductsImages]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
