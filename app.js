// Requiring All Important Modules
const express = require("express");
const app = express();

// Set the Environment Variable for port no.
const port = process.env.PORT || 3000;

// Listen Request On Port
app.listen(port, () => {
  console.log(`Listening Started on port ${port}`);
});

// MiddleWare for route '/'
app.get("/", (req, res) => {
  res.send("Home page");
});

// MiddleWare for all courses
app.get("/api/courses", (req, res) => {
  res.send("All Courses");
});

// MiddleWare for a single course
app.get("/api/courses/:id", (req, res) => {
  res.send("Single Course of id " + req.params.id);
});
// MiddleWare that uses multiple parameters
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params);
});
