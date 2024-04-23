const http = require("http");
const port = 3000;
const fs = require("fs");

const homePage = fs.readFileSync("home.html")
const aboutPage = fs.readFileSync("about.html")
const contactPage = fs.readFileSync("contact.html");
const notFound = fs.readFileSync("notFound.html");

const app = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/about") {
        res.end(aboutPage);
    } else if (req.url === "/contact") {
        res.end(contactPage);
    } else if (req.url === "/") {
        res.end(homePage);
    } else {
        res.end(notFound);
        // res.writeHead(404)
    }
})

// Start server 
app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`);
});

