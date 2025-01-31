import { useState } from "react";

function CreateTaskForm({ createTask }) {
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <div className="flex gap-4">
      <div className="w-10/12">
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Escribe un nombre para tu nueva tarea"
          className="input input-bordered w-full bg-secondary text-lg"
        />
      </div>
      <div className="w-2/12 ps-4">
        <button
          onClick={() => {
            createTask({ description: taskDescription, completed: false });
          }}
          className="btn btn-secondary text-base-100 w-full"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default CreateTaskForm;
