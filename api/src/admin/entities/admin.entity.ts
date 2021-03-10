import { Column, Entity, Index, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StandardWarpEntity } from '../../models/standardWarp.entity';
import { AdminLog } from "./admin_logs.entity";

@Entity('admin')
export class Admin extends StandardWarpEntity {
  @PrimaryGeneratedColumn({ name: 'admin_id', type: 'int',unsigned: true })
  @Index("idx_admin_id", { unique: true })
  admin_id: number;

  @Column({ name: 'admin_username', type: 'varchar', length: 64, nullable: false, unique: true })
  @Index("idx_admin_username", { unique: true })
  admin_username: string;

  @Column({ name: 'admin_password', type: 'varchar', length: 64, nullable: false, })
  admin_password: string;

  @OneToMany(() => AdminLog, adminLog  => adminLog.admin)
  @JoinColumn({ name: "admin_id"})
  adminLogs: AdminLog[];
}
