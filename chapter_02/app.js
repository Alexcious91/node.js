const express = require("express");
const path = require("path");
const app = express();
const port = 3000

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.json({
        name: "Alexcious"
    })
});

app.get("/index", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
})

app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`)
})