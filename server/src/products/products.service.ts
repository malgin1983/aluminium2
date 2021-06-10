import {Inject, Injectable} from '@nestjs/common';
import {Repositories} from "./products.provider";
import {IProduct, Products} from "./entity/products.entity";



@Injectable()
export class ProductsService {
    constructor(
        @Inject(Repositories.ProductsRepository)
        private readonly product: typeof Products,
    ) {
    }

    async create(data: IProduct) {
        return this.product.create(data);
    }

    async getAll() {
        return this.product.findAll();
    }
}