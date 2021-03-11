import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
import { join } from 'path'

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: (process.env.DATABASE_SYNC === "true"),
    migrationsTableName: process.env.MIGRATIONS_TABLE_NAME,
    migrations: [join(__dirname, 'migration/*{.ts,.js}')],
    migrationsRun: true,
    subscribers: [__dirname +'/../subscriber/*{.js,.ts}'],
    cli: {
        entitiesDir: '/../**',
        migrationsDir: 'src/migration',
        subscribersDir: __dirname+'/../subscriber',
    }
};
