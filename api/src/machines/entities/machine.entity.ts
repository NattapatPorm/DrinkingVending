import {Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { StandardWarpEntity } from "../../models/standardWarp.entity";
import { Location } from "../../locations/entities/location.entity";
import { Product } from "../../products/entities/Product.entity";

@Entity('machines')
export class Machine extends StandardWarpEntity {
    @PrimaryGeneratedColumn({ name: 'machine_id', type: 'int',unsigned: true })
    @Index("idx_machine_id", { unique: true })
    machine_id: number;

    @OneToOne(() => Location , {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: "machine_location_id", referencedColumnName: "location_id"})
    machine_location_id: Location;

    @OneToMany(() => Product, product  => product.machine)
    @JoinColumn({ name: "product_id"})
    product: Product[];
}
