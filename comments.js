// Create web server
// 1. Create web server
// 2. Read comments from file
// 3. Add comments to file
// 4. Delete comments from file
// 5. Update comments in file

// 1. Create web server
// 1.1. Import modules
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const qs = require("querystring");

// 1.2. Create server
const server = http.createServer((req, res) => {
  // 1.2.1. Get request url
  const reqUrl = url.parse(req.url, true);
  // console.log(reqUrl);
  // console.log(reqUrl.pathname);
  // console.log(reqUrl.query);

  // 1.2.2. Get request method
  const method = req.method.toUpperCase();
  // console.log(method);

  // 1.2.3. Get request headers
  const headers = req.headers;
  // console.log(headers);

  // 1.2.4. Get request body
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    // console.log(bodyStr);

    //