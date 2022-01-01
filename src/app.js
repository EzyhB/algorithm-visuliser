import express from "express";
import path from "path";

import { pureTest } from "../middle-wear/firstMid.js";

const app = express();
const port = 5000;
const __dirname = path.resolve();

app.use(express.static(__dirname + "/public"));

app.get("/homepage", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/home-page/index.html"));
});

app.get("/search/algorithms", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/search-algo/index.html"));
});

app.listen(port, (err) => {
    if (err) {
        console.log("There was an error in server", err);
    } else {
        console.log("Server listening to requests at http://localhost:5000/");
    }
});