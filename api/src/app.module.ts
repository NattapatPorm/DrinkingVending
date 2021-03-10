import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./database/typeorm.config";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { MainProductsModule } from './main-products/main-products.module';
import { ProductsModule } from './products/products.module';
import { MachinesModule } from './machines/machines.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AdminModule,
    AuthModule,
    MainProductsModule,
    ProductsModule,
    MachinesModule,
    LocationsModule,
  ],
  providers: [],
})
export class AppModule {}
