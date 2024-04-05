const port = 3000;
const http = require("http")
const httpStatus = require("http-status-codes"); // requests

const app = http.createServer((request, response) => {
    console.log("Received an incoming request!"); 
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });

    response.write("<h1>Hello</h1>");
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`);
});