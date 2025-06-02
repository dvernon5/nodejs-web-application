// Description: This code sets up a simple HTTP server using Node.js.
const http = require("http");
const { readFile } = require("fs");

// Create an HTTP server that listens for requests and serves HTML files based on the request URL.
const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    let filePath = "./";
    switch (request.url) {
        case "/":
            filePath += "../Client/index.html";
            response.statusCode = 200;
            break;
        case "/about":
            filePath += "../Client/about.html";
            response.statusCode = 200;
            break;
        case "/contact":
            filePath += "../Client/contact.html";
            response.statusCode = 200;
            break;
        default:
            filePath += "../Client/404.html";
            response.statusCode = 404;
            break;
    }

    // Read the file from the file system and send it as a response.
    readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            response.statusCode = 500;
            response.end(`Error loading ${ filePath }`);
        } else {
            response.end(data);
        }
    })
});

/* 
 * This section defines the hostname and port where the server will run.
 * The hostname defaults to "localhost" and the port defaults to 3000.
*/ 
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified hostname and port.
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
}
);
