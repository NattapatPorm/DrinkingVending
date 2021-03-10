import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class createMachineModel1615364417389 implements MigrationInterface {

    private machineTableName = "machines";
    private locationTableName = "locations";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.machineTableName,
            columns: [
                {
                    name: "machine_id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                    unsigned: true,
                },
                {
                    name: "machine_location_id",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "created_at",
                    type: "timestamp(6)",
                    default: "CURRENT_TIMESTAMP(6)",
                    isNullable: false,
                },
                {
                    name: "updated_at",
                    type: "timestamp(6)",
                    default: "CURRENT_TIMESTAMP(6)",
                    onUpdate: "CURRENT_TIMESTAMP(6)",
                    isNullable: false,
                },
            ]
        }), true)

        await queryRunner.createIndex(this.machineTableName, new TableIndex({
            name: "idx_machine_id",
            columnNames: ["machine_id"]
        }));

        await queryRunner.createTable(new Table({
            name: this.locationTableName,
            columns: [
                {
                    name: "location_id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                    unsigned: true,
                },
                {
                    name: "location_name",
                    type: "varchar",
                    length: "64",
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: "location_lat",
                    type: "double",
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: "location_lng",
                    type: "double",
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: "created_at",
                    type: "timestamp(6)",
                    default: "CURRENT_TIMESTAMP(6)",
                    isNullable: false,
                },
                {
                    name: "updated_at",
                    type: "timestamp(6)",
                    default: "CURRENT_TIMESTAMP(6)",
                    onUpdate: "CURRENT_TIMESTAMP(6)",
                    isNullable: false,
                },
            ]
        }), true)

        await queryRunner.createIndex(this.locationTableName, new TableIndex({
            name: "idx_location_id",
            columnNames: ["location_id"]
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.machineTableName);
        await queryRunner.dropIndex(this.machineTableName, "idx_machine_id");
        await queryRunner.dropTable(this.locationTableName);
        await queryRunner.dropIndex(this.locationTableName, "idx_location_id");
    }

}
