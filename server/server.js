import express from "express";
import { tasks, createTask } from "./taskHandlers.js";

const server = express();
const port = 3000;

server.use(express.json());

// Get tasks
server.get("/tasks", (req, res) => {
    console.log("Tasks sent")
  res.send(tasks);
});

// Create task
server.post("/tasks", async (req, res) => {
  await createTask(req.body);

  console.log("Created task successfully");
  res.send("Created task successfully");
});

// Delete task
server.delete("/tasks/:id", (req, res) => {
  const taskId = req.params.id;

  res.send("Deleted task with id: " + taskId);
});

// Update task
server.put("/tasks/:id", (req, res) => {
  const taskId = req.params.id;

  res.send("Updated task with id: " + taskId);
});

// START SERVER
server.listen(port, () => {
  console.log("Server started on port:", port);
});
