import { Module } from '@nestjs/common';
import { MainProductsController } from './main-products.controller';
import { MainProductsService } from './main-products.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import {MainProductLogRepository} from "./repositories/mainProductLog.repository";
import {MainProductRepository} from "./repositories/mainProduct.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([MainProductRepository, MainProductLogRepository]),
    AuthModule,
  ],
  controllers: [MainProductsController],
  providers: [MainProductsService]
})
export class MainProductsModule {}
