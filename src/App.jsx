import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/employeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";
import AuthProvider, { AuthContext } from "./context/AuthProvider";

const App = () => {
  // Initialize user state from localStorage
  const [user, setuser] = useState(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser && loggedInUser !== "") {
      try {
        const userdata = JSON.parse(loggedInUser);
        return userdata.role;
      } catch (e) {
        console.error("Error parsing user data:", e);
        return null;
      }
    }
    return null;
  });
  
  // Initialize user data from localStorage
  const [LoggedInUserData, setLoggedInUserData] = useState(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser && loggedInUser !== "") {
      try {
        const userdata = JSON.parse(loggedInUser);
        return userdata.data;
      } catch (e) {
        console.error("Error parsing user data:", e);
        return null;
      }
    }
    return null;
  });

  const [userData, SetUserData] = useContext(AuthContext);

  // Listen for storage events to update the login state
  useEffect(() => {
    const handleStorageChange = () => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser && loggedInUser !== "") {
        try {
          const userdata = JSON.parse(loggedInUser);
          setuser(userdata.role);
          setLoggedInUserData(userdata.data);
        } catch (e) {
          console.error("Error parsing user data:", e);
          setuser(null);
          setLoggedInUserData(null);
        }
      } else {
        setuser(null);
        setLoggedInUserData(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@ttm.com" && password === "admin") {
      const adminData = { role: "admin" };
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
      // Dispatch a storage event to notify other components
      window.dispatchEvent(new Event('storage'));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        const employeeData = { role: "employees", data: employee };
        setuser("employees");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
        // Dispatch a storage event to notify other components
        window.dispatchEvent(new Event('storage'));
      } else {
        alert("Invalid Credentials Entered");
      }
    } else {
      alert("Invalid Credentials Entered");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" ? (
        <AdminDashboard changeUser={setuser} />
      ) : user === "employees" ? (
        <EmployeeDashboard changeUser={setuser} data={LoggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
