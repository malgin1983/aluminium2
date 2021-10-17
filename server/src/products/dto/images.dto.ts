import { Column, Model, PrimaryKey, Table, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Products } from './products.dto';

export interface IProductsImages {
    id?: number;
    header: string;
    password: string;
    name: string;
    role: string;
}

@Table({
    tableName: 'product_image',
    timestamps: false,
    paranoid: false,
})
export class ProductsImages extends Model<ProductsImages> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    url: string;

    @ForeignKey(() => Products)
    @Column
    productID: number;

    @BelongsTo(() => Products, 'productID')
    product: Products;
}
