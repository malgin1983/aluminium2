import { Inject, Injectable } from '@nestjs/common';
import { Repositories } from './products.provider';
import { IProduct, Products } from './dto/products.dto';
import { IProductsImages, ProductsImages } from './dto/images.dto';

@Injectable()
export class ProductsService {
    constructor(
        @Inject(Repositories.ProductsRepository)
        private readonly product: typeof Products,
        @Inject(Repositories.ImagesProductsRepository)
        private readonly images: typeof ProductsImages,
    ) {}
    async getProduct(id: number) {
        return this.product.findOne({
            where: { id: id },
            include: [
                {
                    model: ProductsImages,
                },
            ],
        });
    }

    async getAllProducts() {
        return this.product.findAll({
            include: [
                {
                    model: ProductsImages,
                },
            ],
        });
    }

    async createProduct(data: IProduct) {
        return this.product.create(data);
    }

    async getProductImage(id: number) {
        return this.images.findAll({ where: { productID: id }, raw: true });
    }

    async createProductImages(data: IProductsImages) {
        return this.images.create(data);
    }
}
