import axios from "axios";

// Create task handler
export const createTask = async (task, refetchTasks) => {
  if (!task.description) {
    console.error("[createTask] Error: Tasks must have a description");
    return;
  }
  await axios.post("http://localhost:3000/tasks", task);
  refetchTasks(); 
};

// Delete task handler
export const deleteTask = async (taskId, refetchTasks) => {
  if (!taskId) {
    console.error("[deleteTask] Error: taskId must be provided");
    return;
  }
  await axios.delete(`http://localhost:3000/tasks/${taskId}`);
  refetchTasks(); 
};

// Update task handler
export const updateTask = async (taskId, updatedData, refetchTasks) => {
  if (!taskId) {
    console.error("[updateTask] Error: taskId must be provided");
    return;
  }
  await axios.patch(`http://localhost:3000/tasks/${taskId}`, updatedData);
  refetchTasks(); 
};