
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function TaskButtons({task,deleteTask, updateTask}) {
  return (
    <div className="w-full flex gap-3 justify-center">
      <button
        onClick={() => updateTask(task.id, { completed: !task.completed })}
      >
        {task.completed ? (
          <FaCheckCircle size={24} fill="#17AD62" />
        ) : (
          <FaRegCheckCircle size={25} />
        )}
      </button>

      <button onClick={() => deleteTask(task.id)}>
        <FaTrash size={22} />
      </button>
    </div>
  );
}

export default TaskButtons;
