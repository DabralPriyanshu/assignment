import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";
import { API } from "./utils/axios";
import { AuthContext } from "./context/AuthContext";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
