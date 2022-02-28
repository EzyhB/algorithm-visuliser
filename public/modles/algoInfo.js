import { query } from "../db/index.js";

export async function getAlgoInfoFromDB(title) {
    const data = await query(
        `SELECT * FROM algorithms WHERE TITLE IS LIKE '%' || $1 || '%';`, [title]
    );
    return data.rows;
}