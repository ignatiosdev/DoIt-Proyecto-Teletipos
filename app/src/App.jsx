import CreateTaskForm from "./components/CreateTaskForm/CreateTaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  createTask,
  deleteTask,
  updateTask,
} from "./taskHandlers/taskHandlers"; 

function App() {
  // Track clientside tasks
  const [tasks, setTasks] = useState([]);

  // Send get tasks request
  const getTasks = () => {
    axios.get("http://localhost:3000/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  // Fetch tasks on load
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="min-w-full min-h-screen flex flex-col justify-center">
        <div className="flex flex-col bg-primary mx-auto w-5/12  rounded-lg p-16 pt-10">
          <div className="mx-auto pb-6 font-">
            <h1 id="heading">DoIt</h1>
          </div>
          <div className="flex flex-col gap-12">
            {
              // Pass getTask as a callback function to reload tasks after requests
            }
            <CreateTaskForm createTask={(task) => createTask(task, getTasks)} />
            <TaskList
              tasks={tasks}
              deleteTask={(taskId) => deleteTask(taskId, getTasks)}
              updateTask={(taskId, updatedData) =>
                updateTask(taskId, updatedData, getTasks)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
