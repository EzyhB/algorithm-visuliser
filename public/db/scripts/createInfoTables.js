import { query } from "../index.js";

const queryString = `CREATE TABLE IF NOT EXISTS algorithms (Algorithm TEXT, Info TEXT)`;

async function createInfoTable() {
    const res = await query(queryString);
}
createInfoTable();