import React from "react";
TaskSeparator;
import Task from "../Task/Task";
import TaskSeparator from "./TaskSeparator/TaskSeparator";

const dummyTasks = [
  { id: 1, description: "This is a task", completed: false },
  { id: 2, description: "This is a task", completed: false },
  { id: 3, description: "This is a task", completed: false },

  { id: 4, description: "This is a task", completed: true },
  { id: 5, description: "This is a task", completed: true },
];

function TaskList({ tasks = dummyTasks }) {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="max-h-60 overflow-scroll -m-1.5 p-1.5">
      {incompleteTasks && (
        <div className="flex flex-col gap-3">
          {incompleteTasks.map((task) => (
            <Task task={task}></Task>
          ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div>
          <TaskSeparator text={"Completed tasks"}></TaskSeparator>
          <div className="flex flex-col gap-3">
            {completedTasks.map((task) => (
              <Task task={task}></Task>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;
