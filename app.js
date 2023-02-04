// Requiring All Important Modules
const express = require("express");
const app = express();

// Set the Environment Variable for port no.
const port = process.env.PORT || 3000;

// Listen Request On Port
app.listen(port, () => {
  console.log(`Listening Started on port ${port}`);
});

// Array of Courses
const courses = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "DSA Self Paced" },
  { id: 3, name: "Node Js" },
  { id: 4, name: "Express Js" },
  { id: 5, name: "MongoDB" },
];

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
