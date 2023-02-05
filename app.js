// Requiring All Important Modules
const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.json());

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
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res
      .status(404)
      .send(`Hey the Course with id ${req.params.id} did'nt exists`);
  }
  res.send(course);
});

// Middleware for handling Post Request
app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});
