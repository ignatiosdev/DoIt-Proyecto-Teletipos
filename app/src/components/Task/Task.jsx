import React from "react";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import { FaTrash } from "react-icons/fa";

function Task({ task }) {
  return (
    <div className="w-full bg-secondary p-3 pe-1 rounded-lg flex">
      <div className="w-11/12">{task.description}</div>
      <div className="w-2/12 flex gap-3 justify-center">
        <button>
          {task.completed ? (
            <FaCheckCircle size={24} fill="#17AD62" />
          ) : (
            <FaRegCheckCircle size={25} />
          )}
        </button>

        <button>
          <FaTrash size={22}/>
        </button>
      </div>
    </div>
  );
}

export default Task;
