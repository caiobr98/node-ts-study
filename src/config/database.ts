import pg from 'pg';
import { PoolOptions, Sequelize } from 'sequelize';

interface DialectOptions {
    ssl?: {
        require?: boolean;
        rejectUnauthorized?: boolean;
    };
    application_name?: string;
}

let poolOptions: PoolOptions = {};
if (process.env.STAGE == 'dev') {
    poolOptions = {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 0,
    };
}

const dialectOptions: DialectOptions = {};
if (process.env.STAGE != 'local') {
    dialectOptions.ssl = {
        require: true,
        rejectUnauthorized: false,
    };
}

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5441'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DEFAULT_DATABASE,
    dialectModule: pg,
    logging: false,
    dialectOptions,
    pool: poolOptions,
});

export default sequelize;
