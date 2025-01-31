import React from "react";

function CreateTaskForm() {
  return (
    <form className="flex gap-4">
      <div className="w-10/12">
        <input
          type="text"
          placeholder="Escribe un nombre para tu nueva tarea"
          className="input input-bordered w-full bg-secondary text-lg"
        />
      </div>
      <div className="w-2/12 ps-4">
      <button className="btn btn-secondary text-base-100 w-full">Aceptar</button>
      </div>
    </form>
  );
}

export default CreateTaskForm;
