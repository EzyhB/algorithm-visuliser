import { query } from "../index.js";
import { data } from "../../algorithmData.js";

const queryString = ``;

async function populateInfoTable() {
    data.forEach(async(e) => {
        const res = await query(
            `INSERT INTO algorithms (algorithm, info) VALUES ($1, $2)`, [e.name, e.info]
        );
    });
}

populateInfoTable();