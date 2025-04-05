import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";
import AuthProvider, { AuthContext } from "./context/AuthProvider";

const App = () => {

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
        
        window.dispatchEvent(new Event('storage'));
      } else {
        alert(
          "Invalid Credentials Entered!\n\n" +
          "Use the following credentials:\n" +
          "Admin Access:\n" +
          "   Email: admin@ttm.com\n" +
          "   Password: admin\n\n" +
          "Employee Access:\n" +
          "   Email: emp1@ttm.com\n" +
          "   Password: 1234\n\n" +
          "For more credentials, visit:\n" +
          "https://github.com/VishalK-1234/TeamTaskManager"
        );
        
      }
    } else {
      alert(
        "Invalid Credentials Entered!\n\n" +
        "Use the following credentials:\n" +
        "Admin Access:\n" +
        "   Email: admin@ttm.com\n" +
        "   Password: admin\n\n" +
        "Employee Access:\n" +
        "   Email: emp1@ttm.com\n" +
        "   Password: 1234\n\n" +
        "For more credentials, visit:\n" +
        "https://github.com/VishalK-1234/TeamTaskManager"
      );
      
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
