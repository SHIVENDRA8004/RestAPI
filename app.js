const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hiii</h1>");
    res.end();
  }
  if (req.url === "/api/course") {
    res.write("<h1>Hiii</h1>");
    res.end();
  }
});
server.listen(3000, () => {
  console.log("Listening Started");
});
