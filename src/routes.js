const express = require("express");
const router = express.Router();

let todos = [];

router.get("/todos", (req, res) => res.json(todos));
router.post("/todos", (req, res) => {
  todos.push(req.body);
  res.status(201).json(req.body);
});

module.exports = { router };
