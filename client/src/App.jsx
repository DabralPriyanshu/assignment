import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import { API } from "./utils/axios";
import { AuthContext } from "./context/AuthContext";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import TaskDetail from "./components/TaskDetail";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await API.get("/users/profile");
        setUser({ ...res.data.data, isAuth: true });
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getProfile();
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
