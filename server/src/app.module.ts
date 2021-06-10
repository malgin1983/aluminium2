import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { Products } from './products';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, Products],
})
export class AppModule {}
