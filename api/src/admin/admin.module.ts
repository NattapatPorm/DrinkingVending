import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { AuthModule } from '../auth/auth.module';
import { AdminLoginLog } from './entities/admin_login_logs.entity';
import { AdminLog } from './entities/admin_logs.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin, AdminLoginLog, AdminLog]),
    AuthModule,
  ],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
