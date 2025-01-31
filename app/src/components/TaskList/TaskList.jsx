import Task from "../Task/Task";
import EmptyTaskList from "./EmptyTaskList/EmptyTaskList";
import TaskSeparator from "./TaskSeparator/TaskSeparator";

function TaskList({ tasks, deleteTask, updateTask }) {
  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="max-h-60 overflow-scroll -me-5 pe-1 min-h-40">
      {incompleteTasks && (
        <div className="flex flex-col gap-3">
          {incompleteTasks.map((task) => (
            <Task
              updateTask={updateTask}
              deleteTask={deleteTask}
              key={task.id}
              task={task}
            ></Task>
          ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div>
          <TaskSeparator text={"Tareas completadas"}></TaskSeparator>
          <div className="flex flex-col gap-3">
            {completedTasks.map((task) => (
              <Task
                updateTask={updateTask}
                deleteTask={deleteTask}
                key={task.id}
                task={task}
              ></Task>
            ))}
          </div>
        </div>
      )}

      {completedTasks.length < 1 && incompleteTasks.length < 1 ? (
        <EmptyTaskList />
      ) : null}
    </div>
  );
}

export default TaskList;
