import { EntityRepository, Repository } from 'typeorm';
import { AdminLoginLog } from '../entities/admin_login_logs.entity';

@EntityRepository(AdminLoginLog)
export class AdminLoginLogRepository extends Repository<AdminLoginLog> {}