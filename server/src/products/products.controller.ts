import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    // Products controller
    @Get()
    async getAllProducts(@Res() res) {
        try {
            const result = await this.productsService.getAllProducts();
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            res.status(HttpStatus.BAD_GATEWAY).json(error);
        }
    }

    @Get(':id')
    async getProduct(@Param('id') id, @Res() res) {
        try {
            const result = await this.productsService.getProduct(id);
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            res.status(HttpStatus.BAD_GATEWAY).json(error);
        }
    }

    @Post()
    async createProducts(@Body() body, @Res() res) {
        try {
            const result = await this.productsService.createProduct(body);
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            res.status(HttpStatus.BAD_GATEWAY).json(error);
        }
    }

    // Images Products controller

    @Get('/images/:id')
    async getImagesProduct(@Param('id') id, @Res() res) {
        try {
            const result = await this.productsService.getProductImage(id);
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            res.status(HttpStatus.BAD_GATEWAY).json(error);
        }
    }

    @Post('/images')
    async createImages(@Body() body, @Res() res) {
        try {
            const result = await this.productsService.createProductImages(body);
            res.status(HttpStatus.OK).json(result);
        } catch (error) {
            res.status(HttpStatus.BAD_GATEWAY).json(error);
        }
    }
}
