import {
    Column,
    Model,
    PrimaryKey,
    Table,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import {Products} from "./products.entity";

export interface IProduct {
    id?: number;
    header: string;
    password: string;
    name: string;
    role: string;
}

@Table({
    tableName: 'ProductsImages',
    timestamps: true,
    paranoid: true,
})
export class ProductsImages extends Model<ProductsImages> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    title: string;

    @Column
    body: string;

    @Column
    name: string;
    @ForeignKey(() => Products)
    @Column
    productID: number;

    @BelongsTo(() => Products, 'productID')
    product: Products;
}
