const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/blogpost")
    .then(() => {
        console.log(`Connected to database.`);
    })
    .catch((error) => {
        console.log(`Error connecting to database: ${error.message}`)
    })

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