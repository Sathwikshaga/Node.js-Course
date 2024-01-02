const fs = require("fs");
const http = require("http");
const _ = require("lodash");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log("Hello");
    });

    greet();
    greet();

    // set header to content type
    res.setHeader("Content-Type", "text/html");
    
    let path = "./lesson-4/views/";
    
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-us":
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log("listening for requests on port 3000");
});
