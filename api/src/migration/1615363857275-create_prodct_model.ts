import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class createProdctModel1615363857275 implements MigrationInterface {

    private productsTableName = "products";

    public async up(queryRunner: QueryRunner): Promise<void> {
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
                    name: "main_product_id",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex(this.productsTableName, "idx_product_id");
        await queryRunner.dropTable(this.productsTableName);
    }

}
