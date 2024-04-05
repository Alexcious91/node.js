const http = require("http");
const port = 3000;

const routeMap = {
    "/": "<h1>Welcome page",
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>Learn More About Us.</h1>",
    "/hello": "<h1>Say hello by emailing us here</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"   
};

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if (routeMap[req.url]) {
        res.end(routeMap[req.url]);
    } else {
        res.end("<h1 style='color: red;'>Sorry that page is not found</h1>");
    }
});

app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`)
});