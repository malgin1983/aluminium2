import { Products } from './dto/products.dto';
import { ProductsImages } from './dto/images.dto';

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
    },
];
