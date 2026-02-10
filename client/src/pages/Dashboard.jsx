import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";
import { API } from "../utils/axios";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { task, setTask } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (task.length === 0) {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("/tasks/");
    setTask(res.data.data);
  };

  const handleAdd = async (data) => {
    const res = await API.post("/tasks/create", data);
    toast.success("Task added");
    setTask([...task, res.data.data]); // update context
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    toast.success("Task deleted");
    setTask(task.filter((t) => t._id !== id));
  };

  const handleToggle = async (taskItem) => {
    const newStatus = taskItem.status === "completed" ? "pending" : "completed";

    const res = await API.patch(`/tasks/${taskItem._id}`, {
      status: newStatus,
    });

    setTask(task.map((t) => (t._id === taskItem._id ? res.data.data : t)));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Tasks</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {task.map((item) => (
          <TaskCard
            key={item._id}
            task={item}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {showModal && (
        <AddTaskModal onAdd={handleAdd} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Dashboard;
