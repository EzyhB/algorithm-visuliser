import pg from "pg";

const env = process.env;
const pool = new pg.Pool({
    user: "rzwtamajcfptuw",
    host: "ec2-54-216-17-9.eu-west-1.compute.amazonaws.com",
    database: "ddrhiin0jqsvcu",
    password: "dba9c65b9b2df2499aee05cf45c520015d2c8851cbb398bbbc01b48b75cf33f3",
    port: 5432,
    ssl: { rejectUnauthorized: false },
});

export function query(text, params) {
    return pool.query(text, params);
}