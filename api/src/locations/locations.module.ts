import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "../auth/auth.module";
import {LocationRepository} from "./repositories/location.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([LocationRepository]),
    AuthModule,
  ],
  providers: [LocationsService],
  controllers: [LocationsController]
})
export class LocationsModule {}
