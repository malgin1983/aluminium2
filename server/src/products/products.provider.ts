import {Products} from "./entity/products.entity";
import {ProductsImages} from "./entity/images.entity";

export const Repositories = {
    ProductsRepository: 'ProductsRepository',
    ImagesProductsRepository: 'ImagesProductRepository',
};

export const ProductsProvider = [
    {
        provide: Repositories.ProductsRepository,
        useValue: Products,
    },
    {
        provide: Repositories.ImagesProductsRepository,
        useValue: ProductsImages,

    }

];
