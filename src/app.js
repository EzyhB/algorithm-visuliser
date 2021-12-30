import express from "express";

import { pureTest } from "../middle-wear/firstMid.js";

const app = express();
const port = 5000;

// app.use(express.static("public/home-page"));

app.get("/", express.static("public/home-page"), pureTest, (req, res) => {
    res.send("<h1>hello world</h1>");
});

app.listen(port, (err) => {
    if (err) {
        console.log("There was an error in server", err);
    } else {
        console.log("Server listening to requests at http://localhost:5000/");
    }
});