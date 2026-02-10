import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  LayoutDashboard,
  LogOut,
  Home,
  User,
  Settings,
  Bell,
} from "lucide-react";
import { API } from "../utils/axios";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const { user, setUser, task, setTask } = useContext(AuthContext);
  const [copyTask, setCopyTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await API.post("/users/logout");
    setUser(null);
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  useEffect(() => {
    async function fetchTaskOfUser() {
      try {
        setLoading(true);
        const res = await API.get("/tasks/");
        setTask(res.data.data);
        setCopyTask(res.data.data);
      } catch (err) {
        setTask([]);
        setCopyTask([]);
      } finally {
        setLoading(false);
      }
    }
    fetchTaskOfUser();
  }, []);

  const completedCount = copyTask.filter(
    (t) => t.status === "completed",
  ).length;

  return (
    <div className="flex h-screen bg-gray-50">
      <Toaster position="top-center" />

      <aside className="w-64 bg-indigo-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-indigo-800">
          MyBrand
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button className="flex items-center w-full p-3 bg-indigo-800 rounded-lg transition">
            <Home className="mr-3 size-5" /> Home
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center w-full p-3 hover:bg-indigo-800 rounded-lg transition group"
          >
            <LayoutDashboard className="mr-3 size-5 text-indigo-300 group-hover:text-white" />
            Go to Dashboard
          </button>

          <button className="flex items-center w-full p-3 hover:bg-indigo-800 rounded-lg transition">
            <User className="mr-3 size-5" /> Profile
          </button>

          <button className="flex items-center w-full p-3 hover:bg-indigo-800 rounded-lg transition">
            <Settings className="mr-3 size-5" /> Settings
          </button>
        </nav>

        <div className="p-4 border-t border-indigo-800">
          <p className="text-xs text-indigo-300">Logged in as: {user?.name}</p>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-700">Welcome Back!</h1>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-indigo-600 transition">
              <Bell className="size-5" />
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full font-medium hover:bg-red-100 transition border border-red-200"
            >
              <LogOut className="size-4" />
              Logout
            </button>
          </div>
        </header>

        <section className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-gray-500 text-sm">Total Tasks</h3>
              <p className="text-3xl font-bold text-gray-800">
                {copyTask.length}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-gray-500 text-sm">Completed</h3>
              <p className="text-3xl font-bold text-green-600">
                {completedCount}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-gray-500 text-sm">Pending</h3>
              <p className="text-3xl font-bold text-orange-500">
                {copyTask.length - completedCount}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
