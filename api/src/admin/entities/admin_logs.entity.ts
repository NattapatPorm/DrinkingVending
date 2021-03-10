import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LogsEntity } from '../../models/logs.entity';

@Entity('admin_logs')
export class AdminLog extends LogsEntity {
  @PrimaryGeneratedColumn({ name: 'admin_log_id', type: 'int', unsigned: true })
  admin_log_id: number;

  @Column({ name: 'admin_id', type: 'int', unsigned: true})
  admin_id: number;
}
