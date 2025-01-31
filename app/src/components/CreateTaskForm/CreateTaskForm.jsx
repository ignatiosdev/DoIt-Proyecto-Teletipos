import React from "react";

function CreateTaskForm() {
  return (
    <div className="flex gap-4">
      <div className="w-10/12">
        <input
          type="text"
          placeholder="Escribe un nombre para tu nueva tarea"
          className="input input-bordered w-full bg-secondary text-lg"
        />
      </div>
      <div className="w-2/12">
      <button className="btn btn-secondary text-base-100">Aceptar</button>
      </div>
    </div>
  );
}

export default CreateTaskForm;
