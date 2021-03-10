import { Module } from '@nestjs/common';
import { MainProductsController } from './main-products.controller';
import { MainProductsService } from './main-products.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { MainProduct } from "./entities/mainProduct.entity";
import { MainProductLog } from "./entities/mainProduct_logs.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([MainProduct, MainProductLog]),
    AuthModule,
  ],
  controllers: [MainProductsController],
  providers: [MainProductsService]
})
export class MainProductsModule {}
