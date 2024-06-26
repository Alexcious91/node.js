"use strict";
const http = require("http");
const httpStatus = require("http-status-codes")
const contentTypes = require("./contentTypes");
const router = require("./router");
const utils = require("./utils");
const port = 4000;

router.get("/", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.html);
	utils.getFile("views/index.html", res);
});

router.get("/courses.html", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.html);
	utils.getFile("views/courses.html", res);
});

router.get("/contact.html", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.html);
	utils.getFile("views/contact.html", res);
});

router.post("/", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.html);
	utils.getFile("views/thanks.html", res);
});

router.get("/graph.png", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.png);
	utils.getFile("public/images/graph.png", res);
});

router.get("/people.jpg", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.jpg);
	utils.getFile("public/images/people.jpg", res);
});

router.get("/product.jpg", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.jpg);
	utils.getFile("public/images/product.jpg", res);
});

router.get("/confetti_cuisine.css", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.css);
	utils.getFile("public/css/confetti_cuisine.css", res);
});

router.get("/bootstrap.css", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.css);
	utils.getFile("public/css/bootstrap.css", res);
});

router.get("/confetti_cuisine.js", (req, res) => {
	res.writeHead(httpStatus.OK, contentTypes.js);
	utils.getFile("public/js/confetti_cuisine.js", res);
});

http.createServer(router.handle).listen(port);
console.log(`Server started listening at http://localhost:${port}`);
