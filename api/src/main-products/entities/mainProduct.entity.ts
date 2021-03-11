import { Column, Entity, Index, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StandardWarpEntity } from "../../models/standardWarp.entity";
import { MainProductLog } from "./mainProduct_logs.entity";
import {Product} from "../../products/entities/Product.entity";

@Entity('mainproducts')
export class MainProduct extends StandardWarpEntity {
    @PrimaryGeneratedColumn({ name: 'mainproduct_id', type: 'int',unsigned: true })
    @Index("idx_mainproduct_id", { unique: true })
    mainproduct_id: number;

    @Column({ name: 'mainproduct_name', type: 'varchar', length: 64, nullable: false, unique: true })
    mainproduct_name: string;

    @Column({ name: 'mainproduct_image', type: 'varchar', length: 255, nullable: false, })
    mainproduct_image: string;

    @OneToMany(() => MainProductLog, mainProductLog  => mainProductLog.main_poduct)
    @JoinColumn({ name: "mainproduct_id"})
    mainproduct_log: MainProductLog[];

    @OneToMany(() => Product, product  => product.mainproduct_id)
    @JoinColumn({ name: "mainproduct_id"})
    product: Product[];
}
