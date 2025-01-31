import { useState, useRef } from "react";

function CreateTaskForm({ createTask }) {
  const [taskDescription, setTaskDescription] = useState("");
  const [hasInputError, setHasInputError] = useState(false);

  const createTaskInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskDescription) {
      setHasInputError(true);
      console.log("error")
      return;
    }

    await createTask({ description: taskDescription, completed: false });
    setHasInputError(false)
  };

  return (
    <form
      className="flex gap-4"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="w-10/12">
        <input
          ref={createTaskInput}
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Escribe un nombre para tu nueva tarea"
          className={`input border-2  w-full bg-secondary text-lg ${
            hasInputError ? "border-error" : "border-transparent"
          }  `}
        />
      </div>
      <div className="w-2/12 ps-4">
        <button className="btn btn-secondary text-base-100 w-full">
          Aceptar
        </button>
      </div>
    </form>
  );
}

export default CreateTaskForm;
