const express = require("express");
const app = express();
const port = 3000;

// Import controllers
const mainController = require("./controllers/mainController");

app.set("view engine", "ejs")

// Configuration for data recieved
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// middleware function
app.use((req, res, next) => {
    console.log(`Request made to: ${req.url}`);
    next();
})

// app.get("/name", mainController.returnName)
app.get("/name/:userName", mainController.returnName)
app.get("/products/:name", mainController.sendReqParams);

app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`);
})