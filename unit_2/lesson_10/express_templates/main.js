"use strict";
const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");

// Import controllers
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// app.get("/name", homeController.respondWithName);
app.get("/name/:myName", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.use(errorController.logError)
app.use(errorController.resourceNotFound);
app.use(errorController.internalServer);

app.post("/", (req, res) => {
	console.log(req.body);
	console.log(req.query);
	res.send("POST Successful!");
});

app.listen(app.get("port"), () => {
	console.log(`Server running at http://localhost:${app.get("port")}`);
});
