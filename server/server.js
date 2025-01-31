import express from "express";
import cors from "cors";

import {
  tasks,
  createTask,
  deleteTask,
  updateTaskField,
} from "./taskHandlers.js";

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors())

// Get tasks
server.get("/tasks", (req, res) => {
  console.log("Tasks sent");
  res.send(tasks);
});

// Create task
server.post("/tasks", async (req, res) => {
  await createTask(req.body);

  console.log("Created task successfully");
  res.send("Created task successfully");
});

// Delete task
server.delete("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;

  await deleteTask(taskId);

  res.send("Deleted task with id: " + taskId);
});

// Update task field
server.patch("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;

  const entries = Object.entries(req.body)[0];

  // Get updated field and its new value 
  const [fieldName, newValue] = entries;

  await updateTaskField(taskId, fieldName, newValue);

  console.log("Updated field on task with id: ", taskId);
  res.send(
    `Set field "${fieldName}" to value of "${newValue}" on task with id: ${taskId}`
  );
});

// START SERVER
server.listen(port, () => {
  console.log("Server started on port:", port);
});
