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
      className="flex flex-col md:flex-row gap-5 md:gap-4"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="w-full md:w-10/12">
        <input
          ref={createTaskInput}
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Escribe un nombre para tu tarea"
          className={`input border-2  w-full bg-secondary text-lg ${
            hasInputError ? "border-error" : "border-transparent"
          }  placeholder:text-base lg:placeholder:text-lg`}
        />
      </div>
      <div className="w-4/12 self-center md:w-2/12 ps-4">
        <button className="btn btn-secondary text-base-100 w-full">
          Aceptar
        </button>
      </div>
    </form>
  );
}

export default CreateTaskForm;
