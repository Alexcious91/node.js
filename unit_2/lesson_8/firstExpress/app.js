const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
});

app.get("/about", (req, res) => {
    res.send("<h1>About page</h1>");
});

app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`)
});