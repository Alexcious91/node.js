const express = require("express");
const app = express();
const port = 3000;

// Routes
const mainRoutes = require("./router/mainRoutes")

app.set("view engine", "ejs");
app.set("views", "./views")     

app.use(express.static("public"))
app.use("/", mainRoutes) // Routes

// Start taking requests
app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`);
});