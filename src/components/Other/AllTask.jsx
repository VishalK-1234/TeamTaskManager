import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [employeeData, setEmployeeData] = useState([]);

  // Update local state when userData changes
  useEffect(() => {
    if (userData) {
      setEmployeeData([...userData]);
    }
  }, [userData]);

  // Listen for storage events to update the UI
  useEffect(() => {
    const handleStorageChange = () => {
      const { employees } = JSON.parse(localStorage.getItem("employees")) || { employees: [] };
      if (employees && employees.length > 0) {
        setEmployeeData([...employees]);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!employeeData || employeeData.length === 0) {
    return (
      <div className="bg-black">
        <div className="bg-gray-700 p-7 ml-4 mr-4 rounded-3xl h-62.5 flex items-center justify-center">
          <p className="text-white">Loading employee data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <div className="bg-gray-700 p-7 ml-4 mr-4 rounded-3xl h-62.5">
        <div className="grid grid-cols-5 bg-red-400 mb-2 py-2 px-4 rounded text-center">
          <h2 className="text-lg font-medium whitespace-nowrap">
            Employee Name
          </h2>
          <h3 className="text-lg font-medium whitespace-nowrap">New Tasks</h3>
          <h5 className="text-lg font-medium whitespace-nowrap">
            Active Tasks
          </h5>
          <h5 className="text-lg font-medium whitespace-nowrap">
            Completed Tasks
          </h5>
          <h5 className="text-lg font-medium whitespace-nowrap">
            Failed Tasks
          </h5>
        </div>

        <div id="alltask" className="max-h-[80%] overflow-auto">
          {employeeData.map(function (e, idx) {
            return (
              <div
                key={idx}
                className="grid grid-cols-5 border-2 border-emerald-500 mb-2 py-2 px-4 rounded text-center"
              >
                <h2 className="text-lg font-medium text-white whitespace-nowrap">
                  {e.name}
                </h2>
                <h3 className="text-lg font-medium text-blue-400 whitespace-nowrap">
                  {e.taskCounts.newTask}
                </h3>
                <h5 className="text-lg font-medium text-yellow-400 whitespace-nowrap">
                  {e.taskCounts.active}
                </h5>
                <h5 className="text-lg font-medium text-white whitespace-nowrap">
                  {e.taskCounts.completed}
                </h5>
                <h5 className="text-lg font-medium text-red-600 whitespace-nowrap">
                  {e.taskCounts.failed}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
