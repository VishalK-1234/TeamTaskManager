import React, { useContext, useEffect, useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({data}) => {
  const [userData, setUserData] = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  // Update tasks whenever data changes
  useEffect(() => {
    if (data && data.tasks) {
      setTasks([...data.tasks]);
    }
  }, [data, userData]);

  // Force re-render when localStorage changes (for task updates)
  useEffect(() => {
    const handleStorageChange = () => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser && loggedInUser !== "") {
        const userData = JSON.parse(loggedInUser);
        if (userData.role === "employees" && userData.data && userData.data.tasks) {
          setTasks([...userData.data.tasks]);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!tasks || tasks.length === 0) {
    return (
      <div id='tasklist' className='bg-black h-92 p-4 flex items-center justify-center text-white'>
        <p>No tasks available</p>
      </div>
    );
  }

  return (
    <div id='tasklist' className='bg-black h-92 p-4 flex items-center justify-start gap-6 overflow-x-auto flex-nowrap text-white'>
      {tasks.map((e, idx) => {
        if (e.active) {
          return <AcceptTask key={idx} data={e} />
        }
        if (e.newTask) {
          return <NewTask key={idx} data={e} />
        }
        if (e.completed) {
          return <CompleteTask key={idx} data={e} />
        }
        if (e.failed) {
          return <FailedTask key={idx} data={e} />
        }
        return null;
      })}
    </div>
  )
}

export default TaskList