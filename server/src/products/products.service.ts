import {Inject, Injectable} from '@nestjs/common';
import {Repositories} from "./products.provider";
import {IProduct, Products} from "./entity/products.entity";
import {IProductsImages, ProductsImages} from "./entity/images.entity";

@Injectable()
export class ProductsService {
    constructor(
        @Inject(Repositories.ProductsRepository)
        private readonly product: typeof Products,
        @Inject(Repositories.ImagesProductsRepository)
        private readonly images: typeof ProductsImages,

    ) {
    }
    async getProduct(id: number){
        return this.product.findOne({where: {id: id}, raw: true});
    }

    async getAllProducts() {
        return this.product.findAll();
    }

    async createProduct(data: IProduct) {
        return this.product.create(data);
    }


    async getProductImage(id: number){
        return this.images.findAll({where: {productID: id}, raw: true});
    }

    async createProductImages(data: IProductsImages) {
        return this.images.create(data);
    }
}