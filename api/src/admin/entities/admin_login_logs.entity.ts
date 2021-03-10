import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StandardWarpEntity } from '../../models/standardWarp.entity';

@Entity('admin_login_logs')
export class AdminLoginLog extends StandardWarpEntity {
  @PrimaryGeneratedColumn({ name: 'admin_login_log_id', type: 'int', unsigned: true})
  admin_login_log_id: number;

  @Column({ name: 'login_time', type: 'datetime', nullable: false})
  login_time: Date;

  @Column({ name: 'token', type: 'longtext', nullable: false})
  token: string;

  @Column({ name: 'admin_id', type: 'int', unsigned: true})
  admin_id: number;
}
