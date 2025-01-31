import React from "react";


import TaskButtons from "./TaskButtons/TaskButtons";

function Task({ task, deleteTask, updateTask }) {
  return (
    <div className="w-full bg-secondary p-3 pe-1 rounded-lg flex">
      <div className="w-9/12 md:w-11/12">{task.description}</div>
      <div className="w-3/12 md:w-2/12">
        <TaskButtons deleteTask={deleteTask} updateTask={updateTask} task={task}/>
      </div>
    </div>
  );
}

export default Task;
