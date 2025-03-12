import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  useEffect(() => {
    if (UserData) {
      localStorage.setItem("employees", JSON.stringify(UserData));
      
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser && loggedInUser !== "") {
        const userData = JSON.parse(loggedInUser);
        if (userData.role === "employees" && userData.data) {
          const updatedEmployee = UserData.find(emp => emp.id === userData.data.id);
          if (updatedEmployee) {
            userData.data = updatedEmployee;
            localStorage.setItem("loggedInUser", JSON.stringify(userData));
          }
        }
      }
    }
  }, [UserData]);

  return (
    <div>
      <AuthContext.Provider value={[UserData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
export default AuthProvider;
