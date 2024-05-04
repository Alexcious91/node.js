const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const fileUpload = require('express-fileupload')
const path = require("path")

mongoose.connect("mongodb://localhost:27017/blogpost")
    .then(() => {
        console.log(`Connected to database.`);
        app.listen(port, () => {
            console.log(`Server started listening at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log(`Error connecting to database: ${error.message}`)
    });


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    
// Middleware
// const validationMiddleware = require("./middleware/validationMiddleware")
// app.use(validationMiddleware);

app.set("view engine", "ejs");
app.set("views", "./views")     

// Routes
const mainRoutes = require("./router/mainRoutes")
app.use("/", mainRoutes) // Routes

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`500 - Internal Server Error`)
})