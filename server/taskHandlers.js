let tasks = [{ id: 1, description: "Soy una tarea", active: true }];

 const createTask = async (task) => {
  task.id = tasks.length + 1;
  tasks.push(task);
};


export {createTask,tasks};