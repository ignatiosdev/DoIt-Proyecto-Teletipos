import CreateTaskForm from "./components/CreateTaskForm/CreateTaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // Track clientside tasks
  const [tasks, setTasks] = useState([]);

  // Send get tasks request
  const getTasks = () => {
    axios.get("http://localhost:3000/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  // Send create task request and refetch tasks
  const createTask = async (task) => {
    if (!task.description) {
      console.error("[createTask] Error: Tasks must have a description");
      return;
    }
    await axios.post("http://localhost:3000/tasks", task);
    getTasks();
  };

  // Send delete task request and refetch tasks
  const deleteTask = async (taskId) => {
    if (!taskId) {
      console.error("[deleteTask] Error: taskId must be provided");
    }
    
    await axios.delete(`http://localhost:3000/tasks/${taskId}`);
    getTasks();
  };

  // Send update task request and refetch tasks
  const updateTask = async (taskId, updatedData) => {
    if (!taskId) {
      console.error("[updateTask]  Error: taskId must be provided");
    }

    await axios.patch(`http://localhost:3000/tasks/${taskId}`, updatedData);
    getTasks();
  };

  // Fetch tasks on load
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="min-w-full min-h-screen flex flex-col justify-center">
        <div className="flex flex-col bg-primary mx-auto w-5/12  rounded-lg p-16 gap-12">
          <CreateTaskForm createTask={createTask} />
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
