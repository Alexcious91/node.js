"use strict";

const port = 3000,
	http = require("http"),
	httpStatusCodes = require("http-status-codes"),
	router = require("./router"),
	fs = require("fs"),
	plainTextContentType = {
		"Content-Type": "text/html"
	},
	htmlContentType = {
		"Content-Type": "text/html"
	},
	customReadFile = (file, res) => {
		fs.readFile(`./${file}`, (errors, data) => {
			if (errors) {
				console.log("Error reading the file...");
			}
			res.end(data);
		});
	};
router.get("/", (req, res) => {
	res.writeHead(httpStatusCodes.OK, plainTextContentType);
	res.end("<h1>Index</h1>");
});
router.get("/index.html", (req, res) => {
	res.writeHead(httpStatusCodes.OK, htmlContentType);
	customReadFile("views/index.html", res);
});
router.get("/index", (req, res) => {
	res.writeHead(httpStatusCodes.OK, htmlContentType)
})
router.post("/", (req, res) => {
	res.writeHead(httpStatusCodes.OK, htmlContentType);
	res.end("<h1>POSTED</h1>");
});

http.createServer(router.handle).listen(3000);
console.log(`Server started listening at http://localhost:${port}`);
