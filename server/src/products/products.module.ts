import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {ProductsProvider} from "./products.provider";

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, ...ProductsProvider],
  exports: [ProductsService]
})
export class ProductsModule {}
