# Simple Node.js Website

## Overview
This project is a simple static website served using a Node.js HTTP server. It includes four HTML pages: Home, About, Contact, and a 404 error page. The server handles requests and serves the appropriate HTML file based on the URL path.

## Project Structure
* Client/: Contains the static HTML files for the website.
  * `index.html`: The homepage.
  * `about.html`: The about page.
  * `contact.html`: The contact page.
  * `404.html`: The custom 404 error page.
* server.js: The Node.js server script that handles HTTP requests and serves the HTML files.

## Features
* **Responsive Design**: Each page uses a responsive viewport meta tag and CSS flexbox for centered content.
* **Consistent Styling**: All pages share a uniform design with a dark slate blue background, white text, and a large font size.
* **Custom 404 Page**: Display a custom 404 page for invalid URLs.
* **Node.js Server**:  A lightweight HTTP server that serves static HTML files based on the request URL.

## Prerequisites
* Node.js (v14 or higher recommended)

## Installation
1. Clone or download this repository to your local machine.
2. Navigate to the project directory:
```
cd path/to/project
```
3. Install dependencies (none required for this project, as it uses Node.js core modules).

## Usage
1. Start the server by running:
```
node server.js
```
2. Open a web browser and visit:
  * Home `http://localhost:3000/`
  * About: `http://localhost:3000/about`
  * Contact: `http://localhost:3000/contact`
  * Any invalid URL (e.g., `http://localhost:3000/invalid`) will display the 404 page.
3. The server will log the following message to the console when running:
```
Server running at http://localhost:3000/
```

## Configuration
* The server uses the following environment variables (optional):
  * `HOSTNAME`: Defaults to `localhost`.
  * `PORT`: Defaults to `3000`.
* To customize, set these variables before running the server, e.g.:
```
export PORT 8080
node server.js
```

## Notes
* The server uses Node.js core modules (`http` and `fs`) and requires no external dependencies.
* All HTML pages are styled with a consistent design using CSS flexbox and a dark theme.
* The server handles errors by returning a 500 status code if a file cannot be loaded.

## License
This project is unlicensed and free to use or modify.
