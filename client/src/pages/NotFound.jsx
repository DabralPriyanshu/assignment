import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* 404 Text with Gradient & Animation */}
      <div className="relative">
        <h1 className="text-[12rem] font-black text-gray-100 select-none leading-none">
          404
        </h1>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-indigo-600 whitespace-nowrap">
          Oops! Page Not Found
        </p>
      </div>

      {/* Message */}
      <div className="max-w-md text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Lost in Space?
        </h2>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all font-medium"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 font-medium"
        >
          <Home size={18} />
          Back to Home
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="mt-16 flex gap-2">
        <div
          className="w-2 h-2 rounded-full bg-indigo-200 animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default NotFound;
