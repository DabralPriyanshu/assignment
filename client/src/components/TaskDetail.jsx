import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TaskDetail = () => {
  const { id } = useParams();
  const { task } = useContext(AuthContext);

  const currentTask = task.find((t) => t._id === id);

  if (!currentTask) return <p>Task not found</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-2">{currentTask.title}</h2>
        <p className="text-gray-600 mb-4">{currentTask.description}</p>

        <span
          className={`px-4 py-1 rounded-full text-sm ${
            currentTask.status === "completed"
              ? "bg-green-100 text-green-600"
              : "bg-orange-100 text-orange-600"
          }`}
        >
          {currentTask.status}
        </span>
      </div>
    </div>
  );
};

export default TaskDetail;
