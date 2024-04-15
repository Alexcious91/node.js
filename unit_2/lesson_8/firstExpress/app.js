const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About page</h1>");
    const data = "Hello"
    res.send(data)
});

app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`)
});