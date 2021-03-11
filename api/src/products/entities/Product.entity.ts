import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StandardWarpEntity } from "../../models/standardWarp.entity";
import { MainProduct } from "../../main-products/entities/mainProduct.entity";
import { Machine } from "../../machines/entities/machine.entity";

@Entity('products')
export class Product extends StandardWarpEntity {
    @PrimaryGeneratedColumn({ name: 'product_id', type: 'int',unsigned: true })
    @Index("idx_product_id", { unique: true })
    product_id: number;

    @Column({ name: 'product_quantity', type: 'int' })
    product_quantity: number;

    @ManyToOne(() => MainProduct, main_poduct => main_poduct.product , {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({ name: "mainproduct_id", referencedColumnName: "mainproduct_id"})
    mainproduct_id: MainProduct;

    @ManyToOne(() => Machine, machine => machine.product , {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({ name: "machine_id", referencedColumnName: "machine_id"})
    machine: Machine;

}
