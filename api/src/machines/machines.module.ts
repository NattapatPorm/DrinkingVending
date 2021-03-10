import { Module } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { MachinesController } from './machines.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "../auth/auth.module";
import {MachineRepository} from "./repositories/machine.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([MachineRepository]),
    AuthModule,
  ],
  providers: [MachinesService],
  controllers: [MachinesController]
})
export class MachinesModule {}
