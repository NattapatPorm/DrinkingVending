import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { LogsEntity } from '../../models/logs.entity';
import { Admin } from "./admin.entity";

@Entity('admin_logs')
export class AdminLog extends LogsEntity {
  @PrimaryGeneratedColumn({ name: 'admin_log_id', type: 'int', unsigned: true })
  admin_log_id: number;

  @ManyToOne(() => Admin, admin => admin.adminLogs , {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  })
  @JoinColumn({ name: "admin_id", referencedColumnName: "admin_id"})
  admin: Admin;
}
