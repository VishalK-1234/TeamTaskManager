import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({data}) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleAcceptTask = () => {
    if (!userData) return;
    
    // Create a new copy of userData
    const updatedUserData = userData.map(employee => {
      // Find the employee who has this task
      const taskIndex = employee.tasks.findIndex(task => 
        task.task_title === data.task_title && 
        task.task_description === data.task_description &&
        task.newTask === true
      );

      // If this employee has the task
      if (taskIndex !== -1) {
        // Create a copy of the tasks array
        const updatedTasks = [...employee.tasks];
        
        // Update the task status
        updatedTasks[taskIndex] = {
          ...updatedTasks[taskIndex],
          active: true,
          newTask: false
        };
        
        // Update task counts
        const updatedTaskCounts = {
          ...employee.taskCounts,
          active: employee.taskCounts.active + 1,
          newTask: employee.taskCounts.newTask - 1
        };
        
        // Return updated employee
        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: updatedTaskCounts
        };
      }
      
      return employee;
    });
    
    // Update state - this will trigger the useEffect in AuthProvider
    // which will update localStorage and the loggedInUser data
    setUserData(updatedUserData);
    
    // Dispatch a storage event to notify other components
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className='bg-cyan-800 w-[300px] h-full rounded-2xl flex-shrink-0 p-4'>
      <div className='flex justify-between items-center w-full font-medium'>
        <h2 className='p-3 bg-amber-700 rounded-xl'>{data.category}</h2>
        <h4 className='font-sans'>{data.task_date}</h4>
      </div>
      <h1 className='font-bold text-2xl py-4 text-center line-clamp-1'>{data.task_title}</h1>
      <div className='h-[100px] overflow-y-auto'>
        <p className='font-sans text-center text-sm'>{data.task_description}</p>
      </div>
      <div className='m-7 text-center'>
        <button 
          onClick={handleAcceptTask}
          className='bg-blue-400 p-3 font-semibold text-sm rounded-3xl'>
          Accept Task ✅
        </button>
      </div>
    </div>
  )
}

export default NewTask