const express = require("express");

//init express
const app = express();

// create the endpoints/ route handlers

app.get("/", (req, res) => {
    res.send("Hello Melih how are you?");
});

app.listen(8888);
