import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class createScgAssignment1615444071729 implements MigrationInterface {

    private mainproductTableName = "mainproducts";
    private productsTableName = "products";
    private machineTableName = "machines";
    private locationTableName = "locations";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.mainproductTableName,
            columns: [
                {
                    name: "mainproduct_id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                    unsigned: true,
                },
                {
                    name: "mainproduct_name",
                    type: "varchar",
                    length: "64",
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: "mainproduct_image",
                    type: "varchar",
                    length: "255",
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

        await queryRunner.createIndex(this.mainproductTableName, new TableIndex({
            name: "idx_mainproduct_id",
            columnNames: ["mainproduct_id"]
        }));

        await queryRunner.createTable(new Table({
            name: this.productsTableName,
            columns: [
                {
                    name: "product_id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                    unsigned: true,
                },
                {
                    name: "product_quantity",
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
                {
                    name: "mainproduct_id",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "machine_id",
                    type: "int",
                    isNullable: false,
                },
            ]
        }), true)

        await queryRunner.createIndex(this.productsTableName, new TableIndex({
            name: "idx_product_id",
            columnNames: ["product_id"]
        }));

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
        await queryRunner.dropIndex(this.locationTableName, "idx_location_id");
        await queryRunner.dropTable(this.locationTableName);
        await queryRunner.dropIndex(this.machineTableName, "idx_machine_id");
        await queryRunner.dropTable(this.machineTableName);
        await queryRunner.dropIndex(this.productsTableName, "idx_product_id");
        await queryRunner.dropTable(this.productsTableName);
        await queryRunner.dropIndex(this.mainproductTableName, "idx_mainproduct_id");
        await queryRunner.dropTable(this.mainproductTableName);
    }

}
