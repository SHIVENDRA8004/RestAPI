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
  res.send(courses);
});

// MiddleWare for a single course
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => {
    c.id === parseInt(req.params.id);
  });
  if (!course) {
    res
      .statusCode(404)
      .send(`Hey THe Course with id ${req.params.id} did'nt exists`);
  } else {
    res.send(course);
  }
});
