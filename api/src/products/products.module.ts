import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "../auth/auth.module";
import {ProductRepository} from "./repositories/product.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository]),
    AuthModule,
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
