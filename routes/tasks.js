const express = require("express");
const router = express.Router();
let tasks = require("../data/tasks.json");

// Get all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// Add a new task
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTask = { id: tasks.length + 1, title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = tasks.find((t) => t.id == id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  if (title) task.title = title;
  if (completed !== undefined) task.completed = completed;
  
  res.json(task);
});

// Delete a task
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id != id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
