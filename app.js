const http = require("http");
const { json } = require("stream/consumers");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hiii</h1>");
    res.end();
  }
  if (req.url === "/api/course") {
    res.write(JSON.stringify([1, 3, 4]));
    res.end();
  }
});
server.listen(3000, () => {
  console.log("Listening Started");
});
