// const express = require("express");

// //init express
// const app = express();

// // create the endpoints/ route handlers

// app.get("/", (req, res) => {
//     res.send("Hello Melih how are you?");
// });

// console.dir(app.locals.title);
// app.listen(8888);

const express = require("express");
const app = express();
const port = 4444;

app.use("/static", express.static("static"));

app.get("/", (req, res) => res.send("Hello Worldsss!"));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
