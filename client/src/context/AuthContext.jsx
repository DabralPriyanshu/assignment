import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [task, setTask] = useState([]);

  return (
    <AuthContext.Provider value={{ user, setUser, task, setTask }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
