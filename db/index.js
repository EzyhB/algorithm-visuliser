import { Pool } from "pg";

const env = process.env;
const pool = new Pool({
    user: env.user,
    host: env.host,
    database: env.database,
    password: env.password,
    port: env.port,
    ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
    return pool.query(text, params, callback);
}