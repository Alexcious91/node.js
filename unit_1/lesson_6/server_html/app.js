// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// const getViewUrl = (url) => {
//     return `views/${url}.html`;
// };

// const sendErrorResponse = (res) => {
//     res.writeHead(404, {
//         "Content-Type": "text/html"
//     });
//     res.write("<h1>File not found</h1>")
//     res.end();
// }

// const app = http.createServer((req, res) => {
//     let url = req.url;
//     if (url.indexOf(".html") !== -1) {
//         console.log(`html: ${url}`);
//         res.writeHead(200, {
//             "Content-Type": "text/html"
//         });
//         customReadFile(`./views/${url}`, res);
//     } else if (url.indexOf(".js") !== -1) {
//         res.writeHead(200, {
//             "Content-Type": "text/javascript"
//         });
//         customReadFile(`./public/js/${url}`, res);
//     } else if (url.indexOf(".css") !== -1) {
//         res.writeHead(200, {
//             "Content-Type": "text/css"
//         });
//         customReadFile(`./public/css${url}`, res);
//     } else if (url.indexOf(".jpeg") !== -1) {
//         res.writeHead(200, {
//             "Content-Type": "img/jpeg"
//         });
//         customReadFile(`./public/img${url}`, res);
//     } else {
//         sendErrorResponse(res)
//     }
// }).listen(port, () => {
//     console.log(`Server started listening at http://localhost:${port}`);
// })

// const customReadFile = (file_path, res) => {
//     if (fs.existsSync(file_path)) {
//         fs.readFile(file_path, (error, data) => {
//             if (error) {
//                 console.log(error);
//                 sendErrorResponse(res);
//                 return;
//             }
//             res.write(data);
//             res.end();
//         });
//     } else {
//         sendErrorResponse(res);
//     }
// }; 

// // const app = http.createServer((req, res) => {
// //     let viewUrl = getViewUrl(req.url);

// //     // Read each file in views
// //     fs.readFile(viewUrl, (error, data) => {
// //         if (error) { // Check if the page is found
// //             res.writeHead(404, { "Content-Type": "text/html" })
// //             res.write("<h1>File not found</h1>");
// //             console.log(req.url)
// //         } else {
// //             res.writeHead(200, { "Content-Type": "text/json" })
// //             res.write(data);
// //         }
// //         res.end();
// //     })

// // }).listen(port, () => {
// //     console.log(`Server started listening at http://localhost:${port}`);
// // });

const http = require("http");
const port = 3000;
const fs = require("fs");

const routeMap = {
    "/": "views/index.html"
}

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if (routeMap[req.url]) {
        fs.readFile(routeMap[req.url], (err, data) => {
            res.write(data);
            res.end();
        });
    } else {
        res.end("<h1>Sorry file could not be found!</h1>");
    }

    res.write();
}).listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`);
});