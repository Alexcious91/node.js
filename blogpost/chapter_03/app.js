const express = require("express");
const app = express();
const port = 3000;

const mainRoutes = require("./router/mainRoutes")

app.use(express.static("public"))
app.use("/", mainRoutes) // Routes

// Start taking requests
app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`);
})