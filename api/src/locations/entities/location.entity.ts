import {Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { StandardWarpEntity } from "../../models/standardWarp.entity";

@Entity('locations')
export class Location extends StandardWarpEntity {
    @PrimaryGeneratedColumn({ name: 'location_id', type: 'int',unsigned: true })
    @Index("idx_location_id", { unique: true })
    location_id: number;

    @Column({ name: 'location_name', type: 'varchar', length: 64, nullable: false, unique: true })
    location_name: string;

    @Column({ name: 'location_lat', type: 'int' })
    location_lat: string;

    @Column({ name: 'location_lng', type: 'int' })
    location_lng: string;

}
