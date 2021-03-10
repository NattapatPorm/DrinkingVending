import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class createMainProductModel1615346649655 implements MigrationInterface {

    private mainproductTableName = "mainproducts";
    private mainproductLogTableName = "mainproduct_logs";

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
            name: this.mainproductLogTableName,
            columns: [
                {
                    name: "mainproduct_log_id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                    unsigned: true,
                },
                {
                    name: "log_infomation",
                    type: "longtext"
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
                    isNullable: true,
                },
            ],
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.mainproductLogTableName);
        await queryRunner.dropIndex(this.mainproductTableName, "idx_mainproduct_id");
        await queryRunner.dropTable(this.mainproductTableName);
    }

}
