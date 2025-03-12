import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const [userData, setUserData] = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Clear previous error
    setError("");
    
    if (!userData) {
      setError("User data not loaded. Please refresh the page.");
      return;
    }
    
    // Create the task object with consistent property names
    const newTask = {
      task_title: taskTitle,
      task_description: taskDescription,
      task_date: taskDate,
      category: category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Check if employee exists
    const employeeExists = userData.some(emp => emp.name === assignTo);
    
    if (!employeeExists) {
      setError(`Employee "${assignTo}" not found. Please check the name.`);
      return;
    }

    // Create a new copy of userData to avoid direct state mutation
    const updatedUserData = userData.map(employee => {
      if (employee.name === assignTo) {
        // Create new task array with the new task
        const updatedTasks = [...employee.tasks, newTask];
        
        // Create new taskCounts with incremented newTask count
        const updatedTaskCounts = {
          ...employee.taskCounts,
          newTask: employee.taskCounts.newTask + 1
        };
        
        // Return updated employee object
        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: updatedTaskCounts
        };
      }
      return employee;
    });

    // Update state - this will trigger the useEffect in AuthProvider
    // which will update localStorage
    setUserData(updatedUserData);
    
    // Dispatch a storage event to notify other components
    window.dispatchEvent(new Event('storage'));

    // Reset form fields
    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="bg-black p-4">
      <div className="p-7 bg-gray-700 rounded-3xl">
        {error && (
          <div className="bg-red-600 text-white p-3 mb-4 rounded-lg">
            {error}
          </div>
        )}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-white mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                required
                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Attend fan meet-up"
              />
            </div>
            <div>
              <h3 className="text-sm text-white mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                required
                className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-white mb-0.5">Assign to</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                required
                className="text-sm text-white  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-white mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
                className="text-sm text-white  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="promotional, shoot, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-white mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              required
              className="w-full text-white  h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
