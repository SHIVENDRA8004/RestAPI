const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.send("<h1>Hii</h1>");
    res.end();
  }
});
