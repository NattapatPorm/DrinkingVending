import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LogsEntity } from '../../models/logs.entity';
import { MainProduct } from "./mainProduct.entity";

@Entity('mainproduct_logs')
export class MainProductLog extends LogsEntity {
    @PrimaryGeneratedColumn({ name: 'admin_log_id', type: 'int', unsigned: true })
    admin_log_id: number;

    @ManyToOne(() => MainProduct, main_poduct => main_poduct.mainproduct_log , {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({ name: "mainproduct_id", referencedColumnName: "mainproduct_id"})
    main_poduct: MainProduct;
}
