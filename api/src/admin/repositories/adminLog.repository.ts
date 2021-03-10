import { EntityRepository, Repository } from 'typeorm';
import { AdminLog } from '../entities/admin_logs.entity';

@EntityRepository(AdminLog)
export class AdminLogRepository extends Repository<AdminLog> {}