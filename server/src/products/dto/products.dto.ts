import { Column, Model, PrimaryKey, Table, AutoIncrement, HasMany } from 'sequelize-typescript';
import { ProductsImages } from './images.dto';

export interface IProduct {
    id?: number;
    header: string;
    password: string;
    name: string;
    role: string;
}

@Table({
    tableName: 'products',
    timestamps: true,
    paranoid: true,
})
export class Products extends Model<Products> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    title: string;

    @Column
    description: string;

    @HasMany(() => ProductsImages)
    images: ProductsImages[];
}
