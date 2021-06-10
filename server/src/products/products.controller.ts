import {Controller, Get, HttpStatus, Param, Res} from '@nestjs/common';
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}


    @Get()
    async getProducts( @Res() res) {
        try {
            const result = await this.productsService.getAll();
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            res.status(HttpStatus.BAD_GATEWAY).json(error);
        }
    }
}


