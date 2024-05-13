const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const fileUpload = require('express-fileupload')
const path = require("path")
const expressSessionMiddleware = require("./middleware/expressSession")
const flash = require("connect-flash")

global.loggedIn = null;

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


// Middleware
app.use(expressSessionMiddleware);
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
})

app.set("view engine", "ejs");
app.set("views", "./views")

// Routes
const mainRoutes = require("./router/mainRoutes")
app.use("/", mainRoutes) // Routes
app.use((req, res) => res.render('notfound'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err })
    next()
})