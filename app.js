const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Listening Started");
});
app.get("/", (req, res) => {
  res.send("<h1>In / Path middleware</h1>");
});
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
