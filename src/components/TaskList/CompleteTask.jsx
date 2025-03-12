import React from 'react'

const CompleteTask = ({data}) => {
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
        <button className='bg-green-400 p-3 font-semibold text-sm rounded-3xl'>Complete</button>
      </div>
    </div>
  )
}

export default CompleteTask