import { query } from "../index.js";

/* 
- import query function
- import books data
- make async function populateBooksTable()
- for loop books array
- write a SQL satement to get each book inserted
- use our query function to send our SQL query
- call populateBooksTable() function
*/
const queryString = `CREATE TABLE IF NOT EXISTS algorithms (Algorithm TEXT, Info TEXT)`;

async function createInfoTable() {
    const res = await query(queryString);
}
createInfoTable();