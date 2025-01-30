let tasks = [{ id: 1, description: "Soy una tarea", completed: false }];

const createTask = async (task) => {
  task.id = tasks.length + 1;
  tasks.push(task);
};

const deleteTask = async (id) => {
  tasks = tasks.filter((task) => task.id != id);
};

const updateTaskField = async (taskId, fieldName, newValue) => {
  tasks.find((task) => task.id == taskId)[fieldName] = newValue;
};

export { tasks, createTask, deleteTask, updateTaskField };
