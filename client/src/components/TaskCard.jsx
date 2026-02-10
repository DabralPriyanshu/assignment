

import { CheckCircle, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task, onDelete, onToggle }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/tasks/${task._id}`)}
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {task.title}
        </h3>

        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {task.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            task.status === "completed"
              ? "bg-green-100 text-green-600"
              : "bg-orange-100 text-orange-600"
          }`}
        >
          {task.status}
        </span>

        <div className="flex gap-3">
          <button onClick={() => onToggle(task)}>
            <CheckCircle
              className={`size-5 ${
                task.status === "completed"
                  ? "text-green-600"
                  : "text-gray-400"
              }`}
            />
          </button>

          <button onClick={() => onDelete(task._id)}>
            <Trash2 className="size-5 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
