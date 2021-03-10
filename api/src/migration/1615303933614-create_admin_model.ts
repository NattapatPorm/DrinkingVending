import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class createAdminModel1615303933614 implements MigrationInterface {

    private adminTableName = "admin";
    private adminLoginLogTableName = "admin_login_logs";
    private adminLogTableName = "admin_logs";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.adminTableName,
            columns: [
                {
                    name: "admin_id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                    unsigned: true,
                },
                {
                    name: "admin_username",
                    type: "varchar",
                    length: "64",
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: "admin_password",
                    type: "varchar",
                    length: "64",
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

        await queryRunner.createIndex(this.adminTableName, new TableIndex({
            name: "idx_admin_id",
            columnNames: ["admin_id"]
        }));

        await queryRunner.createIndex(this.adminTableName, new TableIndex({
            name: "idx_admin_username",
            columnNames: ["admin_username"]
        }));

        await queryRunner.createTable(new Table({
            name: this.adminLoginLogTableName,
            columns: [
                {
                    name: "admin_login_log_id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                    unsigned: true,
                },
                {
                    name: "login_time",
                    type: "datetime",
                    isNullable: false,
                },
                {
                    name: "token",
                    type: "longtext",
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
                    name: "admin_id",
                    type: "int",
                    isNullable: true,
                },
            ]
        }), true)

        await queryRunner.createTable(new Table({
            name: this.adminLogTableName,
            columns: [
                {
                    name: "admin_log_id",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isNullable: false,
                    isPrimary: true,
                    isUnique: true,
                    unsigned: true,
                },
                {
                    name: "log_action",
                    type: "text",
                    isNullable: false,
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
                    name: "admin_id",
                    type: "int",
                    isNullable: true,
                },
            ],
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.adminLoginLogTableName);
        await queryRunner.dropTable(this.adminLogTableName);
        await queryRunner.dropIndex(this.adminTableName, "idx_admin_id");
        await queryRunner.dropIndex(this.adminTableName, "idx_admin_username");
        await queryRunner.dropTable(this.adminTableName);
    }

}
