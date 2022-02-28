import pg from "pg";

const env = process.env;
const pool = new pg.Pool({
  ssl: { rejectUnauthorized: false },
});

export function query(text, params) {
  return pool.query(text, params);
}
