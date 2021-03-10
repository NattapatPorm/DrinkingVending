import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class LogsEntity extends BaseEntity {
  @Column({ name: 'log_action', type: 'text', nullable: false})
  log_action: string;

  @Column({ name: 'log_infomation', type: 'longtext'})
  log_infomation: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
