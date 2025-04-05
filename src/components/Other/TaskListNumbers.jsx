import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const TaskListNumbers = ({data}) => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskCounts, setTaskCounts] = useState({
    newTask: 0,
    active: 0,
    completed: 0,
    failed: 0
  });

  useEffect(() => {
    if (data && data.taskCounts) {
      setTaskCounts({...data.taskCounts});
    }
  }, [data, userData]);

  useEffect(() => {
    const handleStorageChange = () => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser && loggedInUser !== "") {
        const userData = JSON.parse(loggedInUser);
        if (userData.role === "employees" && userData.data && userData.data.taskCounts) {
          setTaskCounts({...userData.data.taskCounts});
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className='flex justify-between p-4 bg-black gap-5 text-amber-50'>
      <div className='bg-red-400 h-[30%] w-[40%] rounded-4xl py-17 px-10'>
        <h2 className='text-4xl font-bold'>{taskCounts.newTask}</h2>
        <h3 className='text-2xl font-semibold'>New Tasks</h3>
      </div>
      <div className='bg-blue-400 h-[30%] w-[40%] rounded-4xl py-17 px-10'>
        <h2 className='text-4xl font-bold'>{taskCounts.active}</h2>
        <h3 className='text-2xl font-semibold'>Active Tasks</h3>
      </div>
      <div className='bg-green-400 h-[30%] w-[40%] rounded-4xl py-17 px-10'>
        <h2 className='text-4xl font-bold'>{taskCounts.completed}</h2>
        <h3 className='text-2xl font-semibold'>Completed Tasks</h3>
      </div>
      <div className='bg-yellow-400 h-[30%] w-[40%] rounded-4xl py-17 px-10'>
        <h2 className='text-4xl font-bold'>{taskCounts.failed}</h2>
        <h3 className='text-2xl font-semibold'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers