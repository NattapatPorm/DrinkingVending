import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./database/typeorm.config";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AdminModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
