import React, { useContext } from "react";
import { Mail, User, Calendar, Edit3, CheckCircle } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const ProfilePage = () => {
  const { user, task } = useContext(AuthContext);

  const totalTasks = task?.length || 0;
  const completedTasks =
    task?.filter((t) => t.status === "completed").length || 0;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Cover */}
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600" />

        <div className="px-8 pb-8">
          {/* Profile Header */}
          <div className="relative flex justify-between items-end -mt-16 mb-6">
            <div className="p-1 bg-white rounded-full">
              <img
                src={
                  user?.avatar ||
                  "https://ui-avatars.com/api/?name=" + user?.name
                }
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>

          {/* User Info */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
              <p className="text-gray-600 mt-1">{user?.email}</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>User</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>Joined recently</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 hover:bg-gray-50 rounded-xl transition">
              <p className="text-2xl font-bold text-indigo-600">{totalTasks}</p>
              <p className="text-sm text-gray-500">Total Tasks</p>
            </div>

            <div className="p-4 hover:bg-gray-50 rounded-xl transition">
              <p className="text-2xl font-bold text-green-600">
                {completedTasks}
              </p>
              <p className="text-sm text-gray-500">Completed</p>
            </div>

            <div className="p-4 hover:bg-gray-50 rounded-xl transition">
              <p className="text-2xl font-bold text-orange-500">
                {totalTasks - completedTasks}
              </p>
              <p className="text-sm text-gray-500">Pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
