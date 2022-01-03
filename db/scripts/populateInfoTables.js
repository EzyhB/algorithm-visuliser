import { query } from "../index.js";
import { data } from "../../algorithmData.js";

/* 
- import query function
- import books data
- make async function populateBooksTable()
- for loop books array
- write a SQL satement to get each book inserted
- use our query function to send our SQL query
- call populateBooksTable() function
*/

const queryString = ``;

async function populateInfoTable() {
    data.forEach((e) => {
        const res = await query(
            `INSERT INTO algorithms (algorithm, info) VALUES ($1, $2)`, [e.name, e.info]
        );
    });
}

populateInfoTable();